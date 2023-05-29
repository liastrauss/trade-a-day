// import React from 'react';
// import EventForm from "../Components/EventForm";
//
// function AddEvent(){
//     return(
//         <div>
//             <h1>this is the add event PAGE!!!</h1>
//             <EventForm/>
//
//         </div>
//     );
// }
//
//
// export default AddEvent;
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
import Logo from "../Components/logo"

// Importing three form components that will be rendered inside the  component
import EventForm from "../Components/EventForm";
import ItemsForm from "../Components/ItemsForm";
import DaySchedule from "../Components/DaySchedule";
import SearchSection from "../Components/search section";
import SearchBox from "../Components/searchBox";
import {Avatar, Divider} from "@mui/material";
import Topbar from "../Components/Topbar";


// An array that stores the labels for the steps of the checkout process
const steps = ['A bit about yourself', 'Technicalities', 'What to bring'];

// A function that returns the content of a specific step, based on the index passed as argument
function getStepContent(step) {
    switch (step) {
        case 0:
            return <EventForm/>;
        case 1:
            return < DaySchedule/>;
        case 2:
            return <ItemsForm />;
        default:
            throw new Error('Unknown step');
    }
}

// The main functional component that renders the entire "add event" page and forms
export default function AddEvent() {
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

    const theme=useTheme()
    // The component's JSX code that gets returned
    return (
        <div>
             {/*<CssBaseline />*/}
             {/* The top app bar of the checkout page*/}
            {/*<AppBar*/}
            {/*    position="sticky"*/}
            {/*    elevation={0}*/}
            {/*    sx={{*/}
            {/*        position: 'sticky',*/}
            {/*        borderBottom: (t) => `1px solid ${t.palette.divider}`,*/}
            {/*        color: theme.palette.primary.light,*/}
            {/*    }}*/}
            {/*>*/}
            {/*     <Toolbar>*/}
            {/*         /!* The title of the app in the app bar *!/*/}
            {/*         /!*<Typography variant="h6" noWrap color = "primary">*!/*/}
            {/*         /!*    Trade a Day*!/*/}
            {/*         /!*</Typography>*!/*/}
            {/*         <Logo sx = {{}}></Logo>*/}
            {/*     </Toolbar>*/}
            {/*</AppBar>*/}
            <Topbar BookedEvents/>


             {/*// The container that holds the main content of the page*/}
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        {/* The title of the checkout page */}
                        <Typography component="h1" variant="h4" align="center">
                            Trade Your Day
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
                                    Thank you for joining the Trade a Day community!
                                </Typography>
                                <Typography variant="subtitle1">
                                     A confirmation has been emailed to you,
                                    and we will let you know about any bookings.
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
                                        {activeStep === steps.length - 1 ? 'Add your day' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </Paper>
                </Paper>
            </Container>
        </div>
    );
}

