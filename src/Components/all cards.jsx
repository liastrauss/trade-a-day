import React from 'react';
import EventCard from "./card"
import {Box} from "@mui/material";

const AllCards = ({data}) => {
    const cards = data.map((params, index) => {
        return <EventCard key={index} {...params}/>;
    });
    return <Box
        sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            justifyContent: 'center'
            // TODO figure out how to align bottom row to the left when different amount of cards on bottom line
    }}
    >
        {cards}</Box>
};

export default AllCards;