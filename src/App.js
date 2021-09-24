import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

import Hamburger from 'react-hamburger-menu'
import { observe } from 'react-intersection-observer';
// import Accordion from 'react-responsive-accordion';



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
      <div id="navbar" className={`transition-all duration-300 mdp:duration-200 ease-in-out z-50 backdrop-filter ${isScrolledDown ? 'backdrop-blur-lg bg-black mdp:bg-white bg-opacity-5 mdp:bg-opacity-50':''} px-3 mdp:px-8 py-3 mdp:py-5 flex items-center justify-between fixed top-0 left-0 w-full`}>
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
          <a href="#"><img alt="header" src="/images/header-logo.svg" className="w-14 h-12 mx-auto mdp:mx-0 mdp:w-20 mdp:h-16"/></a>
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
      <div id="hero" className="flex relative justify-center items-center" style={{'backgroundColor': '#b5d6ff'}}>
        <div id="hero-content" className="z-10">
          <img alt="landing" src="/images/help-landing.png" width="600" height="208"/>
          <div id="hero-content-button" className="text-center w-full">
            <button className="h-16 border bg-white font-bowlby px-6 py-2 text-xl shadow-2xl" style={{'olor':'#01CA17'}}>
                  Connect Wallet
            </button>
            <p className="font-bowlby text-white mt-3">Help Save The Frogs!</p>
          </div>
        </div>
        <img alt="landing-background" src="/images/landing-background.jpg" className="w-full absolute bottom-0 left-0"/>

        <div id="connect" className="flex justify-center items center h-64">
          


        </div>
      </div>
      
      <Story />

      <div id="collection" className="z-10 relative overflow-hidden flex items-center justify-center w-full">
        <div className="w-2/4 mdp:w-1/4 absolute left-0 top-0 flex flex-col anim-inverseScroll">
          <img alt="collection collumn 1" src="/images/col1.jpg" className="w-full" />
          <img alt="collection collumn 1" src="/images/col1.jpg" className="w-full" />
        </div>
        <div className="w-2/4 mdp:w-1/4 absolute left-2/4 mdp:left-1/4 top-0 flex flex-col anim-scroll">
          <img alt="col2" src="/images/col2.jpg" className="w-full" />
          <img alt="column 2 collection" src="/images/col2.jpg" className="w-full" />
        </div>
        <div className="w-1/4 absolute  left-2/4 top-0 hidden mdp:flex flex-col anim-inverseScroll">
          <img alt="col3" src="/images/col3.jpg" className="w-full" />
          <img alt="col3" src="/images/col3.jpg" className="w-full" />
        </div>
        <div className="w-1/4 absolute left-3/4 top-0 hidden mdp:flex flex-col anim-scroll">
          <img alt="collection collumn 1" src="/images/col4.jpg" className="w-full" />
          <img alt="collection collumn 1" src="/images/col4.jpg" className="w-full" />
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
          

          <div className="team-card flex flex-col items-center">
            <div className="team-card-image overflow-hidden rounded-full">
              <img alt="person" src="/images/team/person1.png" />
            </div>
            <div className="team-card-role font-bowlby">
              King Ribbit
            </div>
            <div className="team-card-name font-bowlby">
              The King
            </div>
          </div> 

          <div className="team-card flex flex-col items-center">
            <div className="team-card-image overflow-hidden rounded-full">
              <img alt="person" src="/images/team/person1.png" />
            </div>
            <div className="team-card-role font-bowlby">
              King Ribbit
            </div>
            <div className="team-card-name font-bowlby">
              The King
            </div>
          </div> 

          <div className="team-card flex flex-col items-center">
            <div className="team-card-image overflow-hidden rounded-full">
              <img alt="person" src="/images/team/person1.png" />
            </div>
            <div className="team-card-role font-bowlby">
              King Ribbit
            </div>
            <div className="team-card-name font-bowlby">
              The King
            </div>
          </div> 

          <div className="team-card flex flex-col items-center">
            <div className="team-card-image overflow-hidden rounded-full">
              <img alt="person" src="/images/team/person1.png" />
            </div>
            <div className="team-card-role font-bowlby">
              King Ribbit
            </div>
            <div className="team-card-name font-bowlby">
              The King
            </div>
          </div> 

          <div className="team-card flex flex-col items-center">
            <div className="team-card-image overflow-hidden rounded-full">
              <img alt="person" src="/images/team/person1.png" />
            </div>
            <div className="team-card-role font-bowlby">
              King Ribbit
            </div>
            <div className="team-card-name font-bowlby">
              The King
            </div>
          </div> 

          <div className="team-card flex flex-col items-center">
            <div className="team-card-image overflow-hidden rounded-full">
              <img alt="person" src="/images/team/person1.png" />
            </div>
            <div className="team-card-role font-bowlby">
              King Ribbit
            </div>
            <div className="team-card-name font-bowlby">
              The King
            </div>
          </div> 


        </div>
      </div>

      <div id="roadmap" className="z-10 py-12 px-4 flex flex-col space-y-12">
        <div id="roadmap-title" className="font-bowlby text-5xl text-white text-center">
          ...WHERE OUR STORY CONTINUES
        </div>

        <div className="roadmap-entry">
          <div className="flex-1">
            <img alt="1000" src="/images/roadmap/1000.png" className="mx-auto"/>
          </div>

          <div className="flex-1 flex items-center">
            <div className="roadmap-entry-text">
              <h1 className="text-2xl">1000 Frogs</h1>
              <p >
                When 7500 frogs are saved from being storked-in-the-throat, King Ribbit will buy back 500 of his Frogs in Disguise characters in the first 2 weeks that fall below 0.08eth. He will do this to keep the floor high, good people. King Ribbit is a benevolent frog who spreads the love! He wants everyone to enjoy the wealth.
              </p>
            </div>
          </div>
        </div>

        <div className="roadmap-entry">
          <div className="flex-1 mdp:order-last">
            <img alt="5000" src="/images/roadmap/5000.png" className="mx-auto "/>
          </div>

          <div className="flex-1 flex items-center">
            <div className="roadmap-entry-text">
              <h1 className="text-2xl">5000 Frogs</h1>
              <p >
                 When 7500 frogs are saved from being storked-in-the-throat, King Ribbit will buy back 500 of his Frogs in Disguise characters in the first 2 weeks that fall below 0.08eth. He will do this to keep the floor high, good people. King Ribbit is a benevolent frog who spreads the love! He wants everyone to enjoy the wealth.
              </p>
            </div>
            
          </div>
        </div>


        <div className="roadmap-entry">
          <div className="flex-1">
            <img alt="7500" src="/images/roadmap/7500.png" className="mx-auto "/>
          </div>

          <div className="flex-1 flex items-center">
            <div className="roadmap-entry-text">
              <h1 className="text-2xl">5000 Frogs</h1>
              <p >
                 When 7500 frogs are saved from being storked-in-the-throat, King Ribbit will buy back 500 of his Frogs in Disguise characters in the first 2 weeks that fall below 0.08eth. He will do this to keep the floor high, good people. King Ribbit is a benevolent frog who spreads the love! He wants everyone to enjoy the wealth.
              </p>
            </div>
          </div>
        </div>


        <div className="roadmap-entry">
          <div className="flex-1 mdp:order-last">
            <img alt="10000" src="/images/roadmap/10000.png" className="mx-auto "/>
          </div>

          <div className="flex-1 flex items-center">
            <div className="roadmap-entry-text">
              <h1 className="text-2xl">5000 Frogs (Sold Out)</h1>
              <p >
                 When 7500 frogs are saved from being storked-in-the-throat, King Ribbit will buy back 500 of his Frogs in Disguise characters in the first 2 weeks that fall below 0.08eth. He will do this to keep the floor high, good people. King Ribbit is a benevolent frog who spreads the love! He wants everyone to enjoy the wealth.

              </p>
            </div>
            
          </div>
        </div>

        <div id="roadmap-more" className="pt-12 font-bowlby px-8">
            <div>
              <h1 className="mb-8 text-center text-4xl text-white">BUT WAIT! THERE'S MORE...</h1>
              <div className="flex flex-col items-center mdp:items-start justify-evenly space-y-4 mdp:space-y-0 mdp:flex-row mdp:space-x-8 text-center">

                <div className="roadmap-more-container bg-white rounded-lg p-4">
                    <h1 className="roadmap-more-container-title">Animated Series</h1>
                    <p className="roadmap-more-container-paragraph">King Ribbit has many plans up his green sleeves. He’s going to create a regular, animated Frogs in Disguise YouTube series. And YOU, the saver of frogs, the hero of Frognolia, will get a percentage of the ad revenue if your saved frog is used in any of the episodes. And many, if not all, of the frogs will be used over time.</p>
                </div>

                <div className="roadmap-more-container bg-white rounded-lg p-4">
                    <h1 className="roadmap-more-container-title">Merchandise</h1>
                    <p className="roadmap-more-container-paragraph">King Ribbit will create Frogs in Disguise merchandise to spread the love of Frognolia. T-shirts, toys, the whole nine swamps; if you can think of it, he’ll probably do it—and YOU, Mr Frog Adopter, will gain a percentage of the profits—if your saved frog is used on any item. And why wouldn’t it be? There’s a lot to be created!</p>
                </div>

                <div className="roadmap-more-container bg-white rounded-lg p-4">
                    <h1 className="roadmap-more-container-title">Frogs In Disguise Game</h1>
                    <p className="roadmap-more-container-paragraph">King Ribbit will release a new NFT, but with a twist: digital frog spawn you can raise. But ONLY those who saved a Frogs in Disguise character can apply. These NFTs will be like a tamagotchi—you’ll have to raise it on the blockchain, from spawn to tadpole, etc. Look after it, and it will soon develop to the next level.</p>
                </div>

              </div>
            </div>
        </div>

      </div>

      <Faq/>

      <footer>

      </footer>
    </div>
  );
}

function Story(props){
  const [expand, setExpand] = useState(false);
  const [inView, setInview] = useState(false);

  function getStoryHeight(){
    let chapter4 = document.getElementById('story-chapter4')
    return chapter4.offsetTop + chapter4.offsetHeight + 150;
  }

   useEffect(()=>{
    let storyheight = getStoryHeight() + 'px';
    let listener = function(e) {
      let windowScrollHeight = window.scrollY + window.innerHeight;
      console.log(document.getElementById('story').clientHeight, windowScrollHeight)
      if((windowScrollHeight - document.getElementById('story').offsetTop) < 300){
        setInview(false);
      }else if(windowScrollHeight >= getStoryHeight() + document.getElementById('story').offsetTop){
        setInview(false);
      }else{
        setInview(true);
      }
    } 
    let observer = new IntersectionObserver((entries)=>{
      if(entries[0].intersectionRatio){
        window.addEventListener('scroll', listener);
      }else{
        window.removeEventListener('scroll',listener);
      }
    })

      observer.observe(document.getElementById('story'));
  },[])

  function collapse(){
    let chapter2 = document.getElementById('story-chapter1');
    setExpand(false);
    document.getElementById('story').style.height = (chapter2.offsetTop + chapter2.clientHeight + 150) + 'px';
  }

  function readmore(){
    setExpand(true);
    document.getElementById('story').style.height = document.getElementById('story').scrollHeight + 'px';
  }

  window.addEventListener('resize', function(){
    let story = document.getElementById('story')
    let chapter4 = document.getElementById('story-chapter4') 
    if(expand){
      setTimeout(()=>{
        story.style.height = (chapter4.offsetTop + chapter4.offsetHeight + 150) + 'px';
      },0)
      
    }
  })

  return (
    <>
    <div id="story" className="transition-all linear duration-500 relative px-4 py-20 flex flex-col space-y-16 items-center font-book">
      <div id="story-intro" className="flex flex-col items-center space-y-8">
        <h1 className="font-book font-bold text-4xl text-center">How our story starts...</h1>
        <img alt="story intro" src="/images/story/story-intro.png" className="w-full h-full"/>
        <p id="paragraph">For 150 years, the hidden kingdom of Frognolia has been a wondrouds land of lush green forests, swampy lakes, and packs of Bud-weis-er. Thousands of hoppin' mad frogs live here, and their parties are legendary: the club are always jumping in Frognolia.</p>
      </div>

      <div id="story-chapter1" className="flex flex-col mdp:flex-row items-center justify-center space-x-4 space-y-8">
        <div className="flex-1">
          <img alt="chapter 1" id="image" src="/images/story/story-chapter1.png" className="mx-auto"/>
        </div>
        <div className="flex-1">
          <p id="paragraph">But leaping forward to the present day, there's a problem. And it's a big one.<br/>
            <span className="ml-6"> </span>Storks.<br/>
            <span className="ml-6"> </span>Everywhere<br/>
            <span className="ml-6"></span>Swooping down and killing these innocent green creatures for no reason.<br/>
            <span className="ml-6"></span>I mean, it's bad.<br/>
            <span className="ml-6"></span>Frogs are croaking left, right, and center.
          </p>
        </div>
      </div>
    
      <div id="story-chapter2" className="flex flex-col item-center space-x-4 space-y-8">
        <div className="flex-1">
            <img alt="chapter2" id="image" src="/images/story/story-chapter2.png" className="mx-auto"/>
        </div>

        <div className="flex-1">
          <p id="paragraph">Recently, King Ribbit - the most ambitious of the amphibians - called a meeting with the High Council, the greates minds in Frognolia. King Ribbit needed a solution and quick.<br/>
            <span className="ml-6"> </span>He laid out a table of snacks: bowls of dead spiders and chunky flies.<br/>
            <span className="ml-6"> </span>"So," King Ribbit said, "how can we stop these storks killing everyone in FN?"<br/>
            <span className="ml-6"></span>Dr Toady Newton put his hand up. "Blah blah blah blah<br/>
            <span className="ml-6"></span>Lorem ipsum super super nice<br/>
            <span className="ml-6"></span>omg shut up
          </p>
        </div>
      </div>

      <div id="story-chapter3" className="flex flex-col mdp:flex-row items-center justify-center space-x-4 space-y-8">
        <div className="flex-1">
          <img alt="chapter3" id="image" src="/images/story/story-chapter3.png" className="mx-auto"/>
        </div>
        <div className="flex-1">
          <p id="paragraph">But leaping forward to the present day, there's a problem. And it's a big one.<br/>
            <span className="ml-6"> </span>Storks.<br/>
            <span className="ml-6"> </span>Everywhere<br/>
            <span className="ml-6"></span>Swooping down and killing these innocent green creatures for no reason.<br/>
            <span className="ml-6"></span>I mean, it's bad.<br/>
            <span className="ml-6"></span>Frogs are croaking left, right, and center.
          </p>
        </div>
      </div>

      <div id="story-chapter4" className="flex flex-col mdp:flex-row items-center justify-center space-x-4 space-y-8">
        <div className="flex-1">
          <img alt="chatper4" id="image" src="/images/story/story-chapter4.png" className="mx-auto"/>
        </div>
      </div>

      <div id="story-readmore" className={`z-20 absolute left-0 w-full bottom-10 text-center ${expand ? 'hidden':''}`}>
        {!expand && <button className="text-2xl" onClick={readmore}>Read more</button>}
      </div>


      <div id="button-fade" className="z-10 w-full absolute bottom-0 text-center" >
        <div className="h-16 w-full" style={{
        'backgroundImage':'linear-gradient(rgb(255 255 255 / 1%), rgb(219 222 238))'
      }}>
        </div>
        <div className="h-16" style={{'backgroundColor':'rgb(219,222,238)'}}></div>
      </div>

      <div id="stop-reading" className={`w-full h-16 fixed bottom-8 justify-center flex ${inView && expand ? '':'movedown'}`}>
        <button className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center"
          onClick={collapse}
        >
          <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            style={{
              "fill":"white"
            }}
          >
            <defs/>
            <path className="cls-1" id="Close" d="M893,1243a22,22,0,1,0,22,22A22.025,22.025,0,0,0,893,1243Zm0,41a19,19,0,1,1,19-19A19,19,0,0,1,893,1284Zm8.039-27.08a1.5,1.5,0,0,0-2.12.04l-5.688,5.92-6.191-5.96a1.5,1.5,0,1,0-2.08,2.16l6.149,5.92-6.149,5.92a1.5,1.5,0,0,0-.041,2.12,1.48,1.48,0,0,0,1.081.46,1.5,1.5,0,0,0,1.04-.42l6.191-5.96,5.688,5.92a1.5,1.5,0,0,0,2.12.04,1.5,1.5,0,0,0,.042-2.12l-5.729-5.96,5.729-5.96A1.5,1.5,0,0,0,901.039,1256.92Z" transform="translate(-871 -1243)"/>
          </svg>
        </button>
      </div>
    </div>
    </>
  )
}

function Faq(){
  const [accordionEnabled, setAccordionEnabled] = useState(null);

  // collapse accordion
  function collapse(element){
    element.classList.remove('accordion-container-expand');
    element.firstChild.classList.remove('accordion-content-expand');
    element.firstChild.style.height = 0;

    
    
  }

  function expand(element){
    element.classList.add('accordion-container-expand');
    element.firstChild.classList.add('accordion-content-expand')
    element.firstChild.style.height = element.firstChild.scrollHeight + 'px';
  }

  //accordion click
  function handleAccordionClick(e){
    console.log(e.target);
    if(e.target.classList.contains('accordion-label')){
      setAccordionEnabled((prev)=>{
        if(e.target.nextSibling.isSameNode(prev)){
          collapse(prev);
          return null;
        }
        if(prev) collapse(prev);
        expand(e.target.nextSibling);
        return e.target.nextSibling;
      });
    }
  }


  useEffect(function (){
    let accordionContents = document.getElementsByClassName('accordion-content');

    // resizes expanded accordions when the window resizes
    function resize(e){
      function resize(element){
        console.log('resizing', element);
        console.log(element.scrollHeight);
        if(element.scrollHeight > 0){
          element.style.height = 'auto';
          setTimeout(()=>{
            element.style.height = element.scrollHeight + 'px';
          },0)
          
        }
        
      }

      for(let element of accordionContents){
        if(element.clientHeight > 0) setTimeout(resize.bind(null, element));
      }
    }

    window.addEventListener('resize', resize);
    window.addEventListener('click', handleAccordionClick)

    return ()=>{
      window.removeEventListener('resize',resize);
      window.removeEventListener('click',handleAccordionClick);
    }
  },[])


  return (

    <div id="faq" className="font-bowlby py-12 px-4">
        <div className="flex items-center ">
          <div className="faq-image hidden mdp:block" style={{
            "height":"430px"
          }}>
            <img src='images/piratebird.png' className="mx-auto mdp:block hidden " style={{
              "max-width":"320px",
              "max-height":"430px"
            }}/>
          </div>


          <div className="accordion-group flex-1">
          <h1 className="text-4xl faq-title mb-4 text-center mdp:text-left">Faq</h1>
          <div className="accordion">
            <div className="accordion-label">When will the animated series start</div>
            <div className="accordion-content-container">
              <div className="accordion-content">
                 King Ribbit’s already got the artist and animation team sat at his banquet table, loading up on a plentiful amount of flies, spiders and swamp water. The voice actors—a team of talented and trained terrapins—are also wading through Frognolia as we speak. Once all the frogs have been saved, King Ribbit will release the first episode WITHIN 2 WEEKS.
              </div>
           </div>
          </div>
          <div className="accordion">
            <div className="accordion-label">Can you tell me more about hte ggame?</div>
            <div className="accordion-content-container">
              <div className="accordion-content">
                 Of course! We want to give all frog-savers an exclusive chance to be a part of something new and exciting on the block chain. You will be able to own a virtual frog from its birth (a frog spawn) up to its final form. You have to love and nurture it to see it evolve. How you care for your little spawn along the way will determine its path. Will you create the next King of Frognolia? Or maybe a member of the High Council? Let’s wait and see.
              </div>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-label">why should I save a frog</div>
            <div className="accordion-content-container">
              <div className="accordion-content">
                  Firstly, because they look cool as F! As in F for frog. Who wouldn’t want one of these adorable frogs in disguise? But more importantly, just like you, King Ribbit has longed for an NFT project that has great art, a solid team, and an exciting future with a high ceiling. King Ribbit and his team of workers have put months of development into getting this far and have spent a long time setting big, realistic goals that will take this to another level!
              </div>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-label">How to save a frog</div>
            <div className="accordion-content-container">
              <div className="accordion-content">
                Okay, so this is the technical part, but we’ll keep it brief. Firstly, make sure you have Metamask installed on your browser. Then make sure you’ve transferred ETH to your wallet. Then it’s as simple as connecting your Metamask at the top of this page and clicking “Save a Frog”. It’s easy. Even an evil undercover stork could do it! </div>
              </div>
          </div>
          <div className="accordion">
            <div className="accordion-label">Okay i saved a frog</div>
            <div className="accordion-content-container">
              <div className="accordion-content">
                Because it’s so cute! Look at that little jumpin’ croaker and its ridiculous disguise. But also, the King Ribbit Kingdom is constantly evolving. King Ribbit’s team of workers has so much cool stuff planned for the future: access to the Frogs-in-Disguise Blockchain game, opportunities to have your saved frog used on merchandise, as well as having your frog-in-disguise featured in our YouTube animated series! Also, there will be secret clubs for frog-savers that only those with a frog in disguise can enter. And the list goes on…</div>
              </div>
          </div>
          <div className="accordion">
            <div className="accordion-label">Is my frog unique?</div>
            <div className="accordion-content-container">
              <div className="accordion-content">
                100% unique. Like a fingerprint or a snowflake, no two frogs in disguise are alike. No twins, no duplicates. Each frog was carried into Frognolia at birth by a benevolent stork, back when the frogs and storks lived harmoniously—but that’s another story for another time. Either way, each frog was delivered with its own unique look, made up of 220 different variants. King Ribbit has personally walked through Frognolia and checked every single frog and cross-referenced them on a complex algorithm. There are no doubles.</div>
              </div>
          </div>
          <div className="accordion">
            <div className="accordion-label">are some frogs rarer than others?</div>
            <div className="accordion-content-container">
              <div className="accordion-content">
                Great question, my friend! The answer is yes. Although each frog is unique, with its own special look and disguise, there are some — such as King Ribbit and the members of the High Council — that are rarer and can’t be purchased. Like in any society, some frogs are just naturally cooler, but you will have a chance to save these frogs if you are one of the first 1,000 saviors — five of these rare frogs will be airdropped to five lucky frog-savers. </div>
              </div>
          </div>
        </div>
        </div>
        

    </div>
  )
}


export default App;


