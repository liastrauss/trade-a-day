import {useNavigate, useParams} from "react-router-dom"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
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
import HostInfo from "../Components/hostInfo";
import Logo from "../Components/logo";
// import DatesPicker from "../Components/datesPicker";
import {Avatar, Grid, ListItem, ListItemAvatar} from "@mui/material"
import CardContent from "@mui/material/CardContent";
import {useEffect, useState} from "react";
import Topbar from "../Components/Topbar";
import { auth, getAuth } from "../config/firebase"

// An array that stores the labels for the steps of the checkout process
// for dialog:
// FOR DIALOG CHOICE:
import {DialogActions, DialogContent, DialogTitle, Divider, Dialog} from "@mui/material";
import {ControlledRadioButtonsGroup} from "../Components/datesPicker";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import {doc, getDoc} from "firebase/firestore";
import { db } from "../config/firebase";



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

    useEffect(() => {
        async function fetchEventInfoData() {
            try {
                const eventInfoRef = doc(db, "DataBase1", index);
                const eventInfoSnapshot = await getDoc(eventInfoRef);
                const data = eventInfoSnapshot.data();
                setEventInfoData(data);

                if (data) {
                    alert("1")
                    const usersRef = db.collection("users").where("hostID", "==", eventInfoData?.hostID);
                    alert("2") //TODO: THIS IS WHERE IT GETS STUCK :(
                    const usersSnapshot = await usersRef.get();
                    alert("3")
                    const contactInfo = usersSnapshot.docs[0]?.data()?.email;
                    alert("4")
                    alert(contactInfo)
                    setContactInfo(contactInfo);
                    alert("5")
                }
            } catch (error) {
                console.error("Error retrieving event info:", error);
            }
        }
        fetchEventInfoData();
    }, [index]);



    return (
        <div>
            <Button variant="outlined" onClick={handleOpen}>
                <MailOutlineIcon/>   Contact {eventInfoData?.hostName}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle> Connect </DialogTitle>
                <DialogContent>
                    {/*<ControlledRadioButtonsGroup/>*/}
                    Write a message to {eventInfoData?.hostName}:
                    {eventInfoData?.email} {/*TODO: just a plaster until everything works*/}
                    {contactInfo}
                </DialogContent>
                <DialogActions>
                    {/*<Button onClick={handleClose}>Cancel</Button>*/}
                    <Button onClick={handleClose} variant="contained" autoFocus>
                        Done
                    </Button>
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
                }}
            >



            <Container component="main" maxWidth="md"
                       sx={{ mb: 4,
            }}
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
                    <Paper sx={{ ml:4, mr:4, mt:10, p: 2, display: 'flex', flexDirection: 'column' }}>
                    {/*// TODO - scrollbar is weird because of the boxes and the papers. if topbar will be sticky this can be solved*/}
                    {/*The info itself */}
                    <Grid item xs={12}>
                        <HostInfo/>
                    </Grid>
                    {/*<ControlledRadioButtonsGroup></ControlledRadioButtonsGroup>*/}
                    <Grid item xs={12}>
                        {/*<DatesPicker/>*/}
                        <DialogWithCard/>
                    </Grid>
                    </Paper>

                </Grid>
            </Container>
            </Box>
        </div>
    );
}

