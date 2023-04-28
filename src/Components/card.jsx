import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {useTheme} from '@mui/material/styles';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import {CardActionArea} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function EventCard({id, picture, hostName, title, rating, location, duration}) {
    const theme = useTheme();
    let navigate = useNavigate()
    return (
        <Card sx={{
            width: 275,
            fontFamily: theme.typography.fontFamily,
            boxShadow: 0,
            my: 2,
            mx: 2,
        }}
        >
            <CardActionArea     onClick={() => {
                navigate(`/OverView2/${id}`);
            }}>


                <CardMedia
                    component="img"
                    image={picture}
                    className="card-img"
                    sx={{
                        borderRadius: 3,
                        height: 250
                    }}
                />
                <CardContent sx={{
                    fontSize: 13,
                    fontWeight: theme.typography.fontWeightMedium,
                    lineHeight: 0
                }}
                >
                    {hostName}, {title}
                </CardContent>
                <CardActions
                    sx={{
                        color: theme.palette.text.secondary,
                        fontWeight: theme.typography.fontWeightRegular,
                        fontSize: 12,
                        justifyContent: 'space-evenly',
                        lineHeight: 0,
                        mt: -2.5,
                    }}>
                    <p><LocationOnRoundedIcon sx={{fontSize: 13}}/>{location}</p>
                    <p><AccessTimeFilledRoundedIcon sx={{fontSize: 13}}/>{duration}</p>
                    <p><StarRateRoundedIcon sx={{fontSize: 13}}/>{rating}</p>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}
