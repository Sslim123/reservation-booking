# VISTARA - Project Guide & Architecture

## Version

Current Version: MVP 1.0

Last Updated: June 2026

---

# Project Overview

VISTARA is a modern Hotel Management System (HMS) designed for small and medium-sized hotels.

The project follows a modular architecture to allow future expansion without changing existing modules.

Primary goals:

* Online Reservation
* Reception Management
* Room Management
* Customer Self-Service
* Email Notifications
* Administration Dashboard

Future modules can be added without redesigning the existing architecture.

---

# Technology Stack

## Frontend

* React
* React Router
* Bootstrap 5
* Fetch API

## Backend

* Node.js
* Express

Architecture:

Controller

↓

Service

↓

Repository

↓

Supabase

## Database

Supabase PostgreSQL

## Authentication

JWT

(Admin / Staff)

Customers do not require login.

---

# Project Architecture

```
Frontend

↓

REST API

↓

Controllers

↓

Services

↓

Repositories

↓

Supabase
```

Business logic never belongs inside controllers.

Database queries never belong inside services.

Repositories only communicate with Supabase.

---

# Current Modules

## 1. Public Website

Completed

* Home
* About
* Rooms
* Gallery
* Booking
* Contact

---

## 2. Reservation Module

Completed

Features

* Room Availability
* Package Selection
* Booking Form
* Booking Reference
* Duplicate Booking Protection
* Booking Confirmation
* Booking Email

Status

Production Ready

---

## 3. Customer Self-Service

Completed

Features

* Search Reservation
* View Reservation
* Customer Cancellation
* Cancellation Email

Future

* Modify Reservation

---

## 4. Reception Module

Completed

Features

* Reservation Dashboard
* Check-In
* Check-Out
* Hotel Cancellation
* Customer Profiles

Future

* Walk-In Reservations
* Reservation Modification

---

## 5. Room Management

Completed

Features

* Room Dashboard
* Room Status
* Availability

Future

* Maintenance Schedule
* Cleaning Schedule

---

## 6. Administration

Completed

Features

* Admin Login
* JWT Authentication
* Dashboard Structure

Future

* Staff Management
* Roles & Permissions

---

## 7. Email System

Completed

Templates

* Booking Confirmation
* Booking Cancellation

Future

* Check-In Welcome
* Check-Out Thank You

---

# Database Design

Main Tables

* rooms
* bookings
* packages
* staff
* payments
* room_types

Future Tables

* invoices
* housekeeping
* maintenance
* audit_logs

---

# Coding Standards

Controllers

* Receive Request
* Return Response

No business logic.

Services

* Business Rules
* Validation
* Workflow

Repositories

* Database Only

Never mix responsibilities.

---

# Completed Customer Journey

Search Rooms

↓

Availability

↓

Reservation

↓

Confirmation

↓

Confirmation Email

↓

Manage Reservation

↓

Cancellation

↓

Cancellation Email

---

# Completed Reception Journey

Reservation Dashboard

↓

Receive Reservation

↓

Payment (Foundation)

↓

Check-In

↓

Check-Out

↓

Room Available

---

# Future Roadmap

Phase 2

* Payment Module
* Receipts
* Reports

Phase 3

* Housekeeping

Phase 4

* Maintenance

Phase 5

* Inventory

Phase 6

* Accounting

Phase 7

* Analytics

Phase 8

* Multi-Hotel Support

---

# Folder Structure

frontend/

components/

pages/

hooks/

backend/

controllers/

services/

repositories/

routes/

middleware/

templates/

config/

database/

---

# Design Principles

Every feature must follow:

Repository

↓

Service

↓

Controller

↓

Route

No shortcuts.

No duplicated logic.

No database queries inside controllers.

---

# Project Status

Reservation System

100%

Reception

100%

Customer Self-Service

100%

Room Management

100%

Admin Dashboard
80%
Reports
100%
Foundation Complete

Payment

Foundation Started

Planned

Deployment

Pending

---

# Long-Term Vision
VISTARA is designed as a scalable Hotel Property Management System.

Future modules should extend the architecture instead of replacing it.

Every new feature should integrate into the existing Repository → Service → Controller architecture.

The project aims to remain modular, maintainable, and suitable for deployment in production environments.
