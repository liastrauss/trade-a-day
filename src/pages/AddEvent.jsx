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
import Topbar from "../Components/Topbar";

import { db } from "../config/firebase";
import {addDoc, collection} from 'firebase/firestore';

// An array that stores the labels for the steps of the checkout process
const steps = ['A bit about yourself', 'Technicalities', 'What to bring'];


// The main functional component that renders the entire "add event" page and forms
export default function AddEvent() {

    // the data from the form
    const [formData, setFormData] =
        React.useState({
        hostID: '',
        hostName: '',
        jobTitle: '',
        dayDescription: '',
        dates: [null],
        location: '',
        accessible: true,
        suitableForChildren: true,
        toBring: [],
        gallery: [],
        physicalEffort: 1, // init the physical effort
        outdoors: true,
    },[]);

    // extracting the dates to a convinent array format
    const datesArray = formData.dates; //  formData.dates is the array of dates you want to extract
    const extractedDates = datesArray.map((date) => date && date.$d); // Extract the $d property from each date



    const dbRef = collection(db,"DataBase1");
    const onSubmit = async () => {
        try {
        await addDoc(dbRef, {
            hostID: '',
            hostName: '',
            jobTitle: formData.jobTitle,
            dayDescription: formData.dayDescription,
            dates: extractedDates,
            location: formData.location,
            accessible: formData.accessible,
            suitableForChildren: formData.suitableForChildren,
            toBring: formData.toBring, //doesn't matter the init
            // gallery: [],//TODO: when the photo is ready
            physicalEffort: formData.physicalEffort, // init the physical effort
            outdoors: formData.outdoors,

        });
        } catch(err) {
            console.error(err)
        }
    }
    console.log(formData)


    // A state hook that keeps track of the currently active step:
    const [activeStep, setActiveStep] = React.useState(0);
    // A function that increments the activeStep state when called
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };
    // A function that decrements the activeStep state when called
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };


    function getStepContent(step) {
        switch (step) {
            case 0:
                return <EventForm formData={formData} setFormData={setFormData} />;
            case 1:
                return < DaySchedule formData={formData} setFormData={setFormData}/>;
            case 2:
                return <ItemsForm formData={formData} setFormData={setFormData}/>;
            default:
                throw new Error('Unknown step');
        }
    }

    const theme=useTheme()
    const acc = formData.suitableForChildren


    // The component's JSX code that gets returned
    return (
        <div>
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
                                <Button onClick = {onSubmit}> submit </Button>
                                <div>
                                    <Typography>review your details:</Typography>
                                    {/*{formData.dates.map((item) => (*/}
                                    {/*    <Typography key={item}>{item}</Typography>*/}
                                    {/*))}*/}
                                    {/*<Typography>{formData.dates[0].$d}</Typography>*/}


                                </div>
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
                                        onClick={handleNext} // Call onSubmit only when all steps are finished
                                        // onClick={activeStep === steps.length - 1 ? onSubmit : handleNext} // Call onSubmit only when all steps are finished
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

