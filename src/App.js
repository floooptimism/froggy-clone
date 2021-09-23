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
        <div id="hero-content" className="z-10">
          <img src="/images/help-landing.png" width="600" height="208"/>
          <div id="hero-content-button" className="text-center w-full">
            <button className="h-16 border bg-white font-bowlby px-6 py-2 text-xl shadow-2xl" style={{'olor':'#01CA17'}}>
                  Connect Wallet
            </button>
            <p className="font-bowlby text-white mt-3">Help Save The Frogs!</p>
          </div>
        </div>
        <img src="/images/landing-background.jpg" className="w-full absolute bottom-0 left-0"/>

        <div id="connect" className="flex justify-center items center h-64">
          


        </div>
      </div>
      
      <Story />

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

      <div id="team" className="z-10 flex items-center py-16 space-y-12 flex-col">
        <h1 id="team-title" className="font-bowlby text-4xl"
          style={{
            'color':'#191c43'
          }}
        >THE TEAM</h1>

        <div id="team-list" className="w-full">
          <div id="team-card" className="flex flex-col items-center">
            <div id="team-card-image" className="overflow-hidden rounded-full">
              <img src="/images/team/person1.png" />
            </div>
            <div id="team-card-role" className="font-bowlby">
              King Ribbit
            </div>
            <div id="team-card-name" className="font-bowlby">
              The King
            </div>
          </div> 

          <div id="team-card" className="flex flex-col items-center">
            <div id="team-card-image" className="overflow-hidden rounded-full">
              <img src="/images/team/person1.png" />
            </div>
            <div id="team-card-role" className="font-bowlby">
              King Ribbit
            </div>
            <div id="team-card-name" className="font-bowlby">
              The King
            </div>
          </div> 


<div id="team-card" className="flex flex-col items-center">
            <div id="team-card-image" className="overflow-hidden rounded-full">
              <img src="/images/team/person1.png" />
            </div>
            <div id="team-card-role" className="font-bowlby">
              King Ribbit
            </div>
            <div id="team-card-name" className="font-bowlby">
              The King
            </div>
          </div> 


<div id="team-card" className="flex flex-col items-center">
            <div id="team-card-image" className="overflow-hidden rounded-full">
              <img src="/images/team/person1.png" />
            </div>
            <div id="team-card-role" className="font-bowlby">
              King Ribbit
            </div>
            <div id="team-card-name" className="font-bowlby">
              The King
            </div>
          </div> 


<div id="team-card" className="flex flex-col items-center">
            <div id="team-card-image" className="overflow-hidden rounded-full">
              <img src="/images/team/person1.png" />
            </div>
            <div id="team-card-role" className="font-bowlby">
              King Ribbit
            </div>
            <div id="team-card-name" className="font-bowlby">
              The King
            </div>
          </div> 

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


function Story(){
  return (
    <div id="story" className="px-8 py-10 flex flex-col space-y-16 items-center font-book">
      <div id="story-intro" className="flex flex-col items-center space-y-8">
        <h1 className="font-book font-bold text-4xl text-center">How our story starts...</h1>
        <img src="/images/story/story-intro.png" className="w-full h-full"/>
        <p id="paragraph">For 150 years, the hidden kingdom of Frognolia has been a wondrouds land of lush green forests, swampy lakes, and packs of Bud-weis-er. Thousands of hoppin' mad frogs live here, and their parties are legendary: the club are always jumping in Frognolia.</p>
      </div>

      <div id="story-chapter1" className="flex flex-col mdp:flex-row items-center justify-center space-x-4 space-y-8">
        <div className="flex-1">
          <img id="image" src="/images/story/story-chapter1.png" className="mx-auto"/>
        </div>
        <div className="flex-1">
          <p id="paragraph">But leaping forwardto the present day, there's a problem. And it's a big one.<br/>
            <span className="ml-6"> </span>Storks.<br/>
            <span className="ml-6"> </span>Everywhere<br/>
            <span className="ml-6"></span>Swooping down and killing these innocent green creatures for no reason.<br/>
            <span className="ml-6"></span>I mean, it's bad.<br/>
            <span className="ml-6"></span>Frogs are croaking left, right, and center.
          </p>
        </div>
      </div>
    
      <div id="story-chapter2" className="flex flex-col item-center space-x-4 space-y-8">
        
      </div>

    </div>
  )
}