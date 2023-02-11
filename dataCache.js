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
    // let split = JSON.parse(newEntry)

    let entryTime = split.data.timelines[0].intervals[0].startTime;
    let entryValues = split.data.timelines[0].intervals[0].values;

    let entry = JSON.parse(`{"Time":"${entryTime}", "values":${JSON.stringify(entryValues)}}`);

    var obj = JSON.parse(cache);
    obj["Entries"].push(entry);
    cache = JSON.stringify(obj);
    writeCache(cache);

    console.log(JSON.stringify(cache));
    console.log(`Cache updated at ${Date.now()}`)
})

const fetch = ( () => {
    return cache;
})

// const updateRequired = ( () => {
//     if(Object.keys(JSON.parse(cache).Entries) <= 6) {console.log(false); return false;}

//     let average = new Array(3); 
//     let cacheRead = JSON.parse(cache);
//     for(let i = 0; i < 7; i++)
//     {
//         for(value in cacheRead.Entries[i].values)
//         {
//             average[0] += cacheRead.Entries[i].values.grassIndex;
//             average[1] += cacheRead.Entries[i].values.treeIndex;
//             average[2] += cacheRead.Entries[i].values.weedIndex;
//         }
//     }
//     average[0] /= 7;
//     average[1] /= 7;
//     average[2] /= 7;

//     if(Math.abs(average[0]-cacheRead.Entries[0].values.grassIndex) > 3 || Math.abs(average[1]-cacheRead.Entries[0].values.treeIndex) > 3 || Math.abs(average[2]-cacheRead.Entries[0].values.weedIndex) > 3)
//     {
//         return true;
//     }
//     return false;
// })

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
    // updateRequired,
    updateCache,
    populateCache
}