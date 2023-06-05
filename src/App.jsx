import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import FormularioNoticias from './components/FormularioNoticias';
import BloqueNoticias from "./components/BloqueNoticias";


function App() {
  const[noticias, setNoticias] = useState([])

  const consultarApi = async (categoria) =>{
    try{
      const respuesta = await fetch("https://newsdata.io/api/1/news?apikey=pub_24021f4291fa33aa976aa3dddd22e4c75cb40&language=es&category="+categoria)
      const datos = await respuesta.json()
      console.log(datos.results)
      setNoticias(datos.results)
    }
    catch(errores){
      console.log(errores)
    }
  }

  return (
    <>
    <Container id='containerPrincipal'>
      <h1 className="display-5 text-center my-3">Web de noticias</h1>
      <hr />
      <FormularioNoticias consultarApi={consultarApi}></FormularioNoticias>
      <BloqueNoticias noticias={noticias}></BloqueNoticias>
    </Container>
    <footer className='bg-dark text-light text-center py-3'>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
