import express from "express";
import bodyParser from "body-parser";
import { createUser } from "./model/user.js";
// import { getClient } from "./config/database";

const app = express();
// const jsonParser = bodyParser.json(); // Note: For "Content-Type":"application/json"
const urlencodedParser = bodyParser.urlencoded({ extended: false }); // Note: For "Content-Type":"application/x-www-form-urlencoded"

app.post("/sign-up", urlencodedParser, async (req, res) => {
	const data = req.body;
	const result = await createUser(data);

	console.log(result);
	res.status(201).json({ message: result });
});

export default app;
