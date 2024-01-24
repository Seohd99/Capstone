import React, { useState } from 'react';
import "../CSS/msg.css" 
import adimg1 from '../assets/ok.jpg';
import file from '../assets//file.png';
import video from '../assets/video.png';
import pic from '../assets/img.png';

function Message(){
    const influencers = [
      { name: '오킹', last_message: 'Hello!', time: '10:00 AM' },
      { name: '오킹2', last_message: 'How are you?', time: '11:30 AM' },
      { name: '오킹3', last_message: 'Good evening!', time: '6:45 PM' },
    ];
     
    return(
        <div className="msg_div"> 
            <table className='msg_lay'>
                <tr className='msg_row1'>
                    <td className='msg_col1'>메세지</td>
                    <td className='msg_col2'>
                        <img className='message_pro' src={adimg1} alt=""/>
                        <p  className='message_pro_name'>O_King</p>
                        <button className='pro_button' type="">신고</button>
                        <button className='pro_button' type="">차단</button>
                        <button className='pro_button' type="">결제/협찬</button>
                        
                    </td>
                </tr>
                <tr className='msg_row2'>
                    <td className='msg_col1'  style={{ display: 'flex', flexDirection: 'column' }}> 
                        {influencers.map((influencer, index) => (
                            <div className='msg_left' key={index}>
                            <code className='left1'>{influencer.name}</code><br/>
                            <code className='left2'>{influencer.last_message}</code><br/>
                            <p className='left3'>{influencer.time}</p>
                            </div>
                        ))} 
                    </td>
                    <td className='msg_col2' >
                        <div className='chat'>
                            <p className='tt'><code className='t_message'>안녕하세요</code></p>
                            <p className='mm'><code className='m_message'>안녕하세요</code></p>    
                        </div>
                        <input className='in_text' type="text" name="message"/>
                        <input className='in_sub' type="submit" name="send" value="전송"/>
                        <div className='b_area'>
                            <button className='ac' type="button"><img className='b_img' src={pic} alt=""/></button>
                            <button className='ac' type="button"><img className='b_img'  src={video} alt=""/></button>
                            <button className='ac' type="button"><img className='b_img'  src={file} alt=""/></button>
                        </div>

                    </td>
                </tr>
                
            </table>
        </div>
    );
}

export default Message;