const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'smart_city'
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected!');
});

app.use(express.json());

app.get('/api/traffic', (req, res) => {
    const query = 'SELECT * FROM traffic_data';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/api/pollution', (req, res) => {
    const query = 'SELECT * FROM pollution_data';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/api/energy', (req, res) => {
    const query = 'SELECT * FROM energy_data';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
