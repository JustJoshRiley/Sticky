import React from 'react';
import './Landing.css';
import Typical from 'react-typical'

export default function Landing() {
    return (
        <div className="Landing">
            <div className="Landing-Container">
                <h1 className="Landing-header">
                    Welcome to Sticky.
                    
                </h1>
                <h1 className="Landing-header">
                The
                    <Typical 
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        ' best', 5000,
                        ' most versatile', 5000,
                        ' easiest', 5000,
                        ' fastest', 5000,
                    ]}
                    /> 
                </h1>
                <h1 className="Landing-header">
                    webpage builder on the <span>planet</span>.
                </h1>
                <button className="button-primary Landing-Buttons">Get Started!</button>
            </div>
        </div>
    )
}
