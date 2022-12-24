

import React from "react";

import './style.css';


function Card(props)
{
    return(
        <div className="card">
           <div className="card_title">{props.title}</div>
           <div className="card_text">{props.text}</div>
           <div className="card_text_subtext">Starting AT</div>
           <div className="card_price">${props.beginprice}</div>
           <div className="card_date">{props.perDate}</div>
           <div className="card_subtext">{props.subtext}</div>
           <a className="card_button">Get started</a>
           
        </div>
    );
}


export default Card;