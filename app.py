from flask import Flask, render_template, request
import numpy as np
import pickle

app = Flask(__name__)

# Load trained model
with open("model.pkl", "rb") as file:
    model = pickle.load(file)

# Home Page
@app.route("/")
def home():
    return render_template("home.html")

# Prediction Form
@app.route("/form")
def form():
    return render_template("index.html")

# Prediction
@app.route("/predict", methods=["POST"])
def predict():

    time = float(request.form["Time"])
    amount = float(request.form["Amount"])

    features = np.array([[time, amount]])

    prediction = model.predict(features)

    if prediction[0] == 0:
        result = "Credit Card Approved"
    else:
        result = "Credit Card Rejected"

    return render_template("result.html", prediction=result)

if __name__ == "__main__":
    app.run(debug=True)