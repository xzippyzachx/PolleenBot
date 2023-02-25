// const {redColor,yellowColor,greenColor, treeValue, weedsValue, grassValue} = require('./colorSetting.js');
// const fs = require('fs');
// const { JSDOM } = require('jsdom');

// const svgFile = fs.readFileSync('./Post.svg', 'utf-8');
// const dom = new JSDOM(svgFile, { contentType: 'image/svg+xml' });
// const document = dom.window.document;

// const treeElement1 = document.getElementById('linearGradient8213');
// const treeElement2 = document.getElementById('stop8209');

// const grassElement1 = document.getElementById('linearGradient8316');
// const grassElement2 = document.getElementById('stop8312');

// const weedsElement1 = document.getElementById('linearGradient8308');
// const weedsElement2 = document.getElementById('stop8304');

// //Tree
// if(treeValue >= 0 && treeValue <= 1){
//     treeElement1.style = greenColor;
//     treeElement2.style = greenColor;
// }else if(treeValue >= 2 && treeValue <= 3){  
//     treeElement1.style = yellowColor;
//     treeElement2.style = yellowColor;
// }else{
//     treeElement1.style = redColor;
//     treeElement2.style = redColor;
// }

// // grass
// if(grassValue >= 0 && grassValue <= 1){
//     grassElement1.style = greenColor;
//     grassElement2.style = greenColor;
// }else if(grassValue >= 2 && grassValue <= 3){  
//     grassElement1.style = yellowColor;
//     grassElement2.style = yellowColor;
// }else{
//     grassElement1.style = redColor;
//     grassElement2.style = redColor;
// }


// //weeds
// if(weedsValue >= 0 && weedsValue <= 1){
//     weedsElement1.style = greenColor;
//     weedsElement2.style = greenColor;
// }else if(weedsValue >= 2 && weedsValue <= 3){  
//     weedsElement1.style = yellowColor;
//     weedsElement2.style = yellowColor;
// }else{
//     weedsElement1.style = redColor;
//     weedsElement2.style = redColor;
// }


// const updatedSvgFile = dom.serialize();
// fs.writeFileSync('Post.svg', updatedSvgFile);

const poster = require('./poster.js')
console.log(poster.makePost());
// console.log(process.env.TWITTER_API_KEY);
// console.log(process.env.TWITTER_API_KEY_SECRET);
// console.log(process.env.TWITTER_ACCESS_TOKEN);
// console.log(process.env.TWITTER_ACCESS_TOKEN_SECRET);
// console.log(process.env.TOMORROW_IO_KEY);











// console.log(`Styele="${redColor}"`);
// console.log(`the yellowColor is:${yellowColor}`);
// console.log(`the greenColor is:${greenColor}`);