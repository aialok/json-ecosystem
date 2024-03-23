import express from "express";
const app = express();
import { main } from "./main.js";
import { getInput } from "../setup.js";

app.get("/", (req, res) => {
  res.send("Hello World");
});

const { token, topic, numRepos } = getInput();
console.log(
  `Starting process with token: REDACTED, topic: ${topic}, numRepos: ${numRepos}`
);

app.get("/api/v1/wayback", async (req, res) => {
 
  const data = await main(token, topic, numRepos);
  res.json(data);
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
