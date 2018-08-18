"use strict";

const MongoClient = require("mongodb").MongoClient;
//const MONGODB_URI = "mongodb://localhost:27017/tweeter";
const MONGODB_URI = "mongodb://localhost:27017";

MongoClient.connect(MONGODB_URI, (err, client) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  console.log(`Connected to mongodb: ${MONGODB_URI}`);

    let db = client.db("tweeter");

    getAllTweets(db);

    client.close();
});

const getAllTweets = function (db){

    db.collection("tweets").find().toArray((err, results) => {
        if (err) throw err;
        console.log("results array: ", results);

    });

};