// 공통 영역 모듈 - Layout.js

import $ from "jquery";
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";
import Intro from "./Intro";
import { useEffect, useState } from 'react';

const Layout = () => {

    const [set,setSet] = useState(0)

    // sns 메뉴 데이터 구성
    const sns_data = [
        {
            txt: "instagram",
            link: "https://www.instagram.com/andmarq_official/",
        },
        {
            txt: " blog",
            link: "https://m.post.naver.com/my.nhn?memberNo=28145427",
        },
        {
            txt: " youtube",
            link: "https://www.youtube.com/channel/UChTCQTwqiPoazx7Us4Z8Rlg",
        },
    ]


    function jq(){
        $(()=>{

            // 광클 금지 변수
            let prot= 0;

            // 메뉴열고닫기 버튼
            $('.mbtn').on('click',function(){
                
                // 광클 금지 설정
                if(prot) return;
                
                prot=1;
                
                setTimeout(()=>{
                    prot=0
                },400)

                // 클릭하면 반응 오는지 확인
                console.log('눌렀다.')

                let menuTxt = $('.menu').text()
                console.log(menuTxt);

                // 메뉴에 글씨를 읽어 글씨에따른 분기
                if(menuTxt == '(MENU)'){
                    $('.menu').text('(CLOSE)').css({
                        color: "#fff",
                        transition: ".4s"
                    })
                    $('.mbx').animate({
                        opacity: 1
                    }, 400).css({
                        pointerEvents: "all"
                    })
                }

                if(menuTxt == '(CLOSE)'){
                    menuClose()
                }

            }); // click //

            // a 클릭 시
            $('.mlist a').on('click', function(){

                // 클릭된 a에 밑줄 효과 유지
                $(".mlist li a").removeClass('on');
                $(this).addClass('on');

                // 메뉴 닫히기
                // setTimeout(menuClose, 410);
                menuClose();

            }); // click //

            // 로고 클릭 시
            $('.tlogo a').on('click', function(){

                // 클릭된 a에 밑줄 효과 유지
                $(".mlist li a").removeClass('on');

                $('.bgimg img').css({opacity : 1})
            }); // click //


            function menuClose (){

                // close -> menu 변경
                $('.menu').text('(MENU)').css({
                    color: "#ff3901",
                    transition: ".4s"
                })

                // 메뉴 박스 사라지기
                $('.mbx').animate({
                    opacity: 0
                }, 400).css({

                    // 클릭 막기
                    pointerEvents: "none"
                })

            } // menuClose //

           


         
        })  // jqb //

    } // jq //
    
    

    return(

        <>
        <Intro />

            {/* 상단 영역 */}
            <header id="top">

                <div className="top">

                    {/* 상단 로고 */}
                    <div className="tlogo">
                        <Link to="/main">ANDMARQ</Link>
                    </div>

                    {/* 메뉴 버튼 */}
                    <div className="mbtn">
                        <div className="menu">(MENU)</div>
                        {/* <div className="close">(CLOSE)</div> */}
                    </div>

                    {/* 메뉴 리스트 박스 */}
                    <div className="mbx">
                        <div className="mlist">
                            <ul>
                                <li>
                                    <Link to="/photo">ARTIST</Link>
                                </li>
                                <li>
                                    <Link to="/studio">STUDIO</Link>
                                </li>
                                <li>
                                    <Link to="/audition">AUDITION</Link>
                                </li>
                                <li>
                                    <Link to="/contact">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </header>

            {/* 메인 영역 */}
            <main id="cont">
                <Outlet />
            </main>

            {/* 하단 영역 */}
            <footer id="info">
                <ul>

                    {/* copy */}
                    <li className="bcopy">ⓒANDMARQ</li>

                    {/* sns */}
                    <li>
                        <ol className="sns">
                            {sns_data.map((v,i)=>
                                <li key={i}>
                                    <a href={v.link} target="_blank">
                                        {v.txt.toUpperCase()}
                                    </a>
                                </li>
                            )}
                        </ol>
                    </li>
                </ul>
            </footer>
            {jq()}
        </>
        
    ); // return //
    
} // Layout //

// 내보내기
export default Layout;