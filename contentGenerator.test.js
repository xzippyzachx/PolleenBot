const contentGenerator = require('./contentGenerator')
const dataCache = require('./dataCache')

test(`Test initial variables`,()=>{
expect(contentGenerator.pollenData).toBe(undefined);
expect(contentGenerator.treeValue).toBe(undefined);
expect(contentGenerator.grassValue).toBe(undefined);
expect(contentGenerator.weedsValue).toBe(undefined);
expect(contentGenerator.time).toBe(undefined);
expect(contentGenerator.twitterMessage).toBe(undefined);
expect(contentGenerator.treeTextValue).toBe(undefined);
expect(contentGenerator.grassTextValue).toBe(undefined);
expect(contentGenerator.weedsTextValue).toBe(undefined);
});


// test('Test the function of getInfo()',()=>{
//     contentGenerator.getInfo();

//     const actualTreeIndex = contentGenerator.treeValue;
//     const actualGrassIndex = contentGenerator.grassValue;
//     const actualWeedsIndex = contentGenerator.weedsValue;
//     const actualTime = contentGenerator.time;

//     const expectTreeIndex = dataCache.fetch().values.treeIndex;
//     const expectGrassIndex = dataCache.fetch().values.grassIndex;
//     const expectWeedIndex = dataCache.fetch().values.weedIndex;
//     const expectTime = new Date(dataCache.fetch().Time).toISOString().slice(0, 10);

//     expect(actualTreeIndex).toBe(expectTreeIndex);
//     expect(actualGrassIndex).toBe(expectGrassIndex);
//     expect(actualWeedsIndex).toBe(expectWeedIndex);
//     expect(actualTime).toBe(expectTime);
// });

// test('Test the function of generate()',()=>{
//     new Promise(contentGenerator.generate).then((text) => {
//         console.log(text);
//     })
    
// });