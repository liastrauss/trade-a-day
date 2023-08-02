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
export default function SignInDialog() {
    const [open, setOpen] = React.useState(false);
    // const [exist, setExist] = React.useState(false);

    // accountHandle is a placeholder function. In the future it should receive authentication method as prop,
    // call the authentication method, check if the user was already signed in. (credentials in dataset ? close dialog : call Register)
    // const accountHandle = () => {
    //     exist ? setExist(true) : Register()
    // };

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

    //handleClickOpen is the function that sets the dialog state to True, opening the popup
    const handleClickOpen = () => {
        setOpen(true);
    };

    //handleClose is the function that sets the dialog state to False, closing the popup
    const handleClose = () => {
        setOpen(false);
    };

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

    const logOut = async () => {
        try {
            await signOut(auth)
        }
        catch (err) {
            console.error(err)
        }
        handleClose();
    }

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Sign In
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    Sign in to your account!
                    <IconButton onClick={handleClose} sx={{position: 'absolute', right: 8, top: 8,}}>
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>

                <DialogContent dividers="true">
                    <DialogContentText>
                        Choose your preferred login or signup method!
                    </DialogContentText>
                    <Button startIcon={<GoogleIcon color='primary' style={{fontSize: 45}}></GoogleIcon>} onClick={signInWithGoogle}>
                        Sign in with Google
                    </Button>
                    <Button startIcon={<FacebookIcon color='primary' style={{fontSize: 45}}></FacebookIcon>} onClick={signInWithFacebook}>
                        Sign in with Facebook
                    </Button>
                    <Button onClick={logOut}>
                        Log Out
                    </Button>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Back</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}