import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function Display({ loading, loadingMessage, data }) {
  return (
    <div className="bg-black text-white p-6 overflow-auto text-lg rounded-lg markdown-body">
      {loading ? (
        <p className="animate-pulse text-blue-400">{loadingMessage}</p>
      ) : (
        <Markdown rehypePlugins={[rehypeHighlight]}>{data}</Markdown>
      )}
    </div>
  );
}
