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

    // getting twiter picture
    // console.log("loading twitter picture...");
    // const tweetImage = fs.readFileSync('./Post.jpg', { encoding: 'base64' });
    //posting 
    // console.log("posting...");
    // console.log(`URL: ${client.BASE_URL}/tweets`);
    // client.v1
    //     .post('statuses/update', { status: tweetContent })
    //     .then((tweet) => {
    //      console.log(`Tweet posted: ${tweet.text}`);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     });


});
// Call the function to make the post
module.exports = {
    makePost
}