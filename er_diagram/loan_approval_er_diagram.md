# ER Diagram - Loan Approval Prediction System

This ER diagram represents the core entities involved in the Loan Approval Prediction System. It shows how applicant information, loan-related records, credit history, machine learning model details, and approval prediction results are organized in the database.

```mermaid
erDiagram
    USERS ||--o{ APPLICANT_DETAILS : manages
    APPLICANT_DETAILS ||--o{ CREDIT_HISTORY : has
    APPLICANT_DETAILS ||--|| APPROVAL_PREDICTION : receives
    ML_MODEL ||--o{ APPROVAL_PREDICTION : generates
    CREDIT_HISTORY }o--|| APPROVAL_PREDICTION : used_for

    USERS {
        int UserID PK
        string Name
        string Email
        string Password
        string Role
    }

    APPLICANT_DETAILS {
        int ApplicantID PK
        int UserID FK
        string IncomeType
        string EducationType
        string FamilyStatus
        string HousingType
        int EmploymentDays
    }

    CREDIT_HISTORY {
        int HistoryID PK
        int ApplicantID FK
        int MonthsBalance
        string PaymentStatus
        string OverdueStatus
    }

    ML_MODEL {
        int ModelID PK
        string ModelName
        string AlgorithmType
        float Accuracy
        string ModelFile
    }

    APPROVAL_PREDICTION {
        int PredictionID PK
        int ApplicantID FK
        int ModelID FK
        string ApprovalResult
        string RiskCategory
        date PredictionDate
    }
```

## Entities

- `USERS`
- `APPLICANT_DETAILS`
- `CREDIT_HISTORY`
- `ML_MODEL`
- `APPROVAL_PREDICTION`

## Relationships

- One user can manage or submit multiple applicant records.
- One applicant can have multiple credit history records.
- One applicant receives one final approval prediction result.
- One machine learning model can generate multiple approval prediction results.
- Credit history information is used to generate the approval prediction.

