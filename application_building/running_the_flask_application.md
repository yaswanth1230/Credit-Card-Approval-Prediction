# Running the Flask Application

## Description

Running the Flask application is the final step used to test the Credit Card Approval Prediction system locally. First, open Anaconda Prompt and navigate to the project folder containing the `app.py` file using the `cd` command.

Then run the application using the command `python app.py`, which starts the Flask development server and generates a localhost URL such as `http://127.0.0.1:5000/`.

Open the localhost URL in a web browser to access the application. The `home.html` page displays the home screen, and the user can navigate to the `index.html` prediction form page to enter applicant details. After submitting the form, the Flask backend processes the input values, loads the trained machine learning model or built-in scoring fallback, and generates the prediction result.

The final approval or rejection result is displayed on the `result.html` page. This step confirms that the frontend pages, Flask backend, trained model, and prediction logic are properly connected and working successfully.

## Steps to Run the Application

### Step 1: Open Anaconda Prompt

Open Anaconda Prompt from the Start menu.

### Step 2: Navigate to the Project Folder

Use the `cd` command to move into the folder where `app.py` is stored.

```bash
cd path/to/project/folder
```

Example:

```bash
cd C:\Users\91837\OneDrive\Desktop\smartbridge_internship
```

### Step 3: Run the Flask Application

Run the Flask application using Python.

```bash
python app.py
```

### Step 4: Open the Localhost URL

After running the command, Flask starts the development server and displays a local URL.

```text
http://127.0.0.1:5000/
```

Open this URL in a web browser.

### Step 5: Enter Applicant Details

Fill in the required details in the prediction form, such as:

- Gender
- Car ownership
- Realty ownership
- Total annual income
- Type of income
- Education
- Family status
- Housing type
- Days birth
- Days employed
- Family members
- EMI paid off
- EMI past dues
- Number of loans

### Step 6: View Prediction Result

Click the `Predict` button. The application processes the input values and displays whether the credit card application is approved or rejected.

## Outcome

Running the Flask application helps to:

- Test the project locally.
- Verify that the HTML pages are loading correctly.
- Check that form inputs are passed to the Flask backend.
- Confirm that the trained machine learning model generates predictions.
- Display the final credit card approval result successfully.
