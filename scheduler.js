const poster = require('./poster')
const dataCache = require('./dataCache')
const dataRequester = require('./dataRequester')

const contentGenerator = require('./contentGenerator')

const cron = require('node-cron');

const startScheduler = (() => {
    console.log("Scheduler has started!")

    let dailyTask = cron.schedule("0 6 * * *", () => { // Called daily at 6 AM
        console.log(`Running a |dailyTask| at [${new Date().toDateString()}]`)

        dataRequester.requestPollenToronto()

        setTimeout(() => {
            let diff = dataCache.updateRequired();
            console.log("Different from yesterday: " + diff);

            if(diff) {
                poster.makePost();
            } else {
                new Promise(contentGenerator.generate).then((text) => {
                    console.log(text);
                })
            }
            
        }, 5000);
    })
})

module.exports = {
    startScheduler
}