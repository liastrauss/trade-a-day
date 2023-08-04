import * as React from 'react';
import Button from '@mui/material/Button';
import {signInWithPopup, signOut} from "firebase/auth";
import {auth, googleProvider, facebookProvider} from "../config/firebase";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const logOut = async () => {try {await signOut(auth)} catch (err) {console.error(err)}}
export default function SignInPage(SignInPageTarget="/") {

    // const [userData, setUserData] =
    //     React.useState({
    //         userID: '',
    //         userFirstName: '',
    //         userLastName: '',
    //         userEmail: '',
    //         userPhone: '',
    //         PizzaToppings: [],
    //         favoriteFood: [],
    //         skills: [],
    //         superpowers: [],
    //     },[]);

    const signInWithGoogle = async () => {try {await signInWithPopup(auth, googleProvider);} catch (err) {console.error(err);}}
    const signInWithFacebook = async () => {try {await signInWithPopup(auth, facebookProvider)} catch (err) {console.error(err)}}
    const navigate = useNavigate();

    return (
        <Box>
            {auth?.currentUser ? (
                <React.Fragment>
                    <Box sx={{flexDirection: 'column'}}>
                        <Typography color='primary' variant="h6" gutterBottom> You are currently logged in as: {auth.currentUser.displayName} </Typography>
                        <Typography color='primary' variant="body1" gutterBottom> You can log out or edit your profile! </Typography>
                    </Box>
                    <Box sx={{flexDirection: 'column'}}>
                        <Button variant="contained" onClick={logOut} sx={{ mt: 3, ml: 1 }}> Log Out </Button>
                        <Button variant="contained" sx={{ mt: 3, ml: 1 }}> Edit Profile </Button>
                        <Button variant="contained" onClick={() => navigate("/")} sx={{ mt: 3, ml: 1 }}> Homepage </Button>
                    </Box>
                </React.Fragment>
            ) : (
                <Box>
                    <Typography color='primary' variant="h6" gutterBottom> Sign in to your account! </Typography>
                    <Button startIcon={<GoogleIcon color='primary' style={{ fontSize: 45 }}></GoogleIcon>} onClick={signInWithGoogle}> Sign in with Google </Button>
                    <Button startIcon={<FacebookIcon color='primary' style={{ fontSize: 45 }}></FacebookIcon>} onClick={signInWithFacebook}> Sign in with Facebook </Button>
                </Box>
            )}
        </Box>
    );
}