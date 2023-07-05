import React, { useEffect, useState } from "react";
import "./css/main.css";
import Intro from "./Intro";
import Main2 from "./Main2";
import $ from "jquery";
import artist_data from "./data/artist_data";
import { Link } from "react-router-dom";

function Main() {
    function jq() {}

    //   // rightbtn //

    // 16개의 데이터가있다고침

    // 16개에서 랜덤수의 데이터를뽑아옴
    // 뽑아오고 얘를 배열에서 빼야됨
    // 그럼 15개가됨
    // 그럼 이배열에서 또하나를뻄 랜덩ㅁ수
    // 이렇게 6개의 데이터뽑아옴
    // 이걸 배열화시킴
    // 이걸 map돌림

    // 변수 1 = [] 빈배열
    // 변수2 = 배열.splice랜덤수 해서 짤라옴
    // 변수1. push 변수2
    // 이동작 6번

    // 변수1.map
    const [num, setNum] = useState(0);

    // useEffect(()=>{},[num])
    useEffect(() => {
        // 여기에 적어야되는내용
        // num이 렌더링 될때마다 이곳에 있는 함수가 실행되므로
        // num이 -1이나 15을 넘어가는것을 감지해서 0이나 14로 만들어주는 함수를 작성
        console.log(num);
    }, [num]);

    // 스테이트를 만드는법
    // const [ 변수이름 , 변수를바꿔줄함수이름 ] = useState(기본값)
    // 이름은 맘대로지어도되나 함수이름은 set + 앞글자 대문자 이렇게 짓는게 예의
    // num -> setNum
    // 스테이트의 값을 바꾸는법
    // 변수를바꿔줄함수이름(값) -> setNum(num + 1)
    // const [sunser, setSunser] = useState([1,0,0,0]) <- 첫번째만 열려있는상태

    return (
        <>
            <section id="main">
                <div className="bgimg">
                    <img
                        src={artist_data[num].src3}
                        alt={artist_data[num].한글이름}
                    />

                    {/* 네모네모 */}
                    <div id="sqwrap">
                        {/* 네모네모 박스 */}
                        <div className="sqwrap">
                            {/* 개별 네모네모 */}
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
                    </div>
                </div>

                    {/* 텍스트 */}
                    <p className="clicktxt txtcolor">화살표를 클릭해 주세요.</p>

                    {/* 이동 버튼 */}
                    <div className="arrowwrap txtcolor">
                        <div className="leftarrow">
                            <span>
                                ←
                            </span>
                        </div>

                        <div className="rightarrow">
                            <span>
                                →
                            </span>
                        </div>
                    </div>
            </section>

            {/* 호출 */}
            {jq()}
        </>
    );
} // Main //

// 내보내기
export default Main;
