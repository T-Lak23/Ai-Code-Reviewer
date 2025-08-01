import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import "prismjs/components/prism-javascript";
import { useEffect, useState } from "react";
import axios from "axios";
import "highlight.js/styles/github-dark.css";
import Header from "./components/header";
import CodeEdit from "./components/CodeEdit";
import Display from "./components/Display";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState(``);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const loadingMessages = [
    "🛠️ Reviewing code...",
    "✍️ Marking changes...",
    "⚙️ Generating results...",
  ];

  async function reviewCode() {
    let step = 0;
    setLoadingMessage(loadingMessages[step]);
    const interval = setInterval(() => {
      step++;
      if (step < loadingMessages.length) {
        setLoadingMessage(loadingMessages[step]);
      }
    }, 1500);
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/", { prompt });
      clearInterval(interval);
      setData(response.data);
    } catch (err) {
      clearInterval(interval);

      setData("❌ Error reviewing code. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-gray-300 min-h-screen flex flex-col">
      <Header />

      <div className="grid md:grid-cols-2 flex-1 overflow-hidden p-5 md:p-10 gap-5">
        <CodeEdit
          prompt={prompt}
          setPrompt={setPrompt}
          reviewCode={reviewCode}
        />
        <Display
          loading={loading}
          loadingMessage={loadingMessage}
          data={data}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
