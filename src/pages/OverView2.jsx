import {useNavigate, useParams} from "react-router-dom"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// GITHUB CODE
import * as React from 'react';

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
import HostInfo from "../Components/hostInfo";
import Logo from "../Components/logo";
// import DatesPicker from "../Components/datesPicker";
import {Avatar, Grid, ListItem, ListItemAvatar} from "@mui/material"
import CardContent from "@mui/material/CardContent";
import {useEffect, useState} from "react";
import Topbar from "../Components/Topbar";
import { auth, getAuth } from "../config/firebase"
import NewProfileCreation from "../pages/SignUpPage";
import LoginPage from "./LoginPage";

// An array that stores the labels for the steps of the checkout process
// for dialog:
// FOR DIALOG CHOICE:
import {DialogActions, DialogContent, DialogTitle, Divider, Dialog} from "@mui/material";
import {ControlledRadioButtonsGroup} from "../Components/datesPicker";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import {doc, getDoc} from "firebase/firestore";
import { db } from "../config/firebase";
import HostHobbies from "./hostHobbies";
import DialogContentText from "@mui/material/DialogContentText";

export function DialogWithCard() {
    const [open, setOpen] = useState(false);
    const [contactInfo, setContactInfo] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { index } = useParams(); // Access the id parameter from the URL

    const [eventInfoData, setEventInfoData] = useState();

    //Ohad's Popup
    const [openLogin, setOpenLogin] = useState(false);
    const handleOpenLogin = () => {setOpenLogin(true);};
    const handleCloseLogin = () => {setOpenLogin(false);};
    const navigate = useNavigate();


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
                    startIcon={ <MailOutlineIcon/>} >
                  Contact {eventInfoData?.hostName}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle> Get to know {eventInfoData?.hostName}!</DialogTitle>
                <DialogContent>
                    <HostHobbies hostID={eventInfoData?.hostID} />
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
                <DialogTitle>Login Required!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You must be logged in to do that action!
                        Please log in or continue browsing
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=> {navigate("/Login");}} variant="contained" autoFocus>Log In</Button>
                    <Button onClick={handleCloseLogin} variant="contained">Continue Browsing</Button>
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
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                    display: 'flex', // Add this to use Flexbox layout
                    flexDirection: 'column', // Stack the components vertically

                }}
            >

            <Container component="main" maxWidth="md"
                       sx={{ mb: 4,}}
            >

                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing = {5}

                sx={{
                        // backgroundColor: '#F1F1', // Replace with your desired color
                    }}

                >
                    <Paper sx={{ ml:4, mr:4, mt:10, p: 2, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                    {/*// TODO - scrollbar is weird because of the boxes and the papers. if topbar will be sticky this can be solved*/}
                    {/*The info itself */}
                    <Grid item xs={12}>
                        <HostInfo/>
                    </Grid>
                        <Box sx={{ flexGrow: 1 }} />
                        <Grid item xs={12}
                          sx={{ alignSelf: 'flex-end' }}>
                        <DialogWithCard/>
                    </Grid>
                    </Paper>

                </Grid>
            </Container>
            </Box>
        </div>
    );
}

