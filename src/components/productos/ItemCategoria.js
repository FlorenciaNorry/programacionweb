import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import {Link} from 'react-router-dom';

const ItemCategoria = (props) => {
  const eliminarCategoria = (id) => {
    Swal.fire({
      title: "¿Esta seguro que quiere eliminar esta categoria?",
      text: "No puede volver atras esta operacion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          const URL = `${process.env.REACT_APP_API_URL}/${id}`;
          console.log(URL);
          const respuesta = await fetch(URL,{
            method: "DELETE",
            headers: {"Content-Type":"application/json"}
          });
          if(respuesta.status === 200){
            Swal.fire("Eliminada!", "La categoria fue eliminada", "success");
            props.consultarAPI();
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
    });
  };
  return (
    <ListGroup.Item className="d-flex justify-content-between shadow my-2 bg-body rounded">
      <p>{props.categoria.nombreCategoria}</p>
      <div>
        <Link className="btn btn-warning text-light mx-3"to={'/categorias/editar/'+props.categoria.id}>Editar</Link>
        <Button
          variant="danger"
          onClick={() => eliminarCategoria(props.categoria.id)}
        >
          Borrar
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemCategoria;
