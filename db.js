// Importa el paquete mongoose para manejar la conexión y las consultas a MongoDB
import mongoose from "mongoose";

// Define la URI de la base de datos local MongoDB
const DB_URI = 'mongodb://localhost:27017/users';

// Conecta a la base de datos MongoDB usando la URI especificada
mongoose.connect(DB_URI)
  .then(() => {
    // Si la conexión es exitosa, muestra este mensaje
    console.log('Conectado a la base de datos');
  })
  .catch((err) => {
    // Si ocurre un error en la conexión, lo imprime en la consola
    console.error('Error al conectar a la base de datos:', err);
  });

// Define el esquema de la colección 'usersInfo', que describe la estructura de los documentos
const usersInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Campo 'name', de tipo String y obligatorio
  email: { type: String, required: true }, // Campo 'email', de tipo String y obligatorio
});

// Crea un modelo llamado 'usersInfo' basado en el esquema, enlazado a la colección 'usersInfo'
const usersInfo = mongoose.model('usersInfo', usersInfoSchema, 'usersInfo');

// Realiza una consulta para encontrar todos los documentos de la colección 'usersInfo'
// maxTimeMS(5000) establece un tiempo límite de 5 segundos para la operación
usersInfo.find().maxTimeMS(5000)
  .then((usersInfo) => {
    // Si la consulta es exitosa, imprime los documentos encontrados
    console.log('Usuarios encontrados:', usersInfo);
  })
  .catch((err) => {
    // Si ocurre un error en la consulta, lo imprime en la consola
    console.error('Error al encontrar usuarios:', err);
  });
