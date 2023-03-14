//server.js
import chatgpt from "./routes/chatgpt.js";
import express from "express";
//import bodyParser from "body-parser";
import http from "http";
import cors from "cors";

const app = express();

const server = http.createServer(app);

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send({ message: "connect success" });
});

app.get("/gpt", async (req, res) => {
  const responseText = await chatgpt();
  res.send({ message: responseText });
});

app.post("/gpt", async (req, res) => {
  const ques = req.body.question;
  console.log(ques);

  const responseAnswer = await chatgpt(ques);
  res.send({ message: responseAnswer });
});

server.listen(8080, () => {
  console.log("server is running on 8080");
});
