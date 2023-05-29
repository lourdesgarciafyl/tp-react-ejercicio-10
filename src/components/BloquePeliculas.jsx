import {Row} from "react-bootstrap"
import React from "react";
import CardPelicula from "./CardPelicula";

const BloquePeliculas = ({arrayPeliculas, borrarPelicula}) => {

    return(
        <Row xs={12} md={4} className="g-4 mt-3">
            {arrayPeliculas.map((pelicula, indice) => (
                <CardPelicula itemPelicula={pelicula} key={pelicula.id} indicePelicula={indice} borrarPelicula={borrarPelicula}></CardPelicula>
            ))}
        </Row>
    )
}

export default BloquePeliculas;