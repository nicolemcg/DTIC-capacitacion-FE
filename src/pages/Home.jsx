

import  ListarUsuarios from "../components/ListarUsuarios";
import React, { useEffect, useState } from "react";
import  Boton from "../components/Boton";
import InputText from "../components/InputText";
import { useNavigate } from 'react-router-dom';





function useDatos() {
    const [usuarios, setUsuarios] = useState([])
   
    useEffect(() => {
      fetch("mockdata_usuarios.json")
        .then(response => response.json())
        .then(datos => {
          setUsuarios(datos)
        })
    }, [])
   
    return usuarios
}


  /**/


  
export default function Home(){
  

    let navegador = useNavigate();

    const todos = useDatos()
    const[usuarios,setUsuarios] = useState([])
    useEffect(() => {
      setUsuarios([...todos.slice(0,10)])
    }, [todos]);

    function agregar(){
      setUsuarios([...usuarios,todos[usuarios.length]])
      console.log(typeof(todos[usuarios.length]))
    }
    const [usuario, setUsuario] = useState()

    function mostrar(elemento){
      setUsuario(elemento)
    }
    const[nuevo, setNuevo] = useState({"id":"", "first_name":"", "last_name":"","email":"","gender":"","username":""})

    const[first_name,setFirstName] =useState({campo:""})
    const[last_name,setLastName] =useState({campo:""})
    const[email,setEmail] =useState({campo:""})
    const[gender,setGender] =useState({campo:""})
    const[username,setUsername] =useState({campo:""})
  
    async function onSubmit(e){
      e.preventDefault();
      let posicion = usuarios.length
      console.log(typeof posicion)
      console.log("first name es:"+first_name.campo)
      let nuevo_usuario= {"id": posicion, "first_name":first_name.campo, "last_name":last_name.campo, "email":email.campo, "gender":gender.campo, "username":username.campo};
      setUsuarios([...usuarios,nuevo_usuario])
    }

    const moverInicio = () => {
      console.log("mover");
      navegador('/inicio/');
  }

    return (
        <div>
          <div>
            <Boton texto = "Log in"  funcion_click={moverInicio}/>
          </div>
            <p>Lista de usuarios</p>
            <ListarUsuarios 
                usuarios = {usuarios}
                usuario = {usuario}
                funcion_mostrar = {mostrar}/>
            <Boton 
            texto = "agregar"
            funcion_click={agregar}/>

        <form>
          <div class="mb-3">
            <InputText
            label = "Nombres(s)"
            placeholder = "nombre"
            estado = {first_name}
            cambiarEstado ={setFirstName}/>
          </div>
          <div class="mb-3">
            <InputText
            label = "Apellido(s)"
            placeholder = "apellido"
            estado = {last_name}
            cambiarEstado ={setLastName}/>
          </div>
          <div class="mb-3">
            <InputText
            label = "Email"
            placeholder = "email"
            estado = {email}
            cambiarEstado ={setEmail}/>
          </div>
          <div class="mb-3">
            <InputText
            label = "Genero"
            placeholder = "genero"
            estado = {gender}
            cambiarEstado ={setGender}/>
          </div>
          <div class="mb-3">
            <InputText
            label = "Username"
            placeholder = "username"
            estado = {username}
            cambiarEstado ={setUsername}/>
          </div>
          <Boton texto = "agregar"
          funcion_click = {onSubmit}/>
        </form>
        
        <p>"usuario: "{nuevo.last_name}</p>
      
        </div> 
      )
}