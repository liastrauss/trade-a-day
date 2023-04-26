import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {MdAccessTime, MdLocationOn, MdStar} from 'react-icons/md';
import { useTheme } from '@mui/material/styles';

export default function EventCard({picture, hostName, title, rating, location, duration}) {
    const theme = useTheme();
    return (
        <Card sx={{
            width: 275,
            mx: 0.2,
            fontFamily: theme.typography.fontFamily,
            boxShadow: 0
        }}
        className="card">
            <CardMedia
                component="img"
                image={picture}
                className="card-img"
                sx={{
                    borderRadius: 3,
                    height: 250
                }}
            />
            <CardContent className="title">
                {hostName}, {title}
            </CardContent>
            <CardActions
                className="subtitle"
            sx={{
                color: theme.palette.text.secondary,
                fontWeight: theme.typography.fontWeightRegular
            }}>
                <p><MdLocationOn/>{location}</p>
                <p><MdAccessTime/>{duration}</p>
                <p><MdStar/>{rating}</p>
            </CardActions>
        </Card>
    );
}
