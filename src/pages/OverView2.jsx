
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
import HostInfo from "../Components/hostInfo";
import Logo from "../Components/logo";
// import DatesPicker from "../Components/datesPicker";
import {Avatar, Grid, ListItem, ListItemAvatar} from "@mui/material"
import CardContent from "@mui/material/CardContent";
import {useState} from "react";
import Topbar from "../Components/Topbar";


// An array that stores the labels for the steps of the checkout process
// for dialog:
// FOR DIALOG CHOICE:
import {DialogActions, DialogContent, DialogTitle, Divider, Dialog} from "@mui/material";
import {ControlledRadioButtonsGroup} from "../Components/datesPicker";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
// function SimpleDialog(props) {
//     const { onClose, selectedValue, open } = props;
//
//     const handleClose = () => {
//         onClose(selectedValue);
//     };
//
//     const handleListItemClick = (value) => {
//         onClose(value);
//     };
//     return (
//         <Dialog onClose={handleClose} open={open}>
//             <DialogTitle>Set backup account</DialogTitle>
//             <List sx={{ pt: 0 }}>
//                 {emails.map((email) => (
//                     <ListItem disableGutters>
//                         <ListItemButton onClick={() => handleListItemClick(email)} key={email}>
//                             <ListItemAvatar>
//                                 <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
//                                     <PersonIcon />
//                                 </Avatar>
//                             </ListItemAvatar>
//                             <ListItemText primary={email} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))}
//
//                 <ListItem disableGutters>
//                     <ListItemButton
//                         autoFocus
//                         onClick={() => handleListItemClick('addAccount')}
//                     >
//                         <ListItemAvatar>
//                             <Avatar>
//                                 <AddIcon />
//                             </Avatar>
//                         </ListItemAvatar>
//                         <ListItemText primary="Add account" />
//                     </ListItemButton>
//                 </ListItem>
//             </List>
//         </Dialog>
//     );
// }


export function DialogWithCard() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleOpen}>
                Book
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Book your Day</DialogTitle>
                <DialogContent>
                    <ControlledRadioButtonsGroup/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} variant="contained" autoFocus>
                        Book
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


            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>

                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing = {5}
                >

                    <Grid item xs={12}>
                        <HostInfo/>

                    </Grid>
                    {/*<ControlledRadioButtonsGroup></ControlledRadioButtonsGroup>*/}
                    <Grid item xs={12}>
                        {/*<DatesPicker/>*/}
                        <DialogWithCard/>
                    </Grid>
                </Grid>
                {/*<React.Fragment>*/}


                {/*    /!*<Button*!/*/}
                {/*    /!*    variant="outlined"*!/*/}
                {/*    /!*    onClick={() => {*!/*/}
                {/*    /!*        navigate("/");*!/*/}
                {/*    /!*    }}*!/*/}

                {/*    /!*    sx={{display: "flex", justifyContent: 'flex end'}}*!/*/}
                {/*    /!*> Book*!/*/}
                {/*    /!*</Button>*!/*/}
                {/*</React.Fragment>*/}
            </Container>
        </div>
    );
}

