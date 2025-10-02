import express from "express";
import dotenv from "dotenv";
import TaskRouter from "./routers/TaskRouter.route.js"
import { conn } from "../src/config/db.js";
import cors from 'cors';
import Task from "./models/Task.model.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true, 
  })
);

app.use('/api/Tasks',TaskRouter)


conn().then(() => {
  app.listen(5000, () => {
    console.log("App Runing on port 5000");
  });
});
