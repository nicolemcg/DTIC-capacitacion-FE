
import { API } from './connection'  

    const ApiService = {  	

        getProductos: async (filters={}) => {     	
        let response = null     	
        await API.get('/producto/obtener-productos', {} )         	
            .then((res) => {response=res})         	
            .catch((err) => {response=err.response ? err.response : {}})     	
            return response 	
        },  

        /*getPaginacion: async (page) => {     	
            let response = null     	
            await API.get('/producto/paginacion', {params:{page:page}})  	
                .then((res) => {response=res})         	
                .catch((err) => {response=err.response ? err.response : {}})     	
                return response 	
            },  */
        //token
        getPaginacion: async (page,token) => {     	
            let response = null     	
            await API.get('/producto/paginacion', {params:{page:page}, headers: {Authorization: 'Bearer ' + token}} )         	
                .then((res) => {response=res})         	
                .catch((err) => {response=err.response ? err.response : {}})     	
                return response 	
        },  

        createProducto: async (data) => {    
        let response = null     	
        await API.post('/producto/crear-productos', data)         	
            .then((res) => {response=res})         	
            .catch((err) => {response=err.response ? err.response : {}})     	
            return response 	
        },  

        recuperar: async (id) => {    
            console.log("serv producto");
            let response = null     	
            await API.get('/producto/recuperar', {params:{id:id}})         	
                .then((res) => {response=res})         	
                .catch((err) => {response=err.response ? err.response : {}})     	
                return response 	
        },
        actualizarProducto: async (id_p, data) => {    
            let response = null     	
            console.log("parametro id: " + id_p)
            await API.post('/producto/actualizar', data, {params:{id:id_p}})         	
                .then((res) => {response=res})         	
                .catch((err) => {response=err.response ? err.response : {}})     	
                return response 	
            },  
        
        deleteProducto: async(id) => {
            let response = null
            await API.delete('producto/eliminar-producto', {params:{id:id}})
                .then((res) => {response=res})         	
                .catch((err) => {response=err.response ? err.response : {}})     	
                return response 
        },

    }  

export default ApiService
