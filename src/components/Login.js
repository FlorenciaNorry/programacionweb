import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import "../App.css";

const Login = () => {
  return (
    <Fragment>
      <section className="text-center text-light display-2 principal">
        Bienvenido
      </section>
      <Form className="my-5 formulario m-auto shadow p-3 mb-5 bg-body rounded">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="email" placeholder="Usuario" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button type="submit" className="btn btn-primary w-100">
          Ingresar
        </Button>
      </Form>
    </Fragment>
  );
};

export default Login;
