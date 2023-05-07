import React from 'react';
import {
    Autocomplete, Avatar, ButtonGroup,
    Checkbox,
    FormControlLabel,
    Grid, IconButton,
    List, ListItem, ListItemAvatar, ListItemText,
    Rating,
    Switch,
    TextField, ToggleButton,
    Typography,
} from "@mui/material";
// import { alpha, styled } from '@mui/material/styles';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
import {PhotoCamera} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import {ToggleButtonGroup} from "@mui/lab";

function SignUp() {
    const theme = useTheme();
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
const interests = ['TV/Netflix', 'Cooking/Baking', 'Training', 'Singing/Playing', 'Traveling', 'Night in the city'];
export default SignUp;