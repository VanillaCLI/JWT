import { config } from "dotenv";
import { getClient } from "./config/database.js";
import express from "express";

const app = express();

app.use(express.json());

export default app;
