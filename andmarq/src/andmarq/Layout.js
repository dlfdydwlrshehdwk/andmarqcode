// 공통 영역 모듈 - Layout.js

import $ from "jquery";
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";
import Intro from "./Intro";

const Layout = () => {

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

            setTimeout(() => {

                $('#intro').css({
                    top: '-100%',
                    transition: '.5s ease-out'
                }) // css //
                
            }, 1000); // setTimeout //

            setTimeout(() => {

                $('.sqwrap').css({
                    opacity: "1",
                    transition: "1s ease-in-out"
                }) // css //
                
            }, 2000);
            
            setTimeout(() => {
                $('.clicktxt').css({
                    opacity: "1",
                    transition: "1s linear"
                }) // css //
            }, 3000);
            
            setTimeout(() => {
                $('.clicktxt').css({
                    opacity: "0",
                    transition: "1s linear"
                }) // css //
            }, 4000);
            
            setTimeout(() => {
                $('.clicktxt').css({
                    opacity: "1",
                    transition: "1s linear"
                }) // css //
            }, 5000);
            
            setTimeout(() => {

                $('.clicktxt').css({
                    opacity: "0",
                    transition: "1s ease-in"
                }) // css //

            }, 6000);

            setTimeout(() => {
                $('.sqwrap').css({
                    top: "75%",
                    transition: "1.5s ease-out"
                }) // css //

            }, 7500);

            setTimeout(() => {
                $('.sqbx').find('div').eq(8).css({
                    backgroundColor: "#ff3901",
                    transition: "1.5s ease-in-out"
                }) // css //
                
            }, 9500);

            setTimeout(() => {

                $('.bgimg img').css({
                    opacity: "1",
                    transition: "1.5s ease-out"
                }) // css //

                $('.arrowwrap').css({
                    opacity: "1",
                    transition: "1.5s ease-in"
                }) // css //
                
            }, 10500);

/* 
    아코디언(.sqwrap > div * 9)
    버튼을 누르면 ... 부터 시작해서
    어떻게 되어야하는지 상세하게 적으시오 ... 
    클래스명 같은걸 이용해도 좋고
    몇번째 박스라고 해도좋으니 상세하게! 최대한! 세세하게! 제발! 침착하게! 적어주세요 ... 
    
    1. 이동 버튼(.arrowwrap) 클릭 시
        1) 왼쪽 화살표(.leftarrow) 클릭: ㅁ-네모, d-데이터
            (1) 6ㅁ(2d)가 5ㅁ로 옮겨지면서
            - 기존 5ㅁ: transform +10% 추가, bgc 없애기, transition: "1.5s ease-in-out"
            - 기존 6ㅁ: transform -10% 추가, bgc #ff3901, transition: "1.5s ease-in-out"
            - 6ㅁ(2d)에 담겨있는 해당 배우 이미지로 전체 배경(.bgimg > img) 바뀜: img src 변경, transition: "1.5s ease-in-out
            - 1ㅁ(13d)는 화면 밖으로
            - 오른쪽 화면 밖 ㅁ(6d)는 화면 안으로 들어오면서 transform: translateY(-50%) 설정
            - 맨 처음 ㅁ(9d)는 맨 끝으로 이동하면서 다른 ㅁ들도 왼쪽으로 한 칸씩 이동..?

        2) 오른쪽 화살표(.rightarrow) 클릭: ㅁ-네모, d-데이터
            (1) 4ㅁ(16d)가 5ㅁ로 옮겨지면서
            - 기존 5ㅁ: transform +10% 추가, bgc 없애기, transition: "1.5s ease-in-out"
            - 기존 4ㅁ: transform -10% 추가, bgc #ff3901, transition: "1.5s ease-in-out"
            - 4ㅁ(16d)에 담겨있는 해당 배우 이미지로 전체 배경 바뀜: img src 변경, transition: "1.5s ease-in-out
            - 9ㅁ(5d)는 화면 밖으로
            - 왼쪽 화면 밖 ㅁ(12d)는 화면 안으로 들어오면서 transform: translateY(-50%) 설정
            - 맨 끝 ㅁ(8d)는 맨 처음으로 이동하면서 다른 ㅁ들도 오른쪽으로 한 칸씩 이동..?
*/

         
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