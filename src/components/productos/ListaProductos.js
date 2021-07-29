import React, { Fragment } from "react";
import { Container, Table } from "react-bootstrap";
import ItemProducto from "./ItemProducto";
// import ItemProducto from "./ItemProducto";

const Listaproductos = (props) => {
  return (
    <Fragment>
      <Container>
        <section className="d-flex justify-content-between my-3">
          <h1 className="fuente my-3">Lista de Productos</h1>
        </section>
        {/*Inicio Tabla de productos */}
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre Producto</th>
                <th>Descripcion</th>
                <th>Categoria</th>
                <th>Garantia</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody id="tablaAltaProductos">
              {props.productos.map((producto) => (
                <ItemProducto
                  producto={producto}
                  key={producto.id}
                  consultarAPI={props.consultarAPI}
                  x
                ></ItemProducto>
              ))}

              {/* <tr>
              <td>1</td>
              <td>teclado</td>
              <td>Teclado con mouse con cables</td>
              <td>Computacion</td>
              <td>12meses</td>
              <td>5</td>
              <td>$6000</td>
              <td>
                <Button className="btn btn-warning">Editar</Button>
                <Button className="btn btn-danger mx-3">Borrar</Button>
              </td>
            </tr> */}
            </tbody>
          </Table>
        </div>
      </Container>
    </Fragment>
  );
};

export default Listaproductos;
