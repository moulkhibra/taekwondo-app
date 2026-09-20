# Security Policy

## Supported

- Latest `main` branch (in development; not production-ready).

## Reporting a vulnerability

Do **not** open a public issue. Open a **private** GitHub Security Advisory
(Repository → Security → Report a vulnerability) with reproduction steps.

## Security context

- Firebase Auth + Firestore (config via `VITE_FIREBASE_*` env vars).
- **Before going live:** deploy the Firestore Security Rules documented in `README.md`
  to your Firestore console, and replace the demo fallback config with real project values.

## Responsible disclosure

Acknowledged within a few days. Findings welcome — this is learning code.