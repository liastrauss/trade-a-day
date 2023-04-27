import React, {useState} from 'react';
import {DatePicker} from "@mui/x-date-pickers";
import {Grid} from "@mui/material";

export default function PickDates () {
    const [value, setValue] = useState();
    return (
        <div>
            <Grid container spacing={3}   justifyContent="space-evenly">
                <Grid item xs={12}>
                <DatePicker
                    fullWidth
                    label="Choose a date?"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
            />
                </Grid>
            </Grid>
        </div>
    )
    // TODO add a start time and end time
}