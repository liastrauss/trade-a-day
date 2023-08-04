import * as React from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { signInWithPopup, signOut } from "firebase/auth";
import {auth, googleProvider, facebookProvider} from "../config/firebase";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import Topbar from "../Components/Topbar";
import {collection, getDoc, getDocs, doc , query, where} from "firebase/firestore";

export const logOut = async () => {
    try {
        await signOut(auth)
    } catch (err) {
        console.error(err)
    }
}

/**
 * Checks if user exists by email
 * @returns {Promise<void>}
 * @constructor
 */

const db = firebase.firestore();
// const db = firebase.firestore();
// const collectionRef = db.collection('your_collection_name');
// const query = collectionRef.where('some_field', '==', 'some_value');
//
// query.get().then((querySnapshot) => {


export async function userExists() {
    try {
        const usersCollectionRef = db.collection('users');
        console.log("function userExists is called")
        const query = usersCollectionRef.where('userID', '==', auth?.currentUser?.uid);
        // const u = query(collection(db, "users"), where("userID", "==", auth?.currentUser?.uid))
        // const querySnapshot = await getDocs(u);

        query.get().then((querySnapshot) => {
            if (querySnapshot.empty) {
                // The query snapshot is empty, meaning no documents matched the query
                console.log(`userExists is false ${auth?.currentUser?.uid}`)
            } else {
                console.log(`userExists is true ${auth?.currentUser?.uid}`)
            }
        })
    }
    catch(error) {
        console.log(error)
    }
}


export async function ExistCheck() {
    try {
        db.collection("Users")
            .where("userID", "==", auth?.currentUser?.uid).get()
            .then(function (querySnapshot) {
                if (!querySnapshot.empty) {
                    console.log(`userExists is false ${auth?.currentUser?.uid}`)
                } else {
                    console.log(`userExists is true ${auth?.currentUser?.uid}`)
                }
            });
    } catch (error) {
        console.log(error)
    }
}



//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const redirect = searchParams.get("redirect");
//     const navigate = useNavigate();
//     const querySnapshot = await firebase.firestore().collection('users').where('userID', '==', auth?.currentUser?.uid).get();
//     const docs = querySnapshot.docs;
//
//     if (docs.length === 0) {
//         console.log("docs length = 0")
//         navigate(`/SignUp?redirect=${redirect}`);
//     } else {
//         console.log("docs length is different from 0")
//         navigate(redirect);
//     }
// }


export default function LoginPage(props) {
    useEffect(() => {
        const authChanged = auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    const x = await ExistCheck(); // Call the userExists function with await
                    console.log("fulfilled:", x); // Log the result
                } catch (error) {
                    console.error("rejected:", error);
                }
                console.log("LoginPage: 72");
            }
        });

        // the line below helps useEffect not cause any trouble
        return () => authChanged();
    });

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const redirect = searchParams.get("redirect");
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate(redirect);
        } catch (err) {
            console.error(err);
        }
    }

    const signInWithFacebook = async () => {
        try {
            await signInWithPopup(auth, facebookProvider);
            navigate(redirect);
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Box>
            {auth?.currentUser ? (
                <React.Fragment>
                    <Topbar AddDay Profile BookedEvents />
                    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                            <Typography component="h1" variant="h4" align="center">Profile</Typography>
                            <Box sx={{ flexDirection: 'column' }}>
                                <Typography color='primary' variant="h6" gutterBottom> You are currently logged in as: {auth.currentUser.displayName} </Typography>
                                <Typography color='primary' variant="body1" gutterBottom> You can log out or edit your profile! </Typography>
                                <Button color='primary' onClick={() => console.log(`/SignUp?redirect=${redirect}`)}> Console log </Button>
                            </Box>
                            <Box sx={{ flexDirection: 'column' }}>
                                <Button variant="contained" onClick={logOut} sx={{ mt: 3, ml: 1 }}> Log Out </Button>
                                <Button variant="contained" sx={{ mt: 3, ml: 1 }}> Edit Profile </Button>
                                <Button variant="contained" onClick={() => navigate("/")} sx={{ mt: 3, ml: 1 }}> Homepage </Button>
                                <Button color='primary' onClick={() => console.log(`/SignUp?redirect=${redirect}`)}> Console log </Button>
                            </Box>
                        </Paper>
                    </Container>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Topbar AddDay Profile BookedEvents />
                    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                            <Typography component="h1" variant="h4" align="center">Log In</Typography>
                            <Box>
                                <Typography color='primary' variant="h6" gutterBottom> Sign in to your account! </Typography>
                                <h6>{`/SignUp?redirect=${redirect}`}</h6>
                                <Button startIcon={<GoogleIcon color='primary' style={{ fontSize: 45 }}></GoogleIcon>} onClick={signInWithGoogle}> Sign in with Google </Button>
                                <Button startIcon={<FacebookIcon color='primary' style={{ fontSize: 45 }}></FacebookIcon>} onClick={signInWithFacebook}> Sign in with Facebook </Button>
                                <Button color='primary' onClick={() => console.log(`/SignUp?redirect=${redirect}`)}> Console log </Button>
                            </Box>
                        </Paper>
                    </Container>
                </React.Fragment>
            )}
        </Box>
    );
}
