const contentGenerator = require('./contentGenerator')

contentGenerator.generate;new Promise(contentGenerator.generate).then((text) => {
    console.log(text);
})