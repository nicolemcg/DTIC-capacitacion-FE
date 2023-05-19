import bootstrap from 'bootstrap'

import ApiService from '../services/api.service'

import Button from 'react-bootstrap/Button';

import React,{ useState, useEffect } from "react";
import EditarProducto from './EditarProducto';
import Boton  from "./Boton";
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom'

import Card from 'react-bootstrap/Card';


/*function useDatos() {
    const [usuarios, setUsuarios] = useState([])
   
    useEffect(() => {
      fetch("mockdata_usuarios.json")
        .then(response => response.json())
        .then(datos => {
          setUsuarios(datos)
        })
    }, [])
   
    return usuarios
}*/



export default function ListaProductosCard(){

    //const todos = useDatos()

    let navegador = useNavigate();

   // let {token} = useParams();

    //const [estado_token,setEstadoToken] = useState(token)
    

    const [productos, setProductos] = useState([])
    const [paginaActual, setPaginaActual] =useState(1)
    const[cantidadProductos, setCantidadProductos] = useState()
    const[cantidadPorPagina, setCantidadPorPagina] = useState()

    
    useEffect(() => {
        paginacion(paginaActual)
      //  window.localStorage.setItem(estado_token);
    }, [paginaActual])

    console.log("estado del token")
    //const [productosPorPagina, setProductosPorPagina] =useState(2)

    const paginacion = async (pagina) => {
        console.log("estado del token metodo")
        let token = window.localStorage.getItem("token")
        const response = await ApiService.getPaginacion(pagina,token)
        if (response.status === 200) {
            console.log(response)
            setProductos([...response.data.datos]) //all date de la respuesta en response.data
            setCantidadProductos(response.data.paginas);
            setCantidadPorPagina(response.data.cantidad);
            console.log("primero")
        } else {
            // hacer algo
        }
    }
    let numeroPaginas = []

    console.log("ttttt: "+ Math.ceil(cantidadProductos/cantidadPorPagina))
    
    for(let i=1;i<= Math.ceil(cantidadProductos/cantidadPorPagina);i++){
        numeroPaginas.push(i);
    }
    console.log("totalpaginas: "+ numeroPaginas.length)

    
    const paginaAnterior = () =>{
        let paginaA = paginaActual -1
        //paginacion(paginaA)
        setPaginaActual(paginaA)
    }
    const paginaSiguiente = () =>{
       
        let paginaA = paginaActual +1
        //aginacion(paginaA)
        setPaginaActual(paginaA)
    }

    const paginaEspecifica = (n) =>{
        //paginacion(n)
        setPaginaActual(n)
    }

    const eliminarProducto = async (id) => {
        const response = await ApiService.deleteProducto(id)
        if (response.status === 200) {
            console.log(response)
            alert(response.data);
        } else {
            // hacer algo
        }
    }



    const moverEditar = (id_producto) => {
        console.log("mover");
        navegador('/info/editarProducto/'+ id_producto);
    }

    const cerrarSesion = ()=> {
        navegador("../inicio")
        window.localStorage.removeItem("token")
        console.log("cerrar sesion")
    }


    return (
        <>
            <div>
                <Boton texto= "cerrar sesion" funcion_click={cerrarSesion}/>
            </div>
            <div className="container-fluid" align="center">
            
            <h4>Lista de Productos</h4>
                
            <div className="row">
        
                <div className="col-md-12">
                    {productos.map(item => (

                        <Card style={{ width: '18rem' }} key ={item.id} >
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{item.nombre}</Card.Title>
                            <Card.Text>{item.descripcion}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    ))}

        
                
                </div>
                <div>
                <Button type="button" size="sm" onClick={paginaAnterior} disabled = {paginaActual ===numeroPaginas[0]} >Anterior</Button>
                <ul className="d-flex">
                    {numeroPaginas.map(nPagina =>(
                        <div key ={nPagina}  >
                            <Button 
                                active = {nPagina ===paginaActual}
                                onClick={()=>paginaEspecifica(nPagina)}
                            >{nPagina}
                            </Button> 
                        </div>
                    ))}

                </ul>
                <Button type="button" size="sm" onClick={paginaSiguiente} disabled = {paginaActual ===numeroPaginas[numeroPaginas.length-1]}>Siguiente</Button>
                </div>

       
      </div>

      </div>
        </>
    )

    
}