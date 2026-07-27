# Data Cleaning and Feature Transformation

## Description

Data cleaning and feature transformation is an important preprocessing step in the Credit Card Approval Prediction project. The `data_cleaning()` function is used to clean, transform, and prepare the applicant dataset before machine learning model training.

Raw datasets may contain unnecessary columns, negative values, inconsistent information, and categorical features that must be converted into a useful format for analysis and prediction.

In this process, a new column is created by combining family members and children information to better represent family dependency. Unnecessary columns are removed to reduce complexity and improve model performance. The `DAYS_BIRTH` and `DAYS_EMPLOYED` columns contain negative values, so the `abs()` function is used to convert them into positive values for easier interpretation and analysis.

Feature mapping is applied to categorical columns such as housing type, income type, education type, and family type to convert text values into numerical labels suitable for machine learning algorithms.

For the credit records dataset, the data is grouped using the `ID` column to combine multiple monthly records for each applicant. New features such as `begin_month`, `end_month`, and `window` are created from the `MONTHS_BALANCE` column to represent the applicant's activity period. The `STATUS` column is also interpreted to identify payment behavior such as timely payments, overdue payments, and no loan records, which helps improve credit approval prediction accuracy.

## Applicant Data Cleaning

```python
def data_cleaning(app):
    app = app.copy()

    app["AGE"] = abs(app["DAYS_BIRTH"]) // 365
    app["EMPLOYMENT_YEARS"] = abs(app["DAYS_EMPLOYED"]) // 365
    app["FAMILY_DEPENDENCY"] = app["CNT_FAM_MEMBERS"] + app["CNT_CHILDREN"]

    app.drop(
        columns=["DAYS_BIRTH", "DAYS_EMPLOYED"],
        inplace=True
    )

    return app
```

## Mapping Categorical Features

Categorical values are converted into numerical values so that machine learning algorithms can process them.

```python
income_type_map = {
    "Working": 0,
    "Commercial associate": 1,
    "Pensioner": 2,
    "State servant": 3,
    "Student": 4
}

education_type_map = {
    "Lower secondary": 0,
    "Secondary / secondary special": 1,
    "Incomplete higher": 2,
    "Higher education": 3,
    "Academic degree": 4
}

family_status_map = {
    "Single / not married": 0,
    "Separated": 1,
    "Widow": 2,
    "Civil marriage": 3,
    "Married": 4
}

housing_type_map = {
    "With parents": 0,
    "Municipal apartment": 1,
    "Rented apartment": 2,
    "Office apartment": 3,
    "Co-op apartment": 4,
    "House / apartment": 5
}

app["NAME_INCOME_TYPE"] = app["NAME_INCOME_TYPE"].map(income_type_map)
app["NAME_EDUCATION_TYPE"] = app["NAME_EDUCATION_TYPE"].map(education_type_map)
app["NAME_FAMILY_STATUS"] = app["NAME_FAMILY_STATUS"].map(family_status_map)
app["NAME_HOUSING_TYPE"] = app["NAME_HOUSING_TYPE"].map(housing_type_map)
```

## Credit Record Feature Transformation

The credit record dataset contains multiple monthly records for each applicant. These records can be grouped by applicant ID to create useful features.

```python
credit_grouped = credit.groupby("ID").agg(
    begin_month=("MONTHS_BALANCE", "min"),
    end_month=("MONTHS_BALANCE", "max"),
    window=("MONTHS_BALANCE", "count")
).reset_index()
```

## Interpreting Payment Status

The `STATUS` column can be transformed into meaningful payment behavior labels.

```python
credit["STATUS"] = credit["STATUS"].replace({
    "C": "paid_off",
    "X": "no_loan"
})
```

## Outcome

Data cleaning and feature transformation helps to:

- Remove unnecessary and inconsistent data.
- Convert negative day values into meaningful age and employment features.
- Transform categorical columns into numerical values.
- Create new features from applicant and credit history information.
- Improve model accuracy, reliability, and training performance.

