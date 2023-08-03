import * as React from 'react';
import Button from '@mui/material/Button';
import {signInWithPopup, signOut} from "firebase/auth";
import {auth, googleProvider, facebookProvider} from "../config/firebase";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Paper from "@mui/material/Paper";
import {Container} from "@mui/system";
import Topbar from "../Components/Topbar";


export const logOut = async () => {try {await signOut(auth)} catch (err) {console.error(err)}}

export async function ExistCheck(props) {
    const querySnapshot = await firebase.firestore.instance.collection('users').where('userEmail', '==', auth?.currentUser?.email).get();
    const docs = querySnapshot.docs;
    const navigate = useNavigate();

    if (docs.length === 0) {
        navigate("/CreateProfile");
    } else {
        navigate(props.target);
    }
}

export default function LoginPage(props) {
    // const signInWithGoogle = async () => {try {await signInWithPopup(auth, googleProvider);} catch (err) {console.error(err);}}
    const signInWithGoogle = async () => {try {await signInWithPopup(auth, googleProvider); await ExistCheck(props.target); } catch (err) {console.error(err);}}
    const signInWithFacebook = async () => {try {await signInWithPopup(auth, facebookProvider); await ExistCheck(props.target); } catch (err) {console.error(err)}}
    const navigate = useNavigate();

    return (
        <Box>
            {auth?.currentUser ? (
                <React.Fragment>
                    <Topbar AddDay Profile BookedEvents/>
                    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                                <Typography component="h1" variant="h4" align="center">Profile</Typography>
                                <Box sx={{flexDirection: 'column'}}>
                                    <Typography color='primary' variant="h6" gutterBottom> You are currently logged in as: {auth.currentUser.displayName} </Typography>
                                    <Typography color='primary' variant="body1" gutterBottom> You can log out or edit your profile! </Typography>
                                </Box>
                                <Box sx={{flexDirection: 'column'}}>
                                    <Button variant="contained" onClick={logOut} sx={{ mt: 3, ml: 1 }}> Log Out </Button>
                                    <Button variant="contained" sx={{ mt: 3, ml: 1 }}> Edit Profile </Button>
                                    <Button variant="contained" onClick={() => navigate("/")} sx={{ mt: 3, ml: 1 }}> Homepage </Button>
                                    <Button onClick={console.log(props.target)}> console log </Button>
                                </Box>
                            </Paper>
                    </Container>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Topbar AddDay Profile BookedEvents/>
                    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                                <Typography component="h1" variant="h4" align="center">Log In</Typography>
                                <Box>
                                    <Typography color='primary' variant="h6" gutterBottom> Sign in to your account! </Typography>
                                    <Button startIcon={<GoogleIcon color='primary' style={{ fontSize: 45 }}></GoogleIcon>} onClick={signInWithGoogle}> Sign in with Google </Button>
                                    <Button startIcon={<FacebookIcon color='primary' style={{ fontSize: 45 }}></FacebookIcon>} onClick={signInWithFacebook}> Sign in with Facebook </Button>
                                    <Button onClick={console.log(props.target)}> console log </Button>
                                </Box>
                        </Paper>
                    </Container>
                </React.Fragment>
            )}
        </Box>
    );
}