const contentGenerator = require('./contentGenerator')

const makePost = (() => {
    console.log("This is a dummy post")

    contentGenerator.generate();
    // To Do: Posting logic...
})

module.exports = {
    makePost
}