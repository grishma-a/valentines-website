import React, { useState, useEffect } from 'react';
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
    "I'm not giving up that easily!",
    "Last chance to reconsider!",
    "Okay fine, I'll ask one more time..."
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
                  <div className="heart-seal">❤️</div>
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
                      <span className="photo-text">Our Photo</span>
                      <span className="photo-heart">💖</span>
                    </div>
                  </div>
                  <div className="photo-caption">My favorite person</div>
                </div>
              </div>
              <div className="card-right">
                <div className="letter">
                  <h3>My Dearest Tibby,</h3>
                  <p>
                    You're my best friend, my soul mate, my ride or die.
                    Every day with you is an adventure, and every moment
                    feels like home.
                  </p>
                  <p>
                    I love how you make me laugh, how you understand me
                    without words, and how you've become such an important
                    part of my life. I want to experience everything with
                    you by my side.
                  </p>
                  <p>
                    Thank you for being you, and for choosing me every day.
                  </p>
                  <div className="letter-signature">
                    <p>All my love,</p>
                    <p>Your Future Wife</p>
                    <p>Grishi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {!cardOpen && (
            <p className="open-hint">Click the card above to open it</p>
          )}
        </div>

        {/* Valentine's Proposal (below the card) */}
        <div className="proposal-section">
          <div className="proposal-box">
            <h2 className="proposal-title">
              Now for the important question...
            </h2>

            <p className="proposal-message">
              After reading that (hopefully sappy) letter...
            </p>

            <div className="question-container">
              <h3 className="question">Will you be my Valentine?</h3>

              {!answer ? (
                <div className="choice-buttons">
                  <button className="yes-btn" onClick={handleYes}>
                    Yes
                  </button>
                  <button className="no-btn" onClick={handleNo}>
                    No
                  </button>
                </div>
              ) : answer === 'yes' ? (
                <div className="response happy-response">
                  <h3>YAY! You made my day! 💕</h3>
                  <p>I'm so happy you said yes! Get ready for an amazing Valentine's Day!</p>
                  <div className="celebration">
                    <div className="confetti">🎉</div>
                    <p>You're the best Valentine I could ask for!</p>
                    <div className="confetti">🎊</div>
                  </div>
                </div>
              ) : (
                <div className="response sad-response">
                  <h3> {insults[Math.min(insultCount - 1, insults.length - 1)]}</h3>

                  {insultCount > 3 && (
                    <p className="insult-count">
                      You've said no {insultCount} times now...
                    </p>
                  )}

                  <p className="try-again-text">
                    Are you sure you don't want to be my Valentine?
                  </p>

                  <div className="choice-buttons">
                    <button className="yes-btn" onClick={handleYes}>
                      Okay, Yes!
                    </button>
                    <button className="no-btn" onClick={handleNo}>
                      Still No
                    </button>
                  </div>

                  {insultCount > 5 && (
                    <p className="persistent-text">
                      You're really making me work for this!
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
    </div>
  );
}

export default App;