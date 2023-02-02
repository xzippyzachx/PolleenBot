
const data = "Hello";

const get = ( () => 
{
    console.log("GET: " + data)
    return data;
})



module.exports = {
    get
    
}