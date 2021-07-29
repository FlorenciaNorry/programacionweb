import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Inicio from './components/productos/Inicio';
import ListaProductos from './components/productos/ListaProductos';
import AgregarProducto from './components/productos/AgregarProducto';
import Navegacion from './components/common/Navegacion.js';
import Footer from './components/common/Footer.js';
import AgregarCategoria from './components/productos/AgregarCategoria';
import ListaCategorias from './components/productos/ListaCategorias';
import {useState, useEffect} from 'react'
import EditarCategoria from './components/productos/EditarCategoria';
import EditarProducto from './components/productos/EditarProducto';

function App() {
  const URL = process.env.REACT_APP_API_URL;
  const URLProd = process.env.REACT_APP_API_URL2;
  const [categorias, setCategorias] = useState([]);
  const [productos, setProducto] = useState([]);

  useEffect(()=>{
    consultarAPI();
  },[]);

  const consultarAPI = async() =>{
    try{
      const respuesta = await fetch(URL);
      const respuesta2 = await fetch(URLProd);
      console.log(respuesta);
      console.log(respuesta2);
      if(respuesta.status === 200){
        const listaCategoria = await respuesta.json();
        const listaProducto =await respuesta2.json();
        setCategorias(listaCategoria);
        setProducto(listaProducto);
      }
    }catch(error){
      console.log(error);
    }
  }

  return (
   <Router>
     <Navegacion></Navegacion>
     <Switch>
       <Route exact path='/'>
          <Inicio></Inicio>
       </Route>
       <Route exact path='/productos'>
         <ListaProductos productos={productos} consultarAPI={consultarAPI}></ListaProductos>
       </Route>
       <Route exact path='/producto/nuevo'>
          <AgregarProducto consultarAPI={consultarAPI} categorias={categorias}></AgregarProducto>
       </Route>
       <Route exact path='/categorias'>
          <ListaCategorias categorias={categorias} consultarAPI={consultarAPI}></ListaCategorias>
       </Route>
       <Route exact path='/categorias/nuevo'>
         <AgregarCategoria consultarAPI={consultarAPI}></AgregarCategoria>
       </Route>
       <Route exact path='/categorias/editar/:idCategoria'>
         <EditarCategoria consultarAPI={consultarAPI}></EditarCategoria>
       </Route>
       <Route exact path='/productos/editar/:idProducto'>
         <EditarProducto consultarAPI={consultarAPI}></EditarProducto>
       </Route>
     </Switch>
     <Footer></Footer>
   </Router>
  );
};

export default App;
