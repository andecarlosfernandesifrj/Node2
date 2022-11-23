var http = require ('http');
http.createServer (function (req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<b>Aula de Node.js<b> <br>');
    res.write('<i>Aluna: Raiane Franco</i> <br>');
    res.end('Bom dia!');

}).listen(80);

