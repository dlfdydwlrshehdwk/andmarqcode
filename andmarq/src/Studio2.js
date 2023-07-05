import React from "react";
import "./css/studio.css";
import $ from "jquery";
import studio_data from "./data/studio_data";
const gallery_data = [
    {
        txt: "이주빈",
        src: "../../images/artist/main1.jpg",
    },
    {
        txt: "박진주",
        src: "../../images/artist/main2.jpg",
    },
    {
        txt: "장영남",
        src: "../../images/artist/main3.jpg",
    },
    {
        txt: "김현수",
        src: "../../images/artist/main4.jpg",
    },
    {
        txt: "김아현",
        src: "../../images/artist/main5.jpg",
    },
    {
        txt: "백진희",
        src: "../../images/artist/main6.jpg",
    },
    {
        txt: "예원",
        src: "../../images/artist/main7.jpg",
    },
    {
        txt: "류덕환",
        src: "../../images/artist/main8.jpg",
    },
    {
        txt: "차유진",
        src: "../../images/artist/main9.jpg",
    },
    {
        txt: "정동훈",
        src: "../../images/artist/main10.jpg",
    },
    {
        txt: "한재이",
        src: "../../images/artist/main11.jpg",
    },
    {
        txt: "김혜준",
        src: "../../images/artist/main12.jpg",
    },
    {
        txt: "신시아",
        src: "../../images/artist/main13.jpg",
    },
    {
        txt: "주세빈",
        src: "../../images/artist/main14.jpg",
    },
    {
        txt: "저스틴하비",
        src: "../../images/artist/main15.jpg",
    },
    {
        txt: "최준영",
        src: "../../images/artist/main16.jpg",
    },
]
function Studio2(){
    return(
        <>
            <section>
                {studio_data.map((x,i)=>
                <div>{x.걷기왕.감독}</div>
                )}
            </section>
        </>
    )
} // Studio //

// 내보내기
export default Studio2;