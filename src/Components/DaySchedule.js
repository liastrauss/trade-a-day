import React, {useState} from 'react';
import {DatePicker, TimePicker} from "@mui/x-date-pickers";
import {Grid, IconButton, Rating, Slider, TextField, ToggleButton} from "@mui/material";
import Button from "@mui/material/Button";
import {PhotoCamera} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import {useTheme} from "@mui/material/styles";
import {ToggleButtonGroup} from "@mui/lab";

const labels = {
    0.5: 'Very easy',
    1: 'Very easy',
    1.5: 'Easy',
    2: 'Easy',
    2.5: 'Moderate',
    3: 'Moderate',
    3.5: 'Somewhat difficult',
    4: 'Difficult',
    4.5: 'Very difficult',
    5: 'Extremely difficult',
};


function valuetext(value) {
    return `${value}°C`;
}

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}


export default function DaySchedule () {
    // old consts for hour range:
    // const [value, setValue] = useState();
    // const [hourRange, sethourRange] = useState([8, 17]);

    const [alignment, setAlignment] = React.useState('left');
    const theme = useTheme();
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    // new:
    const [datePickerCount, setDatePickerCount] = useState(1); // state variable for the number of DatePicker components
    const [datePickerValues, setDatePickerValues] = useState([null]); // state variable for the values of the DatePicker components

    console.log(datePickerValues)
    // for toggle
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };


    // const handleAddDatePicker = () => {
    //     setDatePickerCount(datePickerCount + 1);
    //     setDatePickerValues([...datePickerValues, null]); // add null value for the new DatePicker component
    // }; // function to add a new DatePicker component to the state
    //
    // const handleRemoveDatePicker = () => {
    //     if (datePickerCount > 1) { // prevent removing all the DatePicker components
    //         setDatePickerCount(datePickerCount - 1);
    //         setDatePickerValues(datePickerValues.slice(0, -1)); // remove the value of the last DatePicker component
    //     }
    // }; // function to remove the last DatePicker component from the state





    // hours for the slider:
    // const marks = [
    //     { value: 8, label: '8:00' },
    //     { value: 14, label: '14:00' },
    //     { value: 10, label: '10:00' },
    //     { value: 16, label: '16:00' },
    //     {
    //         value: 6,
    //         label: '6:00'
    //     },
    //     {
    //         value: 12,
    //         label: '12:00'
    //     },
    //     {
    //         value: 18,
    //         label: '18:00'
    //     },
    //     {
    //         value: 20,
    //         label: '20:00'
    //     }
    // ];



    return (
        <div>
            <Typography variant="h6" gutterBottom>Schedule the Day</Typography>
            <Grid container spacing={3} justifyContent="flex-start" alignContent = "center">
            {[...Array(datePickerCount)].map((_, index) => ( // render the DatePicker components based on the state variable
                <Grid item xs={6} key={index}>
                    <DatePicker
                        required
                        fullWidth
                        views={['year', 'month']}
                        label={`Available Month #${index + 1}`}
                        value={datePickerValues[index]}
                        onChange={(newValue) => {
                            const newDateValues = [...datePickerValues];
                            newDateValues[index] = newValue;
                            setDatePickerValues(newDateValues);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} variant="standard" />
                        )}
                        inputFormat="MMMM/YYYY"
                    />
                </Grid>
            ))}
            <Grid item xs={3} sx={{mt:0.5
            }}>
                <IconButton
                    aria-label="add datepicker"
                    onClick={() => {
                        setDatePickerCount(datePickerCount + 1);
                        setDatePickerValues([...datePickerValues, null]);
                }}
                >
                    <AddIcon />
                </IconButton>
                {datePickerCount > 1 && (
                    <IconButton
                        aria-label="remove datepicker"
                        onClick={() => {
                            setDatePickerCount(datePickerCount - 1);
                            setDatePickerValues(datePickerValues.slice(0, -1));
                        }}
                    >
                        <RemoveIcon />
                    </IconButton>
                )}
            </Grid>

                {/*new rating:*/}
                <Grid item sm={12}>
                    <Paper variant="outlined" sx={{ p: 2, outline: '1px' }}>
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                typography: 'subtitle1',
                                // color: 'text.secondary'
                                // borderRadius: 2,
                                // p: 1,

                            }}
                        >
                            <Typography component="legend" align="center">Physical Effort</Typography>
                            <Rating
                                sx={{
                                    color: theme.palette.primary.main, // set the color to value from app js
                                }}
                                name="Physical-Effort"
                                defaultValue={3}
                                size="large"
                                value={value}
                                precision={1}
                                getLabelText={getLabelText}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                icon={<DirectionsRunIcon fontSize="inherit" />}
                                emptyIcon={<DirectionsRunIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            {value !== null && (
                                <Box sx={{ ml: 2, color: 'text.secondary' }}>{labels[hover !== -1 ? hover : value]}</Box>
                            )}
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={5}
                    // direction="row"
                    // justifyContent="space-between"
                    // alignItems="center"
                    // display="flex"
                >
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="indoorsoroutdoors"
                    >
                        <ToggleButton value="indoors">indoors</ToggleButton>
                        <ToggleButton value="outdoors">outdoors</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>


                {/*old time picker*/}
            {/*<Grid item xs={8}*/}
            {/*        // display="flex"*/}
            {/*          direction="row"*/}
            {/*          justifyContent="flex-start"*/}
            {/*    >*/}
            {/*        <Typography gutterBottom>*/}
            {/*            Hour range*/}
            {/*        </Typography>*/}

            {/*        <Slider*/}
            {/*            sx={{ml: 2}}*/}
            {/*            fullWidth*/}
            {/*            getAriaLabel={() => 'Hour range'}*/}
            {/*            valueLabelDisplay="auto"*/}
            {/*            step={0.5}*/}
            {/*            marks ={marks}*/}
            {/*            min={6}*/}
            {/*            max={20}*/}
            {/*            value={hourRange}*/}
            {/*            onChange={(event, newValue) => {*/}
            {/*                sethourRange(newValue);*/}
            {/*            }}*/}
            {/*            getAriaValueText={valuetext}*/}
            {/*            range*/}
            {/*        />*/}
            {/*    </Grid>*/}
            {/*    <Grid item sm={5}>*/}
            {/*        <TextField*/}
            {/*            fullWidth*/}
            {/*            required*/}
            {/*            id="NumOfGuests"*/}
            {/*            label="Number of Guests"*/}
            {/*            type="number"*/}
            {/*            InputLabelProps={{*/}
            {/*                shrink: true,*/}
            {/*            }}*/}
            {/*            variant="standard"*/}
            {/*        />*/}
            {/*    </Grid>*/}
                <Grid item sm={12}>
                    <Typography gutterBottom>Give us a glimpse of what your day will look like!</Typography>
                    < br/>
                    <Button variant="contained" component="label">
                        <PhotoCamera sx={{mr: 1}}/>
                         Upload
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    {/*<IconButton color="primary" aria-label="upload picture" component="label">*/}
                    {/*    <input hidden accept="image/*" type="file" />*/}
                    {/*    <PhotoCamera/>*/}
                    {/*</IconButton>*/}
                </Grid>
            </Grid>
        </div>
    )
}



// export  function oldDaySchedule () {
//     const [value, setValue] = useState();
//     const [hourRange, sethourRange] = useState([8, 17]);
//
//     // hours for the slider:
//     const marks = [
//         { value: 8, label: '8:00' },
//         { value: 14.5, label: '14:30' },
//         {
//             value: 6,
//             label: '6:00'
//         },
//         {
//             value: 12,
//             label: '12:00'
//         },
//         {
//             value: 18,
//             label: '18:00'
//         },
//         {
//             value: 23,
//             label: '23:00'
//         }
//     ];
//
//
//
//     return (
//         <div>
//             <Typography variant="h6" gutterBottom>Schedule the Day</Typography>
//             <Grid container spacing={3} justifyContent="flex-start" alignContent = "center">
//                 <Grid item xs={6}>
//                     <DatePicker
//                         required
//                         fullWidth
//                         label="Choose a day"
//                         value={value}
//                         onChange={(newValue) => setValue(newValue)}
//                     />
//                 </Grid>
//                 <Grid item xs={8}
//                 // display="flex"
//                     direction="row"
//                     justifyContent="flex-start"
//                 >
//                     <Typography gutterBottom>
//                             Hour range
//                         </Typography>
//
//                         <Slider
//                             sx={{ml: 2}}
//                             fullWidth
//                             getAriaLabel={() => 'Hour range'}
//                             valueLabelDisplay="auto"
//                             step={0.5}
//                             marks ={marks}
//                             min={6}
//                             max={23}
//                             value={hourRange}
//                             onChange={(event, newValue) => {
//                                 sethourRange(newValue);
//                             }}
//                             getAriaValueText={valuetext}
//                             range
//                         />
//                     </Grid>
//                 <Grid item sm={5}>
//                     <TextField
//                         fullWidth
//                         required
//                         id="NumOfGuests"
//                         label="Number of Guests"
//                         type="number"
//                         InputLabelProps={{
//                             shrink: true,
//                         }}
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item sm={12}>
//                     <Typography gutterBottom>Give us a glimpse of how your day will look like!</Typography>
//                     < br/>
//                     <Button variant="contained" component="label">
//                         Upload
//                         <input hidden accept="image/*" multiple type="file" />
//                     </Button>
//                     <IconButton color="primary" aria-label="upload picture" component="label">
//                         <input hidden accept="image/*" type="file" />
//                         <PhotoCamera/>
//                     </IconButton>
//                 </Grid>
//             </Grid>
//         </div>
//     )
// }


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