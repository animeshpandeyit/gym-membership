import { Task } from "../models/task.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
export const newTask = async (req, res, next) => {
  //   const { token } = req.cookies;
  //   if (!token)
  //     return res.status(404).json({
  //       success: false,
  //       message: "Login First",
  //     });
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //   const user = await User.findById(decoded._id);
  const { title, description } = req.body;

  await Task.create({
    title,
    description,
    user: req.user,
  });

  res.status(201).json({
    success: true,
    message: "Login Success, and task created successfully",
  });
};

export const getMyTask = async (req, res, next) => {
  const userId = req.user._id;

  const tasks = await Task.find({ user: userId });

  res.status(200).json({
    success: true,
    message: "Task's of user " + req.user.name + " found successfully",
    tasks: tasks,
  });
};

export const updateTask = async (req, res, next) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
  }, { new: true });

  if (!updatedTask) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  updatedTask.isCompleted = !updatedTask.isCompleted;
  await updatedTask.save();
  res.status(200).json({
    success: true,
    message: "Task Updated!",
    updatedTask,
  });
};

export const deleteTask = async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  await task.deleteOne();
  res.status(200).json({
    success: true,
    message: "Task deleted successfully",
  });
};
