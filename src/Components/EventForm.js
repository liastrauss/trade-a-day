import React from 'react';
import {
    Autocomplete,
    FormControlLabel, FormGroup, FormControl,
    Grid,
    Rating,
    Switch,
    TextField, ToggleButton,
    Typography,
} from "@mui/material";
// import { alpha, styled } from '@mui/material/styles';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { useTheme } from "@mui/material/styles";
import {ToggleButtonGroup} from "@mui/lab";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import FormLabel from "@mui/material/FormLabel";
// for rating:


function EventForm () {
    const theme = useTheme();
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);




    return (
        <React.Fragment>
        <div>
            <Typography variant="h6" gutterBottom> Tell us about yourself
            </Typography>
            <Grid container spacing={3}   justifyContent="flex-start"   alignItems="stretch"

            >
                <Grid item xs={12}>
                    <TextField
                        required
                       id="standard-basic"
                       label="What do you do?"
                       variant="standard"
                       fullWidth
                />
                </Grid>
                <Grid item sm={6}>
                    <Autocomplete
                        disablePortal
                        id="areas-autocomplete"
                        options = {areas}
                        sx = {{ width: '100%' }}
                        // sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Area" />}
                    />
                </Grid>

                    <Grid item
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="center"
                          display="flex"

                    >
                        <FormControl component="fieldset">
                            {/*<FormLabel component="legend">Label placement</FormLabel>*/}
                            <FormGroup row>
                            <FormControlLabel
                                control={<Switch defaultChecked />}
                                label="Accessible?"
                                labelPlacement="start"
                            />

                            <FormControlLabel
                                control={<Switch defaultChecked />}
                                label="Suitable for Children?"
                                labelPlacement="start"
                            />
                        </FormGroup>

                            {/*<Typography variant="body">Accessible?</Typography>*/}
                        {/*<Switch />*/}
                        {/*<Checkbox />*/}
                        </FormControl>
                    </Grid>


                <Grid item xs={12}>
                        <TextField
                            required
                            multiline
                            fullWidth
                            minRows = {4}
                            id="describeExperience"
                            label="Describe the experience"
                            placeholder="A day out in the pasture with some cows"
                            variant="outlined"
                        />
                    </Grid>








                {/*    this has to be here!*/}
            </Grid>
        </div>
        </React.Fragment>
    )
}
const areas = ['North', 'South','Jerusalem Area','West bank','Center Dan'];
export default EventForm;




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
