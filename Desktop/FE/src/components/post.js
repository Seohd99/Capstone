import React from 'react';
import '../post.css'; 
import submitImage from '../assets/search.png'; 
import Post_slider from './post_slider';
import ok from '../assets/ok.jpg';
function post() {
    
  const title_name = '파티 아웃 협찬 광고!';
  return (
    <div className='post_div'>
        <form> 
            <input placeholder='검색' className='searchbar' type='text' />
            <button type='submit' className='searchsubmit'>
                <img className='searchsubmit_img' src={submitImage} alt="Submit" />
            </button>
        </form>
        <div className='post_info'>
            <table className='post_table'> 
                <tr>
                    <td className='post_title'>
                        <div className='title_div'>
                            <h3>{title_name}</h3>
                        </div>
                    </td>
                    <td rowSpan={3} className='User_info'>
                        <table className='info_table'> 
                            <tr>
                                <td className='pro_td'>
                                    <img className='pro_img' src={ok} alt="프로필" />
                                </td>
                                <td>
                                    <p className=''>안녕</p>
                                </td>
                            </tr>
                            <tr><td rowSpan={2}>
                                
                            </td></tr> 
                        </table>
                    </td>

                </tr>
                <tr>
                    <td>
                        <Post_slider className='slider' />  
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='scroll_div'>
                             <p>일시 : </p>
                             <p>주요 플랫폼 : </p>
                             <p>광고 양식 : </p>
                             <p>계약 형식 : </p>
                             <p>내용 : </p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button className='pick_button'>
                            Pick!
                        </button>
                    </td>
                </tr>
                
            </table>
        </div>

    </div>
    
  );
}

export default post;