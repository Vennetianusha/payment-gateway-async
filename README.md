# 🚀 Async Payment Gateway Backend

A simple **asynchronous payment gateway backend** built with **Node.js, PostgreSQL, Redis, and Docker**.  
Designed to demonstrate real-world backend concepts like background workers and async processing.

---

## ✨ Features

- Create payments via REST API  
- Asynchronous payment processing  
- PostgreSQL for data storage  
- Redis-based background worker  
- Fully Dockerized setup  

---

## 🐳 Run with Docker

```bash
docker-compose build
docker-compose up
Services started:

API Server

PostgreSQL

Redis

Background Worker

🔁 Payment Flow

Client creates a payment

Status stored as PENDING

Worker processes payment asynchronously

Status updated to SUCCESS or FAILED

👤 Author

Anusha Pavani Venneti
