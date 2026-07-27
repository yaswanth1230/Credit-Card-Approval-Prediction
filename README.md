# Credit Card Approval Prediction System

This project demonstrates a Credit Card Approval Prediction System using Python, machine learning concepts, Flask, HTML, CSS, and JavaScript.

The repository includes project documentation, ER diagram, preprocessing notes, model-building notes, and a runnable Flask web application with a modern credit-card themed interface.

## Live Demo

GitHub Pages can host the static browser demo:

```text
https://gayatri1306-daggubati.github.io/creditcard_approval/
```

The Flask backend version should be run locally or hosted on a Python platform such as Render.

## Project Structure

```text
smartbridge_internship/
|-- app.py
|-- requirements.txt
|-- templates/
|   |-- home.html
|   |-- index.html
|   |-- result.html
|-- static/
|   |-- css/
|   |   |-- style.css
|   |-- js/
|   |   |-- script.js
|-- application_building/
|-- conclusion/
|-- data_preprocessing/
|-- dataset/
|-- dataset_reading/
|-- descriptive_analysis/
|-- er_diagram/
|-- library_imports/
|-- model_building/
|-- multivariate_analysis/
|-- project_workflow/
|-- tools_and_technologies/
|-- univariate_analysis/
```

## How to Run

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the Flask application:

```bash
python app.py
```

Open the local URL in your browser:

```text
http://127.0.0.1:5000/
```

## Notes

- The app works immediately using a built-in approval scoring fallback.
- If you later add a trained `model.pkl` file in the project root, `app.py` will load it automatically.
- The local dataset CSV is ignored by Git because it is too large for normal GitHub upload limits.

## Main Features

- Beautiful Flask frontend with credit-card themed UI.
- Applicant detail input form.
- Live profile strength meter using JavaScript.
- Approval or rejection result page.
- Risk category and prediction score display.
- GitHub-ready documentation folders.
