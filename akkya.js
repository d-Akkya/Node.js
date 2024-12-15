const http = require("http")

const server = http.createServer((req, res) => {
    res.end(req.url)    
})

server.listen(5000, () => console.log("Server is runnig"))