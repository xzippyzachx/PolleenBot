const svgConvert = (()=>{
    const fs = require('fs');
    const svg2img = require('svg2img');

    // Read the SVG file as a string
    const svgString = fs.readFileSync('./Post.svg', 'utf-8');

    // Convert the SVG string to a JPEG image
    svg2img(svgString, { format: 'jpeg' }, function(error, buffer) {
    if (error) {
        console.error(error);
    } else {
        // Save the JPEG image buffer to a file
        fs.writeFileSync('./Post.jpg', buffer);
    }
});

})


module.exports = {
    svgConvert
}
