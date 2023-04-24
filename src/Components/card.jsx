import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {MdAccessTime, MdLocationOn, MdStar} from 'react-icons/md';

export default function EventCard({picture, hostName, title, rating, location, duration}) {
    return (
        <Card sx={{width: 250, mx: 3}}>
            <CardMedia
                component="img"
                image={picture}
                className="card-img"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {hostName}, {title}
                </Typography>
            </CardContent>
            <CardActions>
                <p className="subtitle"><MdLocationOn/>{location}</p>
                <p className="subtitle"><MdAccessTime/>{duration}</p>
                <p className="subtitle"><MdStar/>{rating}</p>
            </CardActions>
        </Card>
    );
}