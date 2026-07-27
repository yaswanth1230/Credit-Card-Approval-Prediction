# Multivariate Analysis

## Description

Multivariate analysis is performed to study the relationship and interaction between multiple features in the dataset at the same time.

In the Credit Card Approval Prediction project, multivariate analysis helps understand how different applicant attributes such as income, employment days, family members, and age are related to each other and how they influence the approval prediction process. This analysis is useful for identifying correlations, hidden patterns, and feature dependencies within the dataset.

In this phase, correlation analysis and heatmaps are commonly used to visualize relationships between numerical variables. The code `app.corr()` is used to calculate correlation values between dataset features, while `sns.heatmap()` is used to create a heatmap for graphical representation of feature relationships.

The heatmap displays positive and negative correlations using different colors, making it easier to identify strongly related variables.

The generated multivariate analysis helps in feature selection, reducing redundancy, and improving machine learning model performance. It also helps identify which features have the greatest impact on credit card approval prediction and supports better preprocessing and model optimization.

## Import Required Libraries

```python
import matplotlib.pyplot as plt
import seaborn as sns
```

## Correlation Analysis

The `corr()` function is used to calculate the correlation between numerical columns in the dataset.

```python
app.corr()
```

## Heatmap Visualization

The heatmap is used to visualize the correlation between multiple numerical features.

```python
fig, ax = plt.subplots(figsize=(8, 6))
sns.heatmap(app.corr(), annot=True)
plt.title("Correlation Heatmap")
plt.show()
```

## Example Numerical Features

The following numerical attributes can be useful for multivariate analysis:

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

Multivariate analysis helps identify:

- Strong positive and negative correlations between features.
- Redundant variables that may not be useful for model training.
- Important numerical features that may influence credit card approval.
- Relationships between applicant income, employment history, age, and family details.

