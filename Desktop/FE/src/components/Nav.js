import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Nav.css';
import "../App.css";
import logo from '../assets/logo.png';
import submitImage from '../assets/search.png';
import bell from '../assets/알림이미지스몰.png';

function Nav() {
    const [loggedIn, setLoggedIn] = useState(false); // 로그인 상태를 저장하는 state
    const [userImage, setUserImage] = useState(''); // 로그인된 사용자의 대표 이미지를 저장하는 state
    const defaultImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

    // 로그인 상태를 확인하고 사용자 정보를 가져오는 함수
    const checkLoginStatus = async () => {
        try {
            // 토큰을 로컬 스토리지에서 가져오거나 다른 곳에서 가져옴
            const token = localStorage.getItem('userToken');

            if (token) {
                // 서버에 토큰을 전송하여 로그인 상태 확인
                const response = await axios.post('백엔드 로그인 상태 확인 엔드포인트uri', { token });
                const data = response.data;

                // 로그인 상태이면 사용자 정보를 업데이트
                if (data.loggedIn) {
                    setLoggedIn(true);

                    // 사용자 정보 업데이트
                    setUserImage({
                        username: data.user.username,
                        // 다른 사용자 정보 필드도 필요한 경우 여기에 추가

                        // 대표이미지 가져오기
                        profileImage: await fetchUserProfileImage(data.user.id)
                    });
                }
            }
        } catch (error) {
            console.error('로그인 상태를 확인하지 못했습니다', error);
        }
    };

    // 대표이미지를 가져오는 함수 (가정)
    const fetchUserProfileImage = async (userId) => {
        try {
            // 서버에 userId를 전송하여 대표이미지 가져오기
            const imageResponse = await axios.get(`백엔드 대표이미지 가져오기 엔드포인트uri?userId=${userId}`);
            const imageData = imageResponse.data;

            // 대표이미지 URL 반환
            return imageData.profileImageURL;
        } catch (error) {
            console.error('대표이미지를 가져오지 못했습니다', error);
            // 에러가 발생하면 기본 이미지 URL이나 다른 대체값 반환
            return {defaultImage}
        }
    };

    // useEffect 내에서 호출하여 컴포넌트가 마운트될 때 로그인 상태 확인
    useEffect(() => {
        checkLoginStatus();
    }, []);

    return (
        <div>
            <div className="navbar">
                <Link className="navbarIMG" to={'/'}>
                    <img src={logo} className="logo" alt="Logo" />
                </Link>
                <div className="s_div navbox">
                    <input className='searchbar1' placeholder='검색!' type='text' />
                    <img className='searchsubmit_img1' src={submitImage} alt="Submit" /> {/* 나중에 keypress로 함수 추가 */}
                </div>
                <div className="navbar_lst2">
                    {loggedIn ? (
                        <>
                            <Link className="navbarMenu" to={'/contact'}>
                                <img src={bell} alt="Bell" className="navbarIcon" />
                            </Link>
                            <Link className="navbarMenu" to={'/logout'}>로그아웃</Link>
                        </>
                    ) : (
                        <>
                            <Link className="navbarMenu" to={'/login'}>로그인</Link>
                            <Link className="navbarMenu" to={'/signup'}>회원가입</Link>
                        </>
                    )}
                </div>
            </div>
            <div className="navbar_lst1">
                <Link className="navbarMenu1" to={'/about'}>카테고리</Link>
                <Link className="navbarMenu1" to={'/contact'}>지도</Link>
                <Link className="navbarMenu1" to={'/contact'}>메세지</Link>
                <Link className="navbarMenu1" to={'/contact'}>My Pick!</Link>
                {loggedIn && (
                    <div>
                        <img src={userImage} alt="User" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Nav;