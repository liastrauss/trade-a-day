// import * as React from 'react';
// import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Grid, InputLabel, NativeSelect, Radio, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import shadows from '@mui/system'


export function ControlledRadioButtonsGroup() {
    const [value, setValue] = React.useState('1.6.23');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl>
            <Grid container sx={{alignContent: 'center', }} spacing = {3}>
                <Grid item>
                    <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
                    <Typography variant="subtitle2" color="primary">
                        Available Dates
                    </Typography>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="1.6.23" control={<Radio/>} label="1.6.23"/>
                        <FormControlLabel value="2.6.23" control={<Radio/>} label="2.6.23"/>
                        <FormControlLabel value="14.6.23" control={<Radio/>} label="14.6.23"/>
                        <FormControlLabel value="1.7.23" control={<Radio/>} label="1.7.23"/>

                    </RadioGroup>
                </Grid>

                <Grid item>
                    <Box sx={{minWidth: 120}}>
                        <FormControl fullWidth>
                            <Typography variant="subtitle2" color="primary">
                                Number of guests
                            </Typography>
                            <NativeSelect
                                defaultValue={1}
                                inputProps={{
                                    name: 'Number of gustes',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>

                            </NativeSelect>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        </FormControl>
    );
}



const tiers = [
    {
        title: 'Book a day',
        // subheader: 'Most popular',
        price: '15',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Book',
        buttonVariant: 'contained',
    },
];


function DatesPicker() {
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <Container maxWidth="lg" component="main">
                <Grid container spacing={3} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    // subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    // action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    {/*/!*price:*!/*/}
                                    {/*<Box*/}
                                    {/*    sx={{*/}
                                    {/*        display: 'flex',*/}
                                    {/*        justifyContent: 'center',*/}
                                    {/*        alignItems: 'baseline',*/}
                                    {/*        mb: 2,*/}
                                    {/*    }}*/}
                                    {/*>*/}
                                    {/*    /!*<Typography component="h2" variant="h3" color="text.primary">*!/*/}
                                    {/*        ${tier.price}*/}
                                    {/*    /!*</Typography>*!/*/}
                                    {/*    /!*<Typography variant="h6" color="text.secondary">*!/*/}
                                    {/*    /!*    /mo*!/*/}
                                    {/*    /!*</Typography>*!/*/}
                                    {/*</Box>*/}
                                    <ControlledRadioButtonsGroup/>
                                        {/*{tier.description.map((line) => (*/}
                                        {/*    <Typography*/}
                                        {/*        component="li"*/}
                                        {/*        variant="subtitle1"*/}
                                        {/*        align="center"*/}
                                        {/*        key={line}*/}
                                        {/*    >*/}
                                        {/*        {line}*/}
                                        {/*    </Typography>*/}
                                        {/*))}*/}
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={tier.buttonVariant}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}


export default DatesPicker;