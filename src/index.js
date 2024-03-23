import express from "express";
const app = express();
import { main } from "./services/main.js";
import { getInput } from "../setup.js";
import dbConnect from "./config/db.config.js";
import schedule from "node-schedule";
import Organisation from "./model/organisation.model.js";

app.get("/", (req, res) => {
  res.send("Server is running. Go to /api/v1/wayback to get data.");
});

const { token, topic, numRepos } = getInput();
console.log(
  `Starting process with token: REDACTED, topic: ${topic}, numRepos: ${numRepos}`
);

const job = schedule.scheduleJob("0 55 16 ? * SAT *", async () => {
  const data = await main(token, topic, numRepos);
  console.log(data);
});

app.get("/api/v1/wayback", async (req, res) => {
  const data = await Organisation.find();
  res.json({
    message: "Data fetched successfully",
    success: true,
    data,
  });
});

app.listen(4000, async () => {
  await dbConnect();
  console.log("Server is running on http://localhost:4000");
});
