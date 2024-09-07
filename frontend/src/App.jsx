import { useState } from 'react'
import './App.css'

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setloggedIn] = useState(false)
  

 
  function changeEmail(event) {
    setEmail(event.target.value)
  }

  function changePassword(event) {
    setPassword(event.target.value)
  }

  async function logIn() {
  const request = await fetch ('http://localhost:4000/login?email=&password=' + email + '&password=' + password)
  
  if (request.ok) {
    alert('usuario encontrado')
    setloggedIn(true)
  } else {
    alert('usuario no registado')
  }

  console.log('loggedIn state:', loggedIn);
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
