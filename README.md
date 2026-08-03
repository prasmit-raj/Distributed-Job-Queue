# Distributed Job Queue

A production-inspired **Distributed Job Queue** built from scratch using **Node.js**, **TypeScript**, **Redis**, and **PostgreSQL**.

The goal of this project is **not to replace BullMQ or RabbitMQ**, but to understand how distributed job processing systems work internally by implementing the core building blocks ourselves.

---

# Why this project?

Modern applications rarely execute every task immediately.

Operations like:

* Sending emails
* Processing images
* Generating reports
* Video transcoding
* Data synchronization
* Payment reconciliation

are usually executed in the background by worker processes.

This project demonstrates how those systems are designed from scratch using Redis and multiple worker processes.

---

# Project Goals

* Learn distributed system fundamentals
* Build a reliable background job processor
* Understand Redis as a queue
* Design scalable worker architecture
* Handle failures gracefully
* Build a project similar to production systems

---

# Tech Stack

## Backend

* Node.js
* TypeScript
* Express
* PostgreSQL
* Prisma ORM
* Redis
* ioredis
* Zod
* Pino Logger

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* TanStack Query
* shadcn/ui
* Recharts

## DevOps

* Docker
* Docker Compose
* GitHub Actions (later)

---

# High-Level Architecture

```text
                Client
                   │
            REST API Server
                   │
        ┌──────────┴──────────┐
        │                     │
   PostgreSQL             Redis Queue
        │                     │
        │              Waiting Jobs
        │                     │
        └──────────┬──────────┘
                   │
        ┌──────────┼──────────┐
        │          │          │
     Worker 1   Worker 2   Worker 3
        │          │          │
        └────── Execute Jobs ──────┘
```

---

# MVP (Week 1)

The first version focuses on the essential workflow.

### Features

* Create jobs via REST API
* Store jobs in PostgreSQL
* Push jobs into Redis
* Worker fetches jobs
* Execute job
* Update job status

### Job Lifecycle

```text
Client
   │
   ▼
POST /jobs
   │
   ▼
Save Job
(PostgreSQL)
   │
   ▼
Push Job
(Redis Queue)
   │
   ▼
Worker Picks Job
   │
   ▼
Execute Job
   │
   ▼
Update Status
```

---

# Future Features

## Reliability

* Retry mechanism
* Exponential backoff
* Dead Letter Queue (DLQ)
* Worker heartbeat
* Graceful shutdown

## Scheduling

* Delayed jobs
* Cron jobs
* Priority queue

## Monitoring

* Dashboard
* Worker monitoring
* Queue metrics
* Job history

## Scaling

* Multiple workers
* Horizontal scaling
* Distributed processing

---

# Folder Structure

```text
distributed-job-queue/
│
├── src/
│   ├── config/         # Environment variables & app configuration
│   ├── controllers/    # Express request handlers
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   ├── queue/          # Redis queue operations
│   ├── workers/        # Background workers
│   ├── db/             # Database connection
│   ├── utils/          # Shared helper functions
│   ├── types/          # Shared TypeScript types
│   ├── app.ts          # Express app configuration
│   └── server.ts       # Application entry point
│
├── prisma/
│   └── schema.prisma   # Database schema
│
├── docker/
│   └── docker-compose.yml
│
├── README.md
├── package.json
└── tsconfig.json
```

---

# Folder Responsibilities

### `controllers`

Receive HTTP requests, validate input, and call the appropriate service.

### `services`

Contain the business logic. They decide what happens when a job is created, updated, or completed.

### `queue`

Handles all communication with Redis such as enqueueing and dequeueing jobs.

### `workers`

Background processes that continuously poll Redis, execute jobs, and update their status.

### `db`

Database configuration and Prisma client.

### `routes`

Maps API endpoints to controllers.

### `config`

Loads and validates environment variables.

### `utils`

Shared helper functions used across the project.

### `types`

Shared TypeScript interfaces and type definitions.

---

# Planned API

## Jobs

```http
POST   /jobs
GET    /jobs
GET    /jobs/:id
DELETE /jobs/:id
```

---

# Example Job

```json
{
  "type": "send-email",
  "payload": {
    "to": "user@example.com",
    "subject": "Welcome"
  }
}
```

---

# Development Roadmap

## Week 1

* Project setup
* Express API
* PostgreSQL
* Redis connection
* Job creation
* Worker process
* Job status tracking

## Week 2

* Retry mechanism
* Delayed jobs
* Priority queues
* Dead Letter Queue
* Dashboard

## Week 3

* Cron scheduling
* Metrics
* Docker improvements
* CI/CD
* Documentation
* Load testing

---

# Running the Project

Install dependencies:

```bash
npm install
```

Start required services (Redis and PostgreSQL):

```bash
docker compose up -d
```

Start the development server:

```bash
npm run dev
```

---

# Learning Outcomes

By completing this project, you should understand:

* Why background job processing is necessary
* How Redis can be used as a queue
* How workers communicate through shared infrastructure
* Job lifecycle management
* Retry strategies
* Failure handling
* Distributed worker architecture
* Designing scalable backend systems

---

# Inspiration

This project is inspired by production job queue systems such as BullMQ, Sidekiq, Celery, RabbitMQ, and AWS SQS, but the implementation is intentionally built from first principles for learning and demonstration purposes.
