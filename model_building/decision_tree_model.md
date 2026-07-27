# Decision Tree Model

## Description

Decision Tree is a supervised machine learning algorithm used for classification and prediction tasks. In the Credit Card Approval Prediction project, a function named `d_tree()` is created to train, test, and evaluate the Decision Tree model using `X_train`, `X_test`, `y_train`, and `y_test` datasets.

The model predicts whether a credit card application should be approved or not approved based on applicant and credit-related information.

The `DecisionTreeClassifier()` class from the scikit-learn library is initialized and trained using the `fit()` method. The algorithm works like a flowchart where decisions are made based on feature conditions, and the `predict()` method is used to generate predictions on unseen test data. The predicted values are compared with actual values to measure model accuracy and performance.

The model is evaluated using a confusion matrix and classification report, which provide metrics such as precision, recall, F1-score, and support. Decision Tree is easy to understand, interpretable, and effective for handling both numerical and categorical features in classification problems.

## Import Required Libraries

```python
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import confusion_matrix, classification_report
```

## Decision Tree Function

The `d_tree()` function trains the Decision Tree classifier and evaluates its performance.

```python
def d_tree(X_train, X_test, y_train, y_test):
    dt = DecisionTreeClassifier(random_state=42)
    dt.fit(X_train, y_train)

    y_pred = dt.predict(X_test)

    print("*** Decision Tree Classifier ***")
    print("Confusion Matrix")
    print(confusion_matrix(y_test, y_pred))

    print("Classification Report")
    print(classification_report(y_test, y_pred))

    return dt, y_pred
```

## Call the Function

```python
dt_model, dt_predictions = d_tree(X_train, X_test, y_train, y_test)
```

## Outcome

Decision Tree helps to:

- Build an interpretable classification model.
- Predict credit card approval status using applicant and credit-related features.
- Understand decision-making through feature-based conditions.
- Evaluate model performance using a confusion matrix and classification report.
- Compare model performance with Logistic Regression and Random Forest.

