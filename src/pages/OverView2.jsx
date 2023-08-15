import {useNavigate, useParams} from "react-router-dom"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// GITHUB CODE
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import HostInfo from "../Components/hostInfo";
import {useEffect, useState} from "react";
import Topbar from "../Components/Topbar";
import {auth, getAuth} from "../config/firebase"
import {useLocation} from 'react-router-dom';

// An array that stores the labels for the steps of the checkout process
// for dialog:
// FOR DIALOG CHOICE:
import {DialogActions, DialogContent, DialogTitle, Dialog} from "@mui/material";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../config/firebase";
import HostHobbies from "./hostHobbies";
import DialogContentText from "@mui/material/DialogContentText";
import Grid from "@mui/material/Grid";

export function DialogWithCard() {
    const [open, setOpen] = useState(false);
    const [contactInfo, setContactInfo] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {index} = useParams(); // Access the id parameter from the URL

    const [eventInfoData, setEventInfoData] = useState();

    //Ohad's Popup
    const [openLogin, setOpenLogin] = useState(false);
    const handleOpenLogin = () => {
        setOpenLogin(true);
    };
    const handleCloseLogin = () => {
        setOpenLogin(false);
    };
    const navigate = useNavigate();
    const location = useLocation();
    const currentURL = location.pathname;


    useEffect(() => {
        async function fetchEventInfoData() {
            try {
                const eventInfoRef = doc(db, "DataBase1", index);
                const eventInfoSnapshot = await getDoc(eventInfoRef);
                const data = eventInfoSnapshot.data();
                setEventInfoData(data);
            } catch (error) {
                console.error("Error retrieving event info:", error);
            }
        }

        fetchEventInfoData();
    }, [index]);


    return (
        <div>
            <Button
                sx={{
                    borderRadius: "10px",
                    border: "2px solid transparent",
                    // nice hover effect from landing, but maybe not needed
                    "&:hover": {
                        backgroundColor: (theme) => theme.palette.primary.contrastText,
                        color: (theme) => theme.palette.primary.main,
                        borderColor: (theme) => theme.palette.primary.main,
                    },

                }}
                disableElevation
                variant="contained"
                onClick={auth?.currentUser ? handleOpen : handleOpenLogin}
                startIcon={<MailOutlineIcon/>}>
                Contact {eventInfoData?.hostName}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle> Get to know {eventInfoData?.hostName}!</DialogTitle>
                <DialogContent>
                    <HostHobbies hostID={eventInfoData?.hostID}/>
                </DialogContent>
                <DialogActions>
                    {/*<Button onClick={handleClose}>Cancel</Button>*/}
                    <Button onClick={handleClose} variant="contained" autoFocus>
                        Done
                    </Button>
                </DialogActions>
            </Dialog>

            {/*Ohad's Popup*/}
            <Dialog open={openLogin} onClose={handleCloseLogin}>
                <DialogTitle>Log In for More</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Hi there! At Trade a Day, we prioritize the privacy and trust of our community. Join us by
                        signing in!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button sx={{
                        borderRadius: "10px", border: "2px solid transparent", "&:hover": {
                            backgroundColor: (theme) => theme.palette.primary.contrastText,
                            color: (theme) => theme.palette.primary.main,
                            borderColor: (theme) => theme.palette.primary.main,
                        },
                    }} disableElevation onClick={() => {
                        navigate("/Login?redirect=" + currentURL);
                    }} variant="contained" autoFocus>Log In</Button>
                    <Button sx={{
                        borderRadius: "10px", border: "2px solid transparent", "&:hover": {
                            backgroundColor: (theme) => theme.palette.primary.contrastText,
                            color: (theme) => theme.palette.primary.main,
                            borderColor: (theme) => theme.palette.primary.main,
                        },
                    }} disableElevation onClick={handleCloseLogin} variant="contained">Continue Browsing</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}


// A function that returns the content of a specific step, based on the index passed as argument

export default function OverView2() {
    let navigate = useNavigate();

    // The component's JSX code that gets returned
    return (
        <div>
            {/* The top app bar of the checkout page*/}
            {/*TODO: add profile*/}
            <Topbar AddDay/>
            {/*The entire page */}
            <Box
                component="main"
                alignContent="center"

                // color for the whole page:
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                    display: 'flex', // Add this to use Flexbox layout
                    flexDirection: 'column', // Stack the components vertically
                    alignItems: "center", // Center the content horizontally
                    padding: '20px', // Add some space around the content


                }}
            >

                <Container component="main" maxWidth="md" sx={{mb: 4}}>
                    {/* Use Grid container for responsive layout */}

                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={5}

                        sx={{

                            // Add styles for mobile view
                            '@media screen and (max-width: 600px)': {
                                flexDirection: 'column',
                                alignItems: 'center',
                            },
                        }}

                    >

                        <Paper sx={{
                            ml: 4, mr: 4, mt: 10, p: 2, display: 'flex', flexDirection: 'column', position: 'relative',
                            width: '100%', textAlign: 'center', // Center the text horizontally
                            wordWrap: 'break-word', // Allow text to wrap within the container // Adjust the width for mobile view
                            // Adjust the width for mobile view
                            '@media screen and (max-width: 600px)': {
                                width: '90%', // Example: reduce width to 90% on smaller screens
                            },
                        }}>
                            {/*The info itself */}
                            <Grid item xs={12}>
                                <HostInfo/>
                            </Grid>
                            <Box sx={{flexGrow: 1}}/>
                            <Grid item xs={12}
                                  sx={{alignSelf: 'flex-end'}}>
                                <DialogWithCard/>
                            </Grid>
                        </Paper>

                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

