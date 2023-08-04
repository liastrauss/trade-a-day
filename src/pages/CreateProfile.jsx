import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from "../Components/logo"
import SignInDialog from '../Components/SignInDialog'
import SignInButton from '../Components/SignInButton'
import Registration1 from '../Components/Registration1BasicInfo'
import Registration2 from '../Components/Registration2MoreDetails'
import Topbar from "../Components/Topbar";
import {useNavigate} from "react-router-dom";
import {addDoc, collection} from "firebase/firestore";
import {auth, db} from "../config/firebase";
import SignInPage from "../Components/SignInPage"
import Registration1Page from "../Components/Registration1Page"
import Registration2Page from "../Components/Registration2Page"
import NewProfileCreation from ".//SignUpPage"


// An array that stores the labels for the steps of the checkout process
const steps = ['Sign In', 'Basic Info' , 'Let`s get to know you better!'];

// The main functional component that renders the entire "add event" page and forms
export default function CreateProfile(target="/") {
    //Initialize user data
    const [userData, setUserData] =
        React.useState({
            userID: '',
            userFirstName: '',
            userLastName: '',
            userEmail: '',
            userPhone: '',
            favoriteFood: [],
            pizzaToppings: [],
            hobbies: [],
            skills: [],
            superpowers: [],
        },[]);

    let navigate = useNavigate();

    const usersCollectionRef = collection(db, "users")
    const onSubmit = async () => {
        try {
            await addDoc(usersCollectionRef, {
                userID: auth?.currentUser?.uid,
                userFirstName: userData.userFirstName,
                userLastName: userData.userLastName,
                userEmail: userData.userEmail,
                userPhone: userData.userPhone,
                favoriteFood: userData.favoriteFood,
                pizzaToppings: userData.pizzaToppings,
                hobbies: userData.hobbies,
                skills: userData.skills,
                superpowers: userData.superpowers,
            });
            navigate('/');
        } catch(err) {
            console.error(err)
        }
    }




    // A function that returns the content of a specific step, based on the index passed as argument
    function getStepContent(step) {
        switch (step) {
            case 0:
                // return <SignInDialog/>;
                return <SignInPage/>;
            case 1:
                // return <Registration1 userData={userData} setUserData={setUserData}/>;
                // return <Registration1Page userData={userData} setUserData={setUserData}/>;
                return <NewProfileCreation target={"/"}/>;
            case 2:
                // return <Registration2 userData={userData} setUserData={setUserData}/>;
                return <Registration2Page userData={userData} setUserData={setUserData}/>;
            default:
                throw new Error('Unknown step');
        }
    }

    //

    // A state hook that keeps track of the currently active step
    const [activeStep, setActiveStep] = React.useState(0);
    // A function that increments the activeStep state when called
    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            onSubmit(); // Call the onSubmit function
        } else {
            setActiveStep(activeStep + 1);
        }
    };

    // A function that decrements the activeStep state when called
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    // The component's JSX code that gets returned
    return (
        <div>
            <Topbar AddDay Profile BookedEvents/>

            {/*// The container that holds the main content of the page*/}
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        {/* The title of the page */}
                        <Typography component="h1" variant="h4" align="center">Sign Up</Typography>

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
                                <Box sx={{ display: 'flex', justifyContent: 'Center'}}>
                                    <Button sx={{m:1}} variant="contained"
                                            onClick={() =>{
                                                navigate("/AddEvent");
                                            }}
                                            style={{cursor: 'pointer'}}
                                    >
                                        Host an experience!
                                    </Button>
                                    <Button sx={{m:1}} variant="contained"
                                            onClick={() =>{
                                                navigate("/");
                                            }}
                                            style={{cursor: 'pointer'}}
                                    >
                                        Find an experience!
                                    </Button>
                                </Box>
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
                                        {activeStep === steps.length - 1 ? 'Create Profile' : 'Next'}
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

