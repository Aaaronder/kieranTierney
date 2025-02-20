import express from 'express';
import cors from 'cors';
import connection from './db.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// GET /fruits – Az összes gyümölcs lekérdezése.
app.get('/fruits', (req, res) => {
    connection.query('SELECT * FROM fruits', (err, results) => {
        res.json(results);
    });
});

// GET /fruits/:id – Egy adott gyümölcs lekérdezése ID alapján.
app.get('/fruits/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM fruits WHERE id = ?', [id], (err, results) => {
        res.json(results[0]);
    });
});

// POST /fruits – Új gyümölcs hozzáadása.
app.post('/fruits', (req, res) => {
    const { name, quantity, price } = req.body;
    connection.query('INSERT INTO fruits (name, quantity, price) VALUES (?, ?, ?)', [name, quantity, price], (err, results) => {
        res.status(201).json({ id: results.insertId, name, quantity, price });
    });
});

// PUT /fruits/:id – Egy meglévő gyümölcs adatainak frissítése.
app.put('/fruits/:id', (req, res) => {
    const { id } = req.params;
    const { name, quantity, price } = req.body;
    connection.query('UPDATE fruits SET name = ?, quantity = ?, price = ? WHERE id = ?', [name, quantity, price, id], (err, results) => {
        res.json({ id, name, quantity, price });
    });
});

// DELETE /fruits/:id – Egy gyümölcs törlése.
app.delete('/fruits/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM fruits WHERE id = ?', [id], (err, results) => {
        res.status(204).send();
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});