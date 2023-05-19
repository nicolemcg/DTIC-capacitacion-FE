import { API } from './connection'  

    const AuthService = {  	

        login: async (data) => {     	
        let response = null     	
        await API.post('/user/login', data )         	
            .then((res) => {response=res})         	
            .catch((err) => {response=err.response ? err.response : {}})     	
            return response 	
        },

    }  

export default AuthService