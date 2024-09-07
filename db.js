import mongoose from "mongoose";

const DB_URI = 'mongodb://localhost:27017/users';

mongoose.connect(DB_URI)
  .then(() => {
    console.log('Conectado a la base de datos');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

// Define el esquema
const usersInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

// Especifica el nombre de la colección manualmente
const usersInfo = mongoose.model('usersInfo', usersInfoSchema, 'usersInfo');

usersInfo.find().maxTimeMS(5000) // tiempo máximo de 5 segundos
  .then((usersInfo) => {
    console.log('Usuarios encontrados:', usersInfo);
  })
  .catch((err) => {
    console.error('Error al encontrar usuarios:', err);
  });
