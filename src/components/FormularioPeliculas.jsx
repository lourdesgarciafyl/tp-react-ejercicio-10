import { useState } from "react";
import { Form, Col, Row, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import BloquePeliculas from "./BloquePeliculas";
import { v4 as uuidv4 } from 'uuid';

const FormularioPeliculas = () =>{
    const [peliculas, setPeliculas] = useState([])
    
    const { register, formState: {errors}, reset , handleSubmit} = useForm()
  
    const apretarEnviar = (data) => {
      data.id = uuidv4()
      setPeliculas([...peliculas, data])
      Swal.fire(
        "Pelicula guardada correctamente",
        "Ahora la pelicula está cargada",
        "success"
      )
      reset()
    }

    const borrarPelicula = (id) => {
        let copiaArray = peliculas.filter((pelicula) => pelicula.id !== id);
        setPeliculas(copiaArray)
    }
    return(

        <section>
           <Card className="my-3">
            <Card.Title className="text-center display-5 py-2">Administrador de peliculas</Card.Title>
            <hr />
            <Card.Body>
            <Form noValidate id="formDatos" onSubmit={handleSubmit(apretarEnviar)}>
          <Row>
          <Col md={6} className="mt-2">
            <Form.Group controlId="validaronNombre">
            <Form.Label>Titulo</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Aftersun" 
            required 
            {...register(`nombre`,{
              required: "Campo obligatorio",
              minLength:{
                value: 3,
                message: "Cantidad minima de caracteres: 3"
              },
              maxLength:{
                value: 50,
                message: "Cantidad maxima de caracteres: 50"
              }
              })}/>
              <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
            </Form.Group>
          </Col>

          <Col md={6} className="mt-2">
            <Form.Group controlId="validarGenero">
            <Form.Label>Género</Form.Label>
            <Form.Select {...register(`genero`, {
                required: "Campo obligatorio"
            })}>
                <option value="">--Seleccione un genero--</option>
                <option value="aventura">Aventura</option>
                <option value="biografico">Biográfico</option>
                <option value="comedia">Comedia</option>
                <option value="drama">Drama</option>
                <option value="romance">Romance</option>
                <option value="terror">Terror</option>
            </Form.Select>
            <Form.Text className="text-danger">{errors.genero?.message}</Form.Text>
            </Form.Group>
          </Col>

          <Col md={12} className="mt-2">
            <Form.Group controlId="validarDescripcion">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Sophie (Francesca Corio / Celia Rowlson-Hall como la Sophie adulta) reflexiona sobre la alegría compartida y la melancolía privada de unas vacaciones que hizo con su padre (Paul Mescal) 20 años atrás. Los recuerdos reales e imaginarios llenan los espacios entre las imágenes mientras intenta reconciliar al padre que conoció con el hombre que no conoció." 
            as="textarea"
            rows={4}
            required 
            {...register(`descripcion`,{
              required: "Campo obligatorio",
              minLength:{
                value: 5,
                message: "Cantidad minima de caracteres: 5"
              },
              maxLength:{
                value: 500,
                message: "Cantidad maxima de caracteres: 500"
              }})} />
              <Form.Text className="text-danger">{errors.descripcion?.message}</Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center">
        <Button className="mt-3" variant="primary" type="submit">
        Enviar
        </Button>
        </div>
      </Form>
    </Card.Body>
    </Card>
   <BloquePeliculas arrayPeliculas={peliculas} borrarPelicula={borrarPelicula}></BloquePeliculas>
    </section>
    )
}

export default FormularioPeliculas