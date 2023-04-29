import React, {useState} from 'react';
import {DatePicker, TimePicker} from "@mui/x-date-pickers";
import {Grid, IconButton, Slider, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {PhotoCamera} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function valuetext(value) {
    return `${value}°C`;
}


export default function PickDates () {
    const [value, setValue] = useState();
    const [dateRange, setDateRange] = useState([8, 17]);
    // hours for the slider:
    const marks = [
        { value: 8, label: '8:00' },
        { value: 14.5, label: '14:30' },
        {
            value: 6,
            label: '6:00'
        },
        {
            value: 12,
            label: '12:00'
        },
        {
            value: 18,
            label: '18:00'
        },
        {
            value: 23,
            label: '23:00'
        }
    ];



    return (
        <div>
            <Grid container spacing={3} justifyContent="flex-start" alignContent = "center">
                <Grid item xs={6}>
                    <DatePicker
                        required
                        fullWidth
                        label="Choose a day"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Typography gutterBottom>
                            Hour range
                        </Typography>

                        <Slider
                            fullWidth
                            getAriaLabel={() => 'Hour range'}
                            valueLabelDisplay="auto"
                            step={0.5}
                            marks ={marks}
                            min={6}
                            max={23}
                            value={dateRange}
                            onChange={(event, newValue) => {
                                setDateRange(newValue);
                            }}
                            getAriaValueText={valuetext}
                            range
                        />
                    </Grid>
                <Grid item sm={5}>
                    <TextField
                        fullWidth
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
                    <Typography gutterBottom>Give us a glimpse of how your day will look like!</Typography>
                    < br/>
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


//    {/*//*/}
//     {/*//*/}
//     {/*// return (*/}
//     {/*//     <div>*/}
//     {/*//         <Grid container spacing={3}   justifyContent="space-evenly">*/}
//     {/*//             <Grid item xs={6}>*/}
//     {/*//             <DatePicker*/}
//     {/*//                 required*/}
//     {/*//                 fullWidth*/}
//     {/*//                 label="Choose a day"*/}
//     {/*//                 value={value}*/}
//     {/*//                 onChange={(newValue) => setValue(newValue)}*/}
//     {/*//         />*/}
//     {/*//             </Grid>*/}
//     {/*//             <Grid item xs={6}>*/}
//     {/*//                 <Slider*/}
//     {/*//                     defaultValue={70}*/}
//     {/*//                     aria-label="Small"*/}
//     {/*//                     valueLabelDisplay="auto"*/}
//     {/*//*/}
//     {/*//                 />*/}
//     {/*//*/}
//     {/*//             </Grid>*/}
//     {/*//*/}
//                 <Grid item xs={3}>
//                     <TimePicker
//                         label="Start Time"
//                         value={startTime}
//                         onChange={(newValue) => setStartTime(newValue)}
//                         minutesStep={5}
//                     />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TimePicker
//                         label="End Time"
//                         value={endTime}
//                         onChange={(newValue) => setEndTime(newValue)}
//                         minutesStep={5}
//                     />
//                 </Grid>
//
//                 <Grid item xs={12}>
//                     <Slider
//                         defaultValue={[0, 100]}
//                         aria-label="Small"
//                         valueLabelDisplay="auto"
//                         value={[startTime.getHours() * 60 + startTime.getMinutes(), endTime.getHours() * 60 + endTime.getMinutes()]}
//                         onChange={(event, newValue) => {
//                             setStartTime(new Date(2022, 0, 1, Math.floor(newValue[0] / 60), newValue[0] % 60));
//                             setEndTime(new Date(2022, 0, 1, Math.floor(newValue[1] / 60), newValue[1] % 60));
//                         }}
//                         max={24 * 60 - 1}
//                         min={0}
//                     />
//                 </Grid>