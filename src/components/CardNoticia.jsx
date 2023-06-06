import {Card, Col, Button} from "react-bootstrap"

const CardNoticia = ({ noticia }) => {

    return(
        <Col sm={12} md={6} lg={4}>
        <Card className="mb-1 mt-2">
            <Card.Img variant="top" src={noticia.image_url} alt="imagen de la noticia"></Card.Img>
            <Card.Body>
                <Card.Text className="text-muted">{noticia.creator}</Card.Text>
                <Card.Title className="fs-6">{noticia.title}</Card.Title>
                <hr className="my-1"/>
                <Card.Text className="text-truncate">{noticia.description}</Card.Text>
                <Card.Footer>
                <Button variant="primary" href={noticia.link}>Ver noticia completa</Button>
                </Card.Footer>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default CardNoticia;