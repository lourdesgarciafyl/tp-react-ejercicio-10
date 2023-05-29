import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FormularioPeliculas from './components/FormularioPeliculas';


function App() {

  return (
    <>
    <Container id="containerPrincipal">
      <FormularioPeliculas></FormularioPeliculas>
    </Container>
    <footer className='bg-dark text-light text-center py-3'>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
