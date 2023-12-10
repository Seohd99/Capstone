import { Link } from "react-router-dom";
import React from "react";
import './Nav.css'
import logo from './logo.png'
function Nav() {
    return (
        <div className="navbar">
            <table className="navT">
                <tr>
                    <td className="navbar_lst1"> 
                        <Link className="navbarIMG" to={'/'}><img src={logo} className="logo"/></Link>
                        <Link className="navbarMenu" to={'/about'}>카테고리</Link>
                        <Link className="navbarMenu" to={'/contact'}>지도</Link>    
                        <Link className="navbarMenu" to={'/contact'}>메세지</Link>    
                        <Link className="navbarMenu" to={'/contact'}>알림</Link>    
                        <Link className="navbarMenu" to={'/contact'}>My Pick!</Link>      
                    </td>
                    <td className="navbar_lst2"> 
                        <Link className="navbarMenu" to={'/contact'}>회원가입</Link>    
                        <Link className="navbarMenu" to={'/contact'}>로그인</Link>
                    </td>
                </tr>    
            </table>
            
            
        </div>
    );
}

export default Nav;