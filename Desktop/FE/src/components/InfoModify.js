import '../InfoModify.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InfoModify(){
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return(
        <div className='InfoModiArea'>
            <div className='ModiArea'>
            <h3 className='ModiTitle'>회원정보 수정</h3>
                <p className="contentModi">비밀번호 수정<br />
                    <input className="ModiInputArea" type="text" id="pwd" placeholder="비밀번호 입력" />
                    <input className="ModiInputArea" type="text" id="pwd" placeholder="비밀번호 확인" />
                </p>
                <div className="submitinfoArea">
                    <button className="submitModi">탈퇴하기</button>
                    <button className="cancelModi" onClick={handleGoBack} >뒤로가기</button>
                </div>
            </div>

        </div>
    );
}

export default InfoModify;