import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";

const AgregarCategoria = (props) => {
  const URL = process.env.REACT_APP_API_URL;
  const [nombreCategoria, setNombreCategoria] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validacion de datos
    if (nombreCategoria.trim() === "" || !isNaN(nombreCategoria)) {
      setError(true);
      return;
    } else {
      setError(false);
      //crear el objeto para guardar las categorias
      const objetoCategoria = {
        nombreCategoria,
      };
      console.log(objetoCategoria);
      try {
        const enviarCategoria = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(objetoCategoria),
        };
        const respuesta = await fetch(
          URL,
          enviarCategoria
        );
        console.log(respuesta);
        if (respuesta.status === 201) {
          Swal.fire("Categoria Agregada!", 
          "Se registro una nueva Categoria!", 
          "success");
          props.consultarAPI();
        }
      } catch (error) {
        console.log(error);
        Swal.fire("Ocurrio un error!", 
          "Intentelo de nuevo mas tarde!", 
          "error");
      }
    }
  };
  return (
    <Container>
      <h4 className="text-center fuente mt-4">Ingresa una Categoria Nueva</h4>
      <Form
        className="shadow-lg p-3 mb-5 bg-body rounded my-5"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label>Nombre Categoria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Video, Audio ..."
            onChange={(e) => setNombreCategoria(e.target.value)}
            required
          />
        </Form.Group>
        <section className="d-flex flex-row-reverse">
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </section>
      </Form>
      {error ? (
        <Alert variant="warning">Debe ingrresar una Categoria valida</Alert>
      ) : null}
    </Container>
  );
};

export default AgregarCategoria;
