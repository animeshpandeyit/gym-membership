import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
config({
  path: "./data/config.env",
});

export const app = express();

app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("gym membership is working");
});
