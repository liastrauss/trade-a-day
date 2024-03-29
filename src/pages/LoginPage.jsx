import * as React from 'react';
import {useEffect} from 'react';
import Button from '@mui/material/Button';
import {signInWithPopup, signOut} from "firebase/auth";
import {auth, googleProvider, facebookProvider, db} from "../config/firebase";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';
import {useLocation, useNavigate} from "react-router-dom";
import "firebase/compat/firestore";
import Paper from "@mui/material/Paper";
import {Container} from "@mui/system";
import Topbar from "../Components/Topbar";
import {collection, getDocs, query, where} from "firebase/firestore";
import {useTheme} from "@mui/material/styles";


export const logOut = async () => {
    try {
        await signOut(auth)
        window.location.reload();
    } catch (err) {
        console.error(err)
    }
}


export async function ExistCheck() {
    try {
        const u = query(collection(db, "users"), where("userID", "==", auth?.currentUser?.uid))
        const querySnapshot = await getDocs(u);
        if (querySnapshot.empty) {
            // The query snapshot is empty, meaning no documents matched the query
            console.log(`userExists is false ${auth?.currentUser?.uid}`)
            return false
        } else {
            console.log(`userExists is true ${auth?.currentUser?.uid}`)
            return true
        }
    } catch (error) {
        console.log(error)
    }
}

export default function LoginPage() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const redirect = searchParams.get("redirect");
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        const authChanged = auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    const exists = await ExistCheck();
                    if (exists) {
                        navigate(redirect);
                    } else {
                        if (redirect) {
                            navigate(`/SignUp?redirect=${redirect}`);
                        } else {
                            navigate(`/SignUp`);
                        }
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        });

        return () => authChanged();
    }, []);

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    }

    const signInWithFacebook = async () => {
        try {
            await signInWithPopup(auth, facebookProvider);
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Box>
            {auth?.currentUser ? (
                <React.Fragment>
                    <Topbar AddDay Profile BookedEvents/>
                    <Container component="main" maxWidth="sm" sx={{mb: 4}}>
                        <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                            {/*<Typography component="h1" variant="h4" align="center">Profile</Typography>*/}
                            <Box sx={{flexDirection: 'column'}}>
                                <Typography color='primary' variant="h6" gutterBottom> You are currently logged in
                                    as {auth.currentUser.displayName} </Typography>
                                <Typography variant="body1" gutterBottom
                                            sx={{color: theme.palette.text.secondary}}> You can continue browsing or log
                                    out </Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: 'flex-end', mt: 2}}>
                                <Button disableElevation variant="outlined" size="small"
                                        onClick={() => navigate("/")}>
                                    Homepage
                                </Button>
                                <Button disableElevation variant="text" size="small" sx={{ml: 2}}
                                        onClick={logOut}>
                                    Log Out
                                </Button>

                            </Box>
                        </Paper>
                    </Container>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Topbar AddDay Profile BookedEvents/>
                    <Container component="main" maxWidth="sm" sx={{mb: 4}}>
                        <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                            <Typography component="h1" variant="h4" align="center">Log In</Typography>
                            <Box>
                                <Typography color='primary' variant="h6" gutterBottom> Sign in to your
                                    account! </Typography>
                                <Button startIcon={<GoogleIcon color='primary' style={{fontSize: 45}}></GoogleIcon>}
                                        onClick={signInWithGoogle}> Sign in with Google </Button>
                                <Button startIcon={<FacebookIcon color='primary' style={{fontSize: 45}}></FacebookIcon>}
                                        onClick={signInWithFacebook}> Sign in with Facebook </Button>
                            </Box>
                        </Paper>
                    </Container>
                </React.Fragment>
            )}
        </Box>
    );
}