# Univariate Analysis

## Description

Univariate analysis is performed to study and understand a single feature or variable in the dataset independently.

In the Credit Card Approval Prediction project, univariate analysis helps identify the distribution, frequency, and patterns of applicant-related attributes such as occupation type, income category, education level, and family status. This analysis makes it easier to detect dominant categories, unusual values, and overall data behavior before model training.

In this phase, functions such as `value_counts()` are used to count the frequency of individual categories, while visualization libraries like Matplotlib and Seaborn are used to create bar charts, count plots, and histograms for better understanding of the data distribution.

For example, the code `app["OCCUPATION_TYPE"].value_counts()` is used to display the number of applicants in each occupation category, and `sns.countplot()` is used to visualize the distribution graphically.

The generated graphs and plots help in identifying trends, class imbalance, and feature importance within the dataset. Univariate analysis improves data understanding and supports better preprocessing, feature selection, and machine learning model performance.

## Import Required Libraries

```python
import matplotlib.pyplot as plt
import seaborn as sns
```

## Count Occupation Categories

```python
print("Number of people working status:")
print(app["OCCUPATION_TYPE"].value_counts())
```

## Visualize Occupation Type Distribution

```python
sns.set(rc={"figure.figsize": (18, 8)})
sns.countplot(x="OCCUPATION_TYPE", data=app, palette="Set2")
plt.xticks(rotation=45)
plt.xlabel("Occupation Type")
plt.ylabel("Count")
plt.title("Distribution of Applicants by Occupation Type")
plt.show()
```

## Other Useful Univariate Analysis Examples

### Income Type

```python
print(app["NAME_INCOME_TYPE"].value_counts())

sns.countplot(x="NAME_INCOME_TYPE", data=app, palette="Set3")
plt.xticks(rotation=45)
plt.title("Distribution of Applicants by Income Type")
plt.show()
```

### Education Type

```python
print(app["NAME_EDUCATION_TYPE"].value_counts())

sns.countplot(x="NAME_EDUCATION_TYPE", data=app, palette="Set1")
plt.xticks(rotation=45)
plt.title("Distribution of Applicants by Education Type")
plt.show()
```

### Family Status

```python
print(app["NAME_FAMILY_STATUS"].value_counts())

sns.countplot(x="NAME_FAMILY_STATUS", data=app, palette="Pastel1")
plt.xticks(rotation=45)
plt.title("Distribution of Applicants by Family Status")
plt.show()
```

