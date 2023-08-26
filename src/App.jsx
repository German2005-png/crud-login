import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg';
import ReactDOM, { createRoot } from 'react-dom/client';
import viteLogo from '/vite.svg'
import './App.css';
import Cookies from 'js-cookie';
import { SignUp } from './page/signUp.jsx';
import { Login } from './page/login';
function App() {
  return (
    <>
      <Navegation></Navegation>
    </>
  )
}
function Navegation(){
  useEffect(()=>{
    if(Cookies.get("token")){
      if(document.getElementById("fjc")){
        document.getElementById("flex").innerHTML = `<h1>Hello, ${Cookies.get("username")}</h1>`;
        document.getElementById("drf3").remove()
        const logountBnt = document.createElement("li");
        logountBnt.className = 'nav-li-btn';
        const btnLogout = document.createElement("button");
        btnLogout.className = 'nav-btn';
        btnLogout.setAttribute("id", "nav-btn3");
        btnLogout.onclick = ()=> {
          Cookies.set("username", "", {expires: new Date()});
          Cookies.set("token", "", {expires: new Date()});
          window.location.reload();
        }
        btnLogout.textContent = "Logout";
        logountBnt.appendChild(btnLogout);
        document.getElementById("fjc").appendChild(logountBnt);
      }
    }
  }, [Cookies.get("token")]);
  const [estadoModal, cambiarEstadoModal] = useState(false)
  const [estadoModal1, cambiarEstadoModal1] = useState(false)
  return(
    <>
    <nav className='navegation'>
      <div className='flex-nav'>
        <h2 className='nav-title'>Welcome to App</h2>
          <ul className='cont-btn' id="fjc">
          <li className='nav-li-btn' id='drf3'><button className='nav-btn' id='nav-btn1' onClick={()=> cambiarEstadoModal(!estadoModal)}>Sign up</button></li>
          <li className='nav-li-btn' id='drf3'><button className='nav-btn' id='nav-btn2' onClick={()=> cambiarEstadoModal1(!estadoModal1)}>Login</button></li>
        </ul>
      </div>
    </nav>
    <div id='flex'>
        <SignUp estado={estadoModal} cambiarEstado={cambiarEstadoModal}></SignUp>
        <Login estado1={estadoModal1} cambiarEstado1={cambiarEstadoModal1}></Login>
    </div>
    </>
  )
}
export default App
