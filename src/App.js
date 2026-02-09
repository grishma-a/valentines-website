import React, { useState, useEffect } from 'react';
import grishiTib from './lover.png'; // Adjust the path as necessary
import alamo from './alamo.jpg'; // Adjust the path as necessary


import './App.css';

function App() {
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
    "do you even love me? ",
    "you must be some other bitch's valentine!",
    "damn you dont love me",
    "grishi sad",
    "is it because you think im fat",
    "you think im an unlovable americain",
    "but i thought i was your baby ;(",
    "gonna crash out",
    "okay but what if i use timothy instead of tibby",
    "will timothy be my valentine?",
    "pretty please say yes",
    "what if i give tibby a kiss",
    "dont do this to me baby",
    "just say yes ;("
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
                  <h3> {insults[Math.min(insultCount - 1, insults.length - 1)]}</h3>

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

export default App;