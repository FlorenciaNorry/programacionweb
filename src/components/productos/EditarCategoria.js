import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import { useParams, withRouter } from "react-router-dom";

const EditarCategoria = (props) => {
  const codCategoria = useParams().idCategoria;
  const [stateCategoria, setStateCategoria] = useState({});
  const [error, setError] = useState(false);
  const URL = process.env.REACT_APP_API_URL + "/" + codCategoria;
  const nombreCategoriaRef = useRef("");

  useEffect(async () => {
    try {
      const respuesta = await fetch(URL);
      console.log(respuesta);
      if (respuesta.status === 200) {
        const categoriaObtenida = await respuesta.json();
        setStateCategoria(categoriaObtenida);
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Ocurrio un error!", "Intentelo de nuevo mas tarde!", "error");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      nombreCategoriaRef.current.value.trim() === "" ||
      !isNaN(nombreCategoriaRef.current.value)
    ) {
      setError(true);
    } else {
      setError(false);
      try {
        const categoriaModificada = {
          nombreCategoria: nombreCategoriaRef.current.value,
        };
        const respuesta = await fetch(URL, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(categoriaModificada),
        });
        if (respuesta.status === 200) {
          Swal.fire(
            "Categoria modificada!",
            "Se actualizo la categoria!",
            "success"
          );
          props.consultarAPI();
          //redireccionar
          props.history.push("/categorias");
        }
      } catch (error) {
        console.log(error);
        Swal.fire(
          "Ocurrio un error!",
          "Intentelo de nuevo mas tarde!",
          "error"
        );
      }
    }
  };
  return (
    <Container>
      <h4 className="text-center fuente mt-4">Editar una Categoria</h4>
      <Form
        className="shadow-lg p-3 mb-5 bg-body rounded my-5"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label>Nombre Categoria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Video, Audio ..."
            // required
            defaultValue={stateCategoria.nombreCategoria}
            ref={nombreCategoriaRef}
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

export default withRouter(EditarCategoria);
