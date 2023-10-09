const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const app = express()

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'ABJJP',
    password: '#4bJJP23',
    database: 'etproject'
}); 

db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err)
    } else {
        console.log('Conexión a la base de datos MySQL establecida')
    }
})

const port = 3000
app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`)
})
app.use(express.json())
app.use(cors())

app.post('/saveLog', (req, res) => {
    const { Prompt, Log, Date } = req.body
    
    if (!Prompt || !Log || !Date) {
        res.status(400).send('El JSON debe incluir "Prompt", "Log" y "Date".')
        return
    }
    
    const sql = 'INSERT INTO log (Prompt, Log, Date) VALUES (?, ?, ?)'
    
    db.query(sql, [Prompt, JSON.stringify(Log), Date], (err, result) => {
        if (err) {            
            res.status(500).send('Error en el servidor', err.message)
        } else {            
            res.status(200).send('Registro insertado correctamente')
        }
    })
})

// app.get('/usuarios', (req, res) => {

//     db.query('SELECT * FROM doctor', (err, results) => {
//         if (err) {
//             console.error('Error al ejecutar la consulta:', err)
//             res.status(500).send('Error en el servidor')
//         } else {
//             res.json(results)
//         }
//     })
// })