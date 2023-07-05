import React from "react";
import "./css/contact.css";

function Contact(){
    return(
        <>

            <section id="contact">
                <div className="contactwrap">

                    <div className="map">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.448509823325!2d127.0270241120873!3d37.52092337193393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca38d5c3049ab%3A0xf6e1218563233e90!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDsi6Dsgqzrj5kgNTg3LTEw!5e0!3m2!1sko!2skr!4v1687166251957!5m2!1sko!2skr" allowFullScreen="false" loading="lazy"/> */}
                        <a href="https://goo.gl/maps/tqY1DDjWvvTHf1fP6" target="_blank">
                            <img src="./images/map.jpg" alt="지도이미지" />
                        </a>
                    </div>

                    <div className="contactinfo">

                        <div className="koadd">
                            <h4>㈜앤드마크</h4>
                            <p>서울특별시 강남구 논현로 152길 18, 3층</p>
                        </div>
                        <div className="enadd">
                            <h4>ANDMARQ Corp.</h4>
                            <p>3F, SR587-10 Bldg., 587-10, Sinsa-dong, Gangnam-gu, Seoul, Korea</p>
                        </div>
                        <div className="contactnum">
                            <p>T. +82 2 542 7333</p>
                            <p>F. +82 2 542 7334</p>
                            <a href="mailto:andmarq@andmarq.com">E. andmarq@andmarq.com</a>
                        </div>

                    </div>
                    
                </div>
            </section>
        
        </>
    )
} // Contact //

// 내보내기
export default Contact; 