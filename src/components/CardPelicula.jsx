import {Card, Col} from "react-bootstrap"

const CardPelicula = () => {
    
    return (
        <Col>
          <Card className="mb-2">
            <Card.Body className="px-1">
              <Card.Title className="ps-2">Pelicula: </Card.Title>
              <hr />
              <Card.Text className="py-2 ps-2 mx-0" id="fondoCard">
                <b>Genero: </b>
                <br />
                <b>Descripción: </b>
              </Card.Text>
              <div className="text-center">
              <button className="btn btn-danger rounded-3 my-2" >Eliminar pelicula</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
    )
}

export default CardPelicula;