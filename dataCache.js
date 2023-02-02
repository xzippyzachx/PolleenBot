const dataRequester = require('./dataRequester')

var cache = "";
const fetch = ( () => {
    if(cache.length== 0)
    {
        update;
    }
    console.log(cache);
})
const update = ( () =>
{
    cache = dataRequester.get();
})

module.exports = {
    fetch,
    update
}