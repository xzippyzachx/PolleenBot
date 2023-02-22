const fs = require('fs');
const cacheFile = './dataCache.json';


let EntriesArray = JSON.parse(fs.readFileSync(cacheFile, 'utf8', (err,jsonString) => {
    if (err)
    {console.log(`File read failed: ${err}`); cache = '{"An Error Has Occurred":":(")}'; return}
})).Entries;

let cache = EntriesArray[EntriesArray.length - 1];

const writeCache = ( (newCache) => {

    fs.writeFile(cacheFile, newCache, err =>
        {
            if (err) {
                console.log('Error writing file', err)
            }
        })

})

const updateCache = ( (split) => {
    let entryTime = split.data.timelines[0].intervals[0].startTime;
    let entryValues = split.data.timelines[0].intervals[0].values;

    let entry = JSON.parse(`{"Time":"${entryTime}", "values":${JSON.stringify(entryValues)}}`);
    
    let obj = JSON.parse(cache);
    obj["Entries"].push(entry);
    cache = JSON.stringify(obj);
    writeCache(cache);

    console.log(JSON.stringify(cache));
    console.log(`Cache updated at ${Date.now()}`)
})

const fetch = ( () => {
    return cache;
})

//checks if the difference between yesterday's cached result and today's result in todays reqading being different from yesterdays. If so, returns true. (assumes the groupings {0,1}, {2,3}, {4,5})
const updateRequired = ( () => {
    let check = EntriesArray[EntriesArray.length - 1]; // yesterday's cached result

    //each value compared between 0 and 1
    if((cache.values.grassIndex <= 1 && check.values.grassIndex >= 2) || (cache.values.weedIndex <= 1 && check.values.weedIndex >= 2) || (cache.values.treeIndex <= 1 && check.values.treeIndex >= 2))
    {
        return true;
    }
    //each value compared between 2 and 3
    if(  ((2 <= cache.values.grassIndex && cache.values.grassIndex <= 4) && (2 > check.values.grassIndex || check.values.grassIndex < 4))   ||   ((2 <= cache.values.weedIndex && cache.values.weedIndex <= 4 ) && (2 > check.values.weedIndex || check.values.weedIndex < 4))   ||   ( ( 2 <= cache.values.treeIndex && cache.values.treeIndex <= 4) && (2 > check.values.treeIndex || check.values.treeIndex < 4)))
    {
        return true;
    }
    //each value compared between 4 and 5
    if((cache.values.grassIndex >= 4 && check.values.grassIndex <= 3) || (cache.values.weedIndex >= 4 && check.values.weedIndex <= 3) || (cache.values.treeIndex >= 4 && check.values.treeIndex <= 3))
    {
        return true;
    }

    return false;
})

const populateCache = ( () => 
{
    fs.readFile('./testData.json', 'utf8', (err,jsonString) => {
        if (err)
        {console.log(`file read failed: ${err}`); cache = "{\"err\"}"; return}
        console.log(jsonString)
        cache = jsonString;
        writeCache(jsonString);
    })
})


module.exports = {
    fetch,
    updateRequired,
    updateCache,
    populateCache
}