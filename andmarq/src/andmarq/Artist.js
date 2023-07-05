import React, { useEffect, useState } from "react";
import "./css/artist.css";
import artist_data from "./data/artist_data";
import { useParams } from "react-router-dom";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Artist(props){

    let data = props.data
    console.log('프롭스데이터',props.data)
    let {id} = useParams();
    console.log('id값',id)
    const [sunser, setSunser] = useState([1,0,0,0])
    console.log("sunser:",sunser)
    let drama = data[id].드라마.split("^");
    let movie = data[id].영화.split("^");
    let awards = data[id].수상내역.split("^");
    
    return(
        <>

        <section id="artist">
            <div className="artistwrap">
                <div className="artpbx">
                    <div>
                        <img src={data[id].src1} alt={data[id].한글이름} />
                    </div>
                    <div>
                    <img src={data[id].src2} alt={data[id].한글이름} />
                    </div>
                </div>

                <div className="artdesc">
                    
                    <div>
                        <div className="flex">
                            <div>
                                <h3>
                                    {data[id].한글이름}
                                    <a href={data[id].인스타그램} target="_blank">
                                        <FontAwesomeIcon
                                            icon={faInstagram}
                                            className="instagrambtn"
                                            title="Open instagram"
                                            size="sm"
                                        />
                                    </a>
                                </h3>
                                <h4>{data[id].영어이름.toUpperCase()} | {data[id].생년월일}</h4>
                            </div>

                            {
                                sunser[0] !== 0 &&
                                
                                <div onClick={()=>{
                                    let copy = [...sunser]
                                    copy = [0,0,0,0]
                                    setSunser(copy)}}
                                >－</div> 
                            }
                            {
                                sunser[0] !== 1 && 
                                <div onClick={()=>{
                                   let copy = [...sunser]
                                   console.log("copy:",copy)
                                   copy = [1,0,0,0]
                                   console.log(copy)
                                   setSunser(copy)}}
                                >＋</div>
                            }

                        </div>
                        <div className="wordbreak">
                            {
                                sunser[0] == 1 &&
                                <p>{data[id].상세정보}</p>
                            }
                        </div>
                    </div>

                    <div>
                        <div className="flex">
                            <div>
                                <h4>Drama</h4>
                            </div>
                            {
                                sunser[1] == 0 ?
                                <div onClick={()=>{
                                    let copy = [...sunser]
                                    console.log("copy:",copy)
                                    copy = [0,1,0,0]
                                    console.log(copy)
                                    setSunser(copy)
                                }}>＋</div> :

                                <div onClick={()=>{
                                    let copy = [...sunser]
                                    console.log("copy:",copy)
                                    copy = [0,0,0,0]
                                    console.log(copy)
                                    setSunser(copy)
                                    }}>－</div>
                            }
                            
                        </div>
                        <div className="wordbreak">
                            
                            {
                                sunser[1] == 1 &&
                                <>
                                {drama.map(v=>{
                                    return <p>{v}</p>
                                })}
                                </>
                            }

                        </div>
                    </div>

                    <div>
                        <div className="flex">
                            <div>
                                <h4>Movie</h4>
                            </div>
                            {
                                sunser[2] == 0 ?
                                <div onClick={()=>{
                                    let copy = [...sunser]
                                    console.log("copy:",copy)
                                    copy = [0,0,1,0]
                                    console.log(copy)
                                    setSunser(copy)
                                }}>＋</div> :

                                <div onClick={()=>{
                                    let copy = [...sunser]
                                    console.log("copy:",copy)
                                    copy = [0,0,0,0]
                                    console.log(copy)
                                    setSunser(copy)
                                }}>－</div>
                            }
                        </div>
                        <div className="wordbreak">
                            {
                                sunser[2] == 1 &&
                                <>
                                {movie.map(v=>{
                                    return <p>{v}</p>
                                })}
                                </>
                            }
                        </div>
                    </div>

                    <div>
                        <div className="flex">
                            <div>
                                <h4>Awards</h4>
                            </div>
                            {
                                sunser[3] == 0 ?
                                <div onClick={()=>{
                                    let copy = [...sunser]
                                    console.log("copy:",copy)
                                    copy = [0,0,0,1]
                                    console.log(copy)
                                    setSunser(copy)
                                }}>＋</div> :

                                <div onClick={()=>{
                                    let copy = [...sunser]
                                    console.log("copy:",copy)
                                    copy = [0,0,0,0]
                                    console.log(copy)
                                    setSunser(copy)
                                }}>－</div>
                            }
                        </div>
                        <div className="wordbreak">
                            {
                                sunser[3] == 1 &&
                                <>
                                {awards.map(v=>{
                                    return <p>{v}</p>
                                })}
                                </>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
        
        </>
    )
} // Artist //

// 내보내기
export default Artist; 