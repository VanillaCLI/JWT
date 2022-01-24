import { MongoClient } from "mongodb";

export async function getClient() {
	let client;
	try {
		client = await MongoClient.connect(process.env.CONNECTION_STRING);
	} catch (err) {
		return null;
	}

	return client;
}
