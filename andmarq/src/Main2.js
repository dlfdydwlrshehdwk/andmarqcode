import React from "react";
import "./css/main2.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import artist_data from "./data/artist_data";

function Main2(){

    // 스튜디오 박스 관련... jq
    function jq(){
        $(()=>{

            console.log("포스터 데이터:",poster_data.length,"개")

            $('.main2_stuimg').eq(poster_data.length - 2)
            .css({
                borderBottom: '0.5px solid #ff3901'
            })

            let ww = $('.main2_stuimg').width();
            console.log("포스터img 가로:",ww,"px");

            $('.main2_stuimg').css({
                height : ww + 'px',
                backgoundColor : 'red',
                position : 'realative',
            })

            $('.main2_stuimg').eq(3).find('div').css({
                border: "0.5px solid #e5e5e5"
            })
        })

    } // jq //

    // gallery 이미지 데이터
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
        // {
        //     txt: "예원",
        //     src: "../../images/artist/main7.jpg",
        // },
        // {
        //     txt: "류덕환",
        //     src: "../../images/artist/main8.jpg",
        // },
        // {
        //     txt: "차유진",
        //     src: "../../images/artist/main9.jpg",
        // },
        // {
        //     txt: "정동훈",
        //     src: "../../images/artist/main10.jpg",
        // },
        // {
        //     txt: "한재이",
        //     src: "../../images/artist/main11.jpg",
        // },
        // {
        //     txt: "김혜준",
        //     src: "../../images/artist/main12.jpg",
        // },
        // {
        //     txt: "신시아",
        //     src: "../../images/artist/main13.jpg",
        // },
        // {
        //     txt: "주세빈",
        //     src: "../../images/artist/main14.jpg",
        // },
        // {
        //     txt: "저스틴하비",
        //     src: "../../images/artist/main15.jpg",
        // },
        // {
        //     txt: "최준영",
        //     src: "../../images/artist/main16.jpg",
        // },
    ];

    // 개별 studio 포스터 데이터
    const poster_data = [
        {
            txt: "포스터이미지",
            src: "../images/studio/poster1.jpg",
        },
        {
            txt: "포스터이미지",
            src: "../images/studio/poster2.jpg",
        },
        {
            txt: "포스터이미지",
            src: "../images/studio/poster3.jpg",
        },
        {
            txt: "포스터이미지",
            src: "../images/studio/poster4.jpg",
        },
        // {
        //     txt: "포스터이미지",
        //     src: "../images/studio/poster5.jpg",
        // },
        // {
        //     txt: "포스터이미지",
        //     src: "../images/studio/poster6.jpg",
        // },
        // {
        //     txt: "포스터이미지",
        //     src: "../images/studio/poster7.jpg",
        // },
        // {
        //     txt: "포스터이미지",
        //     src: "../images/studio/poster8.jpg",
        // },
    ];
    
    return(
        <>

            <section id="main2">

                <div className="main2_wrap">

                    {/* ARTIST 박스 */}
                    <div className="main2_artbx">

                        <div className="main2_bxtxt">
                            ARTIST
                            <Link to="/gallery">→</Link>
                        </div>

                        <div className="main2_artwrap">
                            {gallery_data.map((v,i)=>
                                <div className="main2_artimg" key={i}>
                                    <img src={v.src} alt={v.txt} />
                                </div>
                            )}
                        </div>

                    </div>
                    
                    {/* STUDIO 박스 */}
                    <div className="main2_stubx">

                        <div className="main2_bxtxt">
                            STUDIO
                            <Link to="/studio">→</Link>
                        </div>

                        <div className="main2_stuwrap">
                            {/* 개별 스튜디오 박스 */}
                            {poster_data.map((v,i)=>
                                <div key={i} className="main2_stuimg">
                                    {/* 개별 스튜디오 이미지 */}
                                    <div>
                                        <img src={v.src} alt={v.txt} />
                                    </div>
                                </div>
                            )}

                        </div>

                    </div>

                </div>
                    
            </section>

            {/* 호출 */}
            {jq()}
        
        </>
    )
} // Main2 //

// 내보내기
export default Main2; 