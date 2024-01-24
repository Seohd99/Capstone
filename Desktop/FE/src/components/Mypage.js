import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Mypage.css';
import submitImage from '../assets/search.png';
import write from '../assets/pen.png';
import Card from 'react-bootstrap/Card';
import adimg1 from '../assets/ok.jpg';

function Mypage() {
    const defaultImageSrc = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    const [previewImage, setPreviewImage] = useState(defaultImageSrc);
    const [currentPage, setCurrentPage] = useState('Info'); // 사용자가 현재 보고 있는 페이지
    const [postCount, setPostCount] = useState(22); // 사용자의 게시물 수
    const [reviewCount, setReviewCount] = useState(33); // 사용자의 리뷰 수
    const [followerCount, setFollowerCount] = useState(45); // 사용자의 팔로워 수
    const [followingCount, setFollowingCount] = useState(29); // 사용자의 팔로잉 수
    const ID = "ROLL"; // 사용자의 아이디 (예시)
    const [introduction, setIntroduction] = useState("안녕하세요! 반갑습니다."); 
    const [isEditingIntroduction, setIsEditingIntroduction] = useState(false);
    // 새 리뷰 추가 및 관리를 위한 상태 변수
    const [newReview, setNewReview] = useState('');


    // 프로필 이미지 변경 처리 함수
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

     // 리뷰 관리를 위한 상태 변수
     const [reviews, setReviews] = useState([
        { id: 1, content: "첫 번째 리뷰입니다." },
        { id: 2, content: "또 다른 리뷰 내용이 여기에 들어갑니다." },
        // 필요한 만큼 더 많은 리뷰를 추가하세요
    ]);

    // 새 리뷰 추가 함수
    const addReview = () => {
        if (newReview.trim() !== '') {
            const updatedReviews = [
                ...reviews,
                { id: reviews.length + 1, content: newReview.trim() }
            ];
            setReviews(updatedReviews);
            setNewReview(''); // 새 리뷰 작성 후 상태 초기화
        }
    };

    const deleteReview = (id) => {
        const updatedReviews = reviews.filter((review) => review.id !== id);
        setReviews(updatedReviews);
    };
    

    

    const htag = ['인스타','유튜브'];
    const like = ['♡','♥'];
    const [x, setX] = useState(0);

    const switchLike = () => {
        setX((prevX) => (prevX === 0 ? 1 : 0));
    };

    // 버튼 클릭으로 페이지 변경 처리 함수
    const handleButtonClick = (page) => {
        setCurrentPage(page);
    };

    const handleIntroductionEdit = () => {
        setIsEditingIntroduction(true);
    };

    // 소개글 저장 처리 함수
    const saveIntroduction = () => {
        setIsEditingIntroduction(false);
        // 여기서 수정된 소개글을 저장하는 로직 추가 가능
    };

    return (
        <div className="pageArea2">
            {/* ...기존의 코드 */}
            <div className="MypageArea">
        
                <div className='InfoArea'>
                    {/* 프로필 이미지 업로드 영역 */}
                    <label htmlFor="profileImageUpload" className="profileImgChange">프로필 이미지 변경</label>
                    <input
                        type="file"
                        id="profileImageUpload"
                        accept="image/*"
                        className="profileImg-input"
                        onChange={handleImageUpload}
                    />
                    {/* 프로필 이미지 미리보기 */}
                    <img
                        src={previewImage}
                        alt="Profile Preview"
                        className="profileImage-preview"
                        style={{ width: '100px', height: '100px' }}
                    />
                    {/* 미리보기가 없을 때 기본 이미지 */}
                    {!previewImage && (
                        <img
                            src={defaultImageSrc}
                            alt="Default Profile"
                            style={{ width: '100px', height: '100px' }}
                        />
                    )}
                    <p className="showID">{ID}</p>

                    {/* 사용자 정보 표시 */}
                    <div className="CntArea">
                        <a href="#" className="postCnt" onClick={() => handleButtonClick('PostArea')}>게시글<br/>&nbsp;&nbsp;{postCount}</a><br/>
                        <a href="#" className="followerCnt">팔로워<br/>&nbsp;&nbsp;{followerCount}</a><br/>
                        <a href="#" className="followingCnt">팔로잉<br/>&nbsp;&nbsp;{followingCount}</a><br/>
                        <a href="#" className="reviewCnt" onClick={() => handleButtonClick('ReviewArea')}>리뷰<br/>&nbsp;{reviewCount}</a><br/>
                        <button class="DoFollowing" type="button">팔로우하기</button>
                    </div>
                    <div className="IntroduceArea">
                    {isEditingIntroduction ? (
                                <div>
                                    <textarea
                                        className="ModifyIntro"
                                        value={introduction}
                                        onChange={(e) => setIntroduction(e.target.value)}
                                        rows={4} // 텍스트 영역의 높이 조정 가능
                                        cols={50} // 텍스트 영역의 너비 조정 가능
                                        placeholder="소개글을 입력하세요..."
                                    />
                                    <button className="save" onClick={saveIntroduction}>저장</button>
                                </div>
                            ) : (
                                <div>
                                    {introduction}
                                    <button className="IntroduceBtn" onClick={handleIntroductionEdit}>
                                        <img src={write} className="btn-image" alt="수정이미지" />
                                    </button>
                                </div>
                            )}
                    </div>
                   
                    
                <hr></hr>
                <h2>게시물</h2>
                {/* 페이지 이동에 따라 다른 영역을 보여줌 */}
                <div className='PostArea' >
                    {/* 게시물 내용 */}
                    <div className="row">
                    <Card className='Card col-md-6'>
                        <Link to={'/post'}>
                            <Card.Img alt ='user_img' src={adimg1} />
                        </Link>
                    <Card.Body className='card_body'>
                    <Card.Text>
                        <Link to={'/post'}><p className='post_title' >안녕하세요</p></Link>
                    
                        <p className='h_tag'>
                        {htag.map((f, index) => (
                            <span key={index}>#{f}</span>
                        ))}
                        </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                        </Card.Text>
                    </Card.Body>
                    </Card>
            </div>
                </div>
                <hr></hr>
                <h3>리뷰</h3>
                <div className='ReviewArea'>
                    {/* 리뷰 내용 */}
                    {reviews.map((review) => (
                        <div key={review.id} className="singleReview">
                            <p className="reviewContent">{review.content}</p>
                            <button className="DeleteReviewButton" onClick={() => deleteReview(review.id)}>삭제</button>
                        </div>
                    ))}
                    <h3 className="ReviewWriteTitle">리뷰 작성</h3>
                    <textarea
                    className="NewReviewTextarea"
                    placeholder="리뷰를 작성해주세요..."
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                />
                <button className="AddReviewButton" onClick={addReview}>리뷰 추가</button>
                </div>
                <button className="MypickButton" >My pick!</button>
            </div>
        </div>
        </div>
    );
}

export default Mypage;