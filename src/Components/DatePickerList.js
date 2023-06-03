import React, { useState } from 'react';
import {Grid, IconButton, TextField} from '@mui/material';
import {DatePicker} from "@mui/x-date-pickers";
import AddIcon from '@mui/icons-material/Add';

// a function for a list of
// export default function DatePickerList({formData, setFormData}) {
//     const [datePickers, setDatePickers] = useState([]);
//
//     const addDatePicker = () => {
//         setDatePickers([...datePickers, new DatePicker()]);
//     };
//
//     const handleDateChange = (index, date) => {
//         const updatedDatePickers = [...datePickers];
//         updatedDatePickers[index] = date;
//         setDatePickers(updatedDatePickers);
//     };
//
//     return (
//         <div>
//             {datePickers.map((date, index) => (
//                 <DatePicker
//                     key={index}
//                     value={date}
//                     onChange={(newDate) => handleDateChange(index, newDate)}
//                     renderInput={(params) => <TextField {...params} />}
//                 />
//             ))}
//             <IconButton onClick={addDatePicker}>
//                 <AddIcon />
//             </IconButton>
//         </div>
//     );
// }
//
//


export default function DatePickerList({formData, setFormData}) {
    // selected items only
    const [items, setItems] = React.useState(() => ['water']);
    // the list of all items, selected + unselected
    const [dates, setDates] = React.useState(() => []);

    // for selecting items
    const handleItems = (event, newValue) => {
        setDates(newValue);
        console.log(dates)
    };



    const addItem = (newDate) => {
        setDates(prevDates => [...prevDates, newDate]); // Add the new item to the list
        };


    return (
        <Grid container>
            <Grid item xs={12}>

                    {dates.map((date,index) => (
                        // <ToggleButton key={date} value={date} aria-label={date} </ToggleButton>
                        <Grid item xs={6} key={index}>
                        <DatePicker>
                            required
                            fullWidth
                            disablePast
                            views={['year', 'month']}
                            value = {date}
                            onChange={handleItems}

                        </DatePicker>
                        </Grid>
                    ))}
            </Grid>
            <Grid item>
                <IconButton onClick={addItem} aria-label="Add item">
                    <AddIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
}
