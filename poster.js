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


const makePost = (async () =>{
    console.log("Starting Post...");

    // getting twiter message
    console.log("loading twitter message...");
    const tweetContent  = contentGenerator.generate();

    //posting 
    console.log("posting...");
    client.v1.uploadMedia('./Post.jpg').then((mediaID)=>{
        client.v2
        .tweet(tweetContent, {media: {media_ids: [mediaID]}})
        .then((tweet) => {
         console.log(`Tweet posted`);
        })
        .catch((err) => {
            console.error(err);
        });
    })
    


});
// Call the function to make the post
module.exports = {
    makePost
}