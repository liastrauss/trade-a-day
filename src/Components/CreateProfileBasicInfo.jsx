import React from 'react';
import {Grid, TextField, ToggleButton, Typography} from "@mui/material";
import {ToggleButtonGroup} from "@mui/lab";

function SignUp() {
    const [alignment, setAlignment] = React.useState('left');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

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
                    </Grid>
            </div>
        </React.Fragment>
    )
}
export default SignUp;