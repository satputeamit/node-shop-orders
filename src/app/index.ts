import express from "express";
import cors from "cors";
import router from "./routes";
import { connectDB } from "../database/client";
import mongoose from "mongoose";


const port = process.env.APP_PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
connectDB();
mongoose.connection.once("open", () => {
  console.log("Database connected...")
  app.listen(port, () => {
    console.log(`Orders microservice started on port:${port}`);
  });
})

