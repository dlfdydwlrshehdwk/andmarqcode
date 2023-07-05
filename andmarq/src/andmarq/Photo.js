import React, { useEffect, useState } from "react";
import "./css/photo.css";
import artist_data from "./data/artist_data";
import SwiperPhoto from "./plugin/SwiperPhoto";

function Photo(){

    let [num, setNum] = useState('');

    let [s , setS] = useState(0)

    useEffect(()=>{
        if(num !== '' && setS(1) )
        console.log('넘은?',num)
    },[num])


    const reset = () => {
        setS(0)
        setNum('')
    }
    return(
        <>
        {
            s == 1 &&
            <>
            <div className="blackbg" onClick={()=>{reset()}}> 
            </div>
            <SwiperPhoto data={artist_data} num={num}/>
            </>
        }

            <section id="photo">
                
                <div className="photowrap">
                    {
                        artist_data.map((x,i)=>
                            
                            <div className="photobx" key={i}
                            onClick={()=>{setNum(i) }}>
                                <img src={x.src1} alt={x.한글이름} />
                            </div>
                        )
                    }

                </div>
                

            </section>
        
        </>
    )
} // Photo //cd

// 내보내기
export default Photo; 