import React from 'react';
import {Autocomplete, Grid, TextField, ToggleButton, Typography} from "@mui/material";
import {ToggleButtonGroup} from "@mui/lab";

function MoreDetails () {
    const [alignment, setAlignment] = React.useState('left');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <React.Fragment>
            <div>
                <Typography variant="h6" gutterBottom>Let's get to know you better!</Typography>
                <Grid container spacing={3}   justifyContent="flex-start" alignContent = "center">
                    {/*Component: Fun fact*/}
                    <Grid item xs={12}>
                        <TextField
                            label="Fun fact about yourself"
                            variant="standard"
                            fullWidth
                        />
                    </Grid>
                    {/*Component: Ask me about...*/}
                    <Grid item xs={12}>
                        <TextField
                            label="Ask me about..."
                            variant="standard"
                            fullWidth

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Favorite Food"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="My Obsession"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="My most useless skill"
                        />
                    </Grid>
                    {/*Area dropdown list*/}
                    <Grid item sm={6}>
                        <Autocomplete
                            disablePortal
                            id="areas-autocomplete"
                            options = {interests}
                            renderInput={(params) => <TextField {...params} label="Favorite Hobby" />}
                        />
                    </Grid>
                    {/*Cat/Dog/None Button*/}
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom> I prefer..</Typography>
                        <ToggleButtonGroup>
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="where">
                            <ToggleButton value="Cat">Cats :)</ToggleButton>
                            <ToggleButton value="Dog">Dogs =D</ToggleButton>
                            <ToggleButton value="None">None :(</ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}
const interests = ['TV/Netflix', 'Cooking/Baking', 'Training', 'Singing/Playing', 'Traveling', 'Night in the city'];
export default MoreDetails;