const tasks = require("./tasks");

const getTasks = (req, res) => {
  res.json(tasks);
};

const getTaskById = (req, res) => {
  const taskId = Number(req.params.id);
  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  res.json(task);
};

const createTask = (req, res) => {
  const { title, description, status } = req.body;

  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    status: status || "pending"
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const taskId = Number(req.params.id);
  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  const { title, description, status } = req.body;

  task.title = title || task.title;
  task.description = description || task.description;
  task.status = status || task.status;

  res.json(task);
};

const deleteTask = (req, res) => {
  const taskId = Number(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  tasks.splice(taskIndex, 1);

  res.json({
    message: "Task deleted successfully"
  });
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};