const express = require("express");
const {
  getTasks,
  getTaskById
} = require("./controllers/taskController");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Task Management API is running"
  });
});

app.get("/api/tasks", getTasks);
app.get("/api/tasks/:id", getTaskById);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});