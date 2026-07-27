from pathlib import Path
import pickle

from flask import Flask, render_template, request


app = Flask(__name__)

BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "model.pkl"


def load_model():
    if not MODEL_PATH.exists():
        return None

    with MODEL_PATH.open("rb") as file:
        return pickle.load(file)


MODEL = load_model()


def to_float(value, default=0.0):
    try:
        return float(value)
    except (TypeError, ValueError):
        return default


def calculate_fallback_prediction(form_data):
    annual_income = to_float(form_data.get("annual_income"))
    family_members = to_float(form_data.get("family_members"), 1)
    emi_paid_off = to_float(form_data.get("emi_paid_off"))
    emi_past_dues = to_float(form_data.get("emi_past_dues"))
    number_of_loans = to_float(form_data.get("number_of_loans"))
    employment_years = abs(to_float(form_data.get("days_employed")))
    age = abs(to_float(form_data.get("days_birth")))

    score = 45

    if annual_income >= 250000:
        score += 18
    elif annual_income >= 100000:
        score += 12
    elif annual_income >= 50000:
        score += 7
    else:
        score -= 8

    if emi_paid_off >= 3:
        score += 14
    elif emi_paid_off >= 1:
        score += 8

    if emi_past_dues == 0:
        score += 12
    elif emi_past_dues <= 2:
        score += 2
    else:
        score -= 18

    if number_of_loans <= 2:
        score += 8
    elif number_of_loans <= 5:
        score += 2
    else:
        score -= 10

    if employment_years >= 3:
        score += 8
    elif employment_years < 1:
        score -= 4

    if 23 <= age <= 60:
        score += 5

    if form_data.get("own_car") == "Yes":
        score += 3

    if form_data.get("own_realty") == "Yes":
        score += 5

    if form_data.get("income_type") in {"Working", "Commercial associate", "State servant"}:
        score += 5

    if family_members > 5:
        score -= 5

    score = max(0, min(100, round(score)))
    approved = score >= 60

    if score >= 80:
        risk_level = "Low Risk"
    elif score >= 60:
        risk_level = "Moderate Risk"
    else:
        risk_level = "High Risk"

    return {
        "approved": approved,
        "score": score,
        "risk_level": risk_level,
        "model_source": "Built-in scoring fallback",
    }


def model_prediction(form_data):
    if MODEL is None:
        return calculate_fallback_prediction(form_data)

    features = [
        1 if form_data.get("gender") == "Female" else 0,
        1 if form_data.get("own_car") == "Yes" else 0,
        1 if form_data.get("own_realty") == "Yes" else 0,
        to_float(form_data.get("annual_income")),
        to_float(form_data.get("days_birth")),
        to_float(form_data.get("days_employed")),
        to_float(form_data.get("family_members")),
        to_float(form_data.get("emi_paid_off")),
        to_float(form_data.get("emi_past_dues")),
        to_float(form_data.get("number_of_loans")),
    ]

    prediction = MODEL.predict([features])[0]
    approved = int(prediction) == 1

    return {
        "approved": approved,
        "score": 86 if approved else 42,
        "risk_level": "Low Risk" if approved else "High Risk",
        "model_source": "model.pkl",
    }


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/predict", methods=["GET", "POST"])
def predict():
    if request.method == "GET":
        return render_template("index.html")

    form_data = request.form.to_dict()
    result = model_prediction(form_data)

    return render_template(
        "result.html",
        applicant_name=form_data.get("applicant_name", "Applicant"),
        result=result,
        form_data=form_data,
    )


if __name__ == "__main__":
    app.run(debug=True)
