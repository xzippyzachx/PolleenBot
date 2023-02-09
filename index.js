require('dotenv').config();
const scheduler = require('./scheduler')
const test = require('./dataRequester');

test.requestPollenToronto();
//.getTestData();


// scheduler.startScheduler()