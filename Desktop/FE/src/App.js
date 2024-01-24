import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Post from './components/post';
import SignUpForm from "./components/SignUp";
import LoginForm from "./components/loginForm";
import Mypage from "./components/Mypage";
import WithDraw from "./components/WithDrawForm";
import InfoModi from "./components/InfoModify";
import CategoryBox from "./components/category";
import MyPick from "./components/my_pick";
import Pdetail from "./components/p_detail";
import Phdetail from "./components/p_h_d";
import Payment from "./components/payment"
import Post_write from "./components/post_write";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navCover"> 
        <Nav />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
          <Route path="/Signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/WithDrawForm" element={<WithDraw/>} />
          <Route path="/InfoModify" element={<InfoModi/>} />
          <Route path="/category" element={<CategoryBox/>}/>
          <Route path="/my_pick" element={<MyPick/>}/>
          <Route path="/p_detail" element={<Pdetail/>}/>
          <Route path="/p_h_d" element={<Phdetail/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/post_write" element={<Post_write/>}/>
        </Routes>
      </div>
      <div> 
    </div>
    </BrowserRouter>
    


    
  );
}

export default App;
