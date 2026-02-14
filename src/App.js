import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Album from './Album';


import grishiTib from './img/lover.png';
import alamo from './img/alamo.jpg';
import brushTeef from './img/brushTeef.jpg';
import callcenter from './img/callcenter.png';
import complexVar from './img/complexVar.jpg';
import constipated from './img/constipated.jpg';
import cry from './img/cry.jpeg';
import flipOff from './img/flipOff.jpg';
import frown from './img/frown.png';
import grishiCry from './img/grishiCry.png';
import grishiFish from './img/grishiFish.jpg';
import grishiGums from './img/grishiGums.jpg';
import grishiSad from './img/grishiSad.png';
import grishiScream from './img/grishiScream.jpg';
import grishiShock from './img/grishiShock.jpg';
import grishiToof from './img/grishiToof.jpg';
import kissyLips from './img/kissyLips.jpg';
import scream from './img/scream.jpg';
import timBang from './img/timBang.png';
import timDisaprove from './img/timDisaprove.png';
import timmyCrashout from './img/timmyCrashout.png';
import strandBang from './img/strandBangs.png';
import autism from './img/autism.jpg';
import youngBang from './img/youngBang.jpg';
import herpes from './img/herpes.jpg';
import mountain from './img/mountain.jpg';
import sunscreen from './img/sunscreen.jpg';


import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';

function Home() {
  const [answer, setAnswer] = useState(null);
  const [cardOpen, setCardOpen] = useState(false);
  const [insultCount, setInsultCount] = useState(0);
  const [hearts, setHearts] = useState([]);

  // Create falling hearts
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 3 + 2
      };
      setHearts(prev => [...prev.slice(-20), newHeart]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // Insult messages (escalating but playful)
  const insults = [
    { text: "timmy hates his white baby ;( ", image: sunscreen },
    { text: "but im your yeti girlfriend! #yetilivesmatter ", image: mountain },
    { text: "me watching you hit the hell no button ", image: herpes },
    { text: "this is who youre hurting btw ", image: youngBang },
    { text: "can i bribe you with the antennas ", image: strandBang },
    { text: "but im so au(tim)sic for you ", image: autism },
    { text: "do you even love me? ", image: grishiScream },
    { text: "you must be some other bitch's valentine!", image: scream },
    { text: "damn you dont love me", image: grishiSad },
    { text: "grishi sad", image: cry },
    { text: "is it because you think im fat", image: grishiToof },
    { text: "you think im an unlovable americain", image: grishiCry },
    { text: "but i thought i was your baby ;(", image: grishiShock },
    { text: "gonna crash out", image: flipOff },
    { text: "okay but what if i use timothy instead of tibby", image: timmyCrashout },
    { text: "will timothy be my valentine?", image: timBang },
    { text: "pretty please say yes", image: grishiFish },
    { text: "what if i give tibby a kiss", image: kissyLips },
    { text: "dont do this to me baby", image: frown },
    { text: "i thought you liked me", image: grishiGums },
    { text: "be niiiice", image: constipated },
    { text: "im at the no tibby factory", image: complexVar },
    { text: "body milk but he wanted coke", image: callcenter },
    { text: "im gonna force feed you tofu surprise", image: brushTeef },
    { text: "just say yes ;(", image: timDisaprove }
  ];

  const handleYes = () => {
    setAnswer('yes');
  };

  const handleNo = () => {
    setAnswer('no');
    setInsultCount(prev => prev + 1);
  };

  const handleCardClick = () => {
    if (!cardOpen) {
      setCardOpen(true);
    }
  };

  const resetChoice = () => {
    setAnswer(null);
  };

  // Get current insult based on count
  const getCurrentInsult = () => {
    const index = Math.min(insultCount - 1, insults.length - 1);
    return insults[index] || insults[insults.length - 1];
  };

  return (

    <div className="app">

      {/* Background hearts */}
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart-fall"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`
          }}
        >
          ❤️
        </div>
      ))}
      <div className="container">
        <h1 className="title">happy valentine's day, tibby!</h1>

        {/* Valentine's Card */}
        <div className="card-section">
          <div
            className={`card ${cardOpen ? 'open' : ''}`}
            onClick={handleCardClick}
          >
            {/* Card Front (when closed) */}
            <div className="card-front">
              <div className="card-front-content">
                <div className="envelope-flap"></div>
                <div className="envelope-body">
                  <h2>for tibster</h2>
                  <div className="heart-seal"> 🤍 </div>
                </div>
              </div>
            </div>

            {/* Card Inside (when opened) */}
            <div className="card-inside">
              <div className="card-left">
                <div className="photo-frame">
                  {/* Replace with your actual image or keep placeholder */}
                  <div className="photo-placeholder">
                    <div className="photo-content">
                      <img src={grishiTib} />
                    </div>
                  </div>
                  <div className="photo-caption">grishi + tibby 4 ever</div>
                </div>
              </div>
              <div className="card-right">
                <div className="letter">
                  <h3>to my dearest lover,</h3>
                  <p>
                    You're my best friend, my soul mate, my ride or die.
                    You save my life every time you call me and tell me you love me. I will save your life too one day. You're such an important part of my life. I want to experience everything with you by my side. Thank you for being you, and for choosing me every day.
                  </p>
                  <div className="letter-signature">
                    <p>with all my love,</p>
                    <p>grishi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* Valentine's Proposal (below the card) */}
        <div className="proposal-section">
          <div className="proposal-box">
            <h2 className="proposal-title"> will you be my valentine? </h2>
            <div className="question-container">
              {!answer ? (
                <div className="choice-buttons">
                  <button className="yes-btn" onClick={handleYes}> Yes </button>
                  <button className="no-btn" onClick={handleNo}> No </button>
                </div>
              ) : answer === 'yes' ? (
                <div className="response happy-response">
                  <h3>REALLLLY TIBBY LOVES GRISHI</h3>
                  <p>yayyyy thank you for being my baby and happy 19 months together were gonna spend the rest of our lives together, youre stuck with me my king</p>
                  <img src={alamo} />

                </div>
              ) : (
                <div className="response sad-response">
                  <h3> {getCurrentInsult().text}</h3>

                  <div className="insult-image-container">
                    <img
                      src={getCurrentInsult().image}
                      alt={getCurrentInsult().alt}
                      className="insult-image"
                    />
                  </div>
                  {insultCount >= 2 && (
                    <p className="insult-count">
                      youve said no {insultCount} times now {":("}
                    </p>
                  )}

                  <p className="try-again-text">
                    are you sure you don't want to be my valentine?
                  </p>

                  <div className="choice-buttons">
                    <button className="yes-btn" onClick={handleYes}>
                      ofc yes
                    </button>
                    <button className="no-btn" onClick={handleNo}>
                      hell no
                    </button>
                  </div>

                  {insultCount > 5 && (
                    <p className="persistent-text">
                      crashout incoming
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="footer">
          <p>from your future wife</p>
          <p className="signature">- grishi {"<3"}</p>
        </div>
      </div>
    </div >
  );
}

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/album"
            className={`nav-link ${location.pathname === '/album' ? 'active' : ''}`}
          >
            Album
          </Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;