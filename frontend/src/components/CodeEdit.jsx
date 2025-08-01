import Editor from "react-simple-code-editor";
import prism from "prismjs";
import "prismjs/components/prism-javascript";

export default function CodeEdit({ loading, prompt, setPrompt, reviewCode }) {
  return (
    <div className="bg-zinc-900 text-white flex flex-col rounded-lg">
      <div className="flex-1 overflow-auto p-4">
        <Editor
          value={prompt}
          onValueChange={setPrompt}
          placeholder={`Enter your code and we will review it\n\nExample:\nfunction sum(a, b) {\n  return a + b;\n}`}
          highlight={(code) =>
            prism.highlight(code, prism.languages.javascript, "javascript")
          }
          padding={20}
          className="min-h-full font-mono text-base"
        />
      </div>
      <div className="p-4 flex justify-center">
        <button
          onClick={reviewCode}
          disabled={loading}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-lg"
        >
          Review Code
        </button>
      </div>
    </div>
  );
}
