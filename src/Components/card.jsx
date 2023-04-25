import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {MdAccessTime, MdLocationOn, MdStar} from 'react-icons/md';

export default function EventCard({picture, hostName, title, rating, location, duration}) {
    return (
        <Card sx={{width: 250, mx: 3}}
        className="card">
            <CardMedia
                component="img"
                image={picture}
                className="card-img"
            />
            <CardContent className="title">
                {hostName}, {title}
            </CardContent>
            <CardActions className="subtitle">
                <p><MdLocationOn/>{location}</p>
                <p><MdAccessTime/>{duration}</p>
                <p><MdStar/>{rating}</p>
            </CardActions>
        </Card>
    );
}