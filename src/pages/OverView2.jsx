
// import {useTheme} from "@mui/material/styles";
// import {useParams} from "react-router-dom";
// import {cardData} from "../data/card-data";
// import React from "react";
// import {Grid, Typography} from "@mui/material";
// import {Mapp, StandardImageList} from "../Components/view2";
//

import {useNavigate} from "react-router-dom"

// GITHUB CODE
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider, useTheme} from '@mui/material/styles';
import EventForm from "../Components/EventForm";
import ItemsForm from "../Components/ItemsForm";
import HostInfo from "../Components/hostInfo";
import Logo from "../Components/logo";
import ControlledRadioButtonsGroup from "../Components/datesPicker";
import {Divider} from "@mui/material";
import DatesPicker from "../Components/datesPicker";
import {Grid} from "@mui/material"


// An array that stores the labels for the steps of the checkout process



// A function that returns the content of a specific step, based on the index passed as argument

export default function OverView2() {

    let navigate = useNavigate();

    // The component's JSX code that gets returned
    return (
        <div>
            {/* The top app bar of the checkout page*/}
            <AppBar
                position="sticky"
                color="transparent"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar>
                    {/* The title of the app in the app bar */}
                    {/*<Typography variant="h6" noWrap color = "primary">*/}
                    {/*    Trade a Day*/}
                    {/*</Typography>*/}
                    <Logo sx={{}}></Logo>
                </Toolbar>
            </AppBar>

            <Container component="main" maxWidth="md">

                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing = {5}
                >

                {/* The title of the  page */}

                    <Grid item xs={12}>
                        <HostInfo/>
                    </Grid>



                        {/*<ControlledRadioButtonsGroup></ControlledRadioButtonsGroup>*/}
                    <Grid item xs={12}>
                        <DatesPicker/>
                    </Grid>
                </Grid>
                <React.Fragment>

                    {/*<Button*/}
                    {/*    variant="outlined"*/}
                    {/*    onClick={() => {*/}
                    {/*        navigate("/");*/}
                    {/*    }}*/}

                    {/*    sx={{display: "flex", justifyContent: 'flex end'}}*/}
                    {/*> Book*/}
                    {/*</Button>*/}
                </React.Fragment>
            </Container>
        </div>
    );
}

