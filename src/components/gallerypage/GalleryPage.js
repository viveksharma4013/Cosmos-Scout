import React, { useEffect, useState } from 'react'
import CardView from '../cards/CardView.js'
import './GalleryPage.css'
import Loader from '../loader/Loader.js';
import SimpleModal from '../modal/Modal.js';
import { HomeOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import {getPics} from '../../actions'
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll'
import DownArrow from '@material-ui/icons/ArrowDownward';
import UpArrow from '@material-ui/icons/ArrowUpward';

export default function GalleryPage() {
    useEffect(() => {
        dispatch(getPics())
    }, [])
    let loading=useSelector(state=>state.gallery.loading)
    let error=useSelector(state=>state.gallery.error)
    let data=useSelector(state=>state.gallery.data)
    const dispatch = useDispatch()
    let dummyData={description:"T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW",
    imageLink:"https://images-assets.nasa.gov/video/T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW/T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW~thumb.jpg",
    title:"T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW"}
    const [openModal,setOpenModal]=useState(false)
    const [modalData,setModalData]=useState(dummyData)
    const history=useHistory()

    const scrollToBottom=()=> {
        scroll.scrollToBottom();
      }

    const scrollToTop=()=> {
        scroll.scrollToTop();
      }

    if(loading){
        return(
            <div className="loader">
            <Loader/>
            </div>
        )
    }else if(error){
        return(
            <div className="loader">
            <h1>Error Fetching Pictures....</h1>
            </div>
        )
    }
    else{
        return (
            <div className="gallerypage">
                 <div onClick={()=>scrollToBottom()} className="fabTop">
                <DownArrow />
            </div>
            <div onClick={()=>{scrollToTop()}} className="fabBottom">
                <UpArrow />
            </div>
                <HomeOutlined fontSize="large" className="homeButton" onClick={()=>{
                    history.push("/")}}/>
                <SimpleModal data={modalData} openModal={openModal} setOpenModal={setOpenModal}/>
                <div id="cards">
                    {
                        data.map((item,index)=>(
                            <div key={index} onClick={()=>{
                                setModalData({
                                    description:item.data[0].description,
                                    imageLink:item.links[0].href,
                                    title:item.data[0].title
                                    })
                                setOpenModal(true)
                                }} className="item">
                                <ScrollAnimation animateIn="fadeInDown">
                                <div style={{margin:"10%"}}>
                                    {
                                        (item.links!==undefined||null)?<CardView
                                            data={
                                                {
                                                description:item.data[0].description,
                                                imageLink:item.links[0].href,
                                                title:item.data[0].title
                                                }
                                        }/>:<CardView onClick={()=>setModalData(dummyData)} data={dummyData}/>
                                    }
                                </div>
                                </ScrollAnimation>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
