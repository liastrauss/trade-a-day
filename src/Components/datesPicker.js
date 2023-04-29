import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Grid, InputLabel, NativeSelect, TextField} from "@mui/material";
import Box from "@mui/material/Box";

export default function ControlledRadioButtonsGroup() {
    const [value, setValue] = React.useState('1.6.23');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Available Dates</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="1.6.23" control={<Radio />} label="1.6.23" />
                <FormControlLabel value="2.6.23" control={<Radio />} label="2.6.23" />
                <FormControlLabel value="14.6.23" control={<Radio />} label="14.6.23" />
                <FormControlLabel value="1.7.23" control={<Radio />} label="1.7.23" />
            </RadioGroup>

            <Grid item sm={6} my={5}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Number of guests
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
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

        </FormControl>
    );
}