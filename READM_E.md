# VISTARA

> **Modern Hotel Management System (HMS)** built with React, Node.js, Express, and Supabase.

VISTARA is a full-stack Hotel Management System designed for small and medium-sized hotels. It provides online room reservations, customer self-service, reception operations, room management, and an administration dashboard using a modular architecture that can be extended without major refactoring.

---

# Features

## Public Website

* Responsive hotel website
* Room browsing
* Hotel packages
* Image gallery
* Contact page
* Multi-language support (English / Arabic)

---

## Online Reservation

* Check room availability
* Select accommodation package
* Reservation form
* Automatic booking reference generation
* Duplicate booking protection
* Reservation confirmation page
* Confirmation email

---

## Customer Self-Service

Guests can manage reservations without creating an account.

Features:

* Search reservation using Booking Reference + Email
* View reservation details
* Cancel reservation
* Automatic cancellation email

---

## Reception Dashboard

Hotel staff can:

* View reservations
* Check guests in
* Check guests out
* Cancel reservations
* View customer profiles

---

## Room Management

* View room status
* Available rooms
* Reserved rooms
* Occupancy management

---

## Administration

* Secure Admin Login
* JWT Authentication
* Modular dashboard architecture
* Ready for future reporting and analytics

---

## Email Notifications

Automatic emails:

* Booking Confirmation
* Reservation Cancellation

Additional templates can easily be added later.

---

# Technology Stack

## Frontend

* React
* React Router
* Bootstrap 5
* Fetch API

## Backend

* Node.js
* Express.js

## Database

* Supabase PostgreSQL

## Authentication

* JSON Web Token (JWT)

## Email

* Nodemailer

---

# Project Architecture

The backend follows a layered architecture.

```
Client (React)

        │

REST API

        │

Controllers

        │

Services

        │

Repositories

        │

Supabase PostgreSQL
```

Responsibilities:

* **Controllers** handle HTTP requests and responses.
* **Services** contain business logic.
* **Repositories** communicate with the database.
* **Templates** generate email content.
* **Routes** expose REST endpoints.

---

# Folder Structure

```
frontend/

│

├── components/

├── pages/

├── hooks/

├── assets/

└── utils/


backend/

│

├── config/

├── controllers/

├── middleware/

├── repositories/

├── routes/

├── services/

├── templates/

├── utils/

└── app.js
```

---

# Installation

## Clone the repository

```bash
git clone <repository-url>

cd VISTARA
```

---

## Backend

```bash
cd backend

npm install
```

Create a `.env` file.

Example:

```env
PORT=5000

SUPABASE_URL=your_supabase_url

SUPABASE_KEY=your_supabase_service_key

JWT_SECRET=your_secret

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_google_app_password

CLIENT_URL=http://localhost:3000
```

Start the backend.

```bash
npm start
```

---

## Frontend

```bash
cd frontend

npm install

npm start
```

The application will run on

```
http://localhost:3000
```

Backend

```
http://localhost:5000
```

---

# Database

Current core tables:

* rooms
* room_types
* bookings
* packages
* staff
* payments

Additional tables can be added without changing the existing architecture.

---

# API Overview

Reservation

```
POST   /api/bookings

POST   /api/bookings/check-availability
```

Reception

```
GET    /api/reception/reservations

PUT    /api/reception/:id/check-in

PUT    /api/reception/:id/check-out

PUT    /api/reception/:id/cancel
```

Customer

```
POST   /api/customer/reservation

PUT    /api/customer/:bookingReference/cancel
```

Rooms

```
GET    /api/rooms

PUT    /api/rooms/:id/status
```

Admin

```
POST   /api/admin/login
```

---

# Coding Standards

All new backend features must follow this structure.

```
Route

↓

Controller

↓

Service

↓

Repository

↓

Database
```

Do not place SQL inside controllers.

Do not place business logic inside repositories.

Keep responsibilities separated.

---

# Current Project Status

| Module                | Status         |
| --------------------- | -------------- |
| Website               | ✅ Complete     |
| Reservation           | ✅ Complete     |
| Customer Self-Service | ✅ Complete     |
| Reception Dashboard   | ✅ Complete     |
| Room Management       | ✅ Complete     |
| Email Notifications   | ✅ Complete     |
| Admin Authentication  | ✅ Complete     |
| Payment Foundation    | 🚧 In Progress |
| Reports               | 📋 Planned     |
| Deployment            | 📋 Planned     |

---

# Roadmap

Upcoming modules:

* Payment Management
* Financial Reports
* PDF Receipts
* Housekeeping
* Maintenance Management
* Staff Roles & Permissions
* Inventory Management
* Multi-Hotel Support

The architecture has been designed so that future modules can be added without restructuring the existing codebase.

---

# Contributing

Contributions should follow the existing architecture and coding standards.

Every new feature should include:

* Route
* Controller
* Service
* Repository

Maintain clean separation of concerns and avoid duplicated business logic.

---

# License

This project is intended for educational purposes and can serve as the foundation for a production-ready Hotel Management System.
