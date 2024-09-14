// Importa el hook useState de React para manejar el estado
import { useState } from 'react'
import './App.css' // Importa los estilos CSS

function App() {

  // Define los estados locales para el email, contraseña y si el usuario está logueado
  const [email, setEmail] = useState('')       // Estado para el email
  const [password, setPassword] = useState('') // Estado para la contraseña
  const [loggedIn, setloggedIn] = useState(false) // Estado para saber si el usuario está logueado
  

  // Función para actualizar el estado del email cuando se cambia el valor en el input
  function changeEmail(event) {
    setEmail(event.target.value) // Actualiza el estado 'email' con el valor ingresado
  }

  // Función para actualizar el estado de la contraseña cuando se cambia el valor en el input
  function changePassword(event) {
    setPassword(event.target.value) // Actualiza el estado 'password' con el valor ingresado
  }

 // Función asíncrona que realiza la solicitud de inicio de sesión
 async function logIn() {
  // Realiza la solicitud al servidor para verificar el email y la contraseña
  const request = await fetch ('http://localhost:4000/login?email=' + email + '&password=' + password)
  
    // Verifica si la respuesta fue exitosa (usuario encontrado)
    if (request.ok) {
      alert('usuario encontrado') // Muestra una alerta si el usuario fue encontrado
      setloggedIn(true) // Actualiza el estado a 'loggedIn' como verdadero
    } else {
      alert('usuario no registado') // Muestra una alerta si el usuario no fue encontrado
    }

    // Imprime el estado de 'loggedIn' para depuración
    console.log('loggedIn state:', loggedIn);

    // Si el usuario está logueado, devuelve el componente 'principal' (debería definirse)
    if (loggedIn) {
      return <principal/>;
    }
  }
  
  return (
    <>
      <h1>Inicio de Sesión</h1>
      <input 
        className="input-block"  // Clase añadida
        placeholder="Enter your email" 
        type="text" 
        name="email" 
        id="email" 
        value={email} 
        onChange={changeEmail} 
      />
      <input 
        className="input-block"  // Clase añadida
        placeholder="Password" 
        type="password" 
        name="password" 
        id="password" 
        value={password} 
        onChange={changePassword} 
      />
      <button className="btn-login" onClick={logIn}>Log In</button>
    </>
  )
  
}

export default App
