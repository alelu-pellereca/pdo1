const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World gral!' });
});

app.post('/echo', (req, res) => {
    res.json(req.body);
});

// Nueva ruta para la primera imagen
app.get('/image1', (req, res) => {
    res.json({ image: 'alepellereca/imagenfront:latest', description: 'Frontend' });
});

// Nueva ruta para la segunda imagen
app.get('/image2', (req, res) => {
    res.json({ image: 'alepellereca/imagenback:latest', description: 'Backend' });
});

module.exports = app;
