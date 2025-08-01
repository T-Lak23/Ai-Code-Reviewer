const aiService = require("../services/ai.services");
const aiController = async (req, res) => {
  const prompt = req.body.prompt;
  if (!prompt) return res.status(400).json({ message: "Input not found!!!" });
  const response = await aiService(prompt);
  res.send(response);
};

module.exports = aiController;
