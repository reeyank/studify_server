import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("userInfo");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:uid", async (req, res) => {
  let collection = await db.collection("userInfo");
  let query = {uid: req.params.uid};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  let newDocument = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    uid: req.body.uid,
    displayName: req.body.displayName,
    email: req.body.email,
  };
  let collection = await db.collection("userInfo");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// This section will help you update a record by id.
// router.patch("/:id", async (req, res) => {
//   const query = { _id: new ObjectId(req.params.id) };
//   const updates =  {
//     $set: {
//       name: req.body.name,
//       position: req.body.position,
//       level: req.body.level
//     }
//   };

//   let collection = await db.collection("records");
//   let result = await collection.updateOne(query, updates);

//   res.send(result).status(200);
// });

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("records");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;