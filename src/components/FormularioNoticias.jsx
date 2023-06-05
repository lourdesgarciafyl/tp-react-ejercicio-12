import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";


const FormularioNoticias = ({ consultarApi }) => {
    const [categoria, setCategoria] = useState("");

    const handleOpciones = (event) =>{
        const categoriaElegida = event.target.value;
        setCategoria(categoriaElegida)
        if(categoriaElegida === "--Seleccione una categoria--"){
            return 
        } else{
            consultarApi(categoriaElegida)
        }
    }

    return (
        <section>
            <Form className="d-flex flex-column align-items-center flex-md-row justify-content-md-center">
                <Form.Group as={Row}>
                <Col md={5}>
                <Form.Label className="mt-1">Buscar por categoría:</Form.Label>
                </Col>
                <Col md={6}>
                <Form.Select  className="mx-2" id="formSelect" onChange={handleOpciones} value={categoria}>
                <option value="">--Seleccione una categoria--</option>
                <option value="top">Destacadas</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="politics">Politica</option>
                <option value="technology">Tecnología</option>
                </Form.Select>
                </Col>
                </Form.Group>
        </Form>
        </section>
    )
}

export default FormularioNoticias;