const poster = require('./poster')
const dataCache = require('./dataCache')
const dataRequester = require('./dataRequester')

const cron = require('node-cron');

const startScheduler = (() => {
    console.log("Scheduler has started!")

    let dailyTask = cron.schedule("0 6 * * *", () => { // Called daily at 6 AM
        console.log(`Running a task at [${new Date().toISOString()}]`)
    })
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