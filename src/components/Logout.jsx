import InputText from "./InputText";
import { useState } from "react";
import Boton from "./Boton";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";


function Logout(){
  let navigate = useNavigate()

  const[username, setUsername] = useState({campo:""})
  const[contrasenia, setContrasenia] = useState({campo:""})

  const [datos, setDatos] = useState({});
  const [user, setUser] = useState([])

  const iniciarSesion = async () => {
    console.log("respuesta llamada1 : ")
    const response = await AuthService.login({"username": username.campo,"password":contrasenia.campo})
    if (response.status === 200) {
      setUser(response.data)
      console.log("acces token: "+ response.data.accessToken);
      navigate('listaProductos/' );
      window.localStorage.setItem("token",response.data.accessToken);
     
    } else {
      // hacer algo
    }
    
  }

  //console.log("datos username: " + datos.username)
  
     return(
       <div>
         <form>
          <div class="mb-3">
            <InputText
            label = "Username"
            placeholder = "username"
            estado = {username}
            cambiarEstado ={setUsername}/>
          </div>
          
          <div class="mb-3">
            <InputText
            label = "Contrasenia"
            placeholder = "contrasenia"
            estado = {contrasenia}
            cambiarEstado ={setContrasenia}/>
          </div>
          <Boton texto = "agregar"
          funcion_click = {iniciarSesion}/>
        </form>
        <p> {user.success}</p>
        <p>{"nombre : " + username.campo}</p>
       </div>
     )
}
export default Logout;