import {Row} from "react-bootstrap"
import React from "react";
import CardPelicula from "./CardPelicula";

const BloquePeliculas = () => {

    return(
        <Row xs={12} md={4} className="g-4 mt-3">
          <CardPelicula></CardPelicula>
        </Row>
    )
}

export default BloquePeliculas;