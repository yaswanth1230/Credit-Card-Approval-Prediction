# Label Encoding Categorical Features

## Description

In this process, the `LabelEncoder` class from the scikit-learn preprocessing module is used. The `fit_transform()` method identifies unique category names in each column and converts them into integer values.

This transformation makes the dataset suitable for machine learning algorithms and helps models learn patterns from categorical data efficiently.

The encoded values are only numerical representations of categories and do not represent ranking or importance. Tree-based models such as Decision Tree, Random Forest, and XGBoost can effectively work with label encoded features during prediction and classification.

## Import LabelEncoder

```python
from sklearn.preprocessing import LabelEncoder
```

## Create LabelEncoder Objects

Separate encoder objects can be created for each categorical column.

```python
ce = LabelEncoder()
oc = LabelEncoder()
own_r = LabelEncoder()
it = LabelEncoder()
et = LabelEncoder()
fs = LabelEncoder()
ht = LabelEncoder()
```

## Apply Label Encoding

The `fit_transform()` method converts categorical values into numerical labels.

```python
credit_app["CODE_GENDER"] = ce.fit_transform(credit_app["CODE_GENDER"])
credit_app["FLAG_OWN_CAR"] = oc.fit_transform(credit_app["FLAG_OWN_CAR"])
credit_app["FLAG_OWN_REALTY"] = own_r.fit_transform(credit_app["FLAG_OWN_REALTY"])
credit_app["NAME_INCOME_TYPE"] = it.fit_transform(credit_app["NAME_INCOME_TYPE"])
credit_app["NAME_EDUCATION_TYPE"] = et.fit_transform(credit_app["NAME_EDUCATION_TYPE"])
credit_app["NAME_FAMILY_STATUS"] = fs.fit_transform(credit_app["NAME_FAMILY_STATUS"])
credit_app["NAME_HOUSING_TYPE"] = ht.fit_transform(credit_app["NAME_HOUSING_TYPE"])
```

## Alternative Loop-Based Encoding

The same process can also be performed using a loop to reduce repeated code.

```python
categorical_columns = [
    "CODE_GENDER",
    "FLAG_OWN_CAR",
    "FLAG_OWN_REALTY",
    "NAME_INCOME_TYPE",
    "NAME_EDUCATION_TYPE",
    "NAME_FAMILY_STATUS",
    "NAME_HOUSING_TYPE",
]

for column in categorical_columns:
    encoder = LabelEncoder()
    credit_app[column] = encoder.fit_transform(credit_app[column])
```

## Outcome

Label encoding helps to:

- Convert categorical text values into numerical values.
- Prepare the dataset for machine learning algorithms.
- Improve compatibility with classification models.
- Support model training using applicant demographic and financial features.
- Make categorical features usable for Decision Tree, Random Forest, and other tree-based models.

