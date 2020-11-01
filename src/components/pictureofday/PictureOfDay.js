import React, { useEffect, useState } from 'react'
import './PictureOfDay.css'
import { DoubleBorderSpinner } from 'react-fancy-loader'
import Axios from 'axios'

export default function PictureOfDay() {
    const [data,setData]=useState(null)
    useEffect(() => {
        console.log("I am ini useEffect")
       Axios.get("https://api.nasa.gov/planetary/apod?api_key="+process.env.TOKEN)
       .then((res)=>
       {
            console.log(res)
            setData(res.data)
        })
       .catch((e)=>
       {
           console.log("Error",e)
        })
    }, [data])
    if(data===null){
        return (
            <div className="pictureofday">
               <DoubleBorderSpinner
                    size={50}
                    color="#191970"
                    outlineColor="#222"
                    stroke={4}
                    duration={700}
                />
            </div>
        )
    }else{
        return (
            <div className="pictureofday">
                {data.explanation}
            </div>
        )
    }
}
