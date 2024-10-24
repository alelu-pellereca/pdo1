import express, { json } from 'express';

const app = express();
app.use(json());

// Ruta básica
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World probando!' });
});

// Ruta de ejemplo para pruebas
app.post('/echo', (req, res) => {
    const { body } = req;
    res.status(200).json(body);
});

export default app;