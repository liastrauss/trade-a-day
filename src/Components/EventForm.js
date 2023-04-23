import React from 'react';
import {Autocomplete, Checkbox, FormControlLabel, Grid, Rating, Switch, TextField, Typography} from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

function EventForm () {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                       id="standard-basic"
                       label="What do you do?"
                       variant="standard"
                />
                </Grid>
                    <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        multiline
                        minrows = {4}
                        helperText="just a couple of words!!"
                        id="standard-basic"
                        label="Describe the experience"
                        placeholder="A day out in the pasture with some cows"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Typography component="legend">Difficulty Level</Typography>
                        Easy
                        <Rating
                            sx={{
                                color: '#99d6ff', // set the color to a custom value
                            }}
                            name="running-rating"
                            defaultValue={3}
                            // getLabelText={getLabelText}

                            precision={1}
                            icon={<DirectionsRunIcon fontSize="inherit" />}
                            emptyIcon={<DirectionsRunIcon fontSize="inherit" />}
                        //     value={value}
                        //     getLabelText={getLabelText}
                        //     onChange={(event, newValue) => {
                        //         setValue(newValue);
                        //     }}
                        //     onChangeActive={(event, newHover) => {
                        //         setHover(newHover);
                        //     }}
                        // />
                        // {value !== null && (
                        //     <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        // )}
                        />
                        Hard
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        Accessible?
                        <Switch />
                        {/*<Checkbox />*/}
                    </Grid>
                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                                disablePortal
                                id="areas-autocomplete"
                                 options = {areas}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Area" />}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Address"
                                label="Address"
                                variant="standard"
                            />
                        </Grid>

                {/*    this has to be here!*/}
            </Grid>
        </div>
    )
}
const areas = ['North', 'South','Jerusalem Area','West bank','Center Dan'];
export default EventForm;
//
// import Rating from '@material-ui/lab/Rating';
// import FavoriteIcon from '@material-ui/icons/Favorite';
//
// function CustomRating(props) {
//     return (
//         <Rating
//             IconContainerComponent={({ value, ...rest }) => {
//                 return <FavoriteIcon color={value ? 'secondary' : 'disabled'} {...rest} />;
//             }}
//         />
//     );
// }
//

// export default function EventForm() {
//     return (
//         <React.Fragment>
//             <Typography variant="h6" gutterBottom>
//                 Shipping address
//             </Typography>
//             <Grid container spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="firstName"
//                         name="firstName"
//                         label="First name"
//                         fullWidth
//                         autoComplete="given-name"
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="lastName"
//                         name="lastName"
//                         label="Last name"
//                         fullWidth
//                         autoComplete="family-name"
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <TextField
//                         required
//                         id="address1"
//                         name="address1"
//                         label="Address line 1"
//                         fullWidth
//                         autoComplete="shipping address-line1"
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <TextField
//                         id="address2"
//                         name="address2"
//                         label="Address line 2"
//                         fullWidth
//                         autoComplete="shipping address-line2"
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="city"
//                         name="city"
//                         label="City"
//                         fullWidth
//                         autoComplete="shipping address-level2"
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         id="state"
//                         name="state"
//                         label="State/Province/Region"
//                         fullWidth
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="zip"
//                         name="zip"
//                         label="Zip / Postal code"
//                         fullWidth
//                         autoComplete="shipping postal-code"
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="country"
//                         name="country"
//                         label="Country"
//                         fullWidth
//                         autoComplete="shipping country"
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <FormControlLabel
//                         control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
//                         label="Use this address for payment details"
//                     />
//                 </Grid>
//             </Grid>
//         </React.Fragment>
//     );
// }
