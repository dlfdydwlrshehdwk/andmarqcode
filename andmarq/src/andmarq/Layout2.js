// 공통 영역 모듈 - Layout.js

import $ from "jquery";
// import "./css/layout2.css";
import { Link, Outlet } from "react-router-dom";

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

            $(".mbtn").on("click",function(){

                console.log("menu click");

                $(".mbtn").toggleClass('on');
                $(".mslide").toggleClass('on');

                let mtxt = $(".mtxt").text();
                console.log(mtxt);

                if(mtxt == "(MENU)"){
                    $(".mtxt").text("(CLOSE)")
                }
                else{
                    $(".mtxt").text("(MENU)")
                }
                
            }) // mbtn - click //

            $(".mlist a").on("click",function(){

                console.log("a click");

            }) // a - click //
            
        })  // jqb //

    } // jq //

    return(

        <>

            {/* 상단 영역 */}
            <header id="top">

                {/* 상단 로고 */}
                <div className="tlogo">
                    <Link to="/main">ANDMARQ</Link>
                </div>

                {/* 메뉴 버튼 */}
                <div className="mbtn">
                    <div className="mtxt">(MENU)</div>
                    {/* <div className="close">(CLOSE)</div> */}
                </div>

                {/* 메뉴 리스트 박스 */}
                <div className="mslide">
                    <div className="mlist">
                        <ul>
                            <li>
                                <Link to="/gallery">ARTIST</Link>
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

            </header>

            {/* 메인 영역 */}
            <main id="cont">
                {/* <Outlet /> */}
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