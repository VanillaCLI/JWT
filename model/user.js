import { getClient } from "../config/database.js";

export async function createUser(data) {
	const client = await getClient();

	if (!client) return "Failed";

	const db = client.db();
	await db.collection("users").insertOne(data);

	return "Success";
}
