🚀 Async Payment Gateway Backend

This project is a production-style asynchronous payment gateway backend built using Node.js, Express, PostgreSQL, Redis, and Docker.

It demonstrates real-world backend concepts such as asynchronous processing, payment lifecycle management, background workers, and containerized services.

✨ Key Features

REST API to create and manage payments

Asynchronous payment processing using Redis queues

PostgreSQL database for persistent storage

Background worker for payment execution

Dockerized services for easy setup

Modular and scalable backend architecture

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: PostgreSQL

Queue / Cache: Redis

Async Processing: Worker-based architecture

Containerization: Docker & Docker Compose

📁 Project Structure
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


✅ This structure now renders perfectly on GitHub.

🔁 Payment Workflow

Client sends a payment request through the API

Payment details are stored in PostgreSQL with status PENDING

Payment task is pushed to a Redis queue

Background worker processes the payment asynchronously

Payment status is updated to SUCCESS or FAILED

🌐 API Endpoints
➤ Create Payment

POST /api/v1/payments

Request Body
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

🐳 Running the Project with Docker
Build the containers
docker-compose build

Start the services
docker-compose up


This will start:

API Server

PostgreSQL Database

Redis Server

Background Worker

🎯 Assignment Objectives Achieved

✔ Asynchronous processing
✔ Payment state management
✔ RESTful API design
✔ Background worker architecture
✔ Docker-based deployment
✔ Industry-style backend structure

🚀 Future Enhancements

Webhook handling for external payment providers

Retry mechanism with exponential backoff

Authentication and authorization

Payment status polling APIs

Monitoring and logging

👤 Author

Anusha Pavani Venneti
