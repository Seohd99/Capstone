import React, { useState } from 'react';
import "../CSS/mp.css"
import submitImage from '../assets/search.png';  
import adimg1 from '../assets/ok.jpg';

function My_pick(){
    const imgs = [
        {imgsrc : {adimg1}},
        {imgsrc : {adimg1}},
        {imgsrc : {adimg1}}
      ];
    const data = [
        {id: 0, name: '선택 1'},
        {id: 1, name: '선택 2'},
        {id: 2, name: '선택 3'}
      ];
    
      // 체크된 아이템을 담을 배열
      const [checkItems, setCheckItems] = useState([]);
    
      // 체크박스 단일 선택
      const handleSingleCheck = (checked, id) => {
        if (checked) {
          // 단일 선택 시 체크된 아이템을 배열에 추가
          setCheckItems(prev => [...prev, id]);
        } else {
          // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
          setCheckItems(checkItems.filter((el) => el !== id));
        }
      };
    
      // 체크박스 전체 선택
      const handleAllCheck = (checked) => {
        if(checked) {
          // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
          const idArray = [];
          data.forEach((el) => idArray.push(el.id));
          setCheckItems(idArray);
        }
        else {
          // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
          setCheckItems([]);
        }
      }
    return(
        <div className="mp_div"> 
            <div className="s_div">
                <form> 
                    <input placeholder='검색' className='searchbar' type='text' />
                    <button type='submit' className='searchsubmit'>
                    <img className='searchsubmit_img' src={submitImage} alt="Submit" />
                    </button>
                </form>
            </div>
            <div className="mp_form">
                <div className="MYPICK">
                    <p className="mp_title">My Pick!</p>
                </div>  
                <table className='select_T'>
                    <thead>
                        <tr>
                        <th className='head-fir'>
                            <input type='checkbox' name='select-all'
                            onChange={(e) => handleAllCheck(e.target.checked)}
                            // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                            checked={checkItems.length === data.length ? true : false} />
                        </th>
                        <th colSpan={2} className='head-sec'>전체 선택</th>
                        </tr>
                    </thead>
                    <tbody className='pick_body'>
                        {data?.map((data, key) => (
                        <tr className='sel_r' key={key}>
                            <td className='first-row'>
                            <input className="sel_i" type='checkbox' name={`select-${data.id}`}
                                onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                                // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                                checked={checkItems.includes(data.id) ? true : false} />
                            </td>
                            <td className='second-row' >
                                <img className='pro_img' src={adimg1} alt=""/>
                            </td>
                            <td className='third-row'><p className='s_name'>{data.name}</p></td>
                        </tr>
                        ))}
                    </tbody>
                </table>  
                <div className='text_div'>
                    <textarea className='pick_msg' rows="6" cols="65"></textarea>
                </div>
                <div className='p_b_div'>
                    <button className='pick_button' type="submit">전송</button>
                    <button className='pick_button' type="button">삭제</button>
                    <button className='pick_button' type="button">취소</button>
                </div>
            </div>

        </div>
    );
}

export default My_pick;