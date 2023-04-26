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
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Importing three form components that will be rendered inside the Checkout component
import EventForm from "../Components/EventForm";
import ItemsForm from "../Components/ItemsForm";
import PickDates from "../Components/PickDates";


// An array that stores the labels for the steps of the checkout process
const steps = ['Who are you?', 'What should they bring?', '3'];

// A function that returns the content of a specific step, based on the index passed as argument
function getStepContent(step) {
    switch (step) {
        case 0:
            return <EventForm/>;
        case 1:
            return <ItemsForm />;
        case 2:
            return <PickDates />;
        default:
            throw new Error('Unknown step');
    }
}

// Creates a new MUI theme
const theme = createTheme();
// The main functional component that renders the entire checkout page
export default function Checkout() {
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
        <ThemeProvider theme={theme}>
            <CssBaseline />

            {/* The top app bar of the checkout page */}
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar>
                    {/* The title of the app in the app bar */}
                    <Typography variant="h6" color="inherit" noWrap>
                        Trade a Day
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* The container that holds the main content of the page */}
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    {/* The title of the checkout page */}
                    <Typography component="h1" variant="h4" align="center">
                        Adding Your Day
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
                                 We have emailed your confirmation,
                                and will send you an update when people sign up.
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
            </Container>
        </ThemeProvider>
    );
}

