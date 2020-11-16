import React from 'react'
import './Maps.css'
import ScrollAnimation from 'react-animate-on-scroll';
import {Element} from 'react-scroll'

export default function Maps() {
    return (
        <div className="maps">
             <ScrollAnimation animateIn="fadeInLeft" delay="100">
             <Element name="maps" className="element">
            <div className="mars">
                <img alt="mars" className="marsImage" 
                    src="https://freesvg.org/img/Mars-3D-Globe.png">
                    </img>
                    <div className="textandmore">
                        <p id="marsText">NASA's Viking Mission to Mars was composed of two spacecraft, Viking 1 and Viking 2, each consisting of an orbiter and a lander. The primary mission objectives were to obtain high resolution images of the Martian surface, characterize the structure and composition of the atmosphere and surface, and search for evidence of life.</p>
                        <button className="mapButton"   onClick={()=>{
                    window.open("https://api.nasa.gov/mars-wmts/catalog/Mars_Viking_MDIM21_ClrMosaic_global_232m.html", '_blank', 'noopener,noreferrer')}
                    } >MAP</button>
                    </div>
            </div>
            </Element>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" delay="100">
            <div className="moon">
                    <div className="textandmore">
                        <p id="moonText">As NASA's Dawn spacecraft travels to its next destination, this mosaic synthesizes some of the best views the spacecraft had of the giant asteroid Vesta. Dawn studied Vesta from July 2011 to September 2012. The towering mountain at the south pole - more than twice the height of Mount Everest - is visible at the bottom of the image. The set of three craters known as the "snowman" can be seen at the top left.</p>
                        <button className="mapButton"  onClick={
                    ()=>{window.open("https://api.nasa.gov/vesta-wmts/catalog/global_LAMO.html", '_blank', 'noopener,noreferrer')}}>MAP</button>
                    </div>
                <img alt="moon" className="moonImage"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Weather_icon_-_full_moon.svg/768px-Weather_icon_-_full_moon.svg.png">  
                    </img>
            </div>
            </ScrollAnimation>
        </div>
    )
}
