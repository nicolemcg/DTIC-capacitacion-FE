
import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Usuario from "./Usuario";


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

export default function ListarUsuarios({usuarios,usuario,funcion_mostrar}){
    
    return (
  
      <div className="container mt-5" align="">
        
      <h4>Lista de Usuarios</h4>
        
      <div className="row">

        <div className="col-md-12">

          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Username</th>
              </tr>
            </thead> 
            <tbody>

            {usuarios.map(item => (

              <tr key={item.id} onClick ={()=> funcion_mostrar(item)}>
                
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.username}</td>
              </tr>

              ))}
            
            </tbody>
          </table>
          <div>
            {usuario? 
            <Usuario user ={usuario}/> : null}
          </div>
        </div>

      </div>
        
    </div>
  
  );
}