# OrthoRaja

Premium orthopedic surgeon website and API for Dr. Raja Saha.

## Stack

- Frontend: React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, React Router, Axios, React Hook Form, TanStack Query, Lucide Icons, Recharts
- Backend: Spring Boot 3, Spring Security, Spring Data JPA, PostgreSQL, JWT, Flyway
- Database tables: `orthoraja_users`, `orthoraja_appointments`, `orthoraja_testimonials`, `orthoraja_blogs`, `orthoraja_gallery`, `orthoraja_contact_messages`

## Run Locally

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Backend:

```bash
cd backend
gradle bootJar
java -jar build/libs/orthoraja-api-0.0.1-SNAPSHOT.jar
```

Create `backend/.env` or platform environment variables from `backend/.env.example`. Keep database passwords and JWT secrets out of source control.

## API

- `POST /api/appointments`
- `GET /api/appointments`
- `PUT /api/appointments/{id}`
- `DELETE /api/appointments/{id}`
- `POST /api/contact`
- `GET /api/testimonials`
- `POST /api/testimonials`
- `GET /api/blogs`
- `GET /api/blogs/{slug}`
- `POST /api/blogs`
- `GET /api/gallery`
- `POST /api/gallery`
- `POST /api/auth/login`

Public appointment/contact submissions are open. Admin reads and content writes require `Authorization: Bearer <token>`.

## Deployment

- Vercel frontend: set `VITE_API_URL=https://your-backend-host/api`, build command `npm run build`, output `dist`.
- Render/Railway backend: set the variables from `backend/.env.example`, use Java 21, build `gradle bootJar`, start `java -jar build/libs/orthoraja-api-0.0.1-SNAPSHOT.jar`.
- Neon PostgreSQL: use the JDBC URL with `sslmode=require` and `prepareThreshold=0`; Flyway creates all `orthoraja_...` tables on first boot.
