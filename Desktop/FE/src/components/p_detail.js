import '../CSS/p_detail.css'
import React from 'react'; 
import submitImage from '../assets/search.png';
import { Link } from "react-router-dom";

function p_detail() { 
    var name = '쯔양';
    var type = '협찬';
    var amount = 5000;
    var goods = '막창';
    var day = '2023.10.02';
    return (
        <div className='p_detail_div'>
            <div className="s_div">
                <form> 
                    <input placeholder='검색' className='searchbar' type='text' />
                    <button type='submit' className='searchsubmit'>
                    <img className='searchsubmit_img' src={submitImage} alt="Submit" />
                    </button>
                </form>
            </div>
            <div className='details'>
                <div className='no'>
                    no.00001          
                </div>
                <table className='d_table'>
                    <tr>
                        <td className='d_col1' rowSpan={3}>
                            <table className='col1_t'>
                                <tr>
                                    <td className='col_1_1'>상&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;품</td>
                                    <td className='col_1_2'>:</td>
                                    <td className='col_1_3'>{goods}</td>
                                </tr>
                                <tr>
                                    <td className='col_1_1'>거래형태</td>
                                    <td className='col_1_2'>:</td>
                                    <td className='col_1_3'>{type}</td>
                                </tr>
                                <tr>
                                    <td className='col_1_1'>금&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;액</td>
                                    <td className='col_1_2'>:</td>
                                    <td className='col_1_3'>{amount}원</td>
                                </tr>
                            </table>
                        </td>
                        <td className='d_col2'><Link to={"/detail/view"} className='d_a'>상세보기</Link></td>
                    </tr>
                    <tr><td className='d_col2'>거래자<br/>{name}</td></tr>
                    <tr><td className='d_col2'>거래일자<br/>{day}</td></tr>
                </table>
                <div className='no'>
                    no.00002
                </div>
                <table className='d_table'>
                    <tr>
                        <td className='d_col1' rowSpan={3}>
                            <table className='col1_t'>
                                <tr>
                                    <td className='col_1_1'>상&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;품</td>
                                    <td className='col_1_2'>:</td>
                                    <td className='col_1_3'>{goods}</td>
                                </tr>
                                <tr>
                                    <td className='col_1_1'>거래형태</td>
                                    <td className='col_1_2'>:</td>
                                    <td className='col_1_3'>{type}</td>
                                </tr>
                                <tr>
                                    <td className='col_1_1'>금&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;액</td>
                                    <td className='col_1_2'>:</td>
                                    <td className='col_1_3'>{amount}원</td>
                                </tr>
                            </table>
                        </td>
                        <td className='d_col2'><Link to={"/detail/view"} className='d_a'>상세보기</Link></td>
                    </tr>
                    <tr><td className='d_col2'>거래자<br/>{name}</td></tr>
                    <tr><td className='d_col2'>거래일자<br/>{day}</td></tr>
                </table>
                {/* <div className='no'>
                    no.00003          
                </div> */}
                <table className='d_table'>
                    <tr>
                        <td className='d_col1' rowSpan={3}>
                            <table className='col1_t'>
                                <tr>
                                    <td className='col_1_1'>상&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;품</td>
                                    <td className='col_1_2'>:</td>
                                    <td className='col_1_3'>{goods}</td>
                                </tr>
                                <tr>
                                    <td className='col_1_1'>거래형태</td>
                                    <td className='col_1_2'>:</td>
                                    <td className='col_1_3'>{type}</td>
                                </tr>
                                <tr>
                                    <td className='col_1_1'>금&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;액</td>
                                    <td className='col_1_2'>:</td>
                                    <td className='col_1_3'>{amount}원</td>
                                </tr>
                            </table>
                        </td>
                        <td className='d_col2'><Link to={"/detail/view"} className='d_a'>상세보기</Link></td>
                    </tr>
                    <tr><td className='d_col2'>거래자<br/>{name}</td></tr>
                    <tr><td className='d_col2'>거래일자<br/>{day}</td></tr>
                </table>
            </div> 
        </div>
    );
}

export default p_detail;