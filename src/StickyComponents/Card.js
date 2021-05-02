import React from 'react';
import './Card.css';

export default function Card() {

    return (
        <div className="Card-Container">
            <div className="Card" id="Navbar">
                <h1>Navbar</h1>
            </div>

            <div className="Card" id="Hero">
                <h1>Hero</h1>
            </div>

            <div className="Card" id="About">
                <h1>About</h1>
            </div>

            <div className="Card" id="Features">
                <h1>Features</h1>
            </div>
            
            <div className="Card" id="Contact">
                <h1>Contact</h1>
            </div>

            <div className="Card" id="Footer">
                <h1>Footer</h1>
            </div>
        </div>
    )
}
