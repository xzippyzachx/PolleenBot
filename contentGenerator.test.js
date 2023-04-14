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


test('Test the function of getInfo()',()=>{
    contentGenerator.getInfo();
    expect(contentGenerator.twitterMessage).toBe(undefined);
    expect(contentGenerator.treeTextValue).toBe(dataCache.fetch().values.treeIndex);
    expect(contentGenerator.grassTextValue).toBe(dataCache.fetch().values.grassIndex);
    expect(contentGenerator.weedsTextValue).toBe(dataCache.fetch().values.weedIndex);
    expect(contentGenerator.time).toBe(new Date(dataCache.fetch().Time).toISOString().slice(0, 10));
});