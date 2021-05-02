import React from 'react';
import './InfoHeader.css';
import {BiDownArrowAlt} from  'react-icons/bi';

export default function InfoHeader() {
    return (
        <div className="Info-Header">
            <h1>Step 1:</h1>
            <h4>Choose your Sticky Components <BiDownArrowAlt /> </h4>
        </div>
    )
}
