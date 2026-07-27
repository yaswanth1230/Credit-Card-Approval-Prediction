<h1 align="center">💳 Credit Card Approval Prediction</h1>

<p align="center">
<img src="https://readme-typing-svg.demolab.com?font=Montserrat&weight=700&size=30&duration=2500&pause=1000&color=00BFFF&center=true&vCenter=true&width=900&lines=Using+Machine+Learning;Flask+%7C+Scikit-learn+%7C+Python;Real-Time+Approval+Prediction"/>
</p>
A Machine Learning-based web application that predicts whether a credit card application is **Approved** or **Rejected** based on user-provided input values. The application integrates a trained Machine Learning model with a Flask web application to provide fast and interactive predictions through a simple web interface.

---

# 📖 Table of Contents

- Project Overview
- Objectives
- Features
- Technology Stack
- Project Architecture
- Project Structure
- Installation
- Usage
- Machine Learning Model
- Application Workflow
- Repository Contents
- Future Enhancements
- Team Members
- Acknowledgement
- License

---

# 📌 Project Overview

Credit Card Approval Prediction is a Machine Learning-based web application developed to automate the prediction of credit card application outcomes. The application accepts user inputs through a user-friendly interface, processes them using a trained Machine Learning classification model, and predicts whether the application is likely to be approved or rejected.

The project demonstrates the integration of Machine Learning techniques with Flask-based web development to build a practical prediction system.

---

# 🎯 Objectives

- Develop a Machine Learning model for credit card approval prediction.
- Integrate the trained model with a Flask web application.
- Provide an easy-to-use web interface for prediction.
- Demonstrate an end-to-end Machine Learning workflow.
- Showcase the practical implementation of AI and Machine Learning concepts.

---

# ✨ Features

- User-friendly web interface
- Real-time prediction
- Machine Learning-based classification
- Fast prediction response
- Flask-powered web application
- Simple navigation and interactive design
- Lightweight and easy to run locally

---

# 🛠️ Technology Stack

| Category | Technology |
|-----------|------------|
| Programming Language | Python |
| Web Framework | Flask |
| Machine Learning | Scikit-learn |
| Numerical Computing | NumPy |
| Model Serialization | Pickle |
| Frontend | HTML, CSS |
| Version Control | Git & GitHub |

---

# 🏗️ Project Architecture

```
             User
               │
               ▼
      Web Interface (HTML/CSS)
               │
               ▼
       Flask Web Application
               │
               ▼
     Machine Learning Model
          (model.pkl)
               │
               ▼
     Prediction Result
```

---

# 📂 Project Structure

```
Credit-Card-Approval-Prediction/
│
├── app.py
├── model.pkl
├── requirements.txt
├── README.md
├── .gitignore
│
├── dataset/
├── static/
├── templates/
├── Project_Flow/
├── ER_Diagram/
│
└── Additional Project Files
```

---

# ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/neelamAnjali/credit-card-approval-prediction.git
```

### 2. Navigate to the project folder

```bash
cd credit-card-approval-prediction
```

### 3. Install the required dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Flask application

```bash
python app.py
```

---

# ▶️ Usage

After running the application, open your web browser and visit:

```
http://127.0.0.1:5000
```

### Steps to Use

1. Launch the application.
2. Open the Home Page.
3. Click **Start Prediction**.
4. Enter the required input values.
5. Click **Predict**.
6. View the prediction result displayed by the application.

---

# 🤖 Machine Learning Model

The application uses a trained Machine Learning classification model to predict whether a credit card application is approved or rejected based on the provided input values.

The trained model is stored in:

```
model.pkl
```

The model is automatically loaded into the Flask application during startup to generate predictions.

---

# 🔄 Application Workflow

```
Start
   │
   ▼
Launch Flask Application
   │
   ▼
Open Home Page
   │
   ▼
Enter Input Values
   │
   ▼
Click Predict
   │
   ▼
Machine Learning Model Processing
   │
   ▼
Display Prediction Result
   │
   ▼
End
```

---

# 📦 Repository Contents

- Source Code
- Flask Web Application
- Machine Learning Model
- HTML Templates
- CSS Files
- Dataset
- Project Flow
- ER Diagram
- Documentation

---

# 🚀 Future Enhancements

- Improve prediction accuracy using advanced Machine Learning algorithms.
- Incorporate additional input features for better prediction.
- Deploy the application on cloud platforms.
- Enhance the user interface and user experience.
- Store prediction history in a database.
- Add user authentication.
- Develop a dashboard for analytics and visualization.
- Create REST APIs for integration with external applications.

---

# 👥 Team Members

This project was collaboratively developed as part of the **SmartBridge AI & Machine Learning Program** by the following team members:

| S.No | Team Member |
|:---:|-------------|
| 1 | **Yaswanth Pedapudi** |
| 2 | **Harsha Vardhan Malleboyina** |
| 3 | **Praveen Palaparthi** |

---

# 🤝 Acknowledgement

This project was developed as part of the **SmartBridge AI & Machine Learning Program**, providing practical exposure to Machine Learning, Python programming, and Flask web development. It represents a collaborative effort in designing, developing, testing, and documenting a predictive web application.

---

# 📜 License

This project is intended for educational and learning purposes only.
