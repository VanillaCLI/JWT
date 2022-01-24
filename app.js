import express from "express";
import bodyParser from "body-parser";
// import { getClient } from "./config/database";
// import { createUser } from "./model/user.js";

const app = express();
// const jsonParser = bodyParser.json(); // Note: For "Content-Type":"application/json"
const urlencodedParser = bodyParser.urlencoded({ extended: false }); // Note: For "Content-Type":"application/x-www-form-urlencoded"

app.post("/login", urlencodedParser, async (req, res) => {
	const data = req.body;
	console.log(data);
	res.status(201).json({ message: "Hi" });
});

app.post("sign-up", async (req, res) => {
	console.log("Hello!");
});

export default app;
