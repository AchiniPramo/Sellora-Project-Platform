# Sellora Project Platform

A modern **microservices-based e-commerce platform** built with **Spring Cloud** ecosystem. This project demonstrates enterprise-level architecture patterns including service discovery, centralized configuration management, API gateway routing, and reactive programming.

## Student Information

| Field          | Value |
|----------------|---|
| Student Name   | Achini Pramodhya |
| Student Number | 2301692020 |
| Slack Handle   | Achini Pramodhya |
| Module         | ITS 2130 Enterprise Cloud Application |
| Program        | GDSE @ IJSE |
| GCP Project ID | eca-bucket |

---

## 📋 Table of Contents

* [Overview](#-overview)
* [Architecture](#-architecture)
* [Tech Stack](#-tech-stack)
* [Project Structure](#-project-structure)
* [Prerequisites](#-prerequisites)
* [Quick Start](#-quick-start)
* [Building the Project](#-building-the-project)
* [Running the Services](#-running-the-services)
* [Services Documentation](#-services-documentation)
* [Configuration](#-configuration)
* [Development](#-development)
* [Deployment](#-deployment)
* [Troubleshooting](#-troubleshooting)
* [Contributing](#-contributing)

---

## 🎯 Overview

**Sellora** is a distributed e-commerce platform that showcases best practices for building scalable microservices architectures. The platform consists of three core infrastructure services that work together to provide a robust, resilient, and maintainable system.

### Key Features

* **Service Discovery**: Automatic registration and discovery of services using Eureka
* **Centralized Configuration**: Environment-specific configurations managed from a single location
* **API Gateway**: Single entry point with intelligent routing and load balancing
* **Reactive Processing**: Non-blocking, asynchronous communication patterns
* **Scalability**: Horizontal scaling with automatic service registration
* **Resilience**: Built-in mechanisms for handling failures and maintaining system stability

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Client Applications                   │
└──────────────────────────┬──────────────────────────────┘
                           │
                    ┌──────▼─────────┐
                    │  API Gateway   │ (Single Entry Point)
                    │ Spring Gateway │
                    │   + WebFlux    │
                    └──────┬─────────┘
                           │
            ┌──────────────┼──────────────┐
            │              │              │
       ┌────▼───┐   ┌──────▼──────┐   ┌──▼───────┐
       │ Service │   │   Config    │   │ Business │
       │Registry │   │   Server    │   │ Services │
       │ Eureka  │   │Spring Config│   │  (Future)│
       └────┬───┘   └──────┬──────┘   └──────────┘
            │              │
            └──────────────┴──────────────────┘
                    Internal Communication
```

---

## 🛠️ Tech Stack

| Component             | Technology           | Version       |
| --------------------- | -------------------- | ------------- |
| **Language**          | Java                 | 25            |
| **Build Tool**        | Maven                | 3.6+          |
| **Framework**         | Spring Boot          | Latest Stable |
| **Cloud Platform**    | Spring Cloud         | Latest Stable |
| **Service Discovery** | Netflix Eureka       | -             |
| **Configuration**     | Spring Cloud Config  | -             |
| **API Gateway**       | Spring Cloud Gateway | -             |
| **Reactive**          | Project WebFlux      | -             |
| **Process Manager**   | PM2                  | -             |

---

## 📁 Project Structure

```
Sellora-Project-Platform/
├── api-gateway/
├── config-server/
├── service-registry/
├── pom.xml
├── ecosystem.config.js
├── .github/
└── README.md
```

---

## 📋 Prerequisites

* **Java 25**
* **Maven 3.6+**
* **Node.js & npm** (optional)
* **Git**

---

## 🚀 Quick Start

```bash
git clone https://github.com/yourusername/Sellora-Project-Platform.git
cd Sellora-Project-Platform
mvn clean install -DskipTests
```

Run services:

```bash
cd config-server && mvn spring-boot:run
cd service-registry && mvn spring-boot:run
cd api-gateway && mvn spring-boot:run
```

---

## 🔨 Building the Project

```bash
mvn clean install
```

---

## ▶️ Running the Services

```bash
npm install -g pm2
pm2 start ecosystem.config.js
pm2 logs
```

---

## 📚 Services Documentation

* **Config Server** → Port 9000
* **Service Registry (Eureka)** → Port 9001
* **API Gateway** → Port 7000

---

## ⚙️ Configuration

```bash
mvn spring-boot:run -Dspring-boot.run.arguments="--spring.profiles.active=dev"
```

---

## 👨‍💻 Development

* Use Java 25
* Follow clean code practices
* Use Maven for builds

---

## 🚢 Deployment

Supports:

* GCP
* Docker (future)
* Kubernetes (future)

---

## 🔧 Troubleshooting

Check ports:

```bash
netstat -ano | findstr :8080
```

---

## 📝 Contributing

1. Fork
2. Create branch
3. Commit
4. Push
5. PR

---

## 📄 License

MIT License

---

## 📞 Support

Use GitHub Issues for support.

---

## ✨ Acknowledgments

Built using Spring Cloud ecosystem.

---

**Last Updated:** March 31, 2026
