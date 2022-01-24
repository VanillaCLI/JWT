import { MongoClient } from "mongodb";

export async function getClient(req, res) {
	let client;
	try {
		client = await MongoClient.connect(process.env.CONNECTION_STRING);
	} catch (err) {
		res.status(500).json({ message: "Failed to connect!" });
	}

	return client;
}
