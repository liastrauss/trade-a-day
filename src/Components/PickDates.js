import React, {useState} from 'react';
import {DatePicker} from "@mui/x-date-pickers";
import {Grid, IconButton, Slider, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {PhotoCamera} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

function valuetext(value) {
    return `${value}°C`;
}


export default function PickDates () {
    const [value, setValue] = useState();
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };


    return (
        <div>
            <Grid container spacing={3}   justifyContent="space-evenly">
                <Grid item xs={6}>
                <DatePicker
                    required
                    fullWidth
                    label="Choose a day"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
            />
                </Grid>
                <Grid item xs={6}>
                    <Slider
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"

                    />

                </Grid>

                <Grid item sm={6}>
                    <TextField
                        required
                        id="NumOfGuests"
                        label="Number of Guests"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="subtitle">Give us a glimpse of how your day will look like!</Typography>
                    <Button variant="contained" component="label">
                        Upload
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera/>
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
    // TODO add a start time and end time
}