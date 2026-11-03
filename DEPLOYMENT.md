# DEVZIKKY AI deployment

## Project layout

- `public/ai.html` is the frontend served at `/`.
- `server.js` is the persistent Node.js server used by Render and local development.
- `api/chat.js` and `api/health.js` are Vercel Node.js Functions.
- `vercel.json` configures the Vercel routes and function durations.
- `render.yaml` defines the Render web service.

## Environment variables

Set these in the hosting provider dashboard. Never commit real API keys.

- `OPENROUTER_API_KEY_1` (optional if another provider is configured)
- `OPENROUTER_API_KEY_2` (optional)
- `GROQ_API_KEY` (optional)
- `GROQ_MODEL` (optional; defaults to `openai/gpt-oss-20b`)

At least one working provider must be configured for AI responses.

## Render

Create a Blueprint from this repository and use the root `render.yaml`. The service runs `npm start`; `/health` is the health-check path.

## Vercel

Import the repository as a project. Vercel serves files from `public/` and deploys the handlers in `api/` as Node.js Functions. Configure the same provider environment variables in Project Settings. The chat function is capped at 60 seconds, so its provider fallback budget is reduced to 55 seconds on Vercel; Render retains the original 90-second budget.

## Favicon

The supplied ZIP referenced `icon.png` from the HTML but did not contain that file. Add your `icon.png` to `public/icon.png` to enable the favicon and Apple touch icon. The missing icon does not prevent the app or API from running.
