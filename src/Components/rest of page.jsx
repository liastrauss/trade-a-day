import React from "react";
import Card from "./card";
import AllCards from "./all cards"
import {cardData} from "./card-data.js"

function RestOfPage() {
    return (
        <div className="rest-of-page">
            <AllCards data={cardData}/>
        </div>
    );
}

export default RestOfPage