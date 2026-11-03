# DEVZIKKY AI deployment

## Project layout

- `public/ai.html` is the single frontend, served at `/`.
- `public/` contains public static assets only.
- `server.js` contains shared AI logic and the Render/local HTTP server.
- `api/chat.js` and `api/health.js` export Vercel Node.js Function handlers.
- `vercel.json` configures Vercel function durations and the `/health` alias.
- `render.yaml` defines the Render web service.

## Environment variables

Set these in the hosting provider dashboard. Never commit real API keys.

- `OPENROUTER_API_KEY_1` (optional if another provider is configured)
- `OPENROUTER_API_KEY_2` (optional)
- `GROQ_API_KEY` (optional)
- `GROQ_MODEL` (optional; defaults to `openai/gpt-oss-20b`)

At least one working provider must be configured for AI responses.

## Render

Create a Blueprint from this repository and use the root `render.yaml`.
Render runs `npm start`, which starts the persistent HTTP server in `server.js`.
The server serves `public/ai.html` at `/`, exposes `POST /api/chat`, and exposes
`GET /health` for Render's health check.

## Vercel

Import the repository with the repository root (`.`) as the Root Directory.
Use the `Other` framework preset and do not set a custom Output Directory.

Vercel serves files from `public/` and deploys `api/chat.js` and
`api/health.js` as Node.js Functions. These functions import shared handlers
from `server.js`. Importing `server.js` does not start an HTTP listener;
the listener starts only when `server.js` is executed directly by Render/local
Node.js.

The Vercel chat function has a 60-second maximum duration. The shared AI
fallback budget automatically uses 55 seconds on Vercel to leave time for
response delivery. Render retains the 90-second budget.

Configure the same provider environment variables in Vercel Project Settings.
Redeploy after changing environment variables or project configuration.

## API contracts

### POST /api/chat

Request:

```json
{
  "message": "Hello",
  "history": []
}
```

Successful response:

```json
{
  "reply": "Hello! How can I help?",
  "truncated": false
}
```

### GET /health

Response:

```json
{
  "status": "ok",
  "service": "DEVZIKKY AI"
}
```

## Static assets

Place the favicon and any image assets referenced by the frontend inside
`public/`. The uploaded source ZIP did not include the referenced `icon.png`;
add it as `public/icon.png` if you have the original image.
