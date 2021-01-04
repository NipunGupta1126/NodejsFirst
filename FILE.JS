const fs = require("fs")
// const book = {title:'helloo',author:'nipun'}

// const bookjson = JSON.stringify(book)
// fs.writeFileSync('1json.json',bookjson)
const databuffer = fs.readFileSync('1json.json')
const data = databuffer.toString();
console.log(data);