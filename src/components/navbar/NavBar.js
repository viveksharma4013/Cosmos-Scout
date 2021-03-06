import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

export default function NavBar() {
    return (
        <div className="navbar">
            <Link activeClass="active" to="maps" spy={true} smooth={true} offset={50} duration={500}><h3 className="item">MAPS</h3></Link>
            <Link activeClass="active" to="potd" spy={true} smooth={true} offset={50} duration={500}><h3 className="item">POTD</h3></Link>
            <Link activeClass="active" to="gallery" spy={true} smooth={true} offset={50} duration={500}><h3 className="item">MISSONS</h3></Link>
            {/* <h3 onClick={()=>
                {
                    history.push('/counter')
                }}  className="item">COUNTER</h3> */}
        </div>
    )
}
