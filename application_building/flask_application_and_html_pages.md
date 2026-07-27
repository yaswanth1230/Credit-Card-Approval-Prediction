# Flask Application and HTML Pages

## Description

Three HTML pages are created and stored inside the `templates/` folder to build the frontend of the Credit Card Approval Prediction application.

The `home.html` page acts as the landing page and provides a project overview along with a navigation button to access the prediction form. The `index.html` page contains the input form where users enter applicant financial and demographic details required for prediction. The `result.html` page displays the final prediction result showing whether the credit card application is approved or rejected.

In this milestone, a Flask web application is developed and integrated with the trained machine learning model to provide real-time prediction through a web interface. The Flask application acts as a bridge between the frontend HTML pages and the backend machine learning model.

User inputs entered through the form are collected in the backend, processed, and passed to the trained model for prediction.

The `app.py` file is used as the main backend script of the Flask application. It handles routing, model loading, input processing, prediction generation, and result rendering. The trained model can be loaded using Pickle or Joblib, and Flask routes are created to display the home page, prediction form, and result page. When the user submits the form, the input values are processed and passed to the model using the `predict()` method or the built-in scoring fallback to generate the final approval result.

## Project Structure

```text
project/
|-- app.py
|-- model.pkl
|-- templates/
|   |-- home.html
|   |-- index.html
|   |-- result.html
|-- static/
|   |-- style.css
```

## HTML Pages

| File | Purpose |
| --- | --- |
| `home.html` | Landing page that introduces the Credit Card Approval Prediction project. |
| `index.html` | Prediction form where the user enters applicant details. |
| `result.html` | Result page that displays the final prediction output. |

## Example Input Form

```html
<form action="/predict" method="post">
    <input type="text" name="applicant_name" placeholder="Enter applicant name">

    <label>Income Type</label>
    <select name="income_type">
        <option>Working</option>
        <option>Commercial Associate</option>
        <option>Pensioner</option>
    </select>

    <label>Education Type</label>
    <select name="education_type">
        <option>Graduate</option>
        <option>Post Graduate</option>
        <option>High School</option>
    </select>

    <label>Annual Income</label>
    <input type="number" name="annual_income" placeholder="Enter income">

    <button type="submit">Predict</button>
</form>
```

## Flask Backend Example

```python
from flask import Flask, render_template, request
import pickle

app = Flask(__name__)

model = pickle.load(open("model.pkl", "rb"))

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/form")
def form():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    income_type = request.form["income_type"]
    education_type = request.form["education_type"]
    annual_income = float(request.form["annual_income"])

    input_data = [[annual_income]]
    prediction = model.predict(input_data)

    if prediction[0] == 1:
        result = "Approved"
    else:
        result = "Rejected"

    return render_template("result.html", prediction=result)

if __name__ == "__main__":
    app.run(debug=True)
```

## Result Page Example

```html
<h1>Credit Card Approval Prediction Result</h1>
<p>The credit card application is: {{ prediction }}</p>
```

## Outcome

Application building helps to:

- Provide a simple web interface for users.
- Collect applicant details through an HTML form.
- Connect frontend pages with the trained machine learning model.
- Generate real-time approval predictions using Flask.
- Display the final result in a user-friendly format.
