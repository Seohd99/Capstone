import '../CSS/payment.css'
import React from 'react'; 
import submitImage from '../assets/search.png'; 

function payment() {
    const contractor = "계약자";
    const contractee = "피계약자";
    return (
        <div className='payment_div'> 
            <div className="s_div">
            <form> 
                <input placeholder='검색' className='searchbar' type='text' />
                <button type='submit' className='searchsubmit'>
                <img className='searchsubmit_img' src={submitImage} alt="Submit" />
                </button>
            </form>
            </div>
            <div className='pay_form'>
                <div className='pay_from_table'>
                    <form>
                        <table className='pay_table'>
                            <tr>
                                <td className='col1'>
                                    <p>상&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;품</p>
                                </td>
                                <td className='col2'>
                                    <p>:</p>
                                </td>
                                <td className='col3'>
                                    <input className="form_input" type="text" name="" value=""/>
                                </td>
                            </tr>
                            <tr>
                                <td className='col1'>
                                    <p>계&nbsp;약&nbsp;자</p>
                                </td>
                                <td className='col2'>
                                    <p>:</p>
                                </td>
                                <td className='col3'>
                                    <p>{contractor}</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='col1'>
                                    <p>피계약자</p>
                                </td>
                                <td className='col2'>
                                    <p>:</p>
                                </td>
                                <td className='col3'>
                                    <p>{contractee}</p>
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
                                <label>
                                    <input type="radio" name="dealType" value="결제" /> 결제
                                </label>
                                <label>
                                    <input type="radio" name="dealType" value="협찬" /> 협찬
                                </label>
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
                                    <input className='form_input' type="text" name="" value=""/>
                                </td>
                            </tr>
                            <tr>
                                <td className='col1' colSpan={3}><p>상세내용</p></td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <textarea className="form_info" rows="" cols=""></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3} className='sm'>
                                    <input className='smb' type="submit" name="" value="제출"/>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default payment;