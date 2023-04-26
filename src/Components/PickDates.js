import React, {useState} from 'react';
import {DatePicker} from "@mui/x-date-pickers";

export default function PickDates () {
    const [value, setValue] = useState();
    return (
        <DatePicker
            label="Which days are you available?"
            value={value}
            onChange={(newValue) => setValue(newValue)}
        />)
}