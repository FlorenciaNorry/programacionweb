import React, { Fragment, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";

const AgregarProducto = (props) => {
  const URLProd = process.env.REACT_APP_API_URL2;
  const [nombreProducto, setNombreproducto] = useState("");
  const [categoria, setCategoria] = useState(0);
  const [idcategoria, setidCategoria] = useState(0);
  const [marca, setMarca] = useState([]);
  const [descripcion, setdescripcion] = useState("");
  const [garantia, setGarantia] = useState([]);
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    
      const objetoProducto ={
        nombreProducto,
        categoria,
        idcategoria,
        marca,
        descripcion,
        garantia,
        cantidad,
        precio
      };
      try{ 
        console.log("producto", objetoProducto);
        console.log("las categorias :", props.categorias);
        const resultadoCat = props.categorias.find((cat)=>{
          return cat.id == idcategoria;
        });
        const nombreCat = resultadoCat.nombreCategoria;
        setCategoria(nombreCat);

        const enviarProducto = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({...objetoProducto,categoria:nombreCat}),
        };
        const respuesta = await fetch(URLProd,enviarProducto);
        console.log(nombreCat,"GUARDADA");
        if(respuesta.status === 201){
          Swal.fire("Producto Agregado!", 
          "Se registro una nueva Categoria!", 
          "success");
          props.consultarAPI();
        }
      }catch(error){
        console.log(error);
        Swal.fire("Ocurrio un error!", 
          "Intentelo de nuevo mas tarde!", 
          "error");
      }
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
              onChange={(e) => setNombreproducto(e.target.value)}
            />
          </Form.Group>
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            size="md"
            className="mb-3"
            onChange={(e) => setidCategoria(e.target.value)}>
              <option>Seleccionar. . .</option>
            {props.categorias.map((opcion, indice) => (
              <option value={opcion.id} key={indice}>{opcion.nombreCategoria}</option>
              ))}
            {/* <option>Seleccionar ...</option>
            <option>Video</option>
            <option>Perifericos</option>
            <option>Audio </option> */}
          </Form.Select>
          <Form.Label>Marca</Form.Label>
          <Form.Control
              type="text"
              placeholder="HP, Genius..."
              onChange={(e) => setMarca(e.target.value)}
            />
          <Form.Group
            className="mb-3"
            onChange={(e) => setdescripcion(e.target.value)}
          >
            <Form.Label>Descripcion</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Label>Garantia</Form.Label>
          <Form.Control
              type="text"
              placeholder="3 meses, 6 meses..."
              onChange={(e) => setGarantia(e.target.value)}
            />
          <Form.Group
            className="mb-3"
            onChange={(e) => setCantidad(e.target.value)}
          >
            <Form.Label>Cantidad</Form.Label>
            <Form.Control type="text" placeholder="5, 10 ..." />
          </Form.Group>
          <Form.Group
            className="mb-3"
            onChange={(e) => setPrecio(e.target.value)}
          >
            <Form.Label>Precio</Form.Label>
            <Form.Control type="text" placeholder="$" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
          <Alert variant="warning" className="my-3">
            Todos los campos son obligatorios
          </Alert>
        </Form>
      </Container>
    </Fragment>
  );
};

export default AgregarProducto;
