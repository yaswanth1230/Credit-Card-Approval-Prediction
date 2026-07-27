# Handling Missing Values

## Description

Handling missing values is an important preprocessing step in the Credit Card Approval Prediction project because missing data can reduce model accuracy and create errors during training.

The functions `df.isnull().sum()` and `df.isnull().mean()` are used to identify and measure missing values present in each column of the dataset.

The `isnull()` function checks whether any value is missing, while `sum()` counts the total missing values and `mean()` calculates the proportion of missing data in each feature. In this dataset, the occupation type column contains null values, but it is removed during the cleaning process because it is not required for final model training.

After checking the remaining columns, no missing values are found, so further imputation is not required. This process ensures that the dataset is clean, complete, and ready for preprocessing, feature selection, scaling, and machine learning model training.

## Check Missing Value Count

The `isnull().sum()` function displays the total number of missing values in each column.

```python
app.isnull().sum()
```

## Check Missing Value Percentage

The `isnull().mean()` function displays the proportion of missing values in each column.

```python
app.isnull().mean()
```

## Remove Occupation Type Column

If the `OCCUPATION_TYPE` column contains many missing values and is not required for final model training, it can be removed.

```python
app.drop("OCCUPATION_TYPE", axis=1, inplace=True)
```

## Verify Missing Values After Cleaning

After handling missing values, the dataset can be checked again.

```python
app.isnull().sum()
```

## Outcome

Handling missing values helps to:

- Identify incomplete columns in the dataset.
- Avoid errors during model training.
- Improve dataset quality and reliability.
- Remove unnecessary features with missing values.
- Prepare clean data for feature engineering and model building.

