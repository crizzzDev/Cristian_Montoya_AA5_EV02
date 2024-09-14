// Importa la función createConnection desde el módulo "mysql"
import { createConnection } from "mysql";

// Crea una conexión con la base de datos MySQL usando la configuración especificada
const db = createConnection({
    host: '127.0.0.1', // Dirección IP local del servidor de la base de datos
    port: 3307,        // Puerto en el que está escuchando el servidor MySQL
    user: 'root',      // Nombre de usuario para la conexión
    password: '',      // Contraseña para la conexión (vacía en este caso)
    database: 'users'  // Nombre de la base de datos a la que se conectará
});

// Inicia la conexión a la base de datos
db.connect((err) => {
    if (err) {
        // Si hay un error en la conexión, imprime un mensaje de error y el detalle del error
        console.error('Error de conexión a la base de datos:', err);
        return; // Sale de la función para evitar seguir ejecutando el código
    }
    // Si la conexión es exitosa, imprime un mensaje de éxito
    console.log('Conectado a la base de datos con éxito');
});

//// Consulta de datos
// Realiza una consulta a la tabla 'info' para seleccionar todos los registros
db.query('SELECT * FROM info', (err, rows) => {
    if (err){
        // Si hay un error en la consulta, imprime un mensaje de error
        console.error('Error de consulta de datos:', err);
        return; // Sale de la función si ocurre un error
    }
    // Si la consulta es exitosa, imprime los resultados obtenidos
    console.log('resultado de la consulta:');
    console.log(rows); // Muestra las filas obtenidas de la consulta
});
