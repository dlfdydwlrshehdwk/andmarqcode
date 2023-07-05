import React from "react";
import "./css/audition.css";

function Audition(){

    return(
        <>

            <section id="audition">

                <div className="audwrap">

                    <div className="audintro">
                        
                        <h1>앤드마크와 함께할 잠재력 있는<br />아티스트를 모십니다.</h1>
                        <p>
                        앤드마크는 독창적인 관점과 예리한 안목으로<br />지원자의 잠재력과 가치를 찾아냅니다.<br />많은 관심과 참여 바랍니다.
                        </p>
            
                    </div>

                    {/* 오디션 진행과정 */}
                    <div className="audprocess">
                        <h4>오디션 진행과정</h4>
                        <ul className="fontsize">
                            <li>
                                <div>①</div>
                                <div>지원서 작성 후 이메일 제출</div>
                            </li>
                            <li>
                                <div>②</div>
                                <div>1차 서류 심사</div>
                                <div>* 합격자 개별 통보</div>
                            </li>
                            <li>
                                <div>③</div>
                                <div>2차 실물 미팅 및 오디션</div>
                            </li>
                            <li>
                                <div>④</div>
                                <div>최종 합격</div>
                            </li>
                        </ul>
                    </div>

                    {/* 모집 내용 */}
                    <div className="audpass">
                        <h4>모집 안내</h4>
                        <div className="fontsize">
                            <div>
                                모집: 연기자
                            </div>
                            <div>
                                모집 형태: 수시 모집
                            </div>
                            <div>
                                신청 자격: 배우에 대한 꿈과 열정이 있는 누구나<br />(성별, 연령, 국적 제한 없음)
                            </div>
                        </div>
                    </div>

                    {/* 지원 방법 */}
                    <div className="audsubmit">
                        <h4>지원 방법</h4>
                        <div className="fontsize">
                            <p>작성한 지원서를 아래 메일로 접수해 주세요.</p>
                            <a href="mailto:audition@andmarq.com">audition@andmarq.com</a>
                        </div>
                    </div>

                    {/* 지원서 다운로드 버튼 */}
                    <div className="downbtn">
                        <a href="assets/download/ANDMARQ_Audition_KR.docx">
                            지원서 다운로드
                        </a>
                    </div>
                </div>
                
            </section>

        </>
    )

} // Audition //

// 내보내기
export default Audition;