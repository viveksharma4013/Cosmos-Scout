import React from 'react'
import Gallery from '../gallery/Gallery'
import Header from '../header/Header'
import Maps from '../maps/Maps'
import NavBar from '../navbar/NavBar'
import PictureOfDay from '../pictureofday/PictureOfDay'
import ScrollAnimation from 'react-animate-on-scroll';
import {  Element, animateScroll as scroll } from 'react-scroll'
import DownArrow from '@material-ui/icons/ArrowDownward';
import UpArrow from '@material-ui/icons/ArrowUpward';
import './Home.css'

export default function Home() {
    const scrollToBottom=()=> {
        scroll.scrollToBottom();
      }
    const scrollToTop=()=> {
        scroll.scrollToTop();
      }
    return (
        <div>
            <div onClick={()=>scrollToBottom()} className="fabTop">
                <DownArrow />
            </div>
            <div onClick={()=>{scrollToTop()}} className="fabBottom">
                <UpArrow />
            </div>
            <NavBar className="navbar"/>
            <Header/>
            <Maps/>
            <ScrollAnimation animateIn="fadeInDown" delay="200">
            <Element name="potd" className="element">
                <PictureOfDay/>
            </Element>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" duration="1" delay="100">
            <Element name="gallery" className="element">
                <Gallery/>
            </Element>
            </ScrollAnimation>
        </div>
    )
}
