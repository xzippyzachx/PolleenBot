const poster = require('./poster')
const dataCache = require('./dataCache')

const startScheduler = (() => {
    console.log("Post scheduler has started!")

    poster.makePost()

    // To Do: Scheduler logic...
})

module.exports = {
    startScheduler
}