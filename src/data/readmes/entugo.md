# Entugo — QR-Based Customer Engagement & Loyalty Platform for Restaurants (https://entugo.com)

**Entugo** is a production-grade SaaS platform that helps restaurants **capture verified customer reviews, run loyalty programs, and automate customer engagement** using QR codes — without relying on expensive POS integrations or fragmented tools.

This is not a demo project.
It is a **multi-tenant, microservices-based system** designed to scale across restaurants, users, and campaigns.

> **Note:** This repository represents a **technical case study and system design overview** of Entugo. The complete production codebase remains private to protect company IP and operational security.
---

## Why Entugo Exists (The Real Problem)

Restaurants face three hard problems:

1. **Low-quality or fake reviews**

   * Incentivized reviews without verification
   * No control over feedback quality

2. **Zero customer retention infrastructure**

   * No loyalty systems
   * No data ownership
   * Dependence on third-party platforms

3. **Operational fragmentation**

   * Reviews, coupons, notifications, referrals — all disconnected
   * No automation, no analytics, no leverage

Most solutions solve **one** of these problems poorly.
Entugo solves **all of them together**, with verifiable flows.

---

## What Entugo Does (High-Level)

* Generates **QR codes** for restaurants
* Guides customers through **controlled feedback flows**
* Verifies actions (review submission, visits, referrals)
* Rewards customers using **points & coupons**
* Automates **notifications & follow-ups**
* Centralizes everything into a **single platform**

All while being:

* Multi-tenant
* Secure
* Scalable
* Extensible

---

## System Architecture (Built Like a Real Company)

Entugo follows a **microservices architecture with a single shared database** (intentionally chosen for transactional consistency and operational simplicity at early scale).

### High-Level Architecture

<img src="https://res.cloudinary.com/dduj1ln0v/image/upload/v1765696468/Screenshot_2025-12-14_124404_tbtmgg.png"/>

### Why This Architecture?

* **Clear service boundaries** → easier scaling & ownership
* **Centralized DB** → avoids distributed transaction hell early
* **Gateway pattern** → single entry point, rate limiting, auth
* **Service isolation** → failures don’t cascade blindly

This is not “microservices for the sake of it”.
This is **controlled complexity**.

---

## Core Services Breakdown

### Architectural overview of every service:
<img src="https://res.cloudinary.com/dduj1ln0v/image/upload/v1765696897/Screenshot_2025-12-14_125118_tsrggh.png"/>

### 1. API Gateway

* Request routing
* Authentication enforcement
* Rate limiting
* Service orchestration

This prevents frontend clients from directly touching internal services.

---

### 2. Auth Service

* JWT-based authentication
* Google OAuth
* Refresh token rotation
* Role-based access (Admin / Restaurant / Staff / Customer)

Security here is not optional — it’s foundational.

---

### 3. Points & Loyalty Service

* Point issuance
* Redemption rules
* Coupon eligibility
* Abuse prevention logic

Designed to prevent:

* Coupon farming
* Multi-account abuse
* Replay attacks

---

### 4. Notification Service

* Email (SendGrid)
* Queue job managmenet
* Rate limit for emails and scheduling batches
<img src="https://res.cloudinary.com/dduj1ln0v/image/upload/v1765697116/Screenshot_2025-12-14_125458_uutlcu.png" />

Built as a **queue-friendly service**, not synchronous spam logic.

---

### 5. Payment Service

* Stripe integration
* Subscription handling
* Webhooks
* Failure recovery

Payments are isolated because they **must be**.

---

### 6. Cron & Background Jobs

* Coupon expiry
* Reminder emails
* Cleanup tasks
* Analytics rollups

Handled outside request-response cycles.

---

## Multi-Portal System (Not Just One UI)

Entugo is not a single dashboard pretending to be a product.

### Portals

1. **Restaurant Portal**

   * QR management
   * Campaigns
   * Analytics
   * Staff access

     **Screenshots**
     <img src="https://res.cloudinary.com/dduj1ln0v/image/upload/v1765697255/Screenshot_2025-12-14_125619_hri9vx.png"/>
     <img src="https://res.cloudinary.com/dduj1ln0v/image/upload/v1765697398/Screenshot_2025-12-14_125933_psywwz.png"/>
     <img src="https://res.cloudinary.com/dduj1ln0v/image/upload/v1765697397/Screenshot_2025-12-14_125911_kkp4xr.png"/>

2. **Customer Portal**

   * Point balance
   * Coupon redemption
   * Review status

     **Screenshots**
     <img src="https://res.cloudinary.com/dduj1ln0v/image/upload/v1765689452/Screenshot_2025-12-14_104706_kbiiqg.png"/>
     <div>
     <img src="https://res.cloudinary.com/dduj1ln0v/image/upload/v1765697598/1b229230-bd98-48ad-8158-3b93f89e8750.png"/>
     <img src="https://res.cloudinary.com/dduj1ln0v/image/upload/v1765697686/35e21ade-8a25-4a29-a52e-ecbeeb644b2c.png"/>
     </div>

3. **Entugo Forms**

   * QR-triggered
   * Conditional flows
   * Google review gating

     **Screenshots**
     
     <img src="https://res.cloudinary.com/dduj1ln0v/image/upload/v1765689536/Screenshot_2025-12-14_104841_xasa3c.png"/>

4. **Admin Portal**

   * Tenant management
   * Monitoring
   * Abuse detection
   * System-level controls

All portals hit the **same backend**, with **strict role enforcement**.

---

## Tech Stack (Chosen, Not Random)

### Backend

* **Node.js + TypeScript**
* **Prisma ORM**
* **PostgreSQL**
* **JWT + OAuth**
* **TurboRepo (Monorepo)**

### Frontend

* **React**
* **Tailwind CSS**
* **ShadCN UI**
* **lucide-react**

### Infrastructure

* **AWS (EC2, RDS/Aurora, S3)**
* **IAM, VPC, KMS**
* **Docker**
* **CI/CD**
* **Cypress (Testing)**

Every tool here exists for a reason — not trend-chasing.

---

## Engineering Challenges Solved

This project forced solutions to **real problems**, including:

* Multi-tenant data isolation
* Auth propagation across services
* Background job reliability
* Payment webhook safety
* Review verification logic
* Abuse & fraud prevention
* Monorepo dependency management
* Migration safety with Prisma
* Environment parity (local ↔ prod)

These are the problems **senior engineers** deal with — not tutorials.

---

## Why This Project Matters (If You’re Hiring)

Entugo demonstrates that I can:

* Design systems, not just APIs
* Think in **business constraints**, not just code
* Handle **production trade-offs**
* Build for scale without overengineering
* Own a product end-to-end

This is not a clone.
This is not coursework.
This is **founder-level engineering**.

---

## Roadmap (Intentional, Not Wishful)

* POS integrations
* Mobile apps
* SMS & WhatsApp notifications
* Advanced analytics
* Referral engines
* Rule-based campaign builders

The architecture already supports this.

---

## Final Note (Read This Carefully)

Most developers can code.
Very few can **design systems that survive contact with reality**.

Entugo is proof that I can.