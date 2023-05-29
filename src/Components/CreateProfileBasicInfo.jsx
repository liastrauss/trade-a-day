import React from 'react';
import {Grid, TextField, ToggleButton, Typography} from "@mui/material";
import {ToggleButtonGroup} from "@mui/lab";
import {signInWithPopup, signOut} from "firebase/auth";
import {auth, googleProvider} from "../config/firebase";

function SignUp() {
    const [alignment, setAlignment] = React.useState('left');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        }
        catch (err) {
            console.error(err);
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth);
        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <React.Fragment>
            <div>
                <Typography variant="h6" gutterBottom>Please enter your personal details</Typography>
                <Grid container spacing={3}   justifyContent="flex-start" alignContent = "center">
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                label="Last Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Phone number"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Email address"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Password"
                                autoFocus
                                type="password"
                            />
                        </Grid>
                        {/*Host/Guest Button*/}
                        <Grid item xs={6}>
                            <Typography variant="h6" gutterBottom> I am a..</Typography>
                            <ToggleButtonGroup>
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="where">
                                <ToggleButton value="Host">Host</ToggleButton>
                                <ToggleButton value="Guest">Guest</ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                        <button onClick={signInWithGoogle}>Sign In With Google</button>
                        <button onClick={logOut}>Logout</button>
                    </Grid>
            </div>
        </React.Fragment>
    )
}
export default SignUp;