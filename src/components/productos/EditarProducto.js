import React, { Fragment, useState, useEffect, useRef } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import { useParams, withRouter } from "react-router-dom";

const EditarProducto = (props) => {
  const codProducto = useParams().idProducto;
  console.log(useParams().idProducto);
  const URLProd = process.env.REACT_APP_API_URL2 + "/" + codProducto;
  const [error, setError] = useState(false);
  const [producto, setProducto] = useState({});
  const nombreProductoRef = useRef("");
  const categoriaRef = useRef("");
  const idCategoriaRef = useRef("");
  const marcaRef = useRef("");
  const descripcionRef = useRef("");
  const garantiaRef = useRef("");
  const cantidadRef = useRef("");
  const precioRef = useRef(0);

  useEffect(async () => {
    try {
      const respuesta = await fetch(URLProd);
      console.log(respuesta);
      if (respuesta.status === 200) {
        const productoObtenido = await respuesta.json();
        setProducto(productoObtenido);
        console.log(productoObtenido.categoria, "CATEGORIA");
        console.log(productoObtenido, "producto consultado");
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Ocurrio un error!", "Intentelo de nuevo mas tarde!", "error");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    

  };
  return (
    <Fragment>
      <Container className="shadow-lg p-3 mb-5 bg-body rounded my-5">
        <section className="text-center display-6 fuente">
          Agregar Productos
        </section>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre Producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Auriculares, Mouse..."
              defaultValue={producto.nombreProducto}
              ref={nombreProductoRef}
            />
          </Form.Group>
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Auriculares, Mouse..."
            defaultValue={producto.categoria}
            ref={categoriaRef}
            readOnly
          />
          <Form.Label>Marca</Form.Label>
          <Form.Control
            type="text"
            placeholder="HP, Genius..."
            defaultValue={producto.marca}
            ref={marcaRef}
          />
          <Form.Group className="mb-3">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              defaultValue={producto.descripcion}
              ref={descripcionRef}
            />
          </Form.Group>
          <Form.Label>Garantia</Form.Label>
          <Form.Control
            type="text"
            placeholder="3 meses, 6 meses..."
            defaultValue={producto.garantia}
            ref={garantiaRef}
          />
          <Form.Group className="mb-3">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="text"
              placeholder="5, 10 ..."
              defaultValue={producto.cantidad}
              ref={cantidadRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              placeholder="$"
              defaultValue={producto.precio}
              ref={precioRef}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
          {error === true ? (
          <Alert variant="warning">Todos los campos son obligatorios</Alert>
        ) : null}
        </Form>
      </Container>
    </Fragment>
  );
};

export default EditarProducto;
