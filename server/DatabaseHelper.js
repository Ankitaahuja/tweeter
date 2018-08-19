"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017";

const getAllTweets = async function (){
    let dbServer =  await MongoClient.connect(MONGODB_URI);
    let db = await dbServer.db("tweeter");
    let result = await db.collection("tweets").find().toArray();                 
    let close = await dbServer.close();
    return result;
}

const saveSingleTweet = async function (tweetInput){
    
    let dbServer =  await MongoClient.connect(MONGODB_URI);
    let db = await dbServer.db("tweeter");
    let result = await db.collection("tweets").insertOne(tweetInput);               
    let close = await dbServer.close();
};

module.exports.saveSingleTweet = saveSingleTweet;
module.exports.getAllTweets = getAllTweets;
