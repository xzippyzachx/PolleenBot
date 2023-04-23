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

test('Test the function of generate()',()=>{
    
    return new Promise(contentGenerator.generate).then((text) => {        
        let pollenData = dataCache.fetch();

        let time = new Date(pollenData.Time).toISOString().slice(0, 10);

        let treeTextValue = pollenData.values.treeIndex < 2 ? "Low" : pollenData.values.treeIndex < 4 ? "Medium" : "High";
        let grassTextValue = pollenData.values.grassIndex < 2 ? "Low" : pollenData.values.grassIndex < 4 ? "Medium" : "High";
        let weedsTextValue = pollenData.values.weedIndex < 2 ? "Low" : pollenData.values.weedIndex < 4 ? "Medium" : "High";

        expect(text).toBe(`Pollen levels in Toronto ${time}\nTree: ${treeTextValue}\nGrass: ${grassTextValue}\nWeeds: ${weedsTextValue}`);
    })
});