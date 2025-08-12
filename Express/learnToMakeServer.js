const express = require("express");
const path = require("path");

const server = express();

const port = 9000;

server.get('/', (req, res) => {
    res.send('Home Page');
});

server.get('/about', (req, res) => {
    res.send('About');
});

server.get('/serverStatus', (req, res) => {
    res.status(200).send('running');
});

server.get('/htmlFile', (req, res) => {
    res.sendFile(path.resolve(__dirname)+'/index.html');
});

module.exports = () => {
    server.listen(port, () => {
        console.log(`Server is running on port http://localhost:${port}`);
    });
}


