import React from 'react';
import './Album.css';

// Import all your images
import tongue from './album/tongue.PNG';


function Album() {
    // Group your images into an array
    const photos = [
        { src: tongue, caption: "Brush teef 🪥", date: "Some day with you" },
        { src: tongue, caption: "Call center vibes 📞", date: "Another memory" },
        { src: tongue, caption: "Complex variable 🤓", date: "You being you" },
        { src: tongue, caption: "This face 😅", date: "Classic moment" },
        { src: tongue, caption: "Dramatic cry 😢", date: "Being silly" },
        { src: tongue, caption: "Peace? ✌️", date: "You're something else" },
        { src: tongue, caption: "Frowny face ☹️", date: "Making faces" },
        { src: tongue, caption: "Grishi cries 😭", date: "So dramatic" },
        { src: tongue, caption: "Fish friend 🐟", date: "With your fish" },
        { src: tongue, caption: "Gums out 😁", date: "Best smile" },
        { src: tongue, caption: "Sad Grishi ☹️", date: "Pouty face" },
        { src: tongue, caption: "Scream!! 😱", date: "Caught on camera" },
        { src: tongue, caption: "Shocked! 😲", date: "Surprised you" },
        { src: tongue, caption: "Toof 🦷", date: "Showing off" },
        { src: tongue, caption: "Kissy lips 💋", date: "Blowing kisses" },
        { src: tongue, caption: "AAAAHHH! 😱", date: "Screaming into the void" },
        { src: tongue, caption: "Bang bang 🔨", date: "Tim being Tim" },
        { src: tongue, caption: "Disapproval 👎", date: "Judging you" },
        { src: tongue, caption: "Crashout 💥", date: "Tim in action" },
    ];

    return (
        <div className="album-container">
            <h1 className="album-title">Our Memories Together</h1>
            <p className="album-subtitle">Every picture tells a story of us</p>

            <div className="photo-grid">
                {photos.map((photo, index) => (
                    <div className="photo-card" key={index}>
                        <div className="photo-wrapper">
                            <img
                                src={photo.src}
                                alt={photo.caption}
                                className="album-photo"
                                loading="lazy"
                            />
                        </div>
                        <div className="photo-info">
                            <p className="photo-caption-album">{photo.caption}</p>
                            <p className="photo-date">{photo.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="album-footer">
                <p>More memories to come ❤️</p>
            </div>
        </div>
    );
}

export default Album;