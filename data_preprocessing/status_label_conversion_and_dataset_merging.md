# Status Label Conversion and Dataset Merging

## Description

The `STATUS` column initially contains multiple payment categories such as paid on time, overdue payments, bad debt, and no loan records. Since the main goal is to predict whether an applicant should be approved or not approved, these multi-class labels are converted into binary classes for easier classification and decision-making.

Applicants with good repayment behavior are mapped to the approved class, while applicants with poor credit history or overdue records are mapped to the not approved class. This simplifies the prediction process and improves machine learning model performance.

After label conversion, the cleaned applicant dataset and credit records dataset are merged using the applicant `ID` column with the Pandas `merge()` function. This combines applicant personal details and credit history information into a single dataset for model training and prediction.

## Import Pandas

```python
import pandas as pd
```

## Convert Multi-Class Payment Status to Binary Class

The `to_binary()` function converts the original `STATUS` values into binary labels.

Good payment behavior such as `0`, `X`, and `C` is mapped to `1`, which represents approved. Overdue or bad debt records are mapped to `0`, which represents not approved.

```python
def to_binary(status):
    if status in ["0", "X", "C"]:
        return 1
    return 0

credit_df["STATUS_BIN"] = credit_df["STATUS"].apply(to_binary)
print(credit_df["STATUS_BIN"].value_counts())
```

## Merge Applicant and Credit Datasets

The cleaned applicant dataset and credit dataset are merged using the common `ID` column.

```python
final_df = applicant_df.merge(credit_df, how="left", on="ID")
print("Merged shape:", final_df.shape)
```

## Preview Merged Dataset

The `head()` method is used to display the first few records of the merged dataset.

```python
print(final_df.head())
```

## Check Missing Values After Merge

After merging, missing values are checked to ensure the final dataset is ready for model training.

```python
print("Missing values in each column:")
print(final_df.isnull().sum().sort_values(ascending=False))
```

## Outcome

Status label conversion and dataset merging helps to:

- Convert multiple credit payment statuses into binary prediction labels.
- Represent approved applicants using `1` and not approved applicants using `0`.
- Combine applicant details and credit history into one final dataset.
- Prepare the final dataset for feature selection, train-test splitting, and model training.
- Improve model performance by simplifying the classification target.

