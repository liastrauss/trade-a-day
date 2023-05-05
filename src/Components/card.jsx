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
import Box from "@mui/material/Box"

export default function EventCard({data}){
    const theme = useTheme();
    let navigate = useNavigate();
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }}>
            {data.map((item) => (
                    <Card sx={{
                        width: 275,
                        boxShadow: 0,
                        my: 2,
                        mx: 2,
                    }}
                    >
                        <CardActionArea onClick={() => {
                            navigate(`/OverView2/${item.id}`);
                        }}>


                            <CardMedia
                                component="img"
                                image={item.picture}
                                className="card-img"
                                sx={{
                                    borderRadius: 3,
                                    height: 250
                                }}
                            />
                            <CardContent sx={{
                                fontSize: 13,
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: theme.typography.fontWeightMedium,
                                lineHeight: 0
                            }}
                            >
                                {item.hostName}, {item.title}
                            </CardContent>
                            <CardActions
                                sx={{
                                    color: theme.palette.text.secondary,
                                    fontWeight: theme.typography.fontWeightRegular,
                                    fontFamily: theme.typography.fontFamily,
                                    fontSize: 12,
                                    justifyContent: 'space-evenly',
                                    lineHeight: 0,
                                    mt: -2.5,
                                }}>
                                <p><LocationOnRoundedIcon sx={{fontSize: 13}}/>{item.location}</p>
                                <p><AccessTimeFilledRoundedIcon sx={{fontSize: 13}}/>{item.duration}</p>
                                <p><StarRateRoundedIcon sx={{fontSize: 13}}/>{item.rating}</p>
                            </CardActions>
                        </CardActionArea>
                    </Card>
            ))
        }
        </Box>
    )

}
