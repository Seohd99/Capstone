import React, { useState } from "react";
import "../App.css";
import axios from 'axios';

function SignUpForm() {
    const defaultImageSrc = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    const [previewImage, setPreviewImage] = useState(defaultImageSrc);
    const [isIdAvailable, setIsIdAvailable] = useState(true);

    const validateId = (id) => {
        return id.length >= 8 && id.length <= 15;
    }
    const validatePassword = (password) => {
        // 비밀번호가 영문, 특수문자, 숫자를 모두 포함하는지 검사
        const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()-_+=])(?=.*[0-9]).*$/;
        return regex.test(password);
    };

    //파일 읽어오는 함수
    const handleImageUpload = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setPreviewImage(event.target.result);
            };
            reader.readAsDataURL(selectedImage);
        }
    };

    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    
    //아이디 중복 검사
    const handleCheckDuplicatedId = async() => {
        const userId = document.getElementById("ID").value;

        try{
            const response = await axios.post("백엔드 엔드포인트 uri",{userId});

            if(response.data.availabel){
                setIsIdAvailable(true);
                console.log("사용가능한 아이디 입니다!");
            }else{
                setIsIdAvailable(false);
                console.log("누군가 사용중인 아이디 입니다!");
            }
        }
        catch(error){
            console.error("중복확인중 에러 발생",error);
        }
    }
    const handleSignUp = async() => {
        const userId = document.getElementById("ID").value;
        const userPW = document.getElementById("PWD").value;
        const userConfirmPWD = document.getElementById("chkPWD").value;
        const jobType = document.querySelector('input[name="jobType"]:checked')?.value;
        const businessNum = document.getElementById("BussinessNum").value;
        const address = document.getElementById("adress").value;

        //아이디, 비밀번호 유효성 검사
        //아이디 4자이상 15자 이하
        //비밀번호 영문+숫자+특수문자 포함
        if(!validateId(userId)){
            alert("아이디는 8자 이상 15자 이하로 입력해주세요.");
            return;
        }
        if(!validatePassword(userPW)){
            alert("비밀번호는 영문, 숫자,특수문자가 반드시 포함되어야 합니다.");
            return;
        }
        //위의 아이디 비밀번호 유효성의 문제가 없으면 db로 정보 입력
        try{
            const response = await axios.post("회원가입 백엔드 엔드포인트 uri",{
                userId,
                userPW,
                jobType,
                businessNum,
                address,
                profileImage: previewImage
            });

            console.log("회원가입 성공",response.data);
        }catch(error){
            console.error("회원가입 중 오류 발생");
        }
    };
    return (
        <div className="SignUppageArea">
            <div className="signUpArea">
                <form>
                <div>
                        <label htmlFor="profileImageUpload" className="signup-profileImg-label">프로필 이미지 추가</label>
                        <input
                            type="file"
                            id="profileImageUpload"
                            accept="image/*"
                            className="signup-profileImg-input"
                            onChange={handleImageUpload}
                            
                        />
                        {/* 프로필 미리보기 */}
                        <img
                            src={previewImage}
                            alt="Profile Preview"
                            className="image-preview"
                            style={{ width: '100px', height: '100px' }}
                        />
                    </div>
                    {!previewImage && (
                        <img
                            src={defaultImageSrc}
                            alt="Default Profile"
                            style={{ width: '100px', height: '100px' }}
                        />
                    )}
                    <div className="form-content">
                        <div className="ID-container">
                            <p className="content">아이디<br />
                                <input className="InputArea" type="text" id="ID" placeholder="아이디 입력" />
                            </p>
                            <button className="chkID-button">중복확인</button>
                        </div>
                        <p className="content">비밀번호<br />
                            <input className="InputArea" type="password" id="PWD" placeholder="비밀번호 입력" />
                        </p>
                        <p className="content">비밀번호 확인<br />
                            <input className="InputArea" type="password" id="ChkPWD" placeholder="비밀번호 확인"/>
                        </p>
                        <div className="phonenum">
                            <p>휴대 전화 인증<br/>
                                <input className="phone_numinput" placeholder=" -없이 입력해주십쇼."></input>
                                <button className="phone_check" >인증하기</button>
                            </p>
                        </div>
                        <div className="checkBoxJob">
                            <ul>
                                <li className="radio_item">
                                    <input type="radio" id="influencer1" name="jobType" value="I" class="hidden-input" checked></input>
                                    <label for="influencer1" class="custom-radio-button">인플루언서</label>
                                </li>
                                <li className="radio_item">
                                    <input type="radio" id="advertiser1" name="jobType" value="A" class="hidden-input"></input>
                                    <label for="advertiser1" class="custom-radio-button">광고주</label>
                                </li>
                            </ul>
                        </div>
                        <p className="content">사업자 번호<br />
                            <input className="InputArea" type="text" id="BussinessNum" placeholder="사업자 번호" />
                        </p>
                        <p className="content">주소<br />
                            <input className="InputArea" type="text" id="adress" placeholder="주소" />
                        </p>
                        <div className="buttonContainer">
                            <input type="submit" value="가입하기" onClick={handleSignUp} />
                            <input type="button" value="뒤로가기" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;