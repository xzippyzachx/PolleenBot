const poster = require('./poster')
const dataCache = require('./dataCache')
const dataRequester = require('./dataRequester')

const cron = require('node-cron');

const startScheduler = (() => {
    console.log("Scheduler has started!")

    let dailyTask = cron.schedule("0 6 * * *", () => { // Called daily at 6 AM
        console.log(`Running a |dailyTask| at [${new Date().toDateString()}]`)

        dataRequester.requestPollenToronto()
    })
})

module.exports = {
    startScheduler
}