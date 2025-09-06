# Learn-Learn Full Stack Application

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Security](#security)
- [Project Structure](#project-structure)

---

## Project Overview
A full stack application with authentication, user management, and role-based access, built using React (frontend) and NestJS + MongoDB (backend).

## Features
- User signup and sign-in with validation
- JWT authentication
- Protected user profile endpoint
- Role management
- Swagger API docs
- CORS enabled

## Tech Stack
- **Frontend:** React, TypeScript, Vite
- **Backend:** NestJS, TypeScript, Mongoose (MongoDB)

---

## Getting Started

### Backend Setup
1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```
2. **Configure environment variables:**
   - Copy `.env.development` and update `DATABASE_URL` and `JWT_SECRET` as needed.
3. **Run the backend server:**
   ```bash
   npm run start:dev
   ```
   The server will start on `http://localhost:3000` by default.

### Frontend Setup
1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```
2. **Run the frontend app:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` by default.

---

## Environment Variables
Backend expects the following variables (see `.env.development`):
```
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## API Documentation
- Swagger UI is available at `http://localhost:3000/swagger` after starting the backend.
- Explore and test all endpoints directly from the Swagger UI.

---

## Testing
- **Backend:**
  - Run all tests:
    ```bash
    npm run test
    ```
  - Run e2e tests:
    ```bash
    npm run test:e2e
    ```
- **Frontend:**
  - No tests implemented yet (add with your preferred React testing library).

---

## Security
- Passwords are hashed with bcryptjs.
- JWT tokens are used for authentication.
- CORS is enabled and restricted to the frontend origin.
- For production, consider adding helmet, rate limiting, and more robust logging.

---

## Project Structure

```
learn-learn/
  backend/
    src/
      auth/
      user/
      role/
      utils/
    .env.development
    package.json
    ...
  frontend/
    src/
      pages/
      components/
      api/
    package.json
    ...
```

---

## Contact
For questions or issues, please open an issue in this repository.
