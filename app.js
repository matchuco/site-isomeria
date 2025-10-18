const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/quemsomos', (req, res) => {
    res.sendFile(__dirname + '/public/quemsomos.html');
});

app.listen(port, () => {
    console.log(`✅ Site rodando em: http://localhost:${port}`);
    console.log(`🏠 Página inicial: http://localhost:${port}/`);
    console.log(`👥 Quem somos: http://localhost:${port}/quemsomos`);
  
});