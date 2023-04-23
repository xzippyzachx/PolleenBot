const dataCache = require('./dataCache')
const {Color2,Color1,Color3} = require('./colorSetting.js')
const fs = require('fs');
const { JSDOM } = require('jsdom');
const svgConvert = require('./svgConvertion.js')


//get Information of pollen
var pollenData = undefined;
var treeValue = undefined;
var grassValue = undefined;
var weedsValue = undefined;
var time = undefined;
var twitterMessage = undefined;

var treeTextValue = undefined;
var grassTextValue = undefined;
var weedsTextValue = undefined;

const getInfo = (() => {
    pollenData = dataCache.fetch();

    time = new Date(pollenData.Time).toISOString().slice(0, 10);
    treeValue = pollenData.values.treeIndex;
    grassValue = pollenData.values.grassIndex;
    weedsValue = pollenData.values.weedIndex;
})

const generate = ((resolve, reject) => {
    getInfo();

    console.log("Started editing image");
    const svgFile = fs.readFileSync('./Post.svg', 'utf-8');
    const dom = new JSDOM(svgFile, { contentType: 'image/svg+xml' });
    const document = dom.window.document;

    //Get style ID
    const treeElement1 = document.getElementById('linearGradient8213');
    const treeElement2 = document.getElementById('stop8209');

    const grassElement1 = document.getElementById('linearGradient8316');
    const grassElement2 = document.getElementById('stop8312');

    const weedsElement1 = document.getElementById('linearGradient8308');
    const weedsElement2 = document.getElementById('stop8304');

    //Get Text ID
    const treeText = document.getElementById('tspan8344');
    const grassText = document.getElementById('tspan8348');
    const weedsText = document.getElementById('tspan8352');

    //Tree
    if(treeValue >= 0 && treeValue <= 1){
        treeElement1.style = Color3;
        treeElement2.style = Color3;
        treeText.textContent = "Low";
        treeTextValue = "Low";
    }else if(treeValue >= 2 && treeValue <= 3){  
        treeElement1.style = Color1;
        treeElement2.style = Color1;
        treeText.textContent = "Medium";
        treeTextValue = "Medium";
    }else{
        treeElement1.style = Color2;
        treeElement2.style = Color2;
        treeText.textContent = "High";
        treeTextValue = "High";
    }

    // grass
    if(grassValue >= 0 && grassValue <= 1){
        grassElement1.style = Color3;
        grassElement2.style = Color3;
        grassText.textContent = "Low";
        grassTextValue = "Low";
    }else if(grassValue >= 2 && grassValue <= 3){  
        grassElement1.style = Color1;
        grassElement2.style = Color1;
        grassText.textContent = "Medium";
        grassTextValue = "Medium";
    }else{
        grassElement1.style = Color2;
        grassElement2.style = Color2;
        grassText.textContent = "High";
        grassTextValue = "High";
    }

    //weeds
    if(weedsValue >= 0 && weedsValue <= 1){
        weedsElement1.style = Color3;
        weedsElement2.style = Color3;
        weedsText.textContent = "Low";
        weedsTextValue = "Low";
    }else if(weedsValue >= 2 && weedsValue <= 3){  
        weedsElement1.style = Color1;
        weedsElement2.style = Color1;
        weedsText.textContent = "Medium";
        weedsTextValue = "Medium";
    }else{
        weedsElement1.style = Color2;
        weedsElement2.style = Color2;
        weedsText.textContent = "High";
        weedsTextValue = "High";
    }

    let updatedSvgFile = dom.serialize();
    fs.writeFileSync('Post.svg', updatedSvgFile);
    console.log("Image editing finished!");

    //convert Post.svg to Post.jpg
    return new Promise(svgConvert.svgConvert).then(() => {
        twitterMessage = `Pollen levels in Toronto ${time}\nTree: ${treeTextValue}\nGrass: ${grassTextValue}\nWeeds: ${weedsTextValue}`;

        resolve(twitterMessage);
    }).catch((error) => {
        reject(error);
    });
})


module.exports = {
    generate
}