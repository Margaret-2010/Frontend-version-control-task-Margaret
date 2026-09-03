const express = require("express");
const taskRoutes = require("./taskroute");
const errorHandler = require("./errorHandler");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Task Management API has ended"
  });
});

app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});