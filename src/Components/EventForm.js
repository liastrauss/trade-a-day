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
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// for rating:
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

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
function EventForm () {
    const theme = useTheme();
    const [alignment, setAlignment] = React.useState('left');
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);


    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    // for rating:


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
                        // sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Area" />}
                    />
                </Grid>

                <Grid item sm={6}>
                    <TextField
                        required
                        id="Address"
                        label="Address"
                        variant="outlined"
                    />
                </Grid>
                {/*new rating:*/}
                <Grid item sm={12} xl={12}>
                    <Paper variant="outlined" sx={{ p: 2, outline: '1px' }}>
                        <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                            typography: 'subtitle1',
                            // color: 'text.secondary'
                            // borderRadius: 2,
                            // p: 1,

                        }}
                    >
                            <Typography component="legend" align="center" variant="body">Physical Effort</Typography>
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

                {/*<Grid item sm={6} xl={12}>*/}
                {/*        <Typography component="legend" align="center">Physical Effort</Typography>*/}
                {/*        Easy*/}
                {/*        <Rating*/}
                {/*            sx={{*/}
                {/*                color: theme.palette.primary.main, // set the color to value from app js*/}
                {/*            }}*/}
                {/*            name="Physical-Effort"*/}
                {/*            defaultValue={3}*/}
                {/*            size="large"*/}
                {/*            // getLabelText={getLabelText}*/}
                {/*            precision={1}*/}
                {/*            icon={<DirectionsRunIcon fontSize="inherit" />}*/}
                {/*            emptyIcon={<DirectionsRunIcon fontSize="inherit" />} />*/}

                {/*        Hard*/}
                {/*    </Grid>*/}
                    <Grid item xs={6}
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
                        </ToggleButtonGroup>                    </Grid>
                    <Grid item xs={6}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          display="flex"

                    >
                        <Typography variant="body">Accessible?</Typography>
                        <Switch />
                        {/*<Checkbox />*/}
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
