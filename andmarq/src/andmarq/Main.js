import React, { useEffect, useState } from "react";
import "./css/main.css";
import Intro from "./Intro";
import Main2 from "./Main2";
import $ from "jquery";
import artist_data from "./data/artist_data";
import { Link } from "react-router-dom";

// 기능 왼쪽버튼 오른쪽버튼 기능할당밖에없는듯
function Main(){


    let [ set , setSet ] = useState(0)

    
    function jq(){}

    const leftbtn = () => {
        
        let slide = $('.sqbx');
        let list = $('.sqbx div');

    // 왼쪽 버튼 
        console.log(list);
        console.log("왼쪽 클릭");
        
        $('.sqbx div').css({
            backgroundColor: "#fff",
        });

        $('.sqbx div').eq(0).css({left : 155 + '%', transition: "none", backgroundColor: 'transparent'});
        $('.sqbx div').eq(1).css({left : -70 + '%', transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(2).css({left : -55 + '%', transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(3).css({left : -40 + '%', transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(4).css({left : -25 + '%', transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(5).css({left : -10 + '%', transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(6).css({left : 5 + '%',transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(7).css({left : 20 + '%', transition: ".4s", backgroundColor: 'transparent'});

        // 얘가중앙
        $('.sqbx div').eq(8).css({left : 35 + '%', transition: ".4s", backgroundColor: 'transparent'});


        $('.sqbx div').eq(9).css({left : 50 + '%',  transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(10).css({left : 65 + '%', transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(11).css({left : 80 + '%',  transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(12).css({left : 95 + '%',  transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(13).css({left : 110 + '%', transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(14).css({left : 125 + '%', transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(15).css({left : 140 + '%', transition: ".4s", backgroundColor: 'transparent'});

        console.log('변신 후:',list)
        slide.append(list.eq(0))

        setTimeout(()=>{
            $('.sqbx div').css({transition: ".4s"});
        }, 1)

        // 색깔 주기
        setTimeout(()=>{
            $('.sqbx div').eq(8).css({
                backgroundColor: "#ff3901",
            })
        },100)

    } // leftbtn //











    const rightbtn = () => {
        
        let slide = $('.sqbx');
        let list = $('.sqbx div');

    // 오른쪽 버튼 
        console.log(list);
        console.log("오른쪽 클릭");

        $('.sqbx div').css({
            backgroundColor: "#fff",
        });
        
        $('.sqbx div').eq(0).css({left : -55 + '%', transition: "none", backgroundColor: 'transparent'});
        $('.sqbx div').eq(1).css({left : -40 + '%', transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(2).css({left : -25 + '%', transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(3).css({left : -10 + '%', transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(4).css({left : 5 + '%',  transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(5).css({left : 20 + '%',  transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(6).css({left : 35 + '%',  transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(7).css({left : 50 + '%',  transition: ".4s", backgroundColor: 'transparent'});

        // 얘가중앙
        $('.sqbx div').eq(8).css({left : 65 + '%',  transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(9).css({left : 80 + '%',  transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(10).css({left : 95 + '%',  transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(11).css({left : 110 + '%', transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(12).css({left : 125 + '%', transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(13).css({left : 140 + '%', transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(14).css({left : 155 + '%', transition: ".4s", backgroundColor: 'transparent'});
        $('.sqbx div').eq(15).css({transition: "none",left : -70 + '%' , backgroundColor: 'transparent'});

        console.log('변신 후:',list)

        slide.prepend(list.eq(list.length-1));
        setTimeout(()=>{
            $('.sqbx div').css({transition: ".4s"});
        }, 1)

        // 색깔 주기
        setTimeout(()=>{
            $('.sqbx div').eq(8).css({
                backgroundColor: '#ff3901'
            })
        },100)

    } // rightbtn //

    // 변수1.map 
    const [num , setNum] = useState(0);

    // useEffect(()=>{},[num])
    useEffect(()=>{
        console.log(num)
    },[num])

   

    return(
        <>
        
            <section id="main">
                <div>

                    <div className="bgimg">

                        {/* 배경 이미지 */}
                        {/* <img src="../../images/artist/web1.jpg" alt="배우이미지" /> */}
                        <img src={artist_data[num].src3} alt={artist_data[num].한글이름}/>

                        {/* 네모네모 */}
                        <div className="sqwrap">

                        <div className='sqbx'>


                            <div>
                                <Link to="/artist/8" data={artist_data[8]}>
                                    {artist_data[8].한글이름}
                                </Link>
                            </div>
                            <div>
                                <Link to="/artist/9" data={artist_data[9]}>
                                    {artist_data[9].한글이름}
                                </Link>
                            </div>
                            <div>
                                <Link to="/artist/10" data={artist_data[10]}>
                                    {artist_data[10].한글이름}
                                </Link>
                            </div>
                            <div>
                                <Link to="/artist/11" data={artist_data[11]}>
                                    {artist_data[11].한글이름}
                                </Link>
                            </div>
                            <div>
                                <Link to="/artist/12" data={artist_data[12]}>
                                    {artist_data[12].한글이름}
                                </Link>
                            </div>
                            <div>
                                <Link to="/artist/13" data={artist_data[13]}>
                                    {artist_data[13].한글이름}
                                </Link>
                            </div>
                            <div>
                                <Link to="/artist/14" data={artist_data[14]}>
                                    {artist_data[14].한글이름}
                                </Link>
                            </div>
                            <div>
                                <Link to="/artist/15" data={artist_data[15]}>
                                    {artist_data[15].한글이름}
                                </Link>
                            </div>
                            <div>
                                <Link to="/artist/0" data={artist_data[0]}>
                                    {artist_data[0].한글이름}
                                </Link>
                            </div>
                            <div>
                                <Link to="/artist/1" data={artist_data[1]}>
                                    {artist_data[1].한글이름}
                                </Link>
                            </div>
                            <div>
                                <Link to="/artist/2" data={artist_data[2]}>
                                    {artist_data[2].한글이름}
                                </Link>
                            </div>
                            <div>
                                <Link to="/artist/3" data={artist_data[3]}>
                                    {artist_data[3].한글이름}
                                </Link>
                            </div>
                            <div>
                                <Link to="/artist/4" data={artist_data[4]}>
                                    {artist_data[4].한글이름}
                                </Link>
                            </div>
                            <div>
                                <Link to="/artist/5" data={artist_data[5]}>
                                    {artist_data[5].한글이름}
                                </Link>
                            </div>
                            <div>
                                <Link to="/artist/6" data={artist_data[6]}>
                                    {artist_data[6].한글이름}
                                </Link>
                            </div>
                            <div>
                                <Link to="/artist/7" data={artist_data[7]}>
                                    {artist_data[7].한글이름}
                                </Link>
                            </div>
                            




                        </div>
                        {/* 박스 */}





                        </div>
                    </div>

                    {/* 텍스트 */}
                    <p className="clicktxt txtcolor">화살표를 클릭해 주세요.</p>

                    {/* 이동 버튼 */}
                    <div className="arrowwrap txtcolor">
                        <div 
                        className="leftarrow" 
                        onClick={rightbtn}
                        ><span onClick={()=>{
                            num == 0 ? setNum(15) : setNum(num-1)    
                        
                            }}>←</span></div>

                        <div className="rightarrow" onClick={leftbtn}>
                        <span onClick={()=>{
                            num == 15 ? setNum(0)
                            : setNum(num+1)
                            
                            }}>→</span>
                        </div>
                    </div>

                </div>
            </section>
            


            {/* 호출 */}
            {jq()}
        
        </>
    )
} // Main //

// 내보내기
export default Main; 