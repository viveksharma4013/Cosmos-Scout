import React from 'react'
import './InfoDisplay.css'
export default function InfoDisplay({data}) {
    return (
        <div className="newsDisplay">
        <div className="textdisplay">
            <img id="image" alt="Space" src="https://apod.nasa.gov/apod/image/2011/Trifid_HubbleGendler_2400.jpg"></img>
            <p className="explanation">{data}{data}</p>
        </div>
        </div>
    )
}
