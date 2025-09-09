# ⚡ AI Code Reviewer

An interactive full-stack app where users can paste or write code, send it to an **AI backend** for review, and receive formatted feedback with Markdown and syntax highlighting.

Built with **React + TailwindCSS** (frontend) and **Express + AI API** (backend).

---

## 🧰 Tech Stack

### **Frontend**

- ⚛️ React + Vite
- 🎨 TailwindCSS
- 📝 react-simple-code-editor (lightweight code editor)
- 🌈 PrismJS (syntax highlighting in editor)
- 📄 react-markdown (render AI response as Markdown)
- 💡 rehype-highlight + highlight.js (syntax highlighting in AI output)
- 🌍 Axios (HTTP requests)

### **Backend**

- 🚂 Express.js
- 🔑 dotenv (environment variables)
- ⚡ AI API (OpenAI / Gemini / any LLM)
- 🛡️ CORS

---

## 📦 Why These Packages?

- **Frontend**

  - `react-simple-code-editor` → Editor for typing code
  - `prismjs` → Highlights syntax while typing
  - `react-markdown` → Converts AI feedback into formatted text
  - `rehype-highlight` + `highlight.js` → Makes AI’s code output colorful & readable
  - `axios` → Easier HTTP requests

- **Backend**

  - `express` → Handles `/ai` API requests
  - `dotenv` → Stores API keys safely
  - `cors` → Allows frontend ↔ backend requests
  - AI API SDK (e.g., **openai** or **@google/generative-ai**) → For AI reviews

---

## 🛠️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/ai-code-reviewer.git
cd ai-code-reviewer
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=3000
GEMINI_API_KEY=your_ai_api_key
CLIENT_ORIGIN=http://localhost:5173
```

Start backend:

```bash
npm run dev   # or npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Start frontend:

```bash
npm run dev
```

The app will run at:
👉 `http://localhost:5173`

---
