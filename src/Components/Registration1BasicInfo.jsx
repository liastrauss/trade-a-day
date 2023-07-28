import * as React from 'react';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {FormControl, Grid, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import Registration2 from './Registration2MoreDetails';
import {db} from "../config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";
import {useState} from "react";
import {auth} from "../config/firebase";
import Box from '@mui/material/Box';

export default function Registration1({ userData, setUserData }) {
    //this State defines whether the popup should open (true) or close (false)
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
    };


    const usersCollectionRef = collection(db, "users")

    // const[newFirstName, setNewFirstName] = useState("");
    // const[newLastName, setNewLastName] = useState("");
    // const[newEmail, setNewEmail] = useState("");
    // const[newPhone, setNewPhone] = useState("");

    const onSubmitR1 = async () => {
        // await addDoc(usersCollectionRef, {
        //     userID: auth.currentUser.uid,
        //     firstName: userData.userFirstName,
        //     lastName: userData.userLastName,
        //     email: userData.userEmail,
        //     phone: userData.userPhone,
        // });
        handleClose();
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    Registration
                </DialogTitle>

                <DialogContent dividers="true">
                    <DialogContentText>
                        Let's finish setting up your account!
                    </DialogContentText>
                    <Grid container spacing={3}   justifyContent="flex-start" alignContent = "center">
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                label="First Name"
                                defaultValue={auth?.currentUser?.displayName}
                                autoFocus
                                onChange={(e) => {
                                    // setNewFirstName(e.target.value);
                                        setUserData({
                                            ...userData,
                                            userFirstName: e.target.value,
                                        });
                                }}
                                value = {userData.userFirstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                label="Last Name"
                                autoFocus
                                onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        userLastName: e.target.value,
                                    });
                                }}
                                value = {userData.userLastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Preferred contact email"
                                autoFocus
                                defaultValue={auth?.currentUser?.email}
                                onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        userEmail: e.target.value,
                                    });
                                }}
                                value = {userData.userEmail}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Phone number"
                                autoFocus
                                onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        userPhone: e.target.value,
                                    });
                                }}
                                value = {userData.userPhone}
                            />
                        </Grid>
                    </Grid>
                    {/*<Box>*/}
                    {/*    <h5>{auth?.currentUser?.uid}</h5>*/}
                    {/*    <h5>{userData.userFirstName}</h5>*/}
                    {/*    <h5>{userData.userLastName}</h5>*/}
                    {/*    <h5>{userData.userPhone}</h5>*/}
                    {/*    <h5>{userData.userEmail}</h5>*/}
                    {/*    <h5>{auth?.currentUser?.email}</h5>*/}
                    {/*    <h5>{auth?.currentUser?.displayName}</h5>*/}
                    {/*</Box>*/}
                </DialogContent>

                <DialogActions>
                    {/*<Button onClick={Registration2}>Next</Button>*/}
                    <Button onClick={onSubmitR1}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}