const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.statusCode = 200;
        res.end('Hello from get')
    }
    else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            res.statusCode = 200;
            res.end(`Received POST data: ${body}`);
        });
    }
    else {
        res.statusCode = 400;
        res.end('Method Not Allowed');
    }
})

server.listen(5000, () =>{
    console.log('Server is running at http://localhost:5000');
});