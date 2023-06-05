import {Row} from "react-bootstrap"
import React from "react";
import CardNoticia from "./CardNoticia";

const BloqueNoticias = ({noticias}) => {
    return(
        <Row xs={12} md={4} className="g-4 mb-3">
            {noticias.map((noticia, indice) =>(
                <CardNoticia noticia={noticia} key={indice}></CardNoticia>
            ))}
        </Row>
    )
}

export default BloqueNoticias;