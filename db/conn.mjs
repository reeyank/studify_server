import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient("mongodb+srv://khimanireeyan:Izna1828@studify.rqtjpq8.mongodb.net/?retryWrites=true&w=majority");

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("studify");

export default db;