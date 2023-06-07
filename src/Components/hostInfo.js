import React, {useEffect, useState} from 'react';
import {Grid, Typography} from "@mui/material";
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
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";


function HostInfo() {
    const theme = useTheme();
    const { index } = useParams(); // Access the id parameter from the URL

    const [eventInfoData, setEventInfoData] = useState();

    useEffect (() => {
        async function fetchEventInfoData(){
            try {
                const eventInfoRef = doc(db, "DataBase1", index)
                const eventInfoSnapshot = await getDoc(eventInfoRef)
                const data = eventInfoSnapshot.data()
                setEventInfoData(data);
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

                    {/*<StandardImageList/>*/}

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

                </Grid>
            </div>
        </React.Fragment>
    )
}

export default HostInfo;



