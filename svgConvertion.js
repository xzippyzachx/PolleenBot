const fs = require('fs');
const svg2img = require('svg2img');

const svgConvert = ((resolve, reject) => {

    // Read the SVG file as a string
    let svgString = fs.readFileSync('./Post.svg', 'utf-8');
    
    // Convert the SVG string to a JPEG image
    svg2img(svgString, { format: 'jpg' }, (error, buffer) => {
        if (error) {
            reject(error);
        } else {
            // Save the JPG image buffer to a file
            fs.writeFileSync('./Post.jpg', buffer);
            resolve();
            console.log("Image conversion finished!");
        }
    });
});

module.exports = {
    svgConvert
}
