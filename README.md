# Distributed Job Queue

A production-inspired distributed job queue built from scratch using **Node.js**, **TypeScript**, **Redis**, and **PostgreSQL**.

The system allows applications to submit background jobs that are processed asynchronously by multiple workers, supporting retries, delayed execution, priority scheduling, dead-letter queues, and real-time monitoring.

> **Goal:** Learn distributed systems concepts by implementing a job queue without relying on BullMQ or other queue libraries.

---

## Features

### Core
- Job submission API
- Multiple worker processes
- Job persistence
- Job status tracking
- Horizontal worker scaling

### Reliability
- Automatic retries
- Exponential backoff
- Dead Letter Queue (DLQ)
- Worker heartbeat
- Graceful shutdown

### Scheduling
- Delayed jobs
- Scheduled (Cron) jobs
- Priority queues

### Monitoring
- Dashboard
- Queue metrics
- Worker status
- Job history

---

## Tech Stack

### Backend
- Node.js
- TypeScript
- Express
- PostgreSQL
- Prisma
- Redis
- ioredis
- Zod
- Pino

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- TanStack Query
- shadcn/ui
- Recharts

### DevOps
- Docker
- Docker Compose
- GitHub Actions

---

## Project Structure

```text
distributed-job-queue/
├── apps/
│   ├── api/
│   └── dashboard/
├── packages/
│   └── shared/
├── prisma/
├── docker/
└── docs/
```

---

## Architecture

```
             Client
                │
          REST API Server
                │
         ┌──────────────┐
         │ PostgreSQL   │
         │ Redis Queue  │
         └──────────────┘
                │
      ┌─────────┼─────────┐
      │         │         │
   Worker 1  Worker 2  Worker 3
      │         │         │
      └──── Execute Jobs ─────┘
```

---

## Roadmap

- [ ] Job Submission API
- [ ] Redis Queue
- [ ] Worker Pool
- [ ] Job Persistence
- [ ] Retry Mechanism
- [ ] Delayed Jobs
- [ ] Priority Queue
- [ ] Dead Letter Queue
- [ ] Worker Heartbeat
- [ ] Dashboard
- [ ] Cron Scheduler
- [ ] Metrics
- [ ] Docker
- [ ] GitHub Actions

---

## Running Locally

```bash
git clone <repo>

cd distributed-job-queue

docker compose up

npm install

npm run dev
```

---

## Motivation

Most Node.js applications rely on BullMQ or RabbitMQ for background processing. This project implements the core building blocks from scratch to understand how distributed job processing systems work internally.

---

## License

MIT