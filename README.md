ProductIQ 🚀

AI-Powered Product Feedback & Feature Management Platform

ProductIQ is a full-stack web application designed to help product teams collect feedback, generate AI-driven feature suggestions, prioritize them, and track their lifecycle from backlog to deployment.

The platform combines a modern React frontend, a Django REST backend, JWT-based authentication, and PostgreSQL for persistence — all containerized using Docker for a smooth development experience.

Key Features
Authentication

User signup & login with JWT (access + refresh tokens)

Secure API access using Authorization: Bearer <token>

Django Admin support for managing users and data

Feature Management

Create and manage product features

Feature lifecycle tracking:

Backlog

In Development

Testing

Deployed

Priority levels:

Critical

High

Medium

Low

Sort & filter features by priority, status, or creation date

AI-Driven Vision (Planned)

Analyze user feedback using AI

Automatically cluster feedback into features

Suggest feature priorities and roadmap timelines

Tech Stack
Frontend

React + TypeScript

Vite

Tailwind CSS

Axios for API communication

Backend

Django

Django REST Framework

SimpleJWT for authentication

Database

PostgreSQL

DevOps

Docker & Docker Compose

Nginx (for frontend build serving)

Project Structure
Gen-AI-Project/
│
├── backend/
│   ├── core/
│   ├── apps/
│   │   ├── users/
│   │   ├── feedback/
│   │   └── features/
│   ├── manage.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── layouts/
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md

Getting Started (Development Mode)
Prerequisites

Docker

Docker Compose

1️) Clone the Repository
git clone <your-repo-url>
cd Gen-AI-Project

2️) Environment Variables

Create backend/.env:

DEBUG=True
SECRET_KEY=django-insecure-change-me

POSTGRES_DB=ai_product_db
POSTGRES_USER=postgres
POSTGRES_PASSWORD=1234
POSTGRES_HOST=db
POSTGRES_PORT=5432

3️) Start the Project
docker compose up --build

4️) Apply Migrations (Required)
docker compose exec backend python manage.py migrate

5️) Create Superuser (Admin Access)
docker compose exec backend python manage.py createsuperuser

Access the Application
Service	URL
Frontend	http://localhost:8080

Backend API	http://localhost:8000

Django Admin	http://localhost:8000/admin
