const cache = require("./dataCache");

const requestPollenToronto = (() => {

    let key = process.env.TOMORROW_IO_KEY
    let location = "43.6532,-79.3832" // Toronto

    fetch(`https://api.tomorrow.io/v4/timelines?location=${location}&fields=grassIndex,treeIndex,weedIndex&timesteps=current&units=metric&apikey=${key}`).then((response) => {
        response.json().then((json) => {
            console.log(JSON.stringify(json))

            cache.updateCache(json)
            // Pass json to the data cache here

        }).catch((err) => {
            console.log("Unable read JSON -", err)
        })
    }).catch((err) => {
        console.log("Unable to fetch -", err)
    })
})


const getTestData = ( () => {
    cache.populateCache();
})


module.exports = {
    requestPollenToronto,
    getTestData
}