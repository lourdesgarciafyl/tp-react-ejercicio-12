import { useState } from "react";
import { Form, Button} from "react-bootstrap";
import BloqueNoticias from "./BloqueNoticias";
import { useForm } from "react-hook-form";

const FormularioNoticias = () => {
  const [noticias, setNoticias] = useState([]);

  const {register, formState: {errors}, reset , handleSubmit} = useForm()

  const consultarApi = async ({categoria, pais}) =>{
    try{
      const respuesta = await fetch("https://newsdata.io/api/1/news?apikey=pub_24021f4291fa33aa976aa3dddd22e4c75cb40&country="+pais+"&language=es&category="+categoria)
      const datos = await respuesta.json()
      console.log(datos.results)
      setNoticias(datos.results)
    }
    catch(errores){
      console.log(errores)
    }
  }

    return (
        <section>
            <Form onSubmit={handleSubmit(consultarApi)} className="d-flex flex-column align-items-center">

            <Form.Group className="me-4">
            <Form.Label>Seleccionar pais:</Form.Label>
            <Form.Select  className="formSelect" {... register("pais", {required: "Campo obligatorio"})}>
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

          <Form.Group>
            <Form.Label className="mt-1">Seleccionar categoría:</Form.Label>
            <Form.Select className="formSelect"  {... register("categoria", {required: "Campo obligatorio"})}>
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
        </section>
    )
}

export default FormularioNoticias;