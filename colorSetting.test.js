const {Color2,Color1,Color3} = require('./colorSetting.js')
const contentGenerator = require('./contentGenerator')

test('Change the color of green to black',()=>{
    colorSetting.Color3 = "stop-color:#000000;stop-opacity:1;";
    new Promise(contentGenerator.generate).then((text) => {
        const svgFile = fs.readFileSync('./Post.svg', 'utf-8');
        const dom = new JSDOM(svgFile, { contentType: 'image/svg+xml' });
        const document = dom.window.document;
        const treeElement1 = document.getElementById('linearGradient8213');
        const actualColor = treeElement1.style;
        const expectColor = "stop-color:#000000;stop-opacity:1;";
        expect(actualColor).toBe(expectColor);
    })
    
});