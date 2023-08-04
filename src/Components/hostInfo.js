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
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import ForestIcon from '@mui/icons-material/Forest';
import HomeIcon from '@mui/icons-material/Home';
import AccessibleIcon from '@mui/icons-material/Accessible';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import {DateCalendar, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {TbSunglasses} from "react-icons/tb";
import AddIcon from "@mui/icons-material/Add";
import Avatar from '@mui/material/Avatar';
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";




function HostInfo() {
    const theme = useTheme();
    const { index } = useParams(); // Access the id parameter from the URL

    const [eventInfoData, setEventInfoData] = useState("");

    const [event, setEvent] = useState();
    // for showing dates
    const isDatesArrayValid = eventInfoData?.dates?.every(date => date !== null);

    // for new style of profiles

    const StyledBasicProfile = styled(Box)({
        display: 'flex',
        alignItems: 'flex-start',
    });
    // const StyledBasicProfileInfo = styled(Box)({
    //     marginRight: 12,
    // });

    const StyledBasicProfileInfo = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
    });


    const StyledBasicProfileAvatar = styled(Avatar)(({ theme }) => ({
        borderRadius: 8,
        backgroundColor: theme.palette.primary.light,
        marginRight: '12px', // Adjust the margin as needed
    }));

    const StyledBasicProfileOverline = styled(Typography)({
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: '#8D9CAD',
    });
    const StyledBasicProfileName = styled(Typography)({
        fontSize: 14,
        fontWeight: 500,
        color: '#495869',
    });

    // for physical effort:
    const labelsPhysical = {
        0.5: 'Very easy',
        1: 'Very easy',
        1.5: 'Easy',
        2: 'Easy',
        2.5: 'Moderate',
        3: 'Moderate',
        3.5: 'Somewhat difficult',
        4: 'Difficult',
        4.5: 'Very difficult',
        5: 'Extremely difficult',
    };




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
                        <Typography variant="subtitle1" color="primary.light"
                                    sx ={{
                                        textTransform: 'uppercase',
                                        letterSpacing: 1,
                                        // color: '#8D9CAD',
                                    }}
                        >
                            Gallery
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '20px', // Adjust the gap between the items
                                justifyContent: 'space-between', // Distribute items evenly along the main axis
                                maxWidth: '90%', // Limit the width to the available space

                            }}>
                            <StandardImageList/>

                        </Box>
                    </Grid>



                    {/*New Design*/}



                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '20px', // Adjust the gap between the items
                            justifyContent: 'space-between', // Distribute items evenly along the main axis
                            alignItems: 'center', // Horizontally center the items
                            maxWidth: '90%', // Limit the width to the available space

                        }}
                    >
                    {/*for location*/}
                        <StyledBasicProfile sx={{ flex: 1 }}>
                        <StyledBasicProfileAvatar> <LocationOnRoundedIcon /></StyledBasicProfileAvatar>
                            <StyledBasicProfileInfo>
                                <StyledBasicProfileOverline>Location</StyledBasicProfileOverline>
                                <StyledBasicProfileName>{eventInfoData?.location}</StyledBasicProfileName>
                            </StyledBasicProfileInfo>
                    </StyledBasicProfile>

                    {/*dates*/}

                    {/*accessible*/}
                    {eventInfoData?.accessible && (
                        <StyledBasicProfile sx={{ flex: 1 }}>
                            <StyledBasicProfileAvatar><AccessibleIcon /></StyledBasicProfileAvatar>
                            <StyledBasicProfileInfo>
                                <StyledBasicProfileOverline>Suitability</StyledBasicProfileOverline>
                                <StyledBasicProfileName>Accessible</StyledBasicProfileName>
                            </StyledBasicProfileInfo>
                        </StyledBasicProfile>
                    )}

                    {eventInfoData?.outdoors ?
                        <StyledBasicProfile sx={{ flex: '0 0 calc(50% - 10px)' }}>
                            <StyledBasicProfileAvatar><ForestIcon/> </StyledBasicProfileAvatar>
                            <StyledBasicProfileInfo>
                                <StyledBasicProfileOverline>setting</StyledBasicProfileOverline>
                                <StyledBasicProfileName>Outdoors</StyledBasicProfileName>
                            </StyledBasicProfileInfo>
                        </StyledBasicProfile>
                         :
                        <StyledBasicProfile sx={{ flex: 1}}>
                            <StyledBasicProfileAvatar><HomeIcon/> </StyledBasicProfileAvatar>
                            <StyledBasicProfileInfo>
                                <StyledBasicProfileOverline>Setting</StyledBasicProfileOverline>
                                <StyledBasicProfileName>Indoors</StyledBasicProfileName>
                            </StyledBasicProfileInfo>
                        </StyledBasicProfile>
                    }

                    {/*for physical efforr*/}
                        <StyledBasicProfile sx={{ flex: 1 }}>
                        <StyledBasicProfileAvatar>
                            {<DirectionsRunIcon />}
                        </StyledBasicProfileAvatar>
                        <StyledBasicProfileInfo>
                            <StyledBasicProfileOverline>Physical Effort</StyledBasicProfileOverline>
                            {/*maybe do the number of people*/}
                            <StyledBasicProfileName>{labelsPhysical[eventInfoData?.physicalEffort]}</StyledBasicProfileName>
                        </StyledBasicProfileInfo>
                    </StyledBasicProfile>


                        {eventInfoData?.dates && (
                            <Box sx={{
                                flexDirection: 'row',
                                display: 'flex',
                                flexWrap: 'wrap',
                            }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <StyledBasicProfile sx={{ flex: 1 }}>
                                        <StyledBasicProfileAvatar><CalendarMonthIcon /></StyledBasicProfileAvatar>
                                        <StyledBasicProfileInfo>
                                            <StyledBasicProfileOverline>available dates</StyledBasicProfileOverline>

                                            {eventInfoData.dates.map((date, index) => {
                                        const formattedDate = new Date(date?.seconds * 1000);
                                        const formattedDateString = `${formattedDate.toLocaleString('default', {
                                            month: 'long',
                                        })} ${formattedDate.getFullYear()}`;
                                        console.log("date:",date,"str:",formattedDateString);
                                        return (
                                            <div key={index} >
                                                {date && date.seconds && (
                                                            <StyledBasicProfileName>{formattedDateString}</StyledBasicProfileName>
                                                )}
                                            </div>
                                        );
                                    })}
                                        </StyledBasicProfileInfo>
                                    </StyledBasicProfile>

                                </LocalizationProvider>
                            </Box>
                        )}
                    </Box>

                    {/*what to bring*/}
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" color="primary.light"
                        sx ={{
                            textTransform: 'uppercase',
                            letterSpacing: 1,
                            // color: '#8D9CAD',
                        }}
                        >
                                 What to bring
                        </Typography>

                        <Typography variant="subtitle1">
                            {eventInfoData?.toBring && (
                                <Box sx={{flexDirection: 'row',
                                    display: 'flex',
                                    flexWrap: 'wrap',}}>
                                    {eventInfoData.toBring.map((item, index) => (
                                        <Chip
                                            key={index}
                                            variant="outlined"
                                            color="primary"
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


                </Grid>
            </div>
        </React.Fragment>
    )
}

export default HostInfo;



