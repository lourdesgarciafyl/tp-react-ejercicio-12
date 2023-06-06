import { useState, useEffect } from "react";
import { Form, Button, Row, Col} from "react-bootstrap";
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
      console.log(dato.results);
      setNoticias(dato.results);
      }
    catch(errores){
      console.log(errores);
    }
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    API = `https://newsdata.io/api/1/news?apikey=pub_24021f4291fa33aa976aa3dddd22e4c75cb40&language=es${categoria}${pais}`
    consultarApi()
  }

    return (
        <section className="border rounded p-3 ">
            <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
            <Form.Group>
            <Row>
              <Col md={4}>
              <Form.Label>Seleccionar pais:</Form.Label>
              </Col>
              <Col md={8}>
              <Form.Select  
              className="mb-2"
              required
              onChange={(e) => setPais(e.target.value)} >
              <option value={""}>--Seleccione un pais--</option>
              <option value={"&country=ar"}>Argentina </option>
              <option value={"&country=au"}>Austria</option>
              <option value={"&country=br"}>Brasil</option>
              <option value={"&country=ca"}>Canada</option>
              <option value={"&country=cl"}>Chile</option>
              <option value={"&country=cn"}>China</option>
              <option value={"&country=co"}>Colombia</option>
              <option value={"&country=us"}>Estados Unidos</option>
              <option value={"&country=fr"}>Francia</option>
              <option value={"&country=ie"}>Irlanda</option>
              <option value={"&country=it"}>Italia</option>
              <option value={"&country=mx"}>Mexico</option>
              <option value={"&country=pe"}>Perú</option>
              <option value={"&country=pt"}>Portugal</option>
              <option value={"&country=gb"}>Reino Unido</option>
              </Form.Select>
              </Col>
              <Col md={4}>
              <Form.Label>Seleccionar categoría:</Form.Label>
              </Col>
              <Col md={8}>
              <Form.Select 
              className="mb-2"
              required
              onChange={(e) => setCategoria(e.target.value)} >
                <option value={""}>--Seleccione una categoria--</option>
                <option value={"&category=business"}>Negocios</option>
                <option value={"&category=entertainment"}>Entretenimiento</option>
                <option value={"&category=environment"}>Medio ambiente</option>
                <option value={"&category=food"}>Comida</option>
                <option value={"&category=health"}>Salud</option>
                <option value={"&category=politics"}>Política</option>
                <option value={"&category=science"}>Ciencia</option>
                <option value={"&category=sports"}>Deportes</option>
                <option value={"&category=technology"}>Tecnología</option>
                <option value={"&category=top"}>Importantes</option>
                <option value={"&category=world"}>Del mundo</option>
            </Form.Select>
            </Col>
            </Row>
          </Form.Group>
          <div  className="d-flex justify-content-end">
           <Button type="submit">Buscar</Button>
          </div>
        </Form>
        <BloqueNoticias noticias={noticias}></BloqueNoticias>
        </section>
    )
}

export default FormularioNoticias;