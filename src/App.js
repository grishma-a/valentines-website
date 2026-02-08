import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [answer, setAnswer] = useState(null);
  const [fireworks, setFireworks] = useState(false);
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

  const handleYes = () => {
    setAnswer('yes');
    setFireworks(true);
    // Fireworks for 10 seconds
    setTimeout(() => setFireworks(false), 10000);
  };

  const handleNo = () => {
    setAnswer('no');
    // Make the "No" button move away when hovered
    const noButton = document.querySelector('.no-button');
    if (noButton) {
      noButton.style.position = 'absolute';
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      noButton.style.transform = `translate(${x}px, ${y}px)`;
    }
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

      {/* Fireworks overlay */}
      {fireworks && (
        <div className="fireworks">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="firework"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1}s`,
                background: `hsl(${Math.random() * 360}, 100%, 60%)`
              }}
            />
          ))}
        </div>
      )}

      <div className="container">
        <h1 className="title">Happy Valentine's Day, My Love! 💖</h1>

        <div className="message">
          <p className="love-message">
            Every moment with you feels like a beautiful dream.<br />
            You make my world brighter, my laughter louder, and my heart fuller.
          </p>

          <div className="question-box">
            <h2 className="question">Will you be my Valentine? 💝</h2>

            {!answer ? (
              <div className="buttons">
                <button className="yes-button" onClick={handleYes}>
                  YES! Absolutely! 💖
                </button>
                <button className="no-button" onMouseEnter={handleNo}>
                  No
                </button>
              </div>
            ) : answer === 'yes' ? (
              <div className="response">
                <h2 className="celebrate">🎉 YAY! You've made me the happiest! 🎉</h2>
                <p className="celebration-text">
                  Get ready for the most amazing Valentine's Day!<br />
                  I love you more than words can express! 💕
                </p>
                <div className="sparkle">✨✨✨</div>
              </div>
            ) : (
              <div className="response">
                <h2 className="sad">😢 Oh no! Please reconsider! 💔</h2>
                <button className="try-again" onClick={() => setAnswer(null)}>
                  Click here to choose YES instead! 💖
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="footer">
          <p className="signature">Made with infinite love ❤️</p>
          <p className="date">February 14, 2024</p>
        </div>
      </div>
    </div>
  );
}

export default App;