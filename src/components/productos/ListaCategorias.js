import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import ItemCategoria from "./ItemCategoria";

const ListaCategorias = (props) => {
  return (
    <Container>
      <h4 className="text-center fuente mt-5">Lista de Categorias</h4>
      <section className="my-4">
        <ListGroup>
            {
                props.categorias.map((categoria)=><ItemCategoria categoria={categoria} key={categoria.id} consultarAPI={props.consultarAPI}></ItemCategoria>)
            }
        </ListGroup>
      </section>
    </Container>
  );
};

export default ListaCategorias;
