import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [nombre,setNombre] = useState("");
  const [animal,setAnimal] = useState("");
  const [show, setShow] = useState(false);

  const handlerEnviar=(event)=>{
    event.preventDefault();
    if(nombre.length <3 || nombre.length === " " || animal.length <6) {
        alert("Por favor chequea que la informacion sea correcta")
    } else{
      setShow(true);
    }
}

  
  return (
    <>
      <div>
        <h1>Elige tu animal favorito:</h1>
        <form className='form1' onSubmit={handlerEnviar}>
        <div>
        <label htmlFor= 'name'>
            Nombre: {" "}
        </label>
        <input id='name' 
        type= 'text'
        placeholder='Escriba su nombre'
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        />
        </div>
        <br/>
        <div>
        <label htmlFor= 'animal'>
            Animal: {" "}
        </label>
        <input id='animal' 
        type= 'text'
        placeholder='Escriba su animal favorito'
        value={animal}
        onChange={e => setAnimal(e.target.value)}
        />
        </div>
        <br/>
        <button className='boton' type='submit' onClick={() => {
          setShow(show);
        }}>Enviar</button>
        </form>
        <br/>
        {show && (
          <Card nombre={nombre} animal={animal} />
        )}
      </div>
    </>
  )
}

export default App
