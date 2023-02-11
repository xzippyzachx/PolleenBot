require('dotenv').config();
const scheduler = require('./scheduler')
const test = require('./dataRequester');
const test2 = require('./dataCache');

data = test2.fetch();

console.log(data.values.grassIndex);

// test.requestPollenToronto();
//.getTestData();


// scheduler.startScheduler()