# Random Forest Model

## Description

Random Forest is a supervised machine learning algorithm used for classification and prediction tasks. In the Credit Card Approval Prediction project, a function named `random_forest()` is created to train, test, and evaluate the Random Forest model using training and testing datasets such as `X_train`, `X_test`, `y_train`, and `y_test`.

The `RandomForestClassifier()` class from the scikit-learn library is initialized and trained using the `fit()` method. Random Forest works by creating multiple decision trees and combining their predictions using majority voting, which helps improve accuracy and reduce overfitting. After training, the `predict()` method is used to generate predictions on unseen test data.

The model performance is evaluated using a confusion matrix and classification report, which provide metrics such as precision, recall, F1-score, and support. Random Forest is widely used because it provides high accuracy, handles large datasets effectively, and performs well for classification problems.

## Import Required Libraries

```python
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix, classification_report
```

## Random Forest Function

The `random_forest()` function builds, trains, tests, and evaluates the Random Forest classification model.

```python
def random_forest(X_train, X_test, y_train, y_test):
    """
    Builds, trains, and tests a Random Forest classification model,
    returning performance metrics.
    """

    rf_model = RandomForestClassifier(
        n_estimators=100,
        random_state=42,
        n_jobs=-1
    )

    print("Training Random Forest model...")
    rf_model.fit(X_train, y_train)

    print("Generating predictions...")
    y_pred = rf_model.predict(X_test)

    print("\n" + "=" * 40)
    print("Random Forest Model Evaluation")
    print("=" * 40)

    print("\nClassification Report:")
    print(classification_report(y_test, y_pred))

    print("\nConfusion Matrix:")
    print(confusion_matrix(y_test, y_pred))

    return rf_model, y_pred
```

## Call the Function

```python
rf_model, rf_predictions = random_forest(X_train, X_test, y_train, y_test)
```

## Outcome

Random Forest helps to:

- Build a powerful classification model using multiple decision trees.
- Improve prediction accuracy through majority voting.
- Reduce overfitting compared to a single decision tree.
- Handle large datasets and multiple features effectively.
- Evaluate model performance using a classification report and confusion matrix.

