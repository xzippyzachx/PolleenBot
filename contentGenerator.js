const dataCache = require('./dataCache')
// const {redColor,yellowColor,greenColor} = require('./constant.js')

// console.log(dataCache.fetch());
// console.log(redColor);
// console.log(yellowColor);
// console.log(greenColor);
const generate = ( () => {
    console.log("dummy content generation")

    dataCache.fetch();
})


module.exports = {
    generate
}