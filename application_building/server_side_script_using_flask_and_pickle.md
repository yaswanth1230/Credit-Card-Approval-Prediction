# Server-Side Script Using Flask and Pickle

## Description

Building the server-side script using Flask and Pickle is an important step in the Credit Card Approval Prediction project. Flask is used to create the web application and connect the frontend HTML pages with the trained machine learning model. Pickle is used to load the saved model file so that predictions can be generated without retraining the model again.

The Flask application handles routing, user input collection, prediction processing, and displaying the final result. The `render_template()` function is used to load HTML pages, while `request.form` is used to collect user input values from the prediction form. These values are processed and passed to the trained model using the `predict()` method to generate approval or rejection predictions.

The final prediction result is displayed on the `result.html` page, allowing users to receive instant credit card approval predictions through a simple and interactive web interface. In the runnable project, the application also includes a built-in scoring fallback so it can work even when a saved `model.pkl` file is not available.

## Import Required Libraries

```python
from flask import Flask, render_template, request
import pickle
import numpy as np
```

## Load the Trained Model

The saved machine learning model is loaded using Pickle.

```python
model = pickle.load(open("model.pkl", "rb"))
```

## Flask Application Script

```python
from flask import Flask, render_template, request
import pickle
import numpy as np

app = Flask(__name__)

model = pickle.load(open("model.pkl", "rb"))

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    features = [float(x) for x in request.form.values()]
    final_input = np.array([features])

    prediction = model.predict(final_input)

    if prediction[0] == 1:
        result = "Credit Card Approved"
    else:
        result = "Credit Card Rejected"

    return render_template("result.html", prediction_text=result)

if __name__ == "__main__":
    app.run(debug=True)
```

## Code Explanation

| Code | Purpose |
| --- | --- |
| `Flask(__name__)` | Creates the Flask application instance. |
| `pickle.load()` | Loads the saved trained machine learning model. |
| `@app.route("/")` | Defines the route for the home or input page. |
| `render_template()` | Displays HTML pages from the `templates/` folder. |
| `request.form.values()` | Collects values entered by the user in the prediction form. |
| `np.array([features])` | Converts form values into an array format suitable for prediction. |
| `model.predict()` | Generates the credit card approval prediction. |
| `app.run(debug=True)` | Runs the Flask application in debug mode. |

## Outcome

The server-side script helps to:

- Connect the frontend HTML form with the backend machine learning model.
- Load the saved model using Pickle.
- Collect user input values through Flask.
- Generate approval or rejection predictions.
- Display the final result on the web page.
