import React from 'react';
import Cardiogram from './Cardiogram.tsx';
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div id="container-1">
        <div id="container-2">
          <h1 id="heading-1">Healthcare Analytics Dashboard</h1>
          <p id="paragraph-1">Track patient outcomes and treatment effectiveness</p>
        </div>
        <div id="cardiogram-1">
          <Cardiogram />
        </div>
      </div>
    </div>
  )
}

export default Navbar