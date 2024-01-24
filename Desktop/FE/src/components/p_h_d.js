import '../CSS/p_h_d.css'
import React from 'react'; 
import submitImage from '../assets/search.png'; 

function p_h_d() {
    var contractee = '대박막창'; 
    var goods = '막창';
    var type = "계약";
    var pay = '1000';
    var day = '2023.10.14';
    return (
        <div className='hd_div'> 
        
            <div className="s_div">
                <form> 
                    <input placeholder='검색' className='searchbar' type='text' />
                    <button type='submit' className='searchsubmit'>
                    <img className='searchsubmit_img' src={submitImage} alt="Submit" />
                    </button>
                </form>
            </div>
            <div className='hd_bk'>
                <div className='scr_div'>
                <form>
                        <table className='scr_t'>
                            <tr>
                                <td className='col1'>
                                    <p>상&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;품</p>
                                </td>
                                <td className='col2'>
                                    <p>:</p>
                                </td>
                                <td className='col3'>
                                    <p>{goods}</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='col1'>
                                    <p>거래형태</p>
                                </td>
                                <td className='col2'>
                                    <p>:</p>
                                </td>
                                <td className='col3'>
                                    <p>{type}</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='col1'>
                                    <p>금&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;액</p>
                                </td>
                                <td className='col2'>
                                    <p>:</p>
                                </td>
                                <td className='col3'>
                                    <p>{pay}원</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='col1'>
                                    <p>거래일자</p>
                                </td>
                                <td className='col2'>
                                    <p>:</p>
                                </td>
                                <td className='col3'>
                                    <p>{day}</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='col1'>
                                    <p>거&nbsp;래&nbsp;자</p>
                                </td>
                                <td className='col2'>
                                    <p>:</p>
                                </td>
                                <td className='col3'>
                                    <p>{contractee}</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='col1' colSpan={3}><p>결제정보</p></td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <div className='pay_info_div'>
                                        <div className='p_i_1'>
                                            <p>결제 수단</p>
                                            <p className='card_info'>xx카드 / 일시불</p>
                                        </div>
                                        <div className='p_i_2'>
                                            <p>결제 금액 : {pay}원</p>
                                            <br/><br/><br/><br/>
                                            <button className='phd_b'>거래 명세서</button>&nbsp;&nbsp;&nbsp;
                                            <button className='phd_b'>영수증 보기</button>
                                            
                                        </div>
                                    
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='col1' colSpan={3}><br/><p>거래정보</p></td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <div className='pd_info_div'>
                                        {/* 거래정보 */} 
                                    </div>
                                </td>
                            </tr> 
                        </table>
                    </form>
                </div>
                
            </div>
            
        </div>
    );
}

export default p_h_d;