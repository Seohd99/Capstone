import { Link } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import ExampleCarouselImage1 from '../assets/k.png';
import ExampleCarouselImage2 from '../assets/l.png';
import ExampleCarouselImage3 from '../assets/m.png';
import Card from 'react-bootstrap/Card';
import submitImage from '../assets/search.png';
import adimg1 from '../assets/ok.jpg';
import '../Main.css'
import Nav from '../components/Nav';
import axios from "axios";


function Main() {
    
    const like = ['♡','♥'];
    const [x, setX] = useState(0);
    const [posts, setPosts] = useState([]);
    const [htag,setHtags] = useState([]);
    const [likes, setLikes] = useState({});

    const fetchHashtags = async () => {
        try {
          // 서버 API를 호출하여 해시태그 데이터를 받아옴
          const response = await axios.get('백엔드 엔드포인트uri');
          const data = response.data;
      
          // 받아온 해시태그 데이터를 state에 저장
          setHtags(data);
        } catch (error) {
          console.error('해시태그를 받아오지 못했습니다', error);
        }
      };
      
      // Main 컴포넌트의 useEffect 내에서 호출
      useEffect(() => {
        // fetchHashtags 함수 호출
        fetchHashtags();
      }, []);


    useEffect(() => {
        // 서버 API를 호출하여 게시물 데이터를 받아옴
        const fetchData = async() => {
            try{
                //서버 api호출 및 데이터 받아오기
                const response = await fetch('백엔드 엔드포인트uri');
                const data = await response.json();

                //받아온 게시물 최신 날짜순 정렬
                const sortedPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date));

                setPosts(sortedPosts);
                // 게시물 수만큼 초기 likes 상태 생성
                const initialLikes = {};
                sortedPosts.forEach(post => {
                    initialLikes[post.id] = 0;
                });
                setLikes(initialLikes);
            }catch(error){
                console.error('게시물을 받아오지 못했습니다',error);
            }
        };

        //fetch데이터 함수 호출
        fetchData();
    },[]); // useEffect가 처음 마운트될 때만 호출되도록 빈 배열 전달


    const switchLike = (postId) => {
        setLikes(prevLikes => ({
          ...prevLikes,
          [postId]: prevLikes[postId] === 0 ? 1 : 0
        }));
      };

  return (
    <div className='Main_div'>   
        {/*슬라이드 배너 광고*/}
        <Carousel className='slide_banner1' variant='dark' interval={'3000'}>
            <CarouselItem className='banner_ad' >
                <img className='banner_img' alt="ad" src = {ExampleCarouselImage1} /> 
                <Carousel.Caption>
                
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem className='banner_ad'>
                <img className='banner_img' alt="ad" src = {ExampleCarouselImage2} /> 
                <Carousel.Caption>
                
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem className='banner_ad' >
                <img className='banner_img' alt="ad" src = {ExampleCarouselImage3} /> 
                <Carousel.Caption>
                
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>

        {/*게시글 리스트*/}
        <div className="row">
        {posts.map((post,index) => (
        <Card key={post.id} className='Card col-md-6'>
            <Link to={'/post/${post.id}'}>
                <Card.Img alt ='user_img' src={post.image} />
            </Link>
            <Card.Body className='card_body'>
                <Card.Text>
                    <Link to={'/post/${post.id}'}>
                        <p className='post_title' >{post.title}</p>
                    </Link>
                    <p className='h_tag'>
                    {post.hashtags.map((tag, tagIndex) => (
                        <span key={tagIndex}>#{tag}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={() => switchLike(post.id)}>
                        {like[likes[post.id]]}
                    </button>
                </Card.Text>
            </Card.Body>
            </Card>
            ))}
        </div>
    </div>
    
  );
}

export default Main;