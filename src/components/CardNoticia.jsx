import React from "react";
import {Card, Col, Button} from "react-bootstrap"

const CardNoticia = ({ noticia }) => {

    return(
        <Col sm={12} md={4}>
        <Card className="mb-1 mt-2">
            <Card.Img variant="top" src={noticia.image_url} alt="imagen de la noticia"></Card.Img>
            <Card.Body>
                <Card.Title>{noticia.title}</Card.Title>
                <h6 className="lead fs-6">Fuente: {noticia.source_id}</h6>
                <hr className="my-1"/>
                <Card.Text className="descripcionNoticia">{noticia.description}</Card.Text>
                <a variant="primary" href={noticia.link}>Ver noticia completa</a>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default CardNoticia;