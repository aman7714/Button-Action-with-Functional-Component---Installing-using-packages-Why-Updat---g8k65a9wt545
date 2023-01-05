import React, {Component, useState} from "react";
import "./../styles/App.css";


function App() {
      const show = () =>{
           document.getElementById("para").style.visibility = "visible";
      }

  return (
    <div id="main">
      // Do not alter the main div
      <>
        <button onClick={show} id="click"></button>
        <p style={{visibility:"hidden"}} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes 
             me so happy</p>
      </>
    </div>
  );
}


export default App;
