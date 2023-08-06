import {storage, auth} from "../config/firebase";
import {ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";
import React, {useState} from 'react';
import {DatePicker} from "@mui/x-date-pickers";
import {Autocomplete, Grid, IconButton, InputAdornment, Rating, TextField, ToggleButton} from "@mui/material";
import Button from "@mui/material/Button";
import {PhotoCamera} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import {useTheme} from "@mui/material/styles";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';


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


export default function DaySchedule({formData, setFormData, userContact, setUserContact}) {
    // old consts for hour range:
    // const [value, setRating] = useState();
    // const [hourRange, sethourRange] = useState([8, 17]);

    const [setting, setSetting] = React.useState('outdoors');
    const theme = useTheme();
    const [rating, setRating] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    // for new dates:
    const [datePickerCount, setDatePickerCount] = useState(1); // state variable for the number of DatePicker components
    const [datePickerValues, setDatePickerValues] = useState([null]); // state variable for the values of the DatePicker components

    const [user,setUser]=useState({})

    //for indoors outdoors:
    const handleChange = (event, newSetting) => {
        setSetting(newSetting);
        setFormData((prevFormData) => ({
            ...prevFormData,
            outdoors: newSetting === 'outdoors',
        }));
    };


    function getLabelText(rating) {
        return `${rating} Star${formData.physicalEffort !== 1 ? 's' : ''}, ${labels[formData.physicalEffort !== -1 ? formData.physicalEffort : rating]}`;
    }

    const [imageUpload, setImageUpload] = useState(null);

    const [buttonText, setButtonText] = useState('choose Images');

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileInputChange = (event) => {
        setImageUpload(event.target.files);
        const files = event.target.files;
        const selectedFileNames = Array.from(files).map((file) => file.name);
        setSelectedFiles(selectedFileNames);
    };


    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );


    const uploadImage = () => {
        if (imageUpload == null) return;

        const files = Array.from(imageUpload); // Convert FileList to an array


        // onAuthStateChanged(auth,(currentUser)=> {
        //         setUser(currentUser);
        //
        // });
        //
        //
        // console.log(user?.uid)

        console.log("currend uid",auth?.currentUser?.uid);

        // // Map over each selected file and set the imageUpload state
        files.map((pic) => {

            // here we save the images to directory!! so for a host we will save it to his id
            // directory for example

            const imageRef = ref(
                storage,
                `${auth?.currentUser?.uid}/${pic.name+ v4()}'}`
            );
            // const imageRef = ref(storage, `images/${pic.name + v4()} `)
            uploadBytes(imageRef, pic).then(() => {
                // alert("image uploaded")
            })
        });

        handleClick()

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
    const contactOptions = ['Phone','Email'];
    const isPhoneError = userContact.contactMethod === 'Phone' &&
        (userContact.userPhone.length > 10
        || !/^\d+$/.test(userContact.userPhone));




    console.log("dates:",formData.dates);
    console.log("useremail is:",userContact.userEmail);
    console.log("choice is:",userContact.contactMethod);


    // console.log(datePickerValues[0].$d);




    return (
        <div>
            {/*<DatePickerList formData={formData} setFormData={setFormData}/>*/}
            <Typography variant="h6" gutterBottom>Schedule the Day</Typography>
            <Grid container spacing={3}
                  justifyContent="flex-start" alignContent="center"
            >
                {[...Array(datePickerCount)].map((_, index) => ( // render the DatePicker components based on the state variable
                    <Grid item xs={6} key={index}>
                        <DatePicker
                            required
                            fullWidth
                            disablePast
                            views={['year', 'month']}
                            label={`Available Month #${index + 1}`}
                            // value={datePickerValues[index]}
                            value={formData.dates[index]}
                            onChange={(newValue) => {
                                const newDates = [...formData.dates]; // Create a copy of the existing dates array
                                newDates[index] = newValue; // Update the value at the corresponding index
                                setFormData((prevFormData) => ({
                                    ...prevFormData,
                                    dates: [...prevFormData.dates.slice(0, index), newValue, ...prevFormData.dates.slice(index + 1)],

                                }));
                                // dates: newDates, // Update the dates array in the form data

                                // const newDateValues = [...datePickerValues];
                                // newDateValues[index] = newValue;
                                // setDatePickerValues(newDateValues);
                            }}
                            renderInput={(params) => (
                                <TextField {...params} variant="standard"/>
                            )}
                            inputFormat="MMMM/YYYY"
                        />
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={3} sx={{
                mt: 0.5
            }}>

                <IconButton
                    aria-label="add datepicker"
                    onClick={() => {
                        setDatePickerCount(datePickerCount + 1);
                        setDatePickerValues([...datePickerValues, null]);
                        setFormData((prevFormData) => ({
                            ...prevFormData,
                            dates: [...prevFormData.dates, null],
                        }));
                    }}
                >
                    {/*TODO: doesn't show the new dates when you switch pages. something with the render? but i think the prop remembers.*/}
                    <AddIcon/>
                </IconButton>
                {datePickerCount > 1 && (
                    <IconButton
                        aria-label="remove datepicker"
                        onClick={() => {
                            setDatePickerCount(datePickerCount - 1);
                            setDatePickerValues(datePickerValues.slice(0, -1));
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                dates: prevFormData.dates.slice(0, -1),
                            }));
                        }}
                    >
                        <RemoveIcon/>
                    </IconButton>
                )}
            </Grid>

            {/*new rating:*/}
            <Grid item sm={12}>
                <Paper variant="outlined"
                       sx={{p: 2, outline: '1px',
                       }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            typography: 'subtitle1',


                        }}
                    >
                        <Typography component="legend" align="center">Physical Effort</Typography>
                        <Rating
                            sx={{
                                color: theme.palette.primary.main, // set the color to value from app js
                            }}
                            name="Physical-Effort"
                            // defaultValue={3}
                            size="large"
                            precision={1}
                            getLabelText={getLabelText}
                            onChange={(event, newRating) => {
                                setRating(newRating);
                                setFormData((prevFormData) => ({...prevFormData, physicalEffort: newRating}));
                                // setFormData({
                                //     ...formData,
                                //     physicalEffort: newRating,
                                // });

                            }}
                            value={formData.physicalEffort}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            icon={<DirectionsRunIcon fontSize="inherit"/>}
                            emptyIcon={<DirectionsRunIcon style={{opacity: 0.55}} fontSize="inherit"/>}
                        />
                        {formData.physicalEffort !== null && (
                            <Box sx={{
                                ml: 2,
                                color: 'text.secondary',


                            }}>{labels[hover !== -1 ? hover : formData.physicalEffort]}
                            </Box>
                        )}
                    </Box>
                </Paper>
            </Grid>

            <Grid item xs={5}
                // direction="row"
                justifyContent="space-between"
                alignItems="center"
                display="flex"
                  sx = {{mt: 3}} // plaster because they were smooshed together and couldnt solve it
            >
                <ToggleButtonGroup
                    color="primary"
                    value={formData.outdoors ? 'outdoors' : 'indoors'} // so it will be boolean
                    exclusive
                    onChange={handleChange}
                    aria-label="setting choice -outdoors/indoors"
                >
                        <ToggleButton value="indoors">indoors</ToggleButton>
                    <ToggleButton value="outdoors">outdoors</ToggleButton>
                </ToggleButtonGroup>
            </Grid>


            <Grid item sm={12}>

                < br/>
                {/*<Typography variant="subtitle2" color="primary">*/}
                <Typography variant="subtitle1" color="primary">
                    Give us a glimpse of what your day will look like!
                </Typography>
                <Button variant="outlined" component="label">
                    <PhotoCamera sx={{mr: 1}}/>
                    Choose Images
                    {/*<input hidden accept="image/*" multiple type="file" onChange={(event) => {*/}
                    {/*    setImageUpload(event.target.files);*/}
                    {/*    console.log(event.target.files)*/}
                    {/*}}/>*/}

                    <input hidden accept="image/*" multiple type="file" onChange={handleFileInputChange} />
                </Button>


                {selectedFiles.length > 0 && (
                    <Box>
                        {/* Display the selected files */}
                    <div style={{padding: '10px', borderRadius: '4px' }}>
                        <Typography gutterBottom>Selected Files:</Typography>
                        {selectedFiles.map((fileName, index) => (
                            <div key={index}>{fileName}</div>
                        ))}
                    </div>
                    <Button variant="contained" component="label" onClick={uploadImage}>confirm pictures</Button>
                        <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            message="Images uploaded successfully"
                            action={action}

                        />
                    </Box>
            )}
            </Grid>

            <Grid container spacing={2}>

                <Grid item xs={12}>
                    < br/>
                    <Typography variant="subtitle1" color="primary">
                        How would you like us to contact you?
                    </Typography>
                    {/*<Typography gutterBottom>How would you like us to contact you?</Typography>*/}
                </Grid>
                <Grid item xs={4}>
                    <Autocomplete
                        required
                        openOnFocus
                        disableClearable
                        id="contact method"
                        options={contactOptions}
                        renderInput={(params) => <TextField {...params} label="Contact Method" />}
                        onChange={(e, newValue) => {
                            setUserContact({
                                ...userContact,
                                contactMethod: newValue,
                            });
                        }}
                        value={userContact.contactMethod}
                    />
                </Grid>
                <Grid item xs={7}>
                    {userContact.contactMethod === "Phone" && (
                        <TextField
                            fullWidth
                            label="Phone Number"
                            error={isPhoneError}
                            helperText={isPhoneError ? 'Phone number should be 10 digits or less' : "We\'ll only show this number to people who want to go to your day"}
                            onChange={(e) => {
                                setUserContact({
                                    ...userContact,
                                    userPhone: e.target.value,
                                });
                            }}
                            value={userContact.userPhone}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+972</InputAdornment>,
                            }}
                        />
                    )}

                    {userContact.contactMethod === "Email" && (
                        <TextField
                            fullWidth
                            label="Email"
                            helperText="If you don't want people to contact you by the email you signed up with"
                            onChange={(e) => {
                                setUserContact({
                                    ...userContact,
                                    userEmail: e.target.value,
                                });
                            }}
                            value={userContact.userEmail}
                        />
                    )}
                </Grid>



            </Grid>
        </div>
    )
}


// export  function oldDaySchedule () {
//     const [value, setRating] = useState();
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
//                         onChange={(newValue) => setRating(newValue)}
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
//     {/*//                 onChange={(newValue) => setRating(newValue)}*/}
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