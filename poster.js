const contentGenerator = require('./contentGenerator')
const { TwitterApi } = require('twitter-api-v2');
const fs = require('fs');
require('dotenv').config();


// Make Twitter client
const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_KEY_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });


const makePost = ((resolve, reject) =>{
    console.log("Starting Post...");

    // Getting twiter message
    console.log("Loading twitter message...");
    new Promise(contentGenerator.generate).then((tweetContent) => {
        // Posting
        console.log("Posting...");
        client.v1.uploadMedia("./Post.jpg").then((mediaID) => {
            client.v2
            .tweet(tweetContent, {media: {media_ids: [mediaID]}})
            .then(() => {
                console.log("Tweet posted!");
                resolve();
            })
            .catch((error) => {
                reject(error);
            });
        })
        .catch((error) => {
            reject(error);
        });
    });
});

module.exports = {
    makePost
}