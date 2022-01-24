import http from "http";
import app from "./app.js"; // Important: Must use .js else nodeJs will not found the module.
import { config } from "dotenv";
config(); // Important: Must execute to make the environment variables available.

const server = http.createServer(app);
const port = process.env.PORT;

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
