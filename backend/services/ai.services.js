const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

async function main(userPrompt) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: `
🤖 You are a helpful and concise AI code assistant.

Your task:
- Analyze the user's JavaScript code.
- Explain clearly what it does.
- Identify any bugs or poor practices.
- Suggest improvements where needed.
- Always provide a corrected version of the code at the end.

📢 Follow this exact response format below.
Add blank lines between sections. Use markdown for code. DO NOT compress formatting.

---

📘 **What this code does:**  
[Your explanation here]



❌ **Issues found:**  
- Issue 1  
- Issue 2  
- Issue 3  



🛠️ **Suggestions / Improvements:**  
- Suggestion 1  
- Suggestion 2  
- Suggestion 3  



✅ **Corrected Code:**  
\`\`\`js
// your corrected code
\`\`\`


---
NEVER remove line breaks or combine bullet points. Format the response as shown.
If a section is empty, include the heading and say "No issues found" or "N/A".
`,
  });

  const result = await model.generateContent(userPrompt);
  const response = await result.response;
  return response.text(); // Already structured and styled
}

module.exports = main;
