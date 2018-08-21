"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017";//Used Mongodb 4.0

const getAllTweets = function (callback){
    
    MongoClient.connect(MONGODB_URI, function(err, dbServer) {
        if (err) throw err;
        let db = dbServer.db("tweeter");
        
        db.collection("tweets").find().toArray(function(err, result) {
            if (err) throw err;
            callback(result);
            dbServer.close();
          });   
      });
}


const saveSingleTweet = function (tweetInput, callback){

    MongoClient.connect(MONGODB_URI, function(err, dbServer) {
        if (err) throw err;
        let db = dbServer.db("tweeter");
        db.collection("tweets").insertOne(tweetInput, function(err, result) {
            if (err) throw err;
            callback();
            dbServer.close();
          });   
      });
    
};

module.exports.saveSingleTweet = saveSingleTweet;
module.exports.getAllTweets = getAllTweets;
