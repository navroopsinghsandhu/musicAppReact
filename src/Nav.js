import logo from './images/startup_logo.jpeg';
import React, {useState, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Nav({token, setToken}) {
    const [ isLoggedIn, setIsLoggedIn] = useState(true)

    let logInFlag = false;

    if(typeof(token)  == "string" && token != "false") {
        logInFlag = true
    }

    useEffect(() => {
        setIsLoggedIn(logInFlag)
    });
 
    const handleClick = () => {
        setIsLoggedIn(false)
        setToken(false)
        localStorage.clear();
        navigate(`/login`);
    }

    const navigate = useNavigate();

    function resetUnderline(){
        var elements = document.getElementsByClassName("underlined");
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.textDecoration = 'none';
        }       
    }
    return (
        <div>
            <nav className ="navbar background">
                <ul className="nav-list">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    
                    { !isLoggedIn ? <Link to="/login" >
                        <li class="underlined" onClick={(e)=>{ resetUnderline(); e.target.style.textDecoration = "underline" }}>Login</li>
                    </Link> : <li><img className="circle-img" src={require('./images/human.png')} /><h1 style={{color: "black"}}>{ localStorage.getItem('name')}</h1></li>}
                    {/* <Link to="/">
                        <li class="underlined" onClick={(e)=>{ resetUnderline(); e.target.style.textDecoration = "underline"}}>Home</li>
                    </Link> */}
                    { !isLoggedIn  ? <Link to="/register" >
                        <li class="underlined" onClick={(e)=>{ resetUnderline(); e.target.style.textDecoration = "underline"}}>Register</li> </Link>: '' }
                    <Link to="/subscriptionarea" >
                        <li class="underlined" onClick={(e)=>{ resetUnderline(); e.target.style.textDecoration = "underline"}}>Subscription Area</li>
                    </Link>
                    <Link to="/queryarea" >
                        <li class="underlined" onClick={(e)=>{ resetUnderline(); e.target.style.textDecoration = "underline"}}>Query Area</li>
                    </Link>
                    { !isLoggedIn ? "": <li onClick={handleClick} >Logout</li> }
                </ul>
            </nav>
        </div>
    );
}

export default Nav;