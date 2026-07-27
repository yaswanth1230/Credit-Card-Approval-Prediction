# Removing Duplicate Records

## Description

Removing duplicate records is an important preprocessing step in the Credit Card Approval Prediction project because each applicant should have a unique applicant record. Duplicate records may occur due to repeated data entry, merged files, or system errors, which can affect the accuracy and performance of the machine learning model.

To remove duplicate records, the `drop_duplicates()` function from the Pandas library is used. Commands such as `df.drop_duplicates()` or `df.drop_duplicates(subset="Applicant_ID", keep="first")` help remove repeated rows and keep only unique applicant records in the dataset.

After removing duplicates, the dataset becomes cleaner, more accurate, and reliable for preprocessing, feature selection, train-test splitting, and machine learning model training.

## Check Duplicate Records

The `duplicated().sum()` function is used to count duplicate rows in the dataset.

```python
app.duplicated().sum()
```

## Remove Duplicate Rows

The `drop_duplicates()` function removes repeated rows from the dataset.

```python
app.drop_duplicates(inplace=True)
```

## Remove Duplicates Based on Selected Columns

Duplicate records can also be removed based on important applicant-related columns.

```python
app.drop_duplicates(
    subset=[
        "CODE_GENDER",
        "FLAG_OWN_CAR",
        "FLAG_OWN_REALTY",
        "CNT_CHILDREN",
        "AMT_INCOME_TOTAL",
        "NAME_INCOME_TYPE",
        "NAME_EDUCATION_TYPE",
        "NAME_FAMILY_STATUS",
        "NAME_HOUSING_TYPE",
        "DAYS_BIRTH",
        "DAYS_EMPLOYED",
        "FLAG_MOBIL",
        "FLAG_WORK_PHONE",
        "FLAG_PHONE",
        "FLAG_EMAIL",
        "OCCUPATION_TYPE",
        "CNT_FAM_MEMBERS",
    ],
    keep="first",
    inplace=True,
)
```

## Verify After Removing Duplicates

After duplicate removal, the duplicate count can be checked again.

```python
app.duplicated().sum()
```

## Outcome

Removing duplicate records helps to:

- Improve data quality.
- Avoid repeated applicant records.
- Reduce bias during model training.
- Improve model accuracy and reliability.
- Prepare clean data for preprocessing and feature engineering.

