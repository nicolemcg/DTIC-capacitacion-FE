//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import EditarProducto from "./components/EditarProducto";
import ProductoServicio from "./components/ProductoServicio";
import Inicio from './pages/Inicio';
import ListaProductos from './components/ListaProductos';
import PaginaPrincipal from './pages/PaginaPrincipal';

function App() {
  //parametro de los dos (:) puntos el nombre debe ser igual en el parametro donde se recibe
  return (
    <div>
      <Routes>
          <Route path="home" element={<Home/>} />
          <Route path="info" element={<Info/>} />
          <Route path="info/crearProducto/" element={<ProductoServicio/>}/>
          <Route path="info/editarProducto/:id_producto" element={<EditarProducto/>} /> 
          <Route path="inicio" element={<Inicio/>} />\
          <Route path="inicio/listaProductos" element={<ListaProductos/>} />
          <Route path="paginaPrincipal" element={<PaginaPrincipal/>} />

          
        
      </Routes>
    </div>  
  );
}

export default App;
