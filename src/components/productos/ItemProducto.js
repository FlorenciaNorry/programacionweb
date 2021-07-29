import React from 'react';
import {Button} from 'react-bootstrap';
import Swal from "sweetalert2";
import {Link} from 'react-router-dom';

const ItemProducto = (props) => {
  const eliminarProducto = (id)=>{
    Swal.fire({
      title: "¿Esta seguro que quiere eliminar este producto?",
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
          const URLProd = `${process.env.REACT_APP_API_URL2}/${id}`;
          console.log(URLProd);
          const respuesta = await fetch(URLProd,{
            method: "DELETE",
            headers: {"Content-Type":"application/json"}
          });
          if(respuesta.status === 200){
            Swal.fire("Eliminado!", "El producto fue eliminado", "success");
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
  }
    return (
        <tr>
         <td>1</td>
         <td>{props.producto.nombreProducto}</td>
         <td>{props.producto.descripcion}</td>
         <td>{props.producto.categoria}</td>
         <td>{props.producto.garantia}</td>
         <td>{props.producto.cantidad}</td>
         <td>${props.producto.precio}</td>
         <td>
         <Link className="btn btn-warning text-light mx-3"to={'/productos/editar/'+props.producto.id}>Editar</Link>
           {/* <Button className="btn btn-warning">Editar</Button> */}
           <Button className="btn btn-danger mx-3" onClick={() => eliminarProducto(props.producto.id)}>Borrar</Button>
         </td>
       </tr>
  
    );
};

export default ItemProducto;