import React from 'react'
import CardView from '../cards/CardView.js'
import './Gallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useHistory } from 'react-router-dom';

export default function Gallery() {
    let data1={
        imageLink:"https://images-assets.nasa.gov/video/T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW/T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW~thumb.jpg",
        description:"T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW",
        title:"T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW"
    }
    let data2={
        imageLink:"https://images-assets.nasa.gov/video/The Journeys of Apollo/The Journeys of Apollo~thumb.jpg",
        description:"T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW",
        title:"T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW"
    }
    let data3={
        imageLink:"https://images-assets.nasa.gov/video/Apollo 11 Overview/Apollo 11 Overview~thumb.jpg",
        description:"T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW",
        title:"T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW"
    }
    const history=useHistory()
    return (
        <div className="gallery">
            <div className="card">
            <CardView data={data1} id="card_1"/>
            </div>
            <div className="card">
            <CardView data={data2} id="card_2"/>
            </div>
            <div className="card">
            <CardView data={data3} id="card_3"/>
            </div>
            <ArrowForwardIosIcon onClick={()=>
                {
                    history.push('/gallery')
                }} className="arrow"/>
        </div>
    )
}
