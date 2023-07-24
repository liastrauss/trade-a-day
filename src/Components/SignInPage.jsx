import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {signInWithPopup, signOut} from "firebase/auth";
import {auth, googleProvider, facebookProvider} from "../config/firebase";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';
import {Grid, TextField, Typography} from "@mui/material";
import Box from '@mui/material/Box';
export const logOut = async () => {
    try {
        await signOut(auth)
    }
    catch (err) {
        console.error(err)
    }
}
export default function SignInPage() {

    // accountHandle is a placeholder function. In the future it should receive authentication method as prop,
    // call the authentication method, check if the user was already signed in. (credentials in dataset ? close dialog : call Register)
    // const accountHandle = () => {
    //     exist ? setExist(true) : Register()
    // };

    const [userData, setUserData] =
        React.useState({
            userID: '',
            userFirstName: '',
            userLastName: '',
            userEmail: '',
            userPhone: '',
            PizzaToppings: [],
            favoriteFood: [],
            skills: [],
            superpowers: [],
        },[]);

    //Google authentication
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        }
        catch (err) {
            console.error(err);
        }
    }
    //Facebook authentication
    const signInWithFacebook = async () => {
        try {
            await signInWithPopup(auth, facebookProvider)
        }
        catch (err) {
            console.error(err)
        }
    }




    return (
        <React.Fragment>
            <div>
                <Grid container spacing={1} justifyContent="flex-start" alignItems="stretch">
                    <Box>
                        {auth?.currentUser?.displayName ? (
                            <React.Fragment>
                                <Typography color='primary' variant="h6" gutterBottom> You are currently logged in as: {auth.currentUser.displayName}
                                </Typography>
                                <Button
                                    variant="contained"
                                    onClick={logOut}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    Log Out
                                </Button>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Typography color='primary' variant="h6" gutterBottom> Sign in to your account!
                                </Typography>
                                <Button startIcon={<GoogleIcon color='primary' style={{ fontSize: 45 }}></GoogleIcon>} onClick={signInWithGoogle}>
                                    Sign in with Google
                                </Button>
                                <Button startIcon={<FacebookIcon color='primary' style={{ fontSize: 45 }}></FacebookIcon>} onClick={signInWithFacebook}>
                                    Sign in with Facebook
                                </Button>
                            </React.Fragment>
                        )}
                    </Box>
                </Grid>
            </div>
        </React.Fragment>
    );
}