# Descriptive Analysis

## Description

Descriptive analysis is performed to summarize and understand the statistical properties of the dataset.

In the Credit Card Approval Prediction project, descriptive analysis helps identify important information such as count, mean, standard deviation, minimum value, maximum value, and percentile values of numerical features. This analysis provides a clear overview of the dataset and helps understand the distribution and behavior of applicant-related data.

In this phase, the `describe()` function from the Pandas library is used to generate statistical summaries of the dataset. The code displays important statistical measures for numerical columns such as income, employment days, family members, and age-related features. These statistics help identify data spread, unusual values, and overall feature characteristics before preprocessing and model training.

Descriptive analysis improves data understanding and supports better preprocessing, feature selection, and machine learning model performance. It also helps detect anomalies, outliers, and inconsistencies in the dataset, making the data more reliable for prediction and analysis.

## Generate Statistical Summary

The `describe()` function returns statistical information for numerical columns in the dataset.

```python
app.describe()
```

## Common Statistical Measures

| Measure | Description |
| --- | --- |
| `count` | Shows the number of non-null values in each numerical column. |
| `mean` | Shows the average value of each numerical feature. |
| `std` | Shows the standard deviation, which measures data spread. |
| `min` | Shows the minimum value in each numerical column. |
| `25%` | Shows the first quartile value. |
| `50%` | Shows the median value. |
| `75%` | Shows the third quartile value. |
| `max` | Shows the maximum value in each numerical column. |

## Example Numerical Columns

Descriptive analysis can be applied to numerical features such as:

- `ID`
- `CNT_CHILDREN`
- `AMT_INCOME_TOTAL`
- `DAYS_BIRTH`
- `DAYS_EMPLOYED`
- `FLAG_MOBIL`
- `FLAG_WORK_PHONE`
- `FLAG_PHONE`
- `FLAG_EMAIL`
- `CNT_FAM_MEMBERS`

## Outcome

Descriptive analysis helps to:

- Understand the overall structure of numerical data.
- Identify unusual minimum and maximum values.
- Detect possible outliers and inconsistent records.
- Understand the distribution of applicant-related features.
- Prepare the dataset for preprocessing and model training.

