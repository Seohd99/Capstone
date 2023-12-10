import React from "react";

const Footer1 = () => {
    const company = "애드벌룬"; //const = 값을 다시 대입 불가
    const location = "대구광역시 북구 복현동 영진전문대 본관 220호";
    const tel = "053.152.2222";
    const ceo = "오박서홍";
    const css = {
        backgroundColor:'#69A7E7'
    };

    const itemstyle = {
        margin : '20px 50px',
        fontSize: '1.2em',
        textAlign: 'left'
    };
    return(
        <footer style={css}>
            <h6 style = {itemstyle}>업체명: {company}</h6><br/>
            <h6 style = {itemstyle}>업체위치:{location}</h6>
            <h6 style = {itemstyle}>업체번호: {tel}</h6>
            <h6 style = {itemstyle}>대표명: {ceo}</h6>
        </footer>
    )
}

export default Footer1;