const dataCache = require('./dataCache')

const generate = ( () => {
    console.log("dummy content generation")

    dataCache.fetch();
})


module.exports = {
    generate
}