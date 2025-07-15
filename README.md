# ⚡ E-commerce Microservices Project - E-Ticaret Mikroservis Projesi 

This project is a basic microservices architecture example developed with Node.js.  

Bu proje Node.js ile geliştirilmiş temel bir mikroservis mimarisi örneğidir.

---

## ⭐ Technologies

- Node.js for microservices    
- MongoDB (running inside Docker container)  
- PostgreSQL (running inside Docker container)  
- RabbitMQ (running inside Docker container for message queuing)  
- Service Registry (Eureka-like service discovery)  
- API Gateway for routing requests   
- Docker & Docker Compose for containerization

## ⭐ Teknolojiler

- Mikroservisler için Node.js  
- Docker konteyneri içinde çalışan MongoDB
- Docker konteyneri içinde çalışan PostgreSQL
- Mesaj kuyruğu için Docker konteyneri içinde RabbitMQ
- Servis keşfi için Service Registry (Eureka benzeri)
- İstekleri yönlendiren API Gateway
- Konteynerizasyon için Docker & Docker Compose

---

## ✔️ Architecture / Mimarisi

- ┌───────────────────────┐
- │ API Gateway │
- └─────────┬─────────────┘
- │
- │ (Service Discovery - Service Registry)
- │
- ┌────────┴─────────┐
- │ Service Registry │ ← Eureka-like service discovery
- └────────┬─────────┘
- │
- ┌─────────┴──────────┬──────────┬───────────┐
- │ Auth Service │ Product │ Order │
- │ (MongoDB) │ Service │ Service │
- │ │ (Postgres│ (MongoDB │
- │ │ + RabbitMQ) │
- └─────────┬──────────┴──────────┴───────────┘
- │
- ┌──────┴───────┐
- │ Notification │
- │ Service │
- │ (RabbitMQ) │
- └──────────────┘

---

## 🎯 Getting Started / Başlangıç

### 📌 Requirements / Gereksinimler

- Docker & Docker Compose  
- Node.js (v16+)  
- npm

### 🐳 Setup and Run / Kurulum ve Çalıştırma

1. Navigate to project folder / Proje klasörüne gelin:

```bash
cd E-commerce-Microservices-Project
```

2. Start Docker containers / Docker konteynerlarını başlatın:
```bash
docker-compose up -d
```

3. Install dependencies for each microservice / Her mikroservisin bağımlılıklarını kurun:
```bash
cd service-registry
npm install

cd ../gateway
npm install

cd ../auth-service
npm install

cd ../product-service
npm install

cd ../order-service
npm install

cd ../notification-service
npm install
```

4. Start microservices in order / Mikroservisleri sırayla başlatın:
```bash
cd service-registry
npm run dev

cd ../gateway
npm run dev

cd ../auth-service
npm run dev

cd ../product-service
npm run dev

cd ../order-service
npm run dev

cd ../notification-service
npm run dev
```

---
### 🔎 Services Description

- Service Registry: Central service discovery system where services register (Eureka-like).
- API Gateway: Routes requests to respective microservices.
- Auth Service: Manages users, uses MongoDB.
- Product Service: Manages products, uses PostgreSQL.
- Order Service: Manages orders, uses MongoDB and RabbitMQ.
- Notification Service: Listens to RabbitMQ queue and sends notifications.
