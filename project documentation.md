# Project Documentation

## Project Title

Credit Card Approval Prediction System

## Document Purpose

This document explains the complete project, including the project objective, folder structure, tools and technologies, data workflow, preprocessing workflow, model-building workflow, application workflow, Flask routes, frontend behavior, scoring logic, sample inputs, sample outputs, execution steps, testing process, deployment notes, and maintenance guidelines.

The project is a machine learning based credit card approval prediction system. It accepts applicant information, financial information, and credit behavior details, then predicts whether the applicant profile should be approved or rejected.

## Project Overview

The Credit Card Approval Prediction System demonstrates how data analysis, preprocessing, machine learning, and web development can be combined to create a practical financial risk assessment application.

The repository contains two working application styles:

1. A Flask backend application, started with `python app.py`.
2. A static browser demo in `index.html`, suitable for GitHub Pages.

The Flask application uses the following decision flow:

1. Start the Flask server.
2. Open the home page.
3. Navigate to the prediction form.
4. Enter applicant details.
5. Submit the form to the `/predict` route.
6. Load `model.pkl` if it exists.
7. If `model.pkl` does not exist, use the built-in scoring fallback.
8. Render the result page with approval status, score, risk level, and submitted profile details.

The static browser demo uses the same scoring idea in JavaScript. It runs entirely inside the browser and does not require Python or Flask.

## Main Objective

The main objective is to predict credit card approval decisions using applicant profile signals and repayment behavior.

The system considers details such as:

- Gender
- Car ownership
- Real estate ownership
- Annual income
- Income type
- Education type
- Family status
- Housing type
- Age
- Employment years
- Family members
- EMI paid-off count
- EMI past-dues count
- Number of loans

The output is an approval decision with a score and risk category.

## Target Users

The project can be used or studied by:

- Students learning machine learning workflows.
- Developers learning Flask deployment for ML projects.
- Data analysts studying credit approval datasets.
- Reviewers evaluating SmartBridge internship work.
- Banking and finance learners exploring risk scoring concepts.

## Repository Structure

```text
smartbridge_internship/
|-- app.py
|-- index.html
|-- README.md
|-- requirements.txt
|-- project documentation.md
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

## Important Files

| File or Folder | Purpose |
| --- | --- |
| `app.py` | Main Flask backend application. It loads the model, handles routes, collects form data, predicts approval, and renders templates. |
| `index.html` | Static GitHub Pages demo. It runs prediction logic in the browser through JavaScript. |
| `templates/home.html` | Flask home page template. |
| `templates/index.html` | Flask prediction form template. |
| `templates/result.html` | Flask prediction result page template. |
| `static/css/style.css` | Styling for the home page, form page, result page, cards, buttons, and responsive layout. |
| `static/js/script.js` | Frontend logic for live profile strength scoring, static prediction, and credit card hover animation. |
| `requirements.txt` | Python dependency list. Currently contains Flask. |
| `README.md` | Short project overview and run instructions. |
| `dataset/README.md` | Explains where dataset CSV files should be placed locally. |
| `project_workflow/credit_card_approval_workflow.md` | Explains the machine learning workflow epics and stories. |
| `data_preprocessing/` | Contains preprocessing documentation such as duplicate removal, missing value handling, label encoding, and dataset merging. |
| `model_building/` | Contains documentation for Logistic Regression, Random Forest, and Decision Tree models. |
| `application_building/` | Contains notes about Flask application building and execution. |
| `conclusion/project_conclusion.md` | Summarizes the project outcome and learning points. |

## Tools and Technologies

| Tool or Technology | Use in Project |
| --- | --- |
| Python | Backend programming and machine learning workflow. |
| Flask | Web framework used to create the local backend application. |
| HTML | Defines the structure of web pages. |
| CSS | Provides visual styling and responsive layout. |
| JavaScript | Provides live profile strength scoring and static demo prediction. |
| Pandas | Dataset reading, cleaning, merging, and analysis. |
| NumPy | Numerical operations during analysis and preprocessing. |
| Scikit-learn | Model training and evaluation. |
| Matplotlib | Data visualization. |
| Seaborn | Statistical visualization. |
| Pickle | Loading a serialized trained model from `model.pkl`. |
| GitHub Pages | Hosting static browser demo. |
| IBM Watson Machine Learning | Mentioned as a possible cloud deployment target in conclusion notes. |

## System Requirements

Recommended environment:

- Python 3.10 or later
- Flask 3.0 or later
- Modern browser such as Chrome, Edge, or Firefox
- VS Code, PyCharm, or another editor
- Local dataset CSV files if running full analysis and model training

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the Flask application:

```bash
python app.py
```

Open the application:

```text
http://127.0.0.1:5000/
```

## High-Level Workflow

The project follows this full workflow:

1. Collect or place the dataset locally.
2. Import required libraries.
3. Read dataset files using Pandas.
4. Explore dataset shape, columns, data types, and missing values.
5. Perform descriptive analysis.
6. Perform univariate analysis.
7. Perform multivariate analysis.
8. Remove duplicate records.
9. Handle missing values.
10. Clean and transform features.
11. Convert categorical values into numerical labels.
12. Merge applicant and credit record data where needed.
13. Create training and testing datasets.
14. Train machine learning models.
15. Evaluate model performance.
16. Select the best-performing model.
17. Save the trained model as `model.pkl`.
18. Build Flask application.
19. Connect form inputs to prediction logic.
20. Display prediction result to the user.
21. Deploy static demo or backend application.

## Dataset Workflow

The dataset workflow starts with CSV files stored locally in the `dataset/` folder. The repository does not include large CSV files because GitHub has upload limits for large files.

Expected dataset placement:

```text
dataset/
|-- application_record.csv
|-- credit_record.csv
```

Some documentation also references a single CSV example:

```text
dataset/creditcard.csv
```

Typical reading process:

```python
import pandas as pd

app = pd.read_csv("dataset/application_record.csv")
credit = pd.read_csv("dataset/credit_record.csv")
```

Basic dataset checks:

```python
app.head()
credit.head()
app.shape
credit.shape
app.info()
credit.info()
app.isnull().sum()
credit.isnull().sum()
```

### Dataset Reading Output Example

Sample input:

```python
app.shape
```

Sample output:

```text
(438557, 18)
```

Sample input:

```python
credit.shape
```

Sample output:

```text
(1048575, 3)
```

The exact output depends on the dataset version used locally.

## Data Analysis Workflow

The analysis workflow helps understand the data before training.

### Descriptive Analysis

Descriptive analysis summarizes numeric columns.

Sample input:

```python
app.describe()
```

Sample output pattern:

```text
count, mean, std, min, 25%, 50%, 75%, max
```

This helps identify:

- Feature ranges
- Outliers
- Negative day values
- Income distribution
- Family size distribution
- Missing or unusual values

### Univariate Analysis

Univariate analysis studies one variable at a time.

Examples:

- Distribution of annual income
- Count of income types
- Count of education categories
- Count of housing categories
- Distribution of age
- Distribution of family members

Sample input:

```python
app["NAME_INCOME_TYPE"].value_counts()
```

Sample output:

```text
Working                 226104
Commercial associate    100757
Pensioner                75493
State servant            36186
Student                     17
```

### Multivariate Analysis

Multivariate analysis studies relationships between multiple variables.

Examples:

- Income type compared with approval status
- Housing type compared with credit risk
- Employment years compared with repayment behavior
- Income and number of family members compared with approval status

Sample input:

```python
pd.crosstab(app["NAME_INCOME_TYPE"], app["STATUS_BIN"])
```

Sample output pattern:

```text
STATUS_BIN              0      1
Working             12000  50000
Commercial associate 5000  22000
```

The exact values depend on the final merged dataset.

## Data Preprocessing Workflow

Preprocessing converts raw data into model-ready data.

### Step 1: Remove Duplicate Records

Duplicate applicant records can bias the model.

Sample input:

```python
app.duplicated().sum()
app = app.drop_duplicates()
```

Sample output:

```text
Number of duplicate records removed: 0
```

### Step 2: Handle Missing Values

Missing values can cause model training errors.

Sample input:

```python
app.isnull().sum()
```

Common handling methods:

- Remove rows with too many missing values.
- Fill numeric missing values with mean or median.
- Fill categorical missing values with mode.
- Remove irrelevant columns with high missing rates.

Sample output:

```text
OCCUPATION_TYPE    134203
AMT_INCOME_TOTAL        0
NAME_INCOME_TYPE        0
```

### Step 3: Transform Age and Employment

Many credit datasets store age and employment as negative day values.

Sample input:

```python
app["AGE"] = abs(app["DAYS_BIRTH"]) // 365
app["EMPLOYMENT_YEARS"] = abs(app["DAYS_EMPLOYED"]) // 365
```

Sample output:

```text
DAYS_BIRTH -12005 becomes AGE 32
DAYS_EMPLOYED -3650 becomes EMPLOYMENT_YEARS 10
```

### Step 4: Create Family Dependency Feature

Sample input:

```python
app["FAMILY_DEPENDENCY"] = app["CNT_FAM_MEMBERS"] + app["CNT_CHILDREN"]
```

Sample output:

```text
CNT_FAM_MEMBERS 3 + CNT_CHILDREN 1 = FAMILY_DEPENDENCY 4
```

### Step 5: Encode Categorical Features

Machine learning models require numeric input.

Sample mapping:

```python
income_type_map = {
    "Working": 0,
    "Commercial associate": 1,
    "Pensioner": 2,
    "State servant": 3,
    "Student": 4
}
```

Sample input:

```text
Working
```

Sample output:

```text
0
```

### Step 6: Transform Credit Record Status

Credit status values can be converted into behavior labels.

Sample input:

```python
credit["STATUS"] = credit["STATUS"].replace({
    "C": "paid_off",
    "X": "no_loan"
})
```

Sample output:

```text
C becomes paid_off
X becomes no_loan
```

### Step 7: Group Monthly Credit Records

The credit dataset may contain multiple monthly rows per applicant. These can be grouped by applicant ID.

Sample input:

```python
credit_grouped = credit.groupby("ID").agg(
    begin_month=("MONTHS_BALANCE", "min"),
    end_month=("MONTHS_BALANCE", "max"),
    window=("MONTHS_BALANCE", "count")
).reset_index()
```

Sample output:

```text
ID      begin_month    end_month    window
5008804     -15            0          16
```

### Step 8: Merge Applicant and Credit Features

Sample input:

```python
credit_app = app.merge(credit_grouped, on="ID", how="inner")
```

Sample output:

```text
Merged dataset contains applicant profile columns and credit behavior columns.
```

## Model-Building Workflow

The model-building workflow trains and evaluates classification algorithms.

### Train-Test Split

Sample input:

```python
from sklearn.model_selection import train_test_split

X = credit_app.drop("STATUS_BIN", axis=1)
y = credit_app["STATUS_BIN"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)
```

Sample output:

```text
Training data: 80%
Testing data: 20%
```

### Logistic Regression

Purpose:

- Provides a simple baseline model.
- Works well for binary classification.
- Easy to interpret.

Sample input:

```python
from sklearn.linear_model import LogisticRegression

lr_model = LogisticRegression(max_iter=1000, random_state=42)
lr_model.fit(X_train, y_train)
y_pred = lr_model.predict(X_test)
```

Sample output:

```text
Confusion Matrix:
[[TN FP]
 [FN TP]]

Classification Report:
precision, recall, f1-score, support
```

### Decision Tree

Purpose:

- Creates decision rules based on feature conditions.
- Easy to understand and visualize.
- Useful for comparing against other models.

Sample input:

```python
from sklearn.tree import DecisionTreeClassifier

dt = DecisionTreeClassifier(random_state=42)
dt.fit(X_train, y_train)
y_pred = dt.predict(X_test)
```

Sample output:

```text
Decision Tree Classifier
Confusion Matrix
Classification Report
```

### Random Forest

Purpose:

- Uses multiple decision trees.
- Reduces overfitting compared with a single tree.
- Often improves classification accuracy.

Sample input:

```python
from sklearn.ensemble import RandomForestClassifier

rf_model = RandomForestClassifier(
    n_estimators=100,
    random_state=42,
    n_jobs=-1
)
rf_model.fit(X_train, y_train)
y_pred = rf_model.predict(X_test)
```

Sample output:

```text
Random Forest Model Evaluation
Classification Report:
precision, recall, f1-score, support

Confusion Matrix:
[[TN FP]
 [FN TP]]
```

### Model Selection

Models should be compared using:

- Accuracy
- Precision
- Recall
- F1-score
- Confusion matrix
- False positive count
- False negative count

For a credit approval system, false approvals and false rejections both matter. A false approval may create financial risk. A false rejection may reject a good applicant. The best model should balance risk and business fairness.

### Model Serialization

After selecting the best model, save it as `model.pkl` in the project root.

Sample input:

```python
import pickle

with open("model.pkl", "wb") as file:
    pickle.dump(best_model, file)
```

Sample output:

```text
model.pkl created in project root.
```

## Flask Application Workflow

The Flask application is implemented in `app.py`.

### Application Startup

When `python app.py` runs:

1. Flask app is created.
2. Project base directory is resolved.
3. `model.pkl` path is created.
4. `load_model()` checks whether `model.pkl` exists.
5. If `model.pkl` exists, it is loaded with Pickle.
6. If it does not exist, `MODEL` becomes `None`.
7. Flask starts in debug mode.

Relevant behavior:

```python
MODEL_PATH = BASE_DIR / "model.pkl"
MODEL = load_model()
```

### Route: Home Page

Route:

```text
GET /
```

Function:

```python
def home():
    return render_template("home.html")
```

Output:

```text
Home page with project heading, feature cards, and Start Prediction link.
```

### Route: Prediction Form

Route:

```text
GET /predict
```

Function behavior:

```python
if request.method == "GET":
    return render_template("index.html")
```

Output:

```text
Prediction form with applicant, financial, and credit behavior fields.
```

### Route: Prediction Submission

Route:

```text
POST /predict
```

Function behavior:

```python
form_data = request.form.to_dict()
result = model_prediction(form_data)
return render_template("result.html", applicant_name=..., result=..., form_data=...)
```

Output:

```text
Result page showing approval decision, score, risk category, prediction source, and submitted profile summary.
```

## Backend Prediction Logic

The backend prediction logic has two paths.

### Path 1: Use `model.pkl`

If `model.pkl` exists, the app uses:

```python
MODEL.predict([features])[0]
```

Feature order:

1. Gender encoded as `1` for Female, `0` otherwise.
2. Own car encoded as `1` for Yes, `0` otherwise.
3. Own realty encoded as `1` for Yes, `0` otherwise.
4. Annual income.
5. Age field from `days_birth`.
6. Employment years field from `days_employed`.
7. Family members.
8. EMI paid off.
9. EMI past dues.
10. Number of loans.

Model output:

```text
1 means approved
0 means rejected
```

The current Flask display maps the prediction to:

```text
Approved: score 86, risk level Low Risk
Rejected: score 42, risk level High Risk
```

### Path 2: Built-In Scoring Fallback

If `model.pkl` is not present, the project still works using a built-in scoring function.

Initial score:

```text
45
```

Scoring rules:

| Condition | Score Change |
| --- | ---: |
| Annual income >= 250000 | +18 |
| Annual income >= 100000 | +12 |
| Annual income >= 50000 | +7 |
| Annual income < 50000 | -8 |
| EMI paid off >= 3 | +14 |
| EMI paid off >= 1 | +8 |
| EMI past dues == 0 | +12 |
| EMI past dues <= 2 | +2 |
| EMI past dues > 2 | -18 |
| Number of loans <= 2 | +8 |
| Number of loans <= 5 | +2 |
| Number of loans > 5 | -10 |
| Employment years >= 3 | +8 |
| Employment years < 1 | -4 |
| Age between 23 and 60 | +5 |
| Own car is Yes | +3 |
| Own realty is Yes | +5 |
| Income type is Working, Commercial associate, or State servant | +5 |
| Family members > 5 | -5 |

Final score is clamped between 0 and 100.

Approval rule:

```text
score >= 60 means approved
score < 60 means rejected
```

Risk category:

```text
score >= 80 means Low Risk
score >= 60 means Moderate Risk
score < 60 means High Risk
```

## Frontend Workflow

The frontend has three major pages in the Flask app.

### Home Page Workflow

File:

```text
templates/home.html
```

User steps:

1. Open the application.
2. Read the project title and short description.
3. View feature cards.
4. Click `Start Prediction`.
5. Navigate to `/predict`.

Expected output:

```text
The prediction form page opens.
```

### Prediction Form Workflow

File:

```text
templates/index.html
```

User steps:

1. Enter applicant name.
2. Select gender.
3. Select car ownership.
4. Select real estate ownership.
5. Enter annual income.
6. Select income type.
7. Select education.
8. Select family status.
9. Select housing type.
10. Enter age.
11. Enter employment years.
12. Enter family members.
13. Enter EMI paid-off count.
14. Enter EMI past-dues count.
15. Enter number of loans.
16. Review live profile strength.
17. Click `Predict Approval`.

Expected output:

```text
The submitted form is sent to Flask through POST /predict.
```

### Result Page Workflow

File:

```text
templates/result.html
```

Displayed details:

- Applicant name
- Credit Card Approved or Credit Card Rejected badge
- Score percentage
- Risk category
- Prediction source
- Decision explanation
- Submitted income
- Submitted income type
- Submitted housing type
- Submitted paid EMI count
- Submitted past due count
- Submitted loan count

Expected output example:

```text
Applicant: Asha Rao
Decision: Credit Card Approved
Score: 95%
Risk Category: Low Risk
Prediction Source: Built-in scoring fallback
```

## JavaScript Workflow

File:

```text
static/js/script.js
```

JavaScript responsibilities:

1. Read form values in real time.
2. Calculate preview score.
3. Update profile strength meter width.
4. Update profile strength text.
5. Support static GitHub Pages prediction.
6. Animate the credit card preview on pointer movement.

### Live Profile Strength Workflow

When the user changes a form field:

1. JavaScript reads numeric fields.
2. JavaScript reads select fields.
3. Score starts at 45.
4. Score adjustments are applied.
5. Score is clamped from 0 to 100.
6. Meter width changes to the final score percentage.
7. Text updates to show profile strength.

Sample output:

```text
95% profile strength
```

### Static Demo Workflow

The root `index.html` includes a form with:

```html
<form class="prediction-form" data-static-predict>
```

When this attribute exists:

1. JavaScript prevents normal form submission.
2. JavaScript calculates the score in the browser.
3. JavaScript decides approved or rejected.
4. JavaScript fills the static result section.
5. JavaScript scrolls to the result.

This allows GitHub Pages hosting without a backend server.

## CSS and Design Workflow

File:

```text
static/css/style.css
```

The CSS provides:

- Sticky header
- Brand mark
- Hero layout
- Credit card preview
- Form grid
- Responsive design
- Buttons
- Result card
- Score ring
- Summary panel
- Mobile layout adjustments

The project uses a light credit-card themed interface with blue, cyan, green, red, and gold visual cues.

Responsive behavior:

- On screens below 900px, hero and result layouts become single-column.
- On screens below 620px, the header stacks vertically and buttons become full-width.

## Sample Input 1: Strong Applicant

Form input:

```text
Applicant Name: Asha Rao
Gender: Female
Own Car: Yes
Own Real Estate: Yes
Annual Income: 300000
Income Type: Working
Education: Higher education
Family Status: Married
Housing Type: House / apartment
Age: 29
Employment Years: 4
Family Members: 2
EMI Paid Off: 4
EMI Past Dues: 0
Number of Loans: 2
```

Fallback scoring:

```text
Base score: 45
Annual income >= 250000: +18
EMI paid off >= 3: +14
EMI past dues == 0: +12
Number of loans <= 2: +8
Employment years >= 3: +8
Age between 23 and 60: +5
Own car Yes: +3
Own realty Yes: +5
Stable income type: +5
Family members <= 5: +0
Raw score: 123
Final score after clamp: 100
```

Sample output:

```text
Credit Card Approved
Score: 100%
Risk Category: Low Risk
Prediction Source: Built-in scoring fallback
Decision Message: The applicant profile shows healthy repayment behavior and acceptable financial risk.
```

## Sample Input 2: Moderate Applicant

Form input:

```text
Applicant Name: Rohan Mehta
Gender: Male
Own Car: No
Own Real Estate: Yes
Annual Income: 120000
Income Type: Commercial associate
Education: Secondary / secondary special
Family Status: Married
Housing Type: House / apartment
Age: 35
Employment Years: 2
Family Members: 4
EMI Paid Off: 2
EMI Past Dues: 1
Number of Loans: 4
```

Fallback scoring:

```text
Base score: 45
Annual income >= 100000: +12
EMI paid off >= 1: +8
EMI past dues <= 2: +2
Number of loans <= 5: +2
Employment years between 1 and 3: +0
Age between 23 and 60: +5
Own car No: +0
Own realty Yes: +5
Stable income type: +5
Family members <= 5: +0
Final score: 84
```

Sample output:

```text
Credit Card Approved
Score: 84%
Risk Category: Low Risk
Prediction Source: Built-in scoring fallback
```

## Sample Input 3: High-Risk Applicant

Form input:

```text
Applicant Name: Neha Sharma
Gender: Female
Own Car: No
Own Real Estate: No
Annual Income: 35000
Income Type: Student
Education: Incomplete higher
Family Status: Single / not married
Housing Type: Rented apartment
Age: 21
Employment Years: 0.5
Family Members: 6
EMI Paid Off: 0
EMI Past Dues: 5
Number of Loans: 7
```

Fallback scoring:

```text
Base score: 45
Annual income < 50000: -8
EMI paid off 0: +0
EMI past dues > 2: -18
Number of loans > 5: -10
Employment years < 1: -4
Age outside 23 to 60: +0
Own car No: +0
Own realty No: +0
Income type Student: +0
Family members > 5: -5
Final score: 0
```

Sample output:

```text
Credit Card Rejected
Score: 0%
Risk Category: High Risk
Prediction Source: Built-in scoring fallback
Decision Message: The applicant profile needs stronger repayment history or lower risk indicators before approval.
```

## Sample HTTP Workflow

### Request

```http
POST /predict HTTP/1.1
Content-Type: application/x-www-form-urlencoded

applicant_name=Asha+Rao&gender=Female&own_car=Yes&own_realty=Yes&annual_income=300000&income_type=Working&education_type=Higher+education&family_status=Married&housing_type=House+%2F+apartment&days_birth=29&days_employed=4&family_members=2&emi_paid_off=4&emi_past_dues=0&number_of_loans=2
```

### Response

```text
HTML page rendered from templates/result.html
Decision: Credit Card Approved
Score: 100%
Risk Category: Low Risk
```

## End-to-End User Process

1. User opens `http://127.0.0.1:5000/`.
2. Flask renders `templates/home.html`.
3. User clicks `Start Prediction`.
4. Flask renders `templates/index.html`.
5. User fills the prediction form.
6. JavaScript updates the live profile strength meter.
7. User submits the form.
8. Browser sends POST request to `/predict`.
9. Flask converts submitted form data to a dictionary.
10. Flask calls `model_prediction(form_data)`.
11. If `model.pkl` exists, Flask uses the trained model.
12. If `model.pkl` is missing, Flask uses fallback scoring.
13. Flask renders `templates/result.html`.
14. User sees approved or rejected output with risk score.

## Developer Process

1. Clone or open the project folder.
2. Confirm Python is installed.
3. Install dependencies.
4. Run the Flask app.
5. Test the home page.
6. Test the prediction form.
7. Test several sample applicants.
8. Add `model.pkl` after training a production model.
9. Re-run the app and verify the prediction source changes to `model.pkl`.
10. Update documentation when fields, routes, model features, or scoring rules change.

## Static Deployment Process

The static demo can be deployed to GitHub Pages because it does not require Flask.

Process:

1. Keep `index.html` in the root.
2. Keep `static/css/style.css` and `static/js/script.js`.
3. Push files to GitHub.
4. Enable GitHub Pages for the repository.
5. Open the GitHub Pages URL.
6. Use the browser-based form.

Static demo limitations:

- It cannot load `model.pkl`.
- It cannot run Python.
- It uses JavaScript scoring only.
- It is suitable for demonstrations, not backend model serving.

## Backend Deployment Process

The Flask version should be deployed to a Python-capable platform.

Possible platforms:

- Render
- Railway
- PythonAnywhere
- Heroku-compatible platforms
- Cloud VM
- IBM Watson Machine Learning or related cloud services for model serving

Backend deployment requirements:

- Python runtime
- Flask dependency installed
- `app.py` entry point configured
- Optional `model.pkl` available in project root
- Web server command configured

Example local command:

```bash
python app.py
```

Production platforms usually require a WSGI server such as Gunicorn. If deploying to Linux, a typical command may be:

```bash
gunicorn app:app
```

`gunicorn` is not currently listed in `requirements.txt`, so it should be added if the deployment platform requires it.

## Testing Workflow

### Manual Flask Test

1. Run `python app.py`.
2. Open `http://127.0.0.1:5000/`.
3. Click `Start Prediction`.
4. Submit strong applicant sample.
5. Confirm approved result.
6. Submit high-risk applicant sample.
7. Confirm rejected result.
8. Check that the score and risk category match expected scoring.

### Static Demo Test

1. Open root `index.html` in a browser or through GitHub Pages.
2. Fill sample applicant fields.
3. Confirm live profile strength changes.
4. Submit the form.
5. Confirm static result appears on the same page.

### Model File Test

1. Place trained `model.pkl` in project root.
2. Run `python app.py`.
3. Submit prediction form.
4. Confirm result page shows:

```text
Prediction Source: model.pkl
```

5. Remove or rename `model.pkl`.
6. Restart Flask.
7. Submit prediction form.
8. Confirm result page shows:

```text
Prediction Source: Built-in scoring fallback
```

## Validation Checklist

Use this checklist before submission or deployment:

- `README.md` explains how to run the project.
- `requirements.txt` includes required backend packages.
- Flask app starts without errors.
- Home page opens correctly.
- Prediction form opens correctly.
- All required form fields are present.
- Live profile meter updates on input.
- Strong applicant returns approved result.
- High-risk applicant returns rejected result.
- Result page displays applicant name.
- Result page displays score.
- Result page displays risk category.
- Result page displays prediction source.
- Static `index.html` works without Flask.
- CSS loads correctly.
- JavaScript loads correctly.
- Dataset files are not committed if too large.
- `model.pkl` is added only when appropriate.

## Error Handling Notes

The current backend includes `to_float()` to safely convert form values.

If a numeric input is missing or invalid:

```python
to_float(value, default=0.0)
```

returns:

```text
0.0
```

This prevents the application from crashing during fallback scoring.

The HTML form also uses required fields and numeric input constraints to reduce invalid submissions.

## Known Limitations

- `requirements.txt` currently lists only Flask, while full model-building notebooks or scripts would also need Pandas, NumPy, Scikit-learn, Matplotlib, and Seaborn.
- The repository contains documentation for model building but does not include a full model training script in the root.
- `model.pkl` is optional and not present by default.
- The fallback scoring system is rule-based, not a trained statistical model.
- The static GitHub Pages demo cannot use Flask or Pickle.
- The conclusion mentions XGBoost and IBM Watson Machine Learning, but the current visible runtime files focus on Flask and fallback/model.pkl prediction.

## Recommended Improvements

Recommended technical improvements:

- Add a full training script such as `train_model.py`.
- Add Scikit-learn and data libraries to `requirements.txt` if training is part of the runnable project.
- Save preprocessing pipeline and model together to avoid feature mismatch.
- Add server-side validation for all submitted fields.
- Add automated tests for fallback scoring.
- Add a clear model feature contract.
- Add sample dataset schema documentation.
- Add a production deployment guide.
- Add a confusion matrix and model comparison table with actual metrics.
- Add model versioning details.

## Maintenance Guide

When adding a new form field:

1. Add the field to `templates/index.html`.
2. Add matching frontend logic in `static/js/script.js` if it affects preview score.
3. Add backend handling in `app.py`.
4. Update the model feature order if `model.pkl` uses the new field.
5. Update sample inputs and documentation.
6. Test Flask and static demo behavior.

When changing scoring rules:

1. Update `calculate_fallback_prediction()` in `app.py`.
2. Update `calculatePreviewScore()` in `static/js/script.js`.
3. Confirm both backend and frontend produce the same score.
4. Update this documentation.
5. Re-test sample applicants.

When replacing the trained model:

1. Confirm feature order used during training.
2. Confirm feature order in `model_prediction()`.
3. Save the model as `model.pkl`.
4. Place it in the project root.
5. Restart Flask.
6. Run approval and rejection test cases.

## Final Outcome

The project successfully demonstrates a complete credit card approval prediction workflow. It includes dataset handling documentation, preprocessing documentation, model-building documentation, a Flask web application, a static browser demo, frontend styling, JavaScript scoring, and result presentation.

The most important runtime behavior is:

```text
User input -> Flask or browser scoring -> approval decision -> risk score -> result page
```

The system is suitable for academic demonstration, internship submission, and learning how machine learning concepts can be connected to a practical web application.
