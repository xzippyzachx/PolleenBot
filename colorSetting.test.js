const {Color2,Color1,Color3} = require('./colorSetting.js');
const contentGenerator = require('./contentGenerator');
const dataCache = require('./dataCache');

const fs = require('fs');
const { JSDOM } = require('jsdom');

test('Change the color of green to black',()=>{
    return new Promise(contentGenerator.generate).then((text) => {
        let pollenData = dataCache.fetch();

        let svgFile = fs.readFileSync('./Post.svg', 'utf-8');
        let dom = new JSDOM(svgFile, { contentType: 'image/svg+xml' });
        let document = dom.window.document;
        let treeElement1 = document.getElementById('linearGradient8213');

        let actualColor = treeElement1.style.stopColor;
        let expectColor = pollenData.values.treeIndex < 2 ? "rgb(111, 207, 10)" : pollenData.values.treeIndex < 4 ? "rgb(255, 219, 30)" : "rgb(255, 0, 0)";

        expect(actualColor).toBe(expectColor);
    })
    
});