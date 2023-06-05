const http = require('http');

const HTML = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>これはただの文字列です</title>
</head>
<body>
    <h1>こんにちは、これはただの文字列です</h1>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(HTML);
});

server.listen(3000);
