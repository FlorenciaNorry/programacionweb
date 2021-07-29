import React, { Fragment, useState } from "react";
import { Container, Button, Form, Modal, Table } from "react-bootstrap";

const Ventas = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <section className="principal text-center text-light display-6 fuente">
        Nombre de Usuario Registrado
      </section>
      <Container>
        <section>
          {/* navegador */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light fuente">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Nueva Venta
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Stock
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Clientes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* formulario */}
          <section className="my-4 d-flex justify-content-center">
            <div className="w-75">
              <div className="d-flex">
                <label className="my-4 fuente">Buscar el producto</label>
                <input
                  type="text"
                  className="form-control m-auto fuente w-75"
                  placeholder="nombre del producto"
                  aria-label="Nombre del producto"
                ></input>
                <button className="btn btn-primary boton"> Buscar</button>
              </div>
            </div>
          </section>
          <section className="row pb-4 shadow p-3 mb-5 bg-body rounded">
            <div className="col-md-6 my-2">
              <label className="fuente">Nombre</label>
              <input type="email" className="form-control"></input>
            </div>
            <div className="col-md-6 my-2">
              <label className="fuente">Categoria</label>
              <input type="email" className="form-control"></input>
            </div>
            <div className="col-md-6 my-2">
              <label className="fuente">Marca</label>
              <input type="email" className="form-control"></input>
            </div>
            <div className="col-md-6 my-2">
              <label className="fuente">Modelo</label>
              <input type="email" className="form-control"></input>
            </div>
            <div className="col-md-6 my-2">
              <label className="fuente">Precio</label>
              <input type="email" className="form-control"></input>
            </div>
            <div className="col-md-4 my-2">
              <label className="fuente">Cantidad</label>
              <input type="email" className="form-control"></input>
            </div>
            <div className="col-md-2 my-2">
              <label className="fuente">Email</label>
              <input type="email" className="form-control"></input>
            </div>
            <div className="col-md-12 my-2">
              <label className="fuente">Email</label>
              <input type="email" className="form-control fuente"></input>
            </div>
            <section className="d-flex flex-row-reverse my-3">
              <button className="btn btn-primary">Cargar</button>
              <button className="btn btn-primary mx-3">Eliminar</button>
            </section>
            <hr />
            {/* tabla de compras */}
            <section>
              <h6 className="fuente">Compras Ingresadas</h6>
              <Table striped bordered hover id="tablaProductos">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Marca</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Auriculares</td>
                    <td>Logitech</td>
                    <td>2</td>
                    <td>$5000</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Mouse</td>
                    <td>Logitech</td>
                    <td>1</td>
                    <td>$7000</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="3">Total</td>
                    <td>$12000</td>
                  </tr>
                </tbody>
              </Table>
            </section>
            {/* boton para modal */}
            <section className="d-flex flex-row-reverse">
              <Button variant="primary" onClick={handleShow}>
                Continuar
              </Button>
            </section>
          </section>
        </section>

        {/* inicio modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Datos Cliente</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* inicio Formulario Cliente */}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control type="text" placeholder="Juan Perez" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Dni:</Form.Label>
                <Form.Control type="text" placeholder="123456789" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Localidad:</Form.Label>
                <Form.Control type="text" placeholder="Tucuman" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Direccion:</Form.Label>
                <Form.Control type="text" placeholder="sin calle 123" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Codigo Postal:</Form.Label>
                <Form.Control type="text" placeholder="4000" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Telefono:</Form.Label>
                <Form.Control type="text" placeholder="381 13245678" />
              </Form.Group>
            </Form>
            {/* Final Formulario Cliente */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>
        {/* final modal */}
      </Container>
    </Fragment>
  );
};

export default Ventas;
