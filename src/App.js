import './App.css';
import Login from './Login';
import Home from './Home';
import Nav from './Nav';
import Register from './Register';
import SubscriptionArea from './SubscriptionArea';
import QueryArea from './QueryArea';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();
  return (
    <Router>
    <div className="App"> 
        <Nav token={token} setToken ={setToken}/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login setToken={setToken}/>} />
            <Route path="/subscriptionarea" element={<SubscriptionArea/>} />
            <Route path="/queryarea" element={<QueryArea/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
