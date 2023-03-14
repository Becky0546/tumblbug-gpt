import { ChatGPTAPI } from "chatgpt";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

async function chatgpt(question) {
  const api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY, fetch });
  const res = await api.sendMessage(question);
  return res.text;
}

export default chatgpt;
