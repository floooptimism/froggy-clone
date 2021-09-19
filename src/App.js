import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Hamburger from 'react-hamburger-menu'

function App() {
  const [navhamburgerIsOpen, setNavhamburgerIsOpen] = useState(false);

  return (
    <div>
      <div id="navbar" className=" px-3 md:px-10 md:py-5 flex items-center justify-between absolute top-0 left-0 w-full">
        <div id="navbar-menu" className="w-10 h-10 rounded-lg bg-white flex items-center justify-center md:hidden">
          <Hamburger 
            isOpen={navhamburgerIsOpen}
            menuClicked={()=>setNavhamburgerIsOpen(prev => !prev)}
            width={20}
            height={14}
            strokeWidth={3}
            color="#5B5B5A"
          />
        </div>

        <div id="navbar-logo" className="flex-1">
          <img src="/images/header-logo.svg" className="w-10 md:w-20"/>
        </div>

        {/* links */}
        <div id="navbar-links" className="flex-1 hidden md:flex space-x-14 items-center justify-center text-xl">
          <a href="#">Story</a>
          <a href="#">Frogs</a>
          <a href="#">Team</a>
          <a href="#">Roadmap</a>
          <a href="#">Faq</a>
        </div>


        <div id="navbar-wallet-sm" className="w-10 h-10 rounded-lg bg-white md:hidden">

        </div>
        <div id="navbar-wallet-md" className="flex-1 flex text-white">
          <button className="w-44 h-16 border ml-auto" style={{'backgroundColor':'#01CA17'}}>
            Connect
          </button>
        </div>
      </div>

      <div id="hero" className="flex justify-center items-center h-64">
        <img src="/images/help-landing.png" width="600" height="208"/>

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