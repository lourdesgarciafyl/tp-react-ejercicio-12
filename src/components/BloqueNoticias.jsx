import {Row} from "react-bootstrap"
import CardNoticia from "./CardNoticia";

const BloqueNoticias = ({noticias}) => {
    return(
        <Row>
            {noticias.map((noticia, indice) =>(
                <CardNoticia noticia={noticia} key={indice}></CardNoticia>
            ))}
        </Row>
    )
}

export default BloqueNoticias;