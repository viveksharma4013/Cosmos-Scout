import React, { useEffect, useState } from 'react'
import CardView from '../cards/CardView.js'
import './GalleryPage.css'
import Axios from 'axios';
import Loader from '../loader/Loader.js';
import SimpleModal from '../modal/Modal.js';
import { HomeOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

export default function GalleryPage() {
    let dummyData={description:"T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW",
    imageLink:"https://images-assets.nasa.gov/video/T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW/T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW~thumb.jpg",
    title:"T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW"}
    const [data,setData]=useState(null)
    const [openModal,setOpenModal]=useState(false)
    const [modalData,setModalData]=useState(dummyData)
    const history=useHistory()
    useEffect(() => {
        Axios.get("https://images-api.nasa.gov/search?q=apollo")
        .then((res)=>{
            console.log(res.data.collection.items)
            setData(res.data.collection.items)
        })
        .catch((e)=>console.log(e))
    }, [])
    if(data==null){
        return(
            <div className="loader">
            <Loader/>
            </div>
        )
    }else{
        return (
            <div className="gallerypage">
                <HomeOutlined fontSize="large" style={{marginTop:"5%"}} onClick={()=>history.push("/")}/>
                <SimpleModal data={false} openModal={openModal} setOpenModal={setOpenModal}/>
                 {/* <div>
                 <input></input>
                 <button>Search</button>
                 </div> */}
                <div id="cards">
                    {
                        data.map(item=>(
                            <div onClick={()=>setOpenModal(false)} className="item">
                                <ScrollAnimation animateIn="fadeInDown" delay="200">
                                <div style={{margin:"10%"}}>
                                    {
                                        (item.links!=undefined||null)?<CardView onClick={()=>setModalData(dummyData)}  data={dummyData}/>:<CardView onClick={()=>setModalData(dummyData)} data={dummyData}/>
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
