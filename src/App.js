import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Hamburger from 'react-hamburger-menu'

function App() {
  const [navhamburgerIsOpen, setNavhamburgerIsOpen] = useState(false);

  return (
    <div>
      <div id="navbar" className="h-14 px-3 flex items-center justify-between absolute top-0 left-0 w-full">
        <div id="navbar-menu" className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
          <Hamburger 
            isOpen={navhamburgerIsOpen}
            menuClicked={()=>setNavhamburgerIsOpen(prev => !prev)}
            width={20}
            height={14}
            strokeWidth={3}
            color="#5B5B5A"
          />
        </div>

        <div id="navbar-logo" className="">
          <img src="/images/header-logo.svg" className="w-10"/>
        </div>

        <div id="navbar-wallet" className="w-10 h-10 rounded-lg bg-white">

        </div>
      </div>

      <div id="hero">
        {/* image here */}
      </div>

      <div id="story">

      </div>

      <div id="collection">

      </div>

      <div id="team">

      </div>

      <div id="roadmap">

      </div>
    </div>
  );
}

export default App;
