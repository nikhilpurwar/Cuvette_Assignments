const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const data = fs.readFileSync('sample.json')
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(data);
});

server.listen(7000, () => {
    console.log("Server is running at http://localhost:7000");
});