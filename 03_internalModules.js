// INTERNAL MODULES / INBUILT MODULES

// 1. PATH
const path = require("path");

const extensionName = path.extname("index.js");
console.log(extensionName)
console.log(path.join(__dirname, "index.js"));

// 2. OS
const os = require("os");
// console.log(os.arch());
// console.log(os.platform());
// console.log(os.cpus().length);
// console.log(os.userInfo());
console.log(os.version())

// 3. FS
const fs = require("fs");
const { log } = require("console");

// fs.mkdir("test", (err) => {
//     if (err) {
//         console.log(err);        
//     }
//     else {
//         console.log("Folder created successfully");        
//     }
// });

// fs.readFile("Data.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data.toString());        
//     }
// });

// fs.writeFile("Data.txt", "Hey I'm Akkya and I'm a Web Developer", (err) => {
//     if (err) {
//         console.log(err);        
//     }
//     else {
//         console.log("File written successfully")
//     }
// })

// fs.appendFile("Data.txt", "\nThank you", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Data added successfully");        
//     }
// })

// 4. HTTP
const http = require("http")
const server = http.createServer((req, res) => {
    res.end("<h1><center>Hello World</center></h1>")
})

server.listen(5000, () => console.log("Server is running"));