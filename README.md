# 🚀 Async Payment Gateway Backend

This project is a production-style **asynchronous payment gateway backend** built using **Node.js, Express, PostgreSQL, Redis, and Docker**.

It demonstrates real-world backend concepts such as **asynchronous processing, background workers, payment lifecycle management, and containerized services**.

---

## ✨ Key Features

- REST API for creating payments  
- Asynchronous payment processing using Redis  
- PostgreSQL for persistent payment storage  
- Background worker for payment execution  
- Dockerized setup for easy deployment  
- Clean and modular backend architecture  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL  
- **Queue:** Redis  
- **Async Processing:** Worker-based architecture  
- **Containerization:** Docker & Docker Compose  

---

## 📁 Project Structure

payment-gateway-async/
│
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── db.js
│   │   ├── payments/
│   │   │   └── payment.routes.js
│   │   ├── workers/
│   │   │   └── payment.worker.js
│   │   └── config/
│   │       ├── redis.js
│   │       └── init.sql
│   │
│   ├── Dockerfile
│   ├── Dockerfile.worker
│   ├── package.json
│   └── package-lock.json
│
├── db/
│   └── init.sql
│
├── postgres/
│   └── init.sql
│
├── docker-compose.yml
├── .gitignore
└── README.md

---

## 🔁 Payment Workflow

1. Client sends a payment request to the API  
2. Payment is stored in PostgreSQL with status **PENDING**  
3. Payment task is pushed to Redis queue  
4. Background worker processes the payment asynchronously  
5. Payment status is updated to **SUCCESS** or **FAILED**

---

## 🌐 API Endpoints

### Create Payment

**POST** `/api/v1/payments`

### Request Body

```json
{
  "order_id": "order_123",
  "amount": 50000,
  "currency": "INR",
  "method": "upi"
}
Response
{
  "message": "Payment initiated successfully",
  "status": "PENDING"
}
🐳 Run with Docker
Build containers
docker-compose build

Start services
docker-compose up

Services Started

API Server

PostgreSQL Database

Redis Server

Background Worker

🎯 Assignment Objectives Achieved

Asynchronous processing

Payment state management

RESTful API design

Background worker architecture

Docker-based deployment

Industry-style project structure

🚀 Future Enhancements

Webhook handling

Retry mechanism with exponential backoff

Authentication and authorization

Payment status APIs

Logging and monitoring

👤 Author

Anusha Pavani Venneti
