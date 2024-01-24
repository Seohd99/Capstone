import React, { useState } from "react";
import '../WithDraw.css';
import "../App.css";
import { useNavigate } from "react-router-dom";

function WithDrawForm(){
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };


    return(
        <div className="SignUppageArea">
            <div className="WithDrawArea">
                <h3 className="title">회원탈퇴</h3>
                <input type="password" className="passwordChk" placeholder="비밀번호 입력"></input>
                <div className="phone-container">
                        <p className="content">휴대폰 번호<br />
                            <input className="InputArea" type="text" id="phone" placeholder="-없이 입력해주십쇼" />
                        </p>
                        <button className="authButton">인증하기</button>
                        <div className="submitArea">
                            <button className="submit">탈퇴하기</button>
                            <button className="cancel" onClick={handleGoBack} >뒤로가기</button>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default WithDrawForm;