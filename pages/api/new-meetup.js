import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://richjraaron:9d5y3ZWik91rvkOU@cluster0.b69qvrr.mongodb.net/meetups'
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meet up inserted!" });
  }
}

export default handler;