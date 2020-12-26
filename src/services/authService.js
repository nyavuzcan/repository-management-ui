import axios from 'axios';
import { setAuthorizationToken } from '../helpers/setAuthorizationToken';


const login = (username, password) => {
    return axios.post("http://localhost:8080/authenticate/verify",
        {
        userName:username, password: password
    })
        .then(user =>{

            //if there is user (user.data.status =true )

            if (user.data.jwt){
                const  token  =user.data.jwt;
                localStorage.setItem("jwtToken", token);
                setAuthorizationToken(token);
            }
            return user.data
        })
        . catch(err => console.log('Login Error :'+err))
}

const logout = () => {
    localStorage.removeItem("jwtToken");
    setAuthorizationToken(false);
}

export default {login, logout};