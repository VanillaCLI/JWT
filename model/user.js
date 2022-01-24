import { getClient } from "../config/database.js";

export async function createUser() {
	const client = await getClient();
	const db = client.db();

	//
}
