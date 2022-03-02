import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  const logoText = "TextUtils";
  const homeText = "Home";
  const aboutText = "About";
  const headingText = "Enter your analyze "; 
  const [mode, setmode] = useState('light');

 const toggleMode = ()=>{
   if(mode ==="light"){
     setmode('dark');
     document.body.style.backgroundColor = "blue";
    

   }
   else{
     setmode('light')
     document.body.style.backgroundColor = "white";
     
   }
 }
  return (
    <div className="App">
      <Navbar logoText={logoText} homeText={homeText} aboutText={aboutText} mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm headingText = {headingText}/>
        {/* <About/> */}
      </div>
    </div>
     
  );
}

export default App;
