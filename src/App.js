import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Hamburger from 'react-hamburger-menu'

function App() {
  const [navhamburgerIsOpen, setNavhamburgerIsOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  window.addEventListener('scroll', function(e){
    if(window.scrollY > 30 && !isScrolledDown){
      setIsScrolledDown(true);
    }else if(isScrolledDown && window.scrollY < 30){
      setIsScrolledDown(false);
    }

  })  

  return (
    <div>
      <div id="navbar" className={`transition-all duration-300 mdp:duration-200 ease-in-out z-20 backdrop-filter ${isScrolledDown ? 'backdrop-blur-lg bg-black mdp:bg-white bg-opacity-5 mdp:bg-opacity-50':''} px-3 mdp:px-8 py-3 mdp:py-5 flex items-center justify-between fixed top-0 left-0 w-full`}>
        <div id="navbar-menu" className="flex flex-1 mdp:hidden items-center ">
          <div className="flex w-10 h-10 rounded-lg bg-white items-center justify-center cursor-pointer">
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
        <div id="navbar-links" className={`transition-all duration-200 ease-in-out flex-1 hidden mdp:flex space-x-10 items-center justify-center text-base ${isScrolledDown ? 'text-gray-800':'text-white'}`}>
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
          <button className="w-44 h-16 ml-auto" style={{'backgroundColor':'#01CA17'}}>
            Connect
          </button>
        </div>
      </div>
      {/*background image*/}

      {/*we need your help image*/}
      <div id="hero" className="flex relative justify-center items-center h-screen max-h-screen" style={{'backgroundColor': '#b5d6ff'}}>
        <img src="/images/help-landing.png" width="600" height="208" className="z-10"/>
        <img src="/images/landing-background.jpg" className="w-full absolute bottom-0 left-0"/>

      </div>
      {/*
      <div id="connect" className="flex justify-center items-center h-64">
      <button className="w-44 h-16 border" style={{'backgroundColor':'#01CA17'}}>
            Connect
          </button>


      </div>*/}
      <div id="story">
        <br></br>
        <br></br>
        <br></br>
        <span class="flex relative justify-center items-center font-gentium text-4xl">
          How our story starts...
        </span>
        <img src="/images/story.png" className="w-full bottom-0 left-0"/>
        
      </div>
      <div id="story2">
        <span class="flex relative justify-center items-center font-gentium text-2xl">
        For 150 years, the hidden kingdom of Frognolia has been a wondrous land of lush green forests,
        swampy lakes, and  packs of Bud-weis-er. Thousands of hoppin' mad frogs live here, and their
        parties are legendary: the clubs are always jumping in Frognolia.
        </span>
      </div>

      <div id="collection" className="relative overflow-hidden flex items-center justify-center w-full">
        <div className="w-2/4 mdp:w-1/4 absolute left-0 top-0 flex flex-col anim-inverseScroll">
          <img src="/images/col1.jpg" className="w-full" />
          <img src="/images/col1.jpg" className="w-full" />
        </div>
        <div className="w-2/4 mdp:w-1/4 absolute left-2/4 mdp:left-1/4 top-0 flex flex-col anim-scroll">
          <img src="/images/col2.jpg" className="w-full" />
          <img src="/images/col2.jpg" className="w-full" />
        </div>
        <div className="w-1/4 absolute  left-2/4 top-0 hidden mdp:flex flex-col anim-inverseScroll">
          <img src="/images/col3.jpg" className="w-full" />
          <img src="/images/col3.jpg" className="w-full" />
        </div>
        <div className="w-1/4 absolute left-3/4 top-0 hidden mdp:flex flex-col anim-scroll">
          <img src="/images/col4.jpg" className="w-full" />
          <img src="/images/col4.jpg" className="w-full" />
        </div>

        <div id="collection-content" className="z-10 p-5 px-6 w-4/5 sm:w-auto bg-white">
          <h1 id="collection-content-title" className="font-bowlby text-center text-3xl">VIEW THE FROGS</h1>
          <p id="collection-content-paragraph" className="font-prompt my-3 text-center">
            All across the land, frogs are being snatched up by storks. King Ribbit needs <strong>YOUR</strong> help to save the remaining <strong>10,000</strong> frogs in disguise.
            Join his kingdom <strong>TODAY</strong> and check the mysterious world of Frognolia.
          </p>
          <div id="collection-content-button" className="text-center">
            <button className="p-4 font-bowlby text-white text-xl px-6">VIEW ON OPENSEA</button>
          </div>
        </div>
      </div>

      <div id="team">
        <h1 id="team-title">THE TEAM</h1>
        <div id="team-list">

        </div>
      </div>

      <div id="roadmap">

      </div>

      <div id="faq">

      </div>

      <footer>

      </footer>
    </div>
  );
}

export default App;