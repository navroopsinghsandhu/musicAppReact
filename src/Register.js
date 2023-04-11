// import React from 'react';
import React, {useState} from 'react';
import './Form.css';
import { API_HOST } from './constants';
import { useNavigate } from 'react-router-dom';

function Register() {

    // States for registration
    const [Email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    // Handling the name change
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    // Handling the name change
    const handleUserName = (e) => {
        setUserName(e.target.value);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(API_HOST + "/register", {
            method: "POST",
            body: JSON.stringify({
            email : Email,
            user_name: userName,
            password: password,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data)
            if(data == "Registration Successful"){
            navigate("/login")
            }
        })
    };

    return (
    <div className="form">
        <div>
        <h1 style={{margin:"2%"}}>User Registration</h1>
        </div>

        <form onSubmit={handleSubmit}>
        {/* Labels and inputs for form data */}
        <label className="label">Email</label>
        <input onChange={handleEmail} required className="input"
            value={Email} type="text" />

        <div className="input-container" style={{margin:"2%"}} >
            <label className="label">Username</label>
            <input onChange={handleUserName} required className="input"
                value={userName} type="text" />
        </div>
        <label className="label">Password</label>
        <input onChange={handlePassword} required className="input"
            value={password} type="password" />
        <input style={{marginTop:"2%"}} type="submit" value="Register" className="btn_register"/>
        </form>
    </div>
    );
    
}

export default Register;

