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
                        width: {
                            sm: 200, //600
                            md: 300, //900
                            lg: 400, //1200
                            xl: 500, //1563
                        },
                        height: {
                            sm: 264, //600
                            md: 396, //900
                            lg: 528, //1200
                            xl: 660, //1563
                        },
                        boxShadow: 0,
                        my: 2,
                        mx: 2.5,
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
                                    width: {
                                        sm: 200, //600
                                        md: 300, //900
                                        lg: 400, //1200
                                        xl: 500, //1563
                                    },
                                    height: {
                                        sm: 200, //600
                                        md: 300, //900
                                        lg: 400, //1200
                                        xl: 500, //1563
                                    },
                                }}
                            />
                            {/*<Box sx={{ flexDirection: 'row' }}>*/}
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
                                        justifyContent: 'flex-start',
                                        lineHeight: 0,
                                        mt: -2.5,
                                        ml: 1
                                    }}>
                                    <p><LocationOnRoundedIcon sx={{fontSize: 13}}/>{item.location}</p>
                                </CardActions>
                            {/*</Box>*/}
                        </CardActionArea>
                    </Card>
            ))
        }
        </Box>
    )

}
