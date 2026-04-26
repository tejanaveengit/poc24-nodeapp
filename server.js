const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("POC 24 - Node.js App running on ECS Fargate 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
