
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';
import React from 'react';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,Route,Routes
} from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1200);
  }
  const Togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Has Been Enabled","success")
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Has Been Enabled","success")
    }
    
  }

  return (
    <>
  <Router>
  <Navbar title="Textutiles" mode={mode} Togglemode={Togglemode} />
  <Alert alert={alert}/>
  <div className='container my-2'>
   
  <Routes>
          <Route path="/about" element={<About/>} mode={mode}> 
          </Route>
            <Route path="/" element={
            <Form heading=" Try TextUtiles - word counter,character counter" showAlert={showAlert} mode={mode}/>}>
          
             </Route> 
  </Routes>
     </div>
   </Router> 


  </>
  );
}

export default App;
