#  ProductIQ – AI-Driven Product Feedback Intelligence Platform

ProductIQ is a full-stack **Generative AI–powered product intelligence system** that converts unstructured user feedback into **actionable, explainable product features**. It is designed for **product managers and engineering teams** to make informed roadmap decisions using AI-assisted analysis rather than intuition.

---

##  Key Features

-  JWT-based user authentication (Register / Login / Profile)
-  Browser-based feedback submission
-  AI Agent for intelligent feature creation and matching
-  Full feedback–feature traceability
-  AI-driven priority, impact, effort, and confidence scoring
-  Explainable AI reasoning for every decision
-  Django Admin Panel with complete data visibility
-  Fully Dockerized frontend, backend, and database

---

##  AI Agent Design & Purpose

The AI Agent is the **core intelligence layer** of ProductIQ.  
Its goal is to **mimic a product manager’s decision-making process** by:

- Understanding feedback context
- Identifying related product themes
- Updating feature priority and confidence
- Providing transparent AI reasoning

This directly aligns with the original project vision:  
> *“An explainable AI agent that converts feedback into roadmap-ready insights.”*

---

##  AI Agent Workflow (Detailed)

### 1️) Feedback Ingestion
User submits feedback via the browser UI.

### 2️) Semantic Similarity Matching
The agent compares the new feedback with existing features using NLP-based similarity scoring.

### 3️) Decision Branching

- **If similarity ≥ threshold (0.3):**
  - Feedback is linked to an existing feature
  - Feature metrics are recalculated

- **If no match is found:**
  - A new feature is created automatically
  - Initial priority, impact, effort, and confidence are assigned

### 4️) Metric Recalculation
For matched features:
- Confidence score updated using average similarity
- Priority recalculated based on feedback volume
- Impact estimated from feedback intent
- AI explanation regenerated

### 5️) Traceability Mapping
Every feedback–feature relationship is stored with a similarity score for explainability.

---

##  AI Scoring Components

| Metric | Description |
|------|------------|
| **Priority** | Calculated from feedback count and similarity |
| **Impact** | Estimated using feedback intent analysis |
| **Effort** | Heuristic estimation (S / M / L) |
| **Confidence** | Average similarity score |
| **AI Reason** | Natural-language justification |

---

##  Feature Lifecycle Management

Backlog → In Development → Testing → Deployed


Each feature progresses through stages and is visible in the dashboard with full AI context.

---

##  Authentication Flow

- User registers via frontend
- Passwords are securely hashed
- JWT tokens issued on login
- Protected APIs enforce authentication

---

##  Django Admin Panel

The admin panel enables:
- Viewing users, feedback, features
- Inspecting AI-generated reasoning
- Verifying feedback–feature mappings

Access:
http://localhost:8000/admin/


---

##  Dockerized Setup
##  Getting Started

### Prerequisites
- Docker
- Docker Compose

### Run the Project
```bash
docker compose up --build
```

### Apply Migrations
```bash
docker compose exec backend python manage.py migrate
```

### Create Superuser
```bash
docker compose exec backend python manage.py createsuperuser
```

---

##  URLs

- Frontend: http://localhost:8080
- Backend API: http://localhost:8000
- Django Admin: http://localhost:8000/admin

---
