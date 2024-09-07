import { createConnection } from "mysql";

const db = createConnection({
    host: '127.0.0.1',
    port: 3307,
    user: 'root',
    password: '',
    database: 'users'
});

db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos con éxito');
});
//// consulta
db.query('SELECT * FROM info', (err, rows) => {
    if (err){
        console.error('Error de consulta de datos:', err)
    return
    }
    console.log('resultado de la consulta:')
    console.log(rows)
});