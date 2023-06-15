import React, {useEffect, useState} from 'react';
import {Grid, ToggleButton, Typography} from "@mui/material";
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
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';


function HostInfo() {
    const theme = useTheme();
    const { index } = useParams(); // Access the id parameter from the URL

    const [eventInfoData, setEventInfoData] = useState("");

    const [event, setEvent] = useState();

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
                        <Typography variant="subtitle1">
                            {eventInfoData?.location}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>

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
                                                ) : item === 'comfortable clothes' ? (
                                                    <CheckroomIcon />
                                                ) : item === 'closed shoes' ? (
                                                    <RollerSkatingIcon />
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

                        <ButtonGroup
                            variant="outlined"
                            sx = {{
                                display: 'flex',
                                flexWrap: 'wrap',

                            }}
                        >

                            {eventInfoData?.accessible ?

                                <Button sx={{
                                    pointerEvents: 'none', // Disable pointer events
                                    // opacity: 0.5, // Reduce opacity to indicate disabled state
                                    // Add any other custom styles here
                                }}>
                                    <AccessibleIcon/> Accessible
                                </Button>
                                :
                                <div></div>
                            }

                            {eventInfoData?.suitableForChildren ?
                                <Button   sx={{
                                    pointerEvents: 'none',
                                    color: "secondary.main",// Disable pointer events
                                    // opacity: 0.5, // Reduce opacity to indicate disabled state
                                    // Add any other custom styles here
                                }}
                                >
                                    <EscalatorWarningIcon/> Children Friendly </Button> :
                                <div></div>
                            }

                            {eventInfoData?.outdoors ?
                                <Button selected disabled> <ForestIcon/> Outdoors </Button> :
                                <Button selected disabled> <HomeIcon/> Indoors </Button>
                            }




                        </ButtonGroup>


                        <ToggleButtonGroup
                            sx = {{
                                display: 'flex',
                                flexWrap: 'wrap',

                            }}
                        >

                            {eventInfoData?.accessible ?

                                <ToggleButton disabled selected>
                                    <AccessibleIcon/> Accessible
                                </ToggleButton>
                                :
                                <div></div>
                            }

                            {eventInfoData?.suitableForChildren ?
                                <ToggleButton
                                    sx={{
                                    pointerEvents: 'none', // Disable pointer events
                                    // opacity: 0.5, // Reduce opacity to indicate disabled state
                                    // Add any other custom styles here
                                }}
                                >
                                    <EscalatorWarningIcon/> Children Friendly </ToggleButton> :
                                <div></div>
                            }

                            {eventInfoData?.outdoors ?
                                <ToggleButton selected disabled> <ForestIcon/> Outdoors </ToggleButton> :
                                <ToggleButton selected disabled> <HomeIcon/> Indoors </ToggleButton>
                            }




                        </ToggleButtonGroup>

                        {eventInfoData?.accessible ?

                                <Typography variant="button" display="inline" gutterBottom>
                                    <AccessibleIcon/> Accessible |
                                </Typography>
                                  :
                            <div></div>
                        }

                        {eventInfoData?.suitableForChildren ?
                            <Typography variant="button" display="inline" gutterBottom color = "primary.light"
                            > <EscalatorWarningIcon/> Children Friendly |</Typography> :
                            <div></div>
                        }

                        {eventInfoData?.outdoors ?
                            <Typography variant="button" display="inline" gutterBottom> <ForestIcon/> Outdoors </Typography> :
                            <Typography variant="button" display="inline" gutterBottom> <HomeIcon/> Indoors </Typography>
                        }
                        {/*TODO: add the physical effort*/}


                        <Typography>

                    </Typography>
                    </Grid>

                </Grid>
            </div>
        </React.Fragment>
    )
}

export default HostInfo;



