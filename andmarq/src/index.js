import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";

// index CSS 넣기
import "./index.css";

import Intro from "./andmarq/Intro";
import Layout from "./andmarq/Layout";
import Layout2 from "./andmarq/Layout2";
import Main from "./andmarq/Main";
import Main2 from "./andmarq/Main2";
import Artist from "./andmarq/Artist";
import Studio from "./andmarq/Studio";
import Photo from "./andmarq/Photo";
import Audition from "./andmarq/Audition";
import Contact from "./andmarq/Contact";
import artist_data from "./andmarq/data/artist_data";

export default function App() {
    return (
        <HashRouter>
            
            <Routes>

                {/* 공통 상단, 하단 영역 */}
                <Route path="/" element={<Layout />}>
                {/* -> Layout의 Link to="/"에 해당하는 셋팅 필수*/}

                    {/* 인트로 */}
                    {/* <Intro /> */}

                    {/* 메인 */}
                    {/* path 대신 index만 쓰면? 첫 페이지임 */}
                    <Route index element={<Main />} />
                    <Route path="main" element={<Main />} />
                    <Route path="main2" element={<Main2 />} />
                    <Route path="artist/:id" element={<Artist data={artist_data}/>} />
                    <Route path="studio" element={<Studio />} />
                    <Route path="photo" element={<Photo />} />
                    <Route path="audition" element={<Audition />} />
                    <Route path="contact" element={<Contact />} />
                    
                </Route>

            </Routes>

        </HashRouter>

    ); // return //
	
} // App component //

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);