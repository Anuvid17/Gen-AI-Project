<<<<<<< HEAD
# 🚀 ProductIQ  
### AI-Powered Product Feedback & Feature Management Platform

ProductIQ is a full-stack web application that helps product teams **collect feedback, transform it into structured features, prioritize intelligently, and track features across their lifecycle** — from idea to deployment.

The project is built with **React + TypeScript** on the frontend, **Django REST Framework** on the backend, and **PostgreSQL**, all orchestrated using **Docker** for a smooth development workflow.

---

## ✨ Features

### 🔐 Authentication
- User signup and login
- JWT-based authentication (Access & Refresh tokens)
- Secure protected APIs
- Django Admin access for data inspection and management

### 📊 Feature Management
- Create and manage product features
- Feature lifecycle tracking:
  - Backlog
  - In Development
  - Testing
  - Deployed
- Priority levels:
  - Critical
  - High
  - Medium
  - Low
- Sort and filter features by:
  - Priority
  - Status
  - Created date

### 🧠 AI-Driven Vision (Upcoming)
- Analyze user feedback using AI
- Auto-generate feature suggestions
- Intelligent prioritization and roadmap creation

---

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Axios

### Backend
- Django
- Django REST Framework
- SimpleJWT (JWT Authentication)

### Database
- PostgreSQL

### DevOps
- Docker
- Docker Compose
- Nginx

---

## 🚀 Getting Started

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

## 🌐 URLs

- Frontend: http://localhost:8080
- Backend API: http://localhost:8000
- Django Admin: http://localhost:8000/admin

---

## 📜 License

For educational and learning purposes.
=======

>>>>>>> 53b843c0f51a6f82ce21fc90f6e8cdaef0dba250
