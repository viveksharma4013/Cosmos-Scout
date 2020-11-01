import React from 'react'
import Header from '../header/Header'
import NavBar from '../navbar/NavBar'
import PictureOfDay from '../pictureofday/PictureOfDay'

export default function Home() {
    return (
        <div>
            <NavBar/>
            <Header/>
            <PictureOfDay/>
        </div>
    )
}
