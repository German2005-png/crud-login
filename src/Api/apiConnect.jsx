import axios from 'axios';
import App from '../App.jsx';
import Cookies from 'js-cookie';
const API = 'http://localhost:4000';
export async function apiRequest(user){
    try {
    const response = await axios.post(`${API}/register`, user)
    const fjwekf = response.data.token;
    console.log(user)
    console.log(response)
    document.getElementById("flex").innerHTML = ''
    Cookies.set("token", fjwekf, {expires: 1});
    Cookies.set("username", response.data.username, {expires: 1});
    console.log(fjwekf)
    return fjwekf
    } catch (error) {
        console.error('Error con el SignUp', error)    
    }
}
export async function apiRequest2(user){
    try {
    const response = await axios.post(`${API}/login`, user)
    const fjwekf1 = response.data.token;
    console.log(user)
    console.log(response)
    if(response.data.ff == false){
        Cookies.set("token", "", {expires: new Date()})
        Cookies.set("username", "", {expires: new Date()})
    }else{
    document.getElementById("flex").innerHTML = ''
    Cookies.set("token", fjwekf1, {expires: 1});
    Cookies.set("username", response.data.username, {expires: 1});
    console.log(fjwekf1)
    }
    return fjwekf1
    } catch (error) {
        console.error("Error de login", error)    
    }
}