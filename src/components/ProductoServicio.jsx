import React, { useEffect, useState } from "react";
import ApiService from '../services/api.service';
import Boton from '../components/Boton';


function ProductoServicio(){
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})
    //Uso de servicios
    const loadProductos = async () => {
      const response = await ApiService.getProductos()
      if (response.status === 200) {
        setProductos(response.data)
      } else {
        // hacer algo
      }
    }

    useEffect(()=>{
      loadProductos()
    }, [])

    const crearProductos = async (datos) => {
      console.log("serv crear");
      const response = await ApiService.createProducto(datos)
      if (response.status === 200) {
        setProducto(response.data)
      } else {
        // hacer algo
      }
    }

    const [nombre, setNombre] = useState()
    const[descripcion, setDescripcion] = useState()
    const[stock, setStock] = useState()
    const[precio, setPrecio] = useState()
    const[marca, setMarca] = useState()
    const[seccion, setSeccion] = useState()

    function onSubmit(e){
      e.preventDefault();
      let nuevo = {
        "nombre": nombre,
        "descripcion" : descripcion,  
        "precio" : precio,
        "stock" : stock,
        "marca_id" : marca,
        "seccion_id" : seccion
      }

      console.log("nombre: "+ nuevo.nombre)
      console.log("des: "+ nuevo.descripcion)
      crearProductos(nuevo);
    }

    return(
        <div>
        <p>Lista de productos</p>
            {
                (productos.slice(0,10)).map( (prod) => <div>{prod.nombre}</div>)
            }
        <form>
          <div class="mb-3">
            <input label = "Nombre" placeholder = "nombre" value = {nombre}  onChange={(e)=>setNombre(e.target.value)} ></input>
            
          </div>
          <div class="mb-3">
            <input label = "Descripcion" placeholder = "descripcion" value = {descripcion} onChange={(e)=>setDescripcion(e.target.value)} ></input>
          </div>
          <div class="mb-3">
            <input label = "Precio" placeholder = "precio" value = {precio} onChange={(e)=>setPrecio(e.target.value)} ></input>
          </div>
          <div class="mb-3">
            <input label = "Stock" placeholder = "stock" value = {stock} onChange={(e)=>setStock(e.target.value)} ></input>
          </div>
          <div class="mb-3">
            <input label = "Marca" placeholder = "marca" value = {marca} onChange={(e)=>setMarca(e.target.value)}></input>
          </div>
          <div class="mb-3">
            <input label = "Seccion" placeholder = "seccion" value = {seccion} onChange ={(e)=>setSeccion(e.target.value)}></input>
          </div>
          <Boton texto = "agregar" funcion_click = {onSubmit}/>
        </form>
        </div>
    )
}

export default ProductoServicio;