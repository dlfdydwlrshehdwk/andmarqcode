// 포토 슬라이드 스와이퍼 js - SwiperPhoto.js

import { Swiper, SwiperSlide } from "swiper/react";

// 제이쿼리 넣기
import $ from 'jquery';

// import required modules
import { Pagination, Navigation } from "swiper";

import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "./swiperphoto.css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function SwiperPhoto(props){


    const [q , setQ] = useState(props.num);

    let pdata = props.data;
    let num = props.num;



    let a = pdata[q]['photo']

    useEffect(()=>{
        console.log(a)
    },[num])

    return (
        <>
                <Swiper
                pagination={{type: "progressbar"}}
                navigation={true}
                modules={[Pagination, Navigation]}
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
                    
                    {/* <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide> */}
                </Swiper>
        </>
    );
  
}