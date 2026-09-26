<div align="center">

# 🤖 DEVZIKKY AI

**Ask. Build. Ship.**

A friendly, developer-focused AI assistant built by **DEV ZIKKY TECH** — with a clean frontend, a server-side multi-provider AI gateway, temporary conversations, and an open-source architecture you can customize yourself.

[![Live](https://img.shields.io/badge/live-devzikky.onrender.com-4CDDA0?style=flat-square)](https://devzikky.onrender.com)
[![Repository](https://img.shields.io/badge/repo-open%20source-55E6FF?style=flat-square)](https://github.com/zikky0001-droid/devzikky)
[![License](https://img.shields.io/badge/license-MIT-8B7CFF?style=flat-square)](https://github.com/zikky0001-droid/devzikky/blob/main/LICENSE)
[![Runtime](https://img.shields.io/badge/runtime-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](#)
[![Built by](https://img.shields.io/badge/built%20by-DEV%20ZIKKY-FF2E78?style=flat-square)](https://github.com/zikky0001-droid)

A hand-built AI assistant and developer project by **[DEV ZIKKY 🧑‍💻](https://github.com/zikky0001-droid)**.

---

<img src="https://capsule-render.vercel.app/api?type=waving&height=200&color=gradient&text=DEVZIKKY%20AI&fontAlign=50&fontAlignY=38&desc=FRIENDLY%20DEVELOPER%20ASSISTANT%20%C2%B7%20BY%20DEV%20ZIKKY%20TECH&descAlign=50&descAlignY=58&fontColor=55E6FF&animation=twinkling" width="90%" alt="DEVZIKKY AI">

<img src="https://readme-typing-svg.herokuapp.com/?font=Fira+Code&size=22&duration=3200&color=55E6FF&background=00000000&center=true&vCenter=true&width=760&lines=Ask+anything+%F0%9F%A4%96;Technical+help+%C2%B7+Ideas+%C2%B7+Debugging;Open+source+%C2%B7+Customizable+%C2%B7+Self-hostable;Built+by+DEV+ZIKKY" alt="Typing Animation">

<p align="center">
<img src="https://img.shields.io/badge/AI-Assistant-55E6FF?style=for-the-badge&logo=openai&logoColor=white&labelColor=07090d">
<img src="https://img.shields.io/badge/Multi--Provider-8B7CFF?style=for-the-badge&logo=router&logoColor=white&labelColor=07090d">
<img src="https://img.shields.io/badge/Open_Source-4CDDA0?style=for-the-badge&logo=github&logoColor=white&labelColor=07090d">
<img src="https://img.shields.io/badge/MIT_License-FF2E78?style=for-the-badge&logo=opensourceinitiative&logoColor=white&labelColor=07090d">
</p>

</div>

---

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%" alt="">

<div align="center">

<a href="https://devzikky.onrender.com">
<img src="https://readme-typing-svg.demolab.com?font=Black+Ops+One&size=42&pause=600&color=55E6FF&center=true&width=900&height=100&lines=TRY+DEVZIKKY+AI" alt="Try DEVZIKKY AI">
</a>

<br>

<a href="https://devzikky.onrender.com"><img src="https://img.shields.io/badge/OPEN%20LIVE%20AI-07090d?style=for-the-badge&logo=render&logoColor=55E6FF"></a>
<a href="https://github.com/zikky0001-droid/devzikky"><img src="https://img.shields.io/badge/VIEW%20SOURCE-07090d?style=for-the-badge&logo=github&logoColor=55E6FF"></a>

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%" alt="">

---

## 🧠 What Is DEVZIKKY AI?

**DEVZIKKY AI** is a friendly technical assistant built by **DEV ZIKKY TECH**.

The idea is simple:

> One clean assistant interface.  
> A server-side AI gateway.  
> Multiple provider/model options.  
> Open source.  
> Yours to customize.

The live assistant focuses on:

```text
Technical help
Project context
Ideas
Explanations
Debugging
Building ideas
Developer questions
```

It is intentionally lightweight rather than a giant framework. You can take the source, redesign it, connect different models, add your own features and deploy your own version.

---

## ✨ What It Does

<table>
<tr>
<td width="50%" valign="top">

### 🤖 AI Assistant

```text
- Conversational AI
- Multi-provider routing
- Model fallback
- Recent conversation context
- Custom assistant context
- Configurable models
- Request validation
- Timeout protection
```

</td>
<td width="50%" valign="top">

### 🎨 Interface

```text
- Dark glass UI
- Animated auroras
- Responsive layout
- Mobile friendly
- Quick prompts
- Chat bubbles
- Loading state
- New-chat control
```

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🔐 Backend

```text
- Server-side API keys
- POST /api/chat
- GET /health
- Environment variables
- Message limits
- History limits
- Provider fallback
```

</td>
<td width="50%" valign="top">

### 🧩 Customizable

```text
- Plain HTML
- Inline CSS
- Vanilla JavaScript
- Node.js backend
- No frontend framework
- Easy model replacement
- Easy branding changes
```

</td>
</tr>
</table>

---

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │      ai.html        │
                    │  HTML + CSS + JS     │
                    └──────────┬──────────┘
                               │
                               │ POST /api/chat
                               ▼
                    ┌─────────────────────┐
                    │      server.js      │
                    │      AI Gateway     │
                    └──────────┬──────────┘
                               │
                  ┌────────────┼────────────┐
                  │            │            │
                  ▼            ▼            ▼
             Provider A   Provider B   Other fallback
                  │            │            │
                  └────────────┼────────────┘
                               │
                               ▼
                         AI response
                               │
                               ▼
                           ai.html
```

The browser talks to your backend. The backend talks to the AI services. Provider credentials should therefore remain server-side.

---

## 📁 Project Structure

```text
devzikky/
│
├── ai.html
├── server.js
├── package.json
├── .gitignore
├── LICENSE
└── README.md
```

### `ai.html`

The complete frontend: interface, styling, animations, quick prompts and browser-side chat logic.

### `server.js`

The Node.js backend and AI gateway. It handles `/api/chat`, `/health`, static files, request validation, history cleaning, provider/model routing and fallback handling.

### `package.json`

Project metadata and the Node.js start command.

```json
{
  "name": "devzikky-ai",
  "version": "1.0.0",
  "private": true,
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "engines": {
    "node": ">=20"
  }
}
```

### `.gitignore`

Keeps dependencies, secrets, logs and temporary files out of Git.

### `LICENSE`

The repository is released under the **MIT License**.

---

## 🛠️ Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![OpenRouter](https://img.shields.io/badge/OpenRouter-111111?style=for-the-badge&logo=router&logoColor=white)
![Groq](https://img.shields.io/badge/Groq-F55036?style=for-the-badge&logo=lightning&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=111111)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## 🚀 Quick Start

### 1. Clone

```bash
git clone https://github.com/zikky0001-droid/devzikky.git
cd devzikky
```

### 2. Install

```bash
npm install
```

### 3. Configure environment variables

For local development, provide the credentials required by your backend configuration.

Example:

```env
OPENROUTER_API_KEY_1=your_first_key
OPENROUTER_API_KEY_2=your_second_key
GROQ_API_KEY=your_groq_key
GROQ_MODEL=your_model
```

Never commit real API keys.

### 4. Start

```bash
npm start
```

Open:

```text
http://localhost:3000/
```

or:

```text
http://localhost:3000/ai.html
```

Health check:

```text
http://localhost:3000/health
```

Expected:

```json
{
  "status": "ok",
  "service": "DEVZIKKY AI"
}
```

---

## 🌐 Live Project

### Try DEVZIKKY AI

**https://devzikky.onrender.com**

The current live project is hosted on Render.

---

## 🔌 API

### `POST /api/chat`

The frontend sends a message and recent conversation history to the backend.

```javascript
const response = await fetch("/api/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: "Explain this JavaScript error",
    history: []
  })
});

const data = await response.json();
console.log(data.reply);
```

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
  "reply": "Hello! How can I help?"
}
```

### `GET /health`

Simple server health endpoint:

```json
{
  "status": "ok",
  "service": "DEVZIKKY AI"
}
```

---

## 🧠 Conversation Handling

The current interface keeps conversation context as a temporary browser session.

The live UI describes it as:

```text
temporary session · no chat history saved
```

Refreshing the page clears the conversation.

The basic project does not require a database.

If you want persistent conversations, you can add:

```text
Supabase
Firebase
Cloud Firestore
PostgreSQL
Redis
MongoDB
```

---

## 🎨 Customize It Yourself

This is one of the main reasons the project is open source.

You can change almost everything.

### Change the UI

Edit `ai.html` and customize:

```text
Colors
Gradients
Fonts
Logo
Background
Animations
Buttons
Chat bubbles
Quick prompts
Welcome text
Assistant name
Mobile layout
Desktop layout
Branding
Footer
```

You can turn:

```text
DEVZIKKY AI
```

into:

```text
YOUR AI
```

and:

```text
DEV ZIKKY TECH
```

into:

```text
YOUR BRAND
```

---

## 🧠 Change The Assistant Personality

The backend contains the assistant context.

You can replace it with your own instructions.

Example:

```javascript
const SYSTEM_PROMPT = `
You are my personal coding assistant.

Focus on:
- JavaScript
- Python
- Node.js
- APIs

Give practical explanations.
`;
```

You could turn the project into:

```text
Coding assistant
Study assistant
Customer-support bot
Website chatbot
Personal assistant
Research assistant
Community assistant
Telegram AI
WhatsApp AI
Discord AI
```

---

## 🔌 Change The Models

You can adapt the backend to use different AI providers or models.

You can:

```text
Add models
Remove models
Change models
Change providers
Change fallback order
Add authentication
Add usage limits
Create your own routing
```

The frontend does not need to know how provider routing works.

---

## 🔐 Security

Recommended architecture:

```text
Browser
   │
   │ message
   ▼
Your server
   │
   │ secret credential
   ▼
AI provider
```

Avoid putting production API keys into public frontend JavaScript.

Never commit real credentials to GitHub.

Use environment variables on your hosting platform.

---

## 🛡️ Prompt Injection

The backend uses a server-controlled assistant context and treats user messages as untrusted input.

> No prompt or application can guarantee perfect protection against every jailbreak or prompt-injection technique.

For production applications, consider:

```text
Authentication
Rate limiting
Usage limits
Input validation
Output validation
Abuse detection
Provider safety controls
Monitoring
Logging
```

---

## 🚀 Deploy To Render

Typical Render configuration:

```text
Runtime:
Node

Build Command:
npm install

Start Command:
npm start
```

Configure your required API credentials as Render environment variables.

Do not put production secrets directly into `ai.html`.

---

# 👨‍💻 About DEV ZIKKY

**DEV ZIKKY** is a full-stack developer, builder, tech enthusiast and problem-solver from Nigeria.

He builds practical internet tools, AI systems, APIs, bots and experimental developer projects — including work done directly from Android and Termux.

His public developer profile describes work across:

```text
AI assistants
Disposable email infrastructure
Manga readers
WhatsApp bots
Telegram bots
Developer tools
APIs
UI design
Automation
Cybersecurity awareness
```

His toolbox includes:

```text
JavaScript
Node.js
Python
HTML/CSS
REST APIs
GraphQL APIs
AI / LLMs
Prompt Engineering
Multi-Model AI
TTS / Voice AI
WhatsApp Bots
Telegram Bots
Vercel
Render
Netlify
InfinityFree
Supabase
Firebase
Cloud Firestore
Git / GitHub
Responsive Design
CSS Animations
Canvas API
Express.js
API Authentication
API Gateway Design
Web Scraping
Session Management
Rate Limiting
System Architecture
Custom Domains
Environment Variables
cURL / CLI
Termux
Cybersecurity Awareness
```

Development mindset:

```text
Imagine
   ↓
Build
   ↓
Test
   ↓
Break
   ↓
Understand
   ↓
Improve
   ↓
Ship
```

---

# 🌟 DEV ZIKKY PROJECT ECOSYSTEM

The public developer profile describes:

```text
14+ projects shipped
6+ bots running
```

The catalogue continues to grow.

## 🚀 Selected Projects

| | Project | What it is |
| :---: | :--- | :--- |
| 🤖 | **DEVZIKKY AI** | Open-source customizable AI assistant |
| 🧠 | **ZIKKY AI** | AI assistant / multi-model AI work |
| 📧 | **ZMAIL Studio** | Email composer and developer email API |
| 📬 | **ZMAIL Drop** | Temporary/public mailbox project |
| 📮 | **ZDropMail** | DropMail-based inbox project |
| 📚 | **ZIKKY Manga Hub** | Manga reading project |
| 💬 | **ZQUOTE** | Telegram-style quote image generator/API |
| 🌐 | **DEVZIKKY TECH** | Developer portfolio and project catalogue |

There are additional experiments, bots, APIs and utilities beyond this public shortlist.

---

# 🤖 Bots & Automation

Development areas include:

```text
WhatsApp bots
Telegram bots
AI chatbots
Command systems
Session management
LID / phone-number handling
Push-name systems
Auto reactions
Auto joining
Anti-link systems
Group utilities
Quote generators
AI image tools
Vision systems
API-powered commands
```

---

# 📮 ZMAIL & Temporary Email Work

Projects and integrations include:

```text
ZMAIL Studio
ZMAIL Drop
ZDropMail
Mail.tm integrations
Maildrop integrations
DropMail integrations
GraphQL mailbox systems
Developer email APIs
Temporary inbox systems
Session-based mail systems
```

---

# 🧠 AI Development

Development areas include:

```text
Multi-model AI
AI API integration
OpenRouter
Groq
Vision AI
AI image generation
Prompt engineering
Model fallback systems
AI routing
Chat interfaces
AI assistants
Voice / TTS experiments
AI-powered bot commands
```

---

# 🧰 Technology Exploration

Across different projects and experiments, technologies have included:

```text
Node.js
Python
JavaScript
REST
GraphQL
Supabase
Firebase
Cloud Firestore
Vercel
Render
Netlify
InfinityFree
GitHub
Termux
OpenRouter
Groq
Mail.tm
Maildrop
DropMail
Canvas
Sharp
FFmpeg
Tesseract
Baileys
```

Not every technology is used by every project.

---

# 📱 Built From A Phone

A major part of the DEV ZIKKY workflow is experimenting and building from Android.

```text
Android
   ↓
Termux
   ↓
Node.js / Python
   ↓
Git
   ↓
GitHub
   ↓
Render / Vercel / Netlify
   ↓
Live project
```

---

# 🧩 Why Open Source?

DEVZIKKY AI is released under the **MIT License**.

You can use the source as a starting point for your own project, subject to the license terms and the terms of third-party services you connect.

You can:

```text
Fork it
Clone it
Modify it
Redesign it
Rename it
Add features
Replace models
Replace providers
Add a database
Add authentication
Add memory
Add tools
Deploy your own version
```

The project is meant to be a foundation, not a locked product.

---

# 🛠️ Customization Checklist

```text
[ ] Assistant name
[ ] Logo
[ ] Colors
[ ] Fonts
[ ] Background
[ ] Animations
[ ] Welcome message
[ ] Quick prompts
[ ] System context
[ ] AI models
[ ] AI providers
[ ] API credentials
[ ] Request limits
[ ] Conversation history
[ ] Database
[ ] Authentication
[ ] Branding
[ ] Footer
[ ] Domain
```

---

# 💡 Ideas For Your Own Version

### 🧑‍💻 Coding AI

```text
Code generation
Debugging
Code explanation
Repository assistant
Programming tutor
```

### 🎓 Study AI

```text
Explanations
Revision
Practice
Summaries
Questions
```

### 🏢 Business Assistant

```text
Customer support
FAQ
Product information
Internal tools
```

### 💬 Community Bot

```text
Discord
Telegram
WhatsApp
Website chat
```

### 🧠 Personal Assistant

```text
Custom personality
Custom instructions
Custom knowledge
Custom tools
Custom memory
```

---

# 📦 Repository

**Source:**  
https://github.com/zikky0001-droid/devzikky

**Live:**  
https://devzikky.onrender.com

**License:**  
MIT

---

# 🔗 DEV ZIKKY

| | Link |
| :---: | :--- |
| 🌐 | **Portfolio:** [zikkytech.xo.je](https://zikkytech.xo.je) |
| 💻 | **GitHub:** [@zikky0001-droid](https://github.com/zikky0001-droid) |
| 🤖 | **DEVZIKKY AI:** [devzikky.onrender.com](https://devzikky.onrender.com) |
| 📬 | **ZMAIL Drop:** [zmaildrop.vercel.app](https://zmaildrop.vercel.app) |
| 📚 | **ZIKKY Manga Hub:** [zikkymangahub.onrender.com](https://zikkymangahub.onrender.com) |
| 💬 | **ZQUOTE:** [zquote-tau.vercel.app](https://zquote-tau.vercel.app) |

---

# ⭐ Support The Project

If DEVZIKKY AI is useful to you:

```text
⭐ Star the repository
🍴 Fork it
🧪 Experiment with it
🛠️ Customize it
🐛 Report bugs
💡 Suggest improvements
🚀 Build something new
```

The best way to use open source is to build with it.

---

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Rubik+Dirt&size=55&pause=1000&color=55E6FF&background=FF20A500&center=true&vCenter=true&width=1000&height=150&lines=DEVZIKKY+AI;OPEN+SOURCE;BUILD+YOUR+OWN;DEV+ZIKKY" alt="DEVZIKKY AI">

<br><br>

### 🤖 DEVZIKKY AI

**Open source · Customizable · Self-hostable**

Built with ☕, curiosity, code and a lot of testing.

**Built by DEV ZIKKY TECH 🇳🇬**

<br>

> **Shipped with purpose.**

<br>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%" alt="Footer">

</div>
