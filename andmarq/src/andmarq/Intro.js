import React, { useEffect } from "react";
import "./css/intro.css";
import $ from "jquery";

function Intro(){

    useEffect(()=>{



        // 기본 셋팅
        $('.sqwrap').css({opacity:0, top : '50%'})
        $('.clicktxt').css({opacity:0})
        $('.arrowwrap').css({opacity:0})
        $('.bgimg img').css({opacity:0})
        $('.sqbx div').eq(8).css({backgroundColor : 'transparent'})


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
        
        }, 10500)


    },[])



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