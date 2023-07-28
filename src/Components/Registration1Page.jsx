import * as React from 'react';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {Grid, InputAdornment, TextField, Typography} from "@mui/material";
import Registration2 from './Registration2MoreDetails';
import {db} from "../config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";
import {useState} from "react";
import {auth} from "../config/firebase";
import Box from '@mui/material/Box';

export default function Registration1Page({ userData, setUserData }) {


    const usersCollectionRef = collection(db, "users")


    return (
        <React.Fragment>
            <div>
                <Grid container spacing={1} justifyContent="flex-start" alignContent="center" alignItems="stretch">
                    <Typography color='primary' variant="h6" gutterBottom> Let's finish setting up your account!
                    </Typography>
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
                            value={userData.userPhone}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">+972</InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}