import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud'
});

// READ - Get a specific student by ID
app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM student WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Database error' });
        }
        return res.json(result);
    });
});

// CREATE - Insert a new student
app.post('/student', (req, res) => {
    const sql = "INSERT INTO student (Name, Age, Email) VALUES (?, ?, ?)";
const values = [req.body.Name, req.body.Age, req.body.Email];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Database error' });
        }
        return res.json(result);
    });
});

// UPDATE - Update student data by ID
app.put('/update/:id', (req, res) => {
    const sql = "UPDATE student SET Name = ?, Age = ?, Email = ? WHERE ID = ?";
    const values = [
        req.body.Name,
        req.body.Age,
        req.body.Email,
        req.params.id
    ];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Database error' });
        }
        return res.json(result);
    });
});

// DELETE - Delete a student by ID
app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM student WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Database error' });
        }
        return res.json(result);
    });
});

app.listen(8081, () => {
    console.log('Server started on port 8081');
});
