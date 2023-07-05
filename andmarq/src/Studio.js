import React from "react";
import "./css/studio.css";
import $ from "jquery";
import studio_data from "./data/studio_data";

function Studio(){

    let sdt = Object.keys(studio_data).map(v=>studio_data[v]);
    console.log(sdt);
    
    function jq(){
        
        $(()=>{

            $('.studio_posterbx').eq(sdt.length - 2)
            .css({
                borderBottom: '0.5px solid #ff3901'
            })
            
            $('.studio_posterbx').eq(sdt.length - 1)
            .css({
                borderBottom: '0.5px solid #ff3901'
            })

            let pbsize = $('.studio_posterbx').width();

            $('.studio_posterbx').css({
                height: pbsize + 'px',
                position: 'realative',
            })

            $('.studio_posterbx').eq(3).find('img').css({
                border: "0.5px solid #e5e5e5"
            })
            
        })

    } // jq //

    return(
        <>
            <section id="studio">
                <div>

                    {/* 스튜디오 박스 */}
                    <div className="studio_wrap">

                        {/* 전체 포스터 박스 - 8개 */}
                        <div className="studio_posterwrap">

                            {sdt.map((v,i)=>

                                // 개별 포스터 박스
                                <div key={i} className="studio_posterbx">
                                    
                                    {/* 개별 스튜디오 이미지: 기본으로 보이는 박스 */}
                                    <div className="gongtong">
                                        <div className="qwer">
                                            <img src={v[0].src} alt={v[0].제목} />
                                        </div>
                                    </div>

                                    {/* 설명 박스: 오버 시 보이는 박스 */}
                                    <div className="studio_hoverbx gongtong">
                                        
                                        {/* 배경 박스 */}
                                        <div className="studio_hoverbx_txt">
                                        {console.log(v[0])}

                                            <h4>{v[0]["제목"]}</h4>
                                            <p>장르: {v[0]["장르"]}</p>
                                            <p>감독: {v[0]["감독"]}</p>
                                            <p>{v[0]["소개"]}</p>

                                        </div>
                                        
                                    </div>
                                        
                                </div>

                            )} 

                        </div>

                    </div>

                    {/* MORE 버튼 */}
                    {/* <div className="morebtn">
                        MORE
                    </div> */}

                </div>

            </section>

            {jq()}
        </>
    )
} // Studio //

// 내보내기
export default Studio;