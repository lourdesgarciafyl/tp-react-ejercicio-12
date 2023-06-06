import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FormularioNoticias from './components/FormularioNoticias';


function App() {
  return (
    <>
    <Container id='containerPrincipal'>
      <h1 className="display-5 text-center my-3">Web de noticias</h1>
      <hr />
      <FormularioNoticias></FormularioNoticias>
    </Container>
    <footer className='bg-dark text-light text-center py-3'>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
