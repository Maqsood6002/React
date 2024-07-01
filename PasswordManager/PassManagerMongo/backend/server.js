const express = require("express");
const bodyparser = require("body-parser");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const cors = require("cors");
const url = "mongodb://localhost:27017";

dotenv.config();

const client = new MongoClient(url);
const dbName = "PasswordManager";
const app = express();

const port = 3000;
app.use(cors());
app.use(bodyparser.json());

client.connect();

//Get Password
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

//Set Password
app.post("/", async (req, res) => {
  const Password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.insertOne(Password);
  res.send({ success: true, result: findResult });
});
//Delete password
app.delete("/", async (req, res) => {
  const Password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.deleteOne(Password);
  res.send({ success: true, result: findResult });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
