import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
import React, {useState} from 'react'


import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
 
  const [alert, setAlert] = useState(null)
    const showAlert =(message,type)=> {
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
      const toggleMode= ()=>{
      if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#0f4a50';
      showAlert("dark mode has been activated" , "success")
      }
      else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("light mode has been activated" , "success")
      }
    }
 
  return ( 
    <>

    <Router>       
<Navbar tittle ="TextUtils" aboutText="About" mode={mode}
toggleMode={toggleMode}/>
<Alert alert={alert} />
<div className="container my-3" >
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact  path="/">
          <TextForm showAlert={showAlert} heading="Enter your text"  mode={mode}/>
          </Route>
        </Switch>
        </div>
        </Router> 




    </>
 
  );
}
  
export default App;
