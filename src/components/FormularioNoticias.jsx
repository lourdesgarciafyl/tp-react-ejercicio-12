import { useState } from "react";
import { Form, Button} from "react-bootstrap";
import BloqueNoticias from "./BloqueNoticias";
import { useForm } from "react-hook-form";

const FormularioNoticias = () => {
  const [pais, setPais] = useState("")
  const [categoria, setCategoria] = useState("")
  const [noticias, setNoticias] = useState([]);
  const {register, formState: {errors}, reset , handleSubmit} = useForm()

  const consultarApi = async (datos = "") =>{
    try{
      if(datos === ""){
        const respuesta = await fetch("https://newsdata.io/api/1/news?apikey=pub_24021f4291fa33aa976aa3dddd22e4c75cb40")
        const data = await respuesta.json()
        console.log(data.results)
        setNoticias(data.results)
      }else{
        const respuesta = await fetch(`https://newsdata.io/api/1/news?apikey=pub_24021f4291fa33aa976aa3dddd22e4c75cb40&country=${datos.pais}&language=es&category=${datos.categoria}`)
        const data = await respuesta.json()
        console.log(data.results)
        console.log(datos.pais)
        console.log(datos.categoria)
        setNoticias(data.results)
        setPais(datos.pais)
        setCategoria(datos.categoria)
      }}
    catch(errores){
      console.log(errores)
    }
  }

    return (
        <section>
            <Form onSubmit={handleSubmit(consultarApi)} className="d-flex flex-column align-items-center">

            <Form.Group className="me-4" controlId="controlPais">
            <Form.Label>Seleccionar pais:</Form.Label>
            <Form.Select  className="formSelect" 
            {... register("pais", 
            {required: "Campo obligatorio"})}>
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
            <Form.Text className="text-danger">{errors.pais?.message}</Form.Text>
          </Form.Group>

          <Form.Group controlId="controlCategoria">
            <Form.Label className="mt-1">Seleccionar categoría:</Form.Label>
            <Form.Select className="formSelect"  
            {... register("categoria", 
            {required: "Campo obligatorio"})}>
                <option value="">--Seleccione una categoria--</option>
                <option value="top">Destacadas</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="politics">Politica</option>
                <option value="technology">Tecnología</option>
            </Form.Select>
            <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
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