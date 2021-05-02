import React from 'react';
import './Info.css';
import InfoHeader from './InfoHeader';
import Card from './Card';

export default function GetStarted() {
    return (
        <div className="Info-Container">
            <InfoHeader/>
            <Card/>
            <button>Submit</button>
        </div>
    )
}
