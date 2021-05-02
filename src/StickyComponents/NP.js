import React from 'react';
import './NP.css';
import {BiLeftArrow, BiRightArrow } from  'react-icons/bi';

export default function NP() {
    return (
        <div className="NP-Row">
            <button>
                <BiLeftArrow/>
            </button>
            <button>
                Onward!
                <BiRightArrow/>
            </button>
        </div>
    )
}
