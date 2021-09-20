import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Hamburger from 'react-hamburger-menu'

function App() {
  const [navhamburgerIsOpen, setNavhamburgerIsOpen] = useState(false);

  return (
    <div>
      <div id="navbar" className=" px-3 mdp:px-8 py-3 mdp:py-5 flex items-center justify-between absolute top-0 left-0 w-full">
        <div id="navbar-menu" className="flex flex-1 mdp:hidden items-center ">
          <div className="flex w-10 h-10 rounded-lg bg-white items-center justify-center ">
            <Hamburger 
              isOpen={navhamburgerIsOpen}
              menuClicked={()=>setNavhamburgerIsOpen(prev => !prev)}
              width={20}
              height={14}
              strokeWidth={3}
              color="#5B5B5A"
            />
          </div>
        </div>

        <div id="navbar-logo" className="flex-1">
          <a href="#"><img src="/images/header-logo.svg" className="w-14 h-12 mx-auto mdp:mx-0 mdp:w-20 mdp:h-16"/></a>
        </div>

        {/* links */}
        <div id="navbar-links" className="flex-1 hidden mdp:flex space-x-10 items-center justify-center text-base">
          <a href="#">Story</a>
          <a href="#">Frogs</a>
          <a href="#">Team</a>
          <a href="#">Roadmap</a>
          <a href="#">FAQ</a>
        </div>


        <div id="navbar-wallet-sm" className="flex-1 mdp:hidden">
          <div className="w-10 h-10  ml-auto rounded-lg bg-white">

          </div>
        </div>
        <div id="navbar-wallet-md" className="flex-1 hidden mdp:flex text-white">
          <button className="w-44 h-16 border ml-auto" style={{'backgroundColor':'#01CA17'}}>
            Connect
          </button>
        </div>
      </div>
      {/*background image*/}
      <div class="bg-none" className="h-0 items-center">
        <img src="/images/landing-background.jpg" />
        </div>
      {/*we need your help image*/}
      <div id="hero" className="flex justify-center items-center h-64">
        <img src="/images/help-landing.png" width="600" height="208"/>

      </div>

      <div id="story">
        
      </div>

      <div id="collection" className="relative overflow-hidden flex w-full">
      <div className="w-1/4 absolute left-0 left- flex flex-col anim-inverseScroll">
            <img src="/images/col1.jpg" className="w-full" />
            <img src="/images/col1.jpg" className="w-full" />
        </div>
        <div className="w-1/4 absolute left-1/4 left- flex flex-col anim-scroll">
            <img src="/images/col1.jpg" className="w-full" />
            <img src="/images/col1.jpg" className="w-full" />
        </div>
        <div className="w-1/4 absolute left-2/4 left- flex flex-col anim-inverseScroll">
            <img src="/images/col1.jpg" className="w-full" />
            <img src="/images/col1.jpg" className="w-full" />
        </div>
        <div className="w-1/4 absolute left-3/4 left- flex flex-col anim-scroll">
            <img src="/images/col1.jpg" className="w-full" />
            <img src="/images/col1.jpg" className="w-full" />
        </div>
    
        <div id="collection-content" className="z-10 p-5 px-6 w-4/5 sm:w-auto bg-white">
          <h1 id="collection-content-title" className="font-bowlby text-center text-3xl">VIEW THE FROGS</h1>
          <p id="collection-content-paragraph">
            All across the land, frogs are being snatched up by storks. King Ribbit needs <strong>YOUR</strong> help to save the remaining <strong>10,000</strong> frogs in disguise.
            Join his kingdom <strong>TODAY</strong> and check the mysterious world of Frognolia.
          </p>
          <button id="collection-content-button">VIEW ON OPENSEA</button>
        </div>
      </div>

      <div id="team">

      </div>

      <div id="roadmap">

      </div>
    </div>
  );
}

export default App;