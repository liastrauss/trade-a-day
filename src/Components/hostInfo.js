import React, {useEffect, useState} from 'react';
import {Grid, ToggleButton, Typography} from "@mui/material";
import { MonthCalendar } from '@mui/x-date-pickers/MonthCalendar';
import Divider from '@mui/material/Divider';
import {styled, useTheme} from "@mui/material/styles";
import {StandardImageList} from "./view2";
import {useParams} from "react-router-dom";
import {db} from "../config/firebase";
import {doc, getDoc} from "firebase/firestore";
import WaterDropTwoToneIcon from "@mui/icons-material/WaterDropTwoTone";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import RollerSkatingIcon from "@mui/icons-material/RollerSkating";
import LuggageTwoToneIcon from "@mui/icons-material/LuggageTwoTone";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import StyledToggleButtonGroup from "./ItemsForm";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import ForestIcon from '@mui/icons-material/Forest';
import HomeIcon from '@mui/icons-material/Home';
import AccessibleIcon from '@mui/icons-material/Accessible';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import {DateCalendar, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {TbSunglasses} from "react-icons/tb";
import AddIcon from "@mui/icons-material/Add";



function HostInfo() {
    const theme = useTheme();
    const { index } = useParams(); // Access the id parameter from the URL

    const [eventInfoData, setEventInfoData] = useState("");

    const [event, setEvent] = useState();
    // for showing dates
    const isDatesArrayValid = eventInfoData?.dates?.every(date => date !== null);

    useEffect (() => {
        async function fetchEventInfoData(){
            try {
                const eventInfoRef = doc(db, "DataBase1", index)
                const eventInfoSnapshot = await getDoc(eventInfoRef)
                const data = eventInfoSnapshot.data()
                setEventInfoData(data);

                setEvent(data?.hostID);

            } catch (error) {
                console.error("Error retrieving event info:", error)
            }
        }

        fetchEventInfoData();


    }, [index]);




    return (
        <React.Fragment>
            <div>
                <Typography variant="h6" gutterBottom>
                </Typography>

                <Grid container spacing={3} justifyContent="space-evenly"
                >
                    <Grid item xs={12}>
                        <Typography variant="h5" color="primary" gutterBottom>
                            A day with {eventInfoData?.hostName}
                        </Typography>
                        <Typography variant="subtitle1">
                            {eventInfoData?.dayDescription}

                        </Typography>

                    </Grid>


                    <Grid item xs={12}>
                        <Typography variant="subtitle2" color="primary">
                            Gallery
                        </Typography>
                    </Grid>

                    <StandardImageList/>

                    <Grid item xs={6}>
                        <Typography variant="subtitle2" color="primary">
                            Location
                        </Typography>
                        <Chip icon={<LocationOnIcon />} label={eventInfoData?.location}  />
                    </Grid>

                    {isDatesArrayValid &&  eventInfoData?.dates?.length > 0 && (
                        <Grid item xs={6}>
                        <Typography variant="subtitle2" color="primary">
                            Dates available:
                        </Typography>
                        <Typography variant="subtitle1">
                            {eventInfoData?.dates && (
                                <Box sx={{
                                    flexDirection: 'row',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {eventInfoData.dates.map((date, index) => {
                                            // const formattedDate = dayjs(date?.seconds * 1000).toDate().toISOString();
                                            // const formattedDateString = new Date(formattedDate).toLocaleDateString();
                                            // const formattedDateString = new Date(date?.seconds * 1000).toLocaleDateString(); // works, but is full date format
                                            const formattedDate = new Date(date?.seconds * 1000);
                                            const formattedDateString = `${formattedDate.toLocaleString('default', {
                                                month: 'long',
                                            })} ${formattedDate.getFullYear()}`;

                                            console.log("date:",date,"str:",formattedDateString);
                                            return (
                                                <div key={index}>
                                                    {date && date.seconds && (
                                                        <>
                                                            <Chip icon={<CalendarMonthIcon />} label={formattedDateString} color="info" />
                                                            {/*<Typography> {formattedDateString </Typography>*/}
                                                            {/*<DateCalendar*/}
                                                            {/*    defaultValue={dayjs('14/06/2023')}*/}
                                                            {/*    // onChange={(newValue) => console.log(newValue)} // Replace with your desired onChange handler*/}

                                                            {/*    readOnly*/}
                                                            {/*/>*/}
                                                        </>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </LocalizationProvider>

                                </Box>
                            )}
                        </Typography>
                    </Grid>
                    )}


                    <Grid item xs={12}>

                        <Typography variant="subtitle2" color="primary">
                                 What to bring:
                        </Typography>

                        <Typography variant="subtitle1">
                            {/*{eventInfoData?.toBring}*/}
                            {eventInfoData?.toBring && (
                                <Box sx={{flexDirection: 'row',
                                    display: 'flex',
                                    flexWrap: 'wrap',}}>
                                    {eventInfoData.toBring.map((item, index) => (
                                        <Chip
                                            key={index}
                                            variant="outlined"
                                            label={item.toUpperCase()}
                                            icon={
                                                item === 'water' ? (
                                                    <WaterDropTwoToneIcon />
                                                ) : item === 'a change of clothes' ? (
                                                    <CheckroomIcon />
                                                ) : item === 'closed shoes' ? (
                                                    <RollerSkatingIcon />
                                                ) : item === 'sunglasses' ? (
                                                    <TbSunglasses/>
                                                ) : item === 'talk to me about additional items' ? (
                                                    <AddIcon/>
                                                ) : (
                                                    <LuggageTwoToneIcon />
                                                )
                                            }
                                            sx={{ margin: 1,
                                                height: 'auto',
                                                '& .MuiChip-label': {
                                                    display: 'block',
                                                    whiteSpace: 'normal'},
                                                padding: 1,
                                        }}
                                        />
                                    ))}


                                </Box>
                            )}
                        </Typography>

                    </Grid>

                    <Grid item xs={12}>
                    <Typography variant="subtitle2" color="primary">
                        This Day is:
                    </Typography>
                        {/*OTHER STYLING OPTIONS*/}
                        {/*<ButtonGroup*/}
                        {/*    variant="outlined"*/}
                        {/*    sx = {{*/}
                        {/*        display: 'flex',*/}
                        {/*        flexWrap: 'wrap',*/}

                        {/*    }}*/}
                        {/*>*/}

                        {/*    {eventInfoData?.accessible ?*/}

                        {/*        <Button sx={{*/}
                        {/*            pointerEvents: 'none', // Disable pointer events*/}
                        {/*            // opacity: 0.5, // Reduce opacity to indicate disabled state*/}
                        {/*            // Add any other custom styles here*/}
                        {/*        }}>*/}
                        {/*            <AccessibleIcon/> Accessible*/}
                        {/*        </Button>*/}
                        {/*        :*/}
                        {/*        <div></div>*/}
                        {/*    }*/}

                        {/*    {eventInfoData?.suitableForChildren ?*/}
                        {/*        <Button   sx={{*/}
                        {/*            pointerEvents: 'none',*/}
                        {/*            color: "secondary.main",// Disable pointer events*/}
                        {/*            // opacity: 0.5, // Reduce opacity to indicate disabled state*/}
                        {/*            // Add any other custom styles here*/}
                        {/*        }}*/}
                        {/*        >*/}
                        {/*            <EscalatorWarningIcon/> Children Friendly </Button> :*/}
                        {/*        <div></div>*/}
                        {/*    }*/}

                        {/*    {eventInfoData?.outdoors ?*/}
                        {/*        <Button selected disabled> <ForestIcon/> Outdoors </Button> :*/}
                        {/*        <Button selected disabled> <HomeIcon/> Indoors </Button>*/}
                        {/*    }*/}




                        {/*</ButtonGroup>*/}


                        {/*<ToggleButtonGroup*/}
                        {/*    sx = {{*/}
                        {/*        display: 'flex',*/}
                        {/*        flexWrap: 'wrap',*/}

                        {/*    }}*/}
                        {/*>*/}

                        {/*    {eventInfoData?.accessible ?*/}

                        {/*        <ToggleButton disabled selected>*/}
                        {/*            <AccessibleIcon/> Accessible*/}
                        {/*        </ToggleButton>*/}
                        {/*        :*/}
                        {/*        <div></div>*/}
                        {/*    }*/}

                        {/*    {eventInfoData?.suitableForChildren ?*/}
                        {/*        <ToggleButton*/}
                        {/*            sx={{*/}
                        {/*            pointerEvents: 'none', // Disable pointer events*/}
                        {/*            // opacity: 0.5, // Reduce opacity to indicate disabled state*/}
                        {/*            // Add any other custom styles here*/}
                        {/*        }}*/}
                        {/*        >*/}
                        {/*            <EscalatorWarningIcon/> Children Friendly </ToggleButton> :*/}
                        {/*        <div></div>*/}
                        {/*    }*/}

                        {/*    {eventInfoData?.outdoors ?*/}
                        {/*        <ToggleButton selected disabled> <ForestIcon/> Outdoors </ToggleButton> :*/}
                        {/*        <ToggleButton selected disabled> <HomeIcon/> Indoors </ToggleButton>*/}
                        {/*    }*/}
                        {/*</ToggleButtonGroup>*/}
                        <Box display="flex" alignItems="center" sx={{mb: 2}}>
                            {eventInfoData?.accessible && (
                                <Typography
                                    variant="button"
                                    display="inline"
                                    gutterBottom
                                    color="primary.light"
                                    sx={{ letterSpacing: '.1rem' }}
                                >
                                    <AccessibleIcon /> Accessible
                                </Typography>
                            )}
                            {eventInfoData?.accessible && (
                                <Divider orientation="vertical" flexItem sx={{ mx: 2, color: "primary.light" }} />
                            )}



                        {eventInfoData?.outdoors ?
                            <Typography variant="button" display="inline" gutterBottom color = "primary.light"
                                        sx = {{ letterSpacing: '.1rem'}}
                            > <ForestIcon/> Outdoors </Typography> :
                            <Typography variant="button" display="inline" gutterBottom color = "primary.light"
                                        sx = {{ letterSpacing: '.1rem'}}
                            > <HomeIcon/> Indoors </Typography>
                        }

                            {/*TODO: add the physical effort*/}


                        <Typography>

                    </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </div>
        </React.Fragment>
    )
}

export default HostInfo;



