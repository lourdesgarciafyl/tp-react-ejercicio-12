import { useState, useEffect } from "react";
import { Form, Button} from "react-bootstrap";
import BloqueNoticias from "./BloqueNoticias";

const FormularioNoticias = () => {
  const [pais, setPais] = useState("")
  const [categoria, setCategoria] = useState("")
  const [noticias, setNoticias] = useState([]);
  let API = `https://newsdata.io/api/1/news?apikey=pub_24021f4291fa33aa976aa3dddd22e4c75cb40&language=es`

  useEffect(() =>{
    consultarApi()
  }, [])

  const consultarApi = async () =>{
    try {
      const respuesta = await fetch(API);
      const dato = await respuesta.json();
      console.log(dato.result);
      setNoticias(dato.results);
      }
    catch(errores){
      console.log(errores)
    }
  };

    return (
        <section>
            <Form className="d-flex flex-column align-items-center">

            <Form.Group className="me-4" controlId="controlPais">
            <Form.Label>Seleccionar pais:</Form.Label>
            <Form.Select  className="formSelect" >
              <option value="">--Seleccione un pais--</option>
              <option value="ar">Argentina</option>
              <option value="de">Alemania</option>
              <option value="be">Belgica</option>
              <option value="br">Brasil</option>
              <option value="ca">Canada</option>
              <option value="ch">China</option>
              <option value="co">Colombia</option>
              <option value="fr">Francia</option>
              <option value="us">Estados Unidos</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="controlCategoria">
            <Form.Label className="mt-1">Seleccionar categoría:</Form.Label>
            <Form.Select className="formSelect" >
                <option value="">--Seleccione una categoria--</option>
                <option value="top">Destacadas</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="politics">Politica</option>
                <option value="technology">Tecnología</option>
            </Form.Select>
             </Form.Group>

             <Button variant="primary" className="my-2" type="submit">
               Enviar
            </Button>
        </Form>
        <BloqueNoticias noticias={noticias} categoria={categoria} pais={pais}></BloqueNoticias>
        </section>
    )
}

export default FormularioNoticias;