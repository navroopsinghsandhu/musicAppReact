import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Form.css';
import { API_HOST } from './constants';

function Login({ setToken }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const navigate = useNavigate();

    const openRegisterPage = () => {
      navigate("/register");
    }


    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
        
        fetch(API_HOST + "/login", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'email': uname.value,
          'password': pass.value,
        })
        })
        .then(res =>
        res.json()).then(userdata => {
            if(userdata["token"] != ''){
              setToken(userdata["token"]);
              setIsSubmitted(true);
              localStorage.setItem('name', userdata["UserName"]);
              localStorage.setItem('token', userdata["token"]);
            } else {
              alert("email or password is invalid")
            }
            
        })
      navigate(`/`);
    };
  
    // JSX code for login form
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container" style={{margin:"2%"}}>
            <label style={{marginRight:"2%"}}>Email </label>
            <input style={{marginLeft:"2%"}} type="text" name="uname" required  className="input"/>
          </div>
          <div className="input-container" style={{margin:"2%"}} >
            <label style={{marginRight:"2%"}}>Password </label>
            <input type="password" name="pass" required  className="input"/>
          </div>
          <div className="button-container" style={{marginRight:"2%"}}>
            <input style={{display:"inline"}} type="submit" value="Login" className="btn_register"/>
            <button style={{display:"inline", marginLeft:"3%"}} className="btn_register" onClick={openRegisterPage}>Register</button>
          </div>
        </form>
      </div>
    );
  
    return (
      <div className="app">
        <div className="login-form">
          <h1 style={{margin:"1%"}}className="title">Sign In</h1>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </div>
    );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default Login;