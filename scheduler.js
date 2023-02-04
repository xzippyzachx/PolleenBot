const poster = require('./poster')
const dataCache = require('./dataCache')
const dataRequester = require('./dataRequester')


const startScheduler = (() => {
    console.log("Post scheduler has started!")

    
    // To Do: Scheduler logic...
})


function newPost()
{
    dataRequester.requestPollenToronto;
    // poster.makePost();
}

// setInterval(newPost, 3000000);
newPost;

module.exports = {
    startScheduler
}