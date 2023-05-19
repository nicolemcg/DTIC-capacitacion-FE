import ApiService from "../services/api.service"
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import Boton from "./Boton"
function EditarProducto(){


    let { id_producto } = useParams();

    const [producto, setProducto] = useState({})

    const [nombre, setNombre] = useState()
    const[descripcion, setDescripcion] = useState()
    const[stock, setStock] = useState()
    const[precio, setPrecio] = useState()
    const[marca, setMarca] = useState()
    const[seccion, setSeccion] = useState()

    //Uso de servicios
    const recuperarProducto = async () => {
        console.log("recuperarProducto");
        const response = await ApiService.recuperar(id_producto)
        if (response.status === 200) {
          setProducto(response.data)
          setNombre(response.data.nombre)
          setDescripcion(response.data.descripcion)
          setStock(response.data.stock)
          setPrecio(response.data.precio)
          setMarca(response.data.marca_id)
          setSeccion(response.data.seccion_id)
        }
    }

    useEffect(()=>{
        recuperarProducto();
    },[])
    
    const actualizarProducto = async (editado) => {
      console.log("actualizarProducto");
      console.log("id es: " + id_producto)
      const response = await ApiService.actualizarProducto( id_producto,editado)
      if (response.status === 200) {
        setProducto(response.data)
        console.log("descripcion del modifciado: "+ producto.descripcion)
      } else {
        // hacer algo
      }
    }
    

    function onSubmit(e){
      e.preventDefault();
      let editado = {
        "nombre": nombre,
        "descripcion" : descripcion,  
        "precio" : precio,
        "stock" : stock,
        "marca_id" : marca,
        "seccion_id" : seccion
      }
      console.log("nombre: "+ editado.nombre)
      console.log("des: "+ editado.descripcion)

      actualizarProducto(editado);
    }

    return(
      
      <div >
         <form >
           <hi1>Producto{producto.nombre}</hi1>
          <div>
            <div class="mb-3">
              <label>
                Nombre: 
                <input  placeholder = "nombre" value = {nombre}  onChange={(e)=>setNombre(e.target.value)} ></input>
              </label>
            </div>

            <div class="mb-3">
              <label>
                Descripcion:
                <input  placeholder = "descripcion" value = {descripcion} onChange={(e)=>setDescripcion(e.target.value)} ></input>
              </label>
            </div>
            <div class="mb-3">
              <label>
                Precio:
                <input placeholder = "precio" value = {precio} onChange={(e)=>setPrecio(e.target.value)} ></input>
              </label>
            </div>
            <div class="mb-3">
              <label>
                Stock:
                <input  placeholder = "stock" value = {stock} onChange={(e)=>setStock(e.target.value)} ></input>
              </label>
            </div>
            <div class="mb-3">
              <label>
                Marca:
                <input placeholder = "marca" value = {marca} onChange={(e)=>setMarca(e.target.value)}></input>
              </label>
            </div>
            <div class="mb-3">
              <label>
                Seccion:
                <input  placeholder = "seccion" value = {seccion} onChange ={(e)=>setSeccion(e.target.value)}></input>
              </label>
            </div>
            </div>
            <Boton texto = "agregar" funcion_click = {onSubmit}/>
        </form>
      </div>
    )
    
    /*return(
      <div>
        <h1>producto</h1>
        <p>{producto.nombre}</p>
        <p>{producto.id}</p>
      </div>
    )*/
}

export default EditarProducto;