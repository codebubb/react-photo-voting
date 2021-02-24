const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./server/images.db');
const app = express();

app.use(cors());

app.get('/images', (req, res) => {
        db.all('SELECT * FROM votes', (err, rows) => {
            if (err) {
                console.log(err);
                return res.status(500, err);
            }
            return res.json(rows);
        });
      
});

app.patch('/upvote/:imageId', (req, res) => {
    const { imageId } = req.params;
    db.run(`UPDATE votes SET upvotes = upvotes + 1 WHERE id = ${imageId}`, (err, row) => {
        if (err) {
            console.log(err);
            return res.status(500, err);
        }

        return res.json({ status: 'OK', imageId });
    });
});

app.listen(3000, () => {
    console.log('App listening on port 3000...');
})