"use strict";

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const databaseHelper= require('./DatabaseHelper');
const userHelper    = require("./lib/util/user-helper")
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"));

app.get("/tweets", async function(req, res) {
  try {
      let tweetsData =  await databaseHelper.getAllTweets();
      res.status(200).json(tweetsData);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

app.post("/tweets", async function(req, res) {

  if (!req.body.text) {
    res.status(400).json({ error: 'invalid request: no data in POST body'});
    return;
  }

  const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
  const tweet = {
    user: user,
    content: {
      text: req.body.text
    },
    created_at: Date.now()
  };

  try {
        await databaseHelper.saveSingleTweet(tweet);
        res.status(201).send();
    } catch (err) {
        res.status(500).json({ error: err.message });  
    }
});


app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
});
  