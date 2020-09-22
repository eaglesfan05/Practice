import React from "react";
import "../styling/background.css";

function HeroBackground(props) {
    return (
        <div className ="HeroBackgroundImage" style={{backgroundImage: `url(${props.backgroundImage})`}}/>
            
    );
}

export default HeroBackground;