


import React from "react";
import './style.css';
import Card from "./Card";
import MockDate from '../mock/mockdate.json';


function Pricing()
{
    const cards = MockDate;
    return(

        <div className="pricing">
            
                <div className="pricing_top_block">
                    <div className="pricing_top_block_info">
                            <div className="pricing_top_block_info_title">
                                CHOOSE YOUR PLAN
                            </div>

                            <div className="pricing_top_block_info_text">
                            Natus totam voluptatibus animi aspernatur ducimus quas obcaecati
                            mollitia quibusdam temporibus culpa dolore molestias blanditiis
                            consequuntur sunt nisi.
                            </div>
                    </div>
                </div>

                <div className="pricing_bottom_block">
                    <div className="pricing_container">

                        <div className="pricing_bottom_block_cards_holder">
                            {
                                cards.map(card => {
                                    return (
                                        <Card
                                            title = {card.title}
                                            text = {card.text}
                                            beginprice = {card.beginprice}
                                            perDate = {card.perDate}
                                            subtext = {card.subtext}
                                        />
                                    )
                                })

                            }
                        </div>
                        
                    </div>
                </div>
        </div>
    );
}


export default Pricing;