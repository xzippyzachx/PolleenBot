const poster = require('./poster')
const dataCache = require('./dataCache')


const startScheduler = (() => {
    console.log("Post scheduler has started!")

    poster.makePost()

    // To Do: Scheduler logic...
})


function newPost()
{
    dataCache.update();
    poster.makePost();
}

setInterval(newPost, 3000);


module.exports = {
    startScheduler
}