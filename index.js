import express from "express";
import mysql from 'mysql2/promise';
import cors from 'cors'


import { dirname, join } from 'path';
import { fileURLToPath } from "url";

// Servidor Creado
const __dirname = dirname(fileURLToPath(import.meta.url));

// Crear la conexión a la base de datos
const app = express()
app.use(cors());
const connection = await mysql.createConnection({
  host: '127.0.0.1',  // Usar 127.0.0.1 en lugar de localhost
  port: 3307,         // Especificar el puerto 3307
  user: 'root',
  password: '',     
  database: 'adsousers',
});

// Consulta Básica
app.get('/', (req, res) => res.send("Hey esto funciona"));

app.get('/login', async (req, res) => {
  const { email, password } = req.query;
  console.log(`Datos recibidos - Email: ${email}, Password: ${password}`);
  
  try {
    const [results, fields] = await connection.query(
      "SELECT * FROM `users` WHERE `email` = ? AND `password` = ?",
      [email, password]  // Pasar los parámetros a la consulta
    );
    
    console.log(`Resultados de la consulta:`, results);

    if (results.length > 0) {
      res.status(200).send("Inicio de sesión correcto");
    } else {
      res.status(401).send("Error de inicio de sesión: Usuario o contraseña incorrectos");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error en el servidor");
  }
});

// Define una ruta en el servidor para manejar las solicitudes GET a '/validate'.
// Cuando un cliente realiza una solicitud GET a esta ruta, el servidor responde con el texto 'sesion validada'.
app.get('/validate',(req,res)=>{
  res.send('sesion validada')
})

// Iniciar el servidor
app.listen(4000)
  console.log("Servidor en el puerto", 4000)

// Configuración para insertar las imágenes y los estilos
app.use(express.static(join(__dirname, 'public')));