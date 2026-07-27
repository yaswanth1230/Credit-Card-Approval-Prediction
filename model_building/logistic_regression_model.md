# Logistic Regression Model

## Description

The `LogisticRegression()` class from the scikit-learn library is initialized and trained using the `fit()` method. After training, the `predict()` method is used to generate predictions on unseen test data. The predicted values are then compared with actual values to evaluate model performance and prediction accuracy.

The model is evaluated using a confusion matrix and classification report, which provide metrics such as precision, recall, F1-score, and support. Logistic Regression is useful because it is simple, fast, easy to interpret, and works effectively for binary classification tasks.

## Import Required Libraries

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import confusion_matrix, classification_report
```

## Split the Dataset

The dataset is divided into training and testing sets before model building.

```python
X = credit_app.drop("STATUS_BIN", axis=1)
y = credit_app["STATUS_BIN"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)
```

## Train Logistic Regression Model

The `fit()` method trains the Logistic Regression model using the training data.

```python
lr_model = LogisticRegression(max_iter=1000, random_state=42)
lr_model.fit(X_train, y_train)
```

## Generate Predictions

The `predict()` method generates predictions for unseen test data.

```python
y_pred = lr_model.predict(X_test)
```

## Evaluate the Model

The confusion matrix and classification report are used to evaluate model performance.

```python
cm = confusion_matrix(y_test, y_pred)
print("Confusion Matrix:")
print(cm)

print("Classification Report:")
print(classification_report(y_test, y_pred))
```

## Confusion Matrix Visualization

```python
plt.figure(figsize=(10, 9))
sns.heatmap(cm, annot=True, fmt="d", cmap="Blues", cbar=False)
plt.xlabel("Predicted Label")
plt.ylabel("True Label")
plt.title("Confusion Matrix - Logistic Regression")
plt.show()
```

## Outcome

Logistic Regression helps to:

- Train a simple and interpretable binary classification model.
- Predict whether a credit card application should be approved or not approved.
- Evaluate model performance using precision, recall, F1-score, and support.
- Understand classification errors using the confusion matrix.
- Provide a baseline model for comparison with advanced models.

