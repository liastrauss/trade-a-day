import React from 'react';
import EventCard from "./card"

const AllCards = ({data}) => {
    const cards = data.map((params, index) => {
        return <EventCard key={index} {...params} />;
    });
    return <div className = "cards-container">{cards}</div>
};

export default AllCards;