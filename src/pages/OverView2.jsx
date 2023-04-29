// import {useTheme} from "@mui/material/styles";
// import {useParams} from "react-router-dom";
// import {cardData} from "../data/card-data";
// import React from "react";
// import {Grid, Typography} from "@mui/material";
// import {Mapp, StandardImageList} from "../Components/view2";
//



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
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import EventForm from "../Components/EventForm";
import ItemsForm from "../Components/ItemsForm";
import PickDates from "../Components/PickDates";
import HostInfo from "../Components/hostInfo";
import Logo from "../Components/logo";
import ControlledRadioButtonsGroup from "../Components/datesPicker";


// An array that stores the labels for the steps of the checkout process
const steps = ['about the place', 'available dates'];



// A function that returns the content of a specific step, based on the index passed as argument
function getStepContent(step) {
    switch (step) {
        case 0:
            return <HostInfo/>
        case 1:
            return <ControlledRadioButtonsGroup/>;
        default:
            throw new Error('Unknown step');
    }
}



export default function OverView2() {
    // A state hook that keeps track of the currently active step
    const [activeStep, setActiveStep] = React.useState(0);
    // A function that increments the activeStep state when called
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };
    // A function that decrements the activeStep state when called
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

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
                <Logo sx = {{}}></Logo>
            </Toolbar>
        </AppBar>

        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                {/* The title of the  page */}

                <Typography component="h1" variant="h4" align="center">
                    Trade A Day
                </Typography>

                {/* The stepper component that displays the current step of the checkout process */}
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                            we booked the occasion for you!
                        </Typography>
                        <Typography variant="subtitle1">
                            We have emailed you the details of the occasion.
                        </Typography>
                        <Typography variant="subtitle1">
                            In addition, you can see it on our website also under "BOOKED EXPERIENCES".
                        </Typography>

                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {getStepContent(activeStep)}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {activeStep !== 0 && (
                                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                    Back
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 3, ml: 1 }}
                            >
                                {activeStep === steps.length - 1 ? 'Book' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Paper>
        </Container>
        </div>
    );
}

