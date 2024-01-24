import React,{useState} from "react";
import Logo from "../assets/logo.png";
import 네이버로그인버튼 from "../assets/kakao_login_medium_narrow.png";
import 카카오로그인버튼 from "../assets/kakao_login_medium_narrow.png";
import axios from 'axios';
import "../LoginForm.css";


function LoginForm(){
    const history = useState();
    const [formData, setFormData] = useState({
        ID: "",
        PW: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleLogin = async(e) => {
        e.preventDefault();

        try{
            //백엔드 서버의 로그인 엔드포인트로 요청 보내기
            const response = await axios.post("백엔드_서버_로그인_엔드포인트",formData);
            //로그인 성공시 메인페이지로 이동
            history.push("http://localhost:3001/");
        } catch(error){
            //로그인 실패시 에러처리
            console.error("아이디, 비밀번호를 다시 확인해주십쇼.");
            history.goBack();
        };
    };

    return(
    <div className="pageArea">
        <div className="LoginArea">
            <img src = { Logo } className="Logo"></img>
            <form onSubmit={handleLogin}>
                    <p><input className="LoginInput" type="text" name="ID" placeholder="  아이디를 입력하세요." value={formData.ID} onChange={handleInputChange} ></input></p>
                    <p><input className="LoginInput" type="password" name="PW" placeholder="  비밀번호를 입력하세요."value={formData.PW} onChange={handleInputChange}></input></p>
                    <div>
                        <a href="#" className="SignUp" value="회원가입">회원가입</a>
                        <a href="#" className="IdPwFind" value="아이디/비번찾기">아이디/비밀번호 찾기</a>
                    </div>
                    <div><input className="LogFormBt" type="submit" value="로그인" /></div>
                </form>
                <div className="simLoginBtn">
                    <div className="explain">
                        <p>-간편 로그인-</p>
                    </div>
                    <button className="naverBtn" >
                        <img src={네이버로그인버튼} alt="네이버간편로그인"></img>
                    </button>
                    <button className="kakaoBtn">
                        <img src={카카오로그인버튼} alt="카카오간편로그인"></img>
                    </button>
                </div>
            </div>
    </div>
    );
}
export default LoginForm;