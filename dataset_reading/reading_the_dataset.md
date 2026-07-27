# Reading the Dataset

## Description

Reading the dataset is an important step in the Credit Card Approval Prediction project because it helps understand the structure, features, and records available for machine learning.

The dataset is loaded using the Pandas library with functions such as `pd.read_csv()` to read CSV files and store them in a DataFrame for analysis and preprocessing. Functions like `head()`, `shape`, and `info()` are used to display sample records, dataset size, column names, data types, and missing values before model training.

In Pandas, the `read_csv()` function is used to read a dataset. As a parameter, we provide the directory or file path of the CSV file.

## Import Pandas

```python
import pandas as pd
```

## Read the Dataset

For the dataset available in this project folder:

```python
data = pd.read_csv("dataset/creditcard.csv")
```

If the project uses separate application and credit record files, they can be loaded as:

```python
app = pd.read_csv("application_record.csv")
credit = pd.read_csv("credit_record.csv")
```

## Display First Five Records

The `head()` method is used to return the top five rows of a DataFrame by default.

```python
data.head()
```

For separate application and credit datasets:

```python
app.head()
credit.head()
```

## Check Dataset Shape

The `shape` attribute displays the number of rows and columns in the dataset.

```python
data.shape
```

## Check Dataset Information

The `info()` method displays column names, non-null values, and data types.

```python
data.info()
```

## Check Missing Values

Missing values can be checked using the `isnull().sum()` function.

```python
data.isnull().sum()
```

