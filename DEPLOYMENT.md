# DEVZIKKY AI — Render and Vercel

This project keeps the frontend and server source files in the repository root.
The only added directory for Vercel API calls is `api/`.

```text
.
├── api/
│   ├── chat.js
│   └── health.js
├── ai.html
├── package.json
├── server.js
├── vercel.json
└── render.yaml
```

## Vercel

- Set the project's Root Directory to the repository root (`.`).
- Select the `Other` framework preset (also set by `vercel.json`).
- `vercel.json` explicitly sets the Output Directory to `.` so root-level frontend files are published; do not add a `public/` folder or a legacy `builds` configuration.
- Add `OPENROUTER_API_KEY_1`, `OPENROUTER_API_KEY_2`, and `GROQ_API_KEY` in Project Settings → Environment Variables. `GROQ_MODEL` is optional.
- Redeploy after setting environment variables.

Routes:
- `GET /` routes to the root-level `ai.html` file.
- `POST /api/chat` invokes `api/chat.js`.
- `GET /api/health` invokes `api/health.js`.
- `GET /health` invokes the same health function.
- Direct requests for backend/config source files and `api/*.js` source paths return 404; only the extensionless API routes are public.

The function budget is 54 seconds inside the configured 60-second chat function limit, leaving time to send the response. Render retains the original 90-second AI chain budget.

## Render

Create a Blueprint from the repository using `render.yaml`, or configure a Node web service manually:
- Build command: `npm install`
- Start command: `npm start`
- Health check path: `/health`

Render runs `node server.js` as a persistent HTTP server. The original 13-minute self-ping behavior is retained for Render only. Importing `server.js` from a Vercel function does not start a listener or self-ping timer.

## API contract

`POST /api/chat` request:

```json
{ "message": "Hello", "history": [] }
```

Success response:

```json
{ "reply": "...", "truncated": false }
```

`GET /health` and `GET /api/health` response:

```json
{ "status": "ok", "service": "DEVZIKKY AI" }
```

The API accepts Vercel's already-parsed `req.body` as well as the raw Node.js request stream used by Render.

## Static files

The HTML file and any frontend assets stay in the project root. The original uploaded ZIP contains `ai.html` but does not contain `icon.png`; add your original `icon.png` to the root if you want the favicon references in `ai.html` to resolve. Do not place API keys in source files or commit `.env` files.
