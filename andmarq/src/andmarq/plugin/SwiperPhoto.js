// 포토 슬라이드 스와이퍼 js - SwiperPhoto.js
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './swiperphoto.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';




// 제이쿼리 넣기
import $ from 'jquery';

import { useParams } from "react-router-dom";



function SwiperPhoto(props){


    const [q , setQ] = useState(props.num);

    let pdata = props.data;
    let num = props.num;



    let a = pdata[q]['photo']

    useEffect(()=>{
        console.log(a)
    },[num])

    return (
        <>
                {/* <Swiper
                pagination={{type: "progressbar"}}
                navigation={true}
                modules={[pagination, navigation]}
                className="mySwiper">
                    <div>안녕하세요</div>
                    {
                        a.map((x,i)=>
                        <SwiperSlide key={i}>
                                <img src={x} alt="" />
                        </SwiperSlide>
                        // console.log(x)
                        )
                    }
                    
                </Swiper> */}
                <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper">
                <div>안녕하세요</div>
                {
                    a.map((x,i)=>
                <SwiperSlide>
                <img src={x} alt="사진"/>
                </SwiperSlide>
                    )
                }
            </Swiper>
                
        </>
    );
  
}

export default SwiperPhoto;