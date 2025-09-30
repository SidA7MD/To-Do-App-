import express from "express";
import dotenv from "dotenv";

import { conn } from "../src/config/db.js";

dotenv.config();
const app = express();

conn().then(() => {
  app.listen(5000, () => {
    console.log("App Runing on port 5000");
  });
});
