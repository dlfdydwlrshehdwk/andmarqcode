import React from "react";
import "./css/intro.css";

function Intro(){
    return(
        <>
            <section id="intro">

                {/* 중앙 텍스트 */}
                <div className="txt">
                    <h4>Managing And More</h4>
                    <h1>AND<br />MARQ</h1>
                </div>

                {/* 하단 영역 */}
                <p className="copy">ⓒANDMARQ</p>
                
            </section>
        </>
    )
}

// 내보내기
export default Intro; 