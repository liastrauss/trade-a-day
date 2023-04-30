import React from "react";
import {Button, Tab, Tabs, Box, tabsClasses} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {tabClasses} from "@mui/material";


export default function Filter({ filter }) {
    const theme = useTheme();
    // Declare a state variable named `value` using `useState` hook from React
    // The initial value of `value` is set to `1`

    // const [value, setValue] = React.useState(1);

    // Define a function named `handleChange` that takes two parameters
    // The first parameter is an event of type `React.SyntheticEvent`
    // The second parameter is a number `newValue`
    // The function updates the state of `value` using the `setValue` function

    // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    //     setValue(newValue);
    // };

    return (
        <Box sx={{
            display: 'flex',
        }}>
            <Button variant="text"
                    sx={{
                        borderRadius: 5,
                        ml: 3
                    }}>
                {filter}
            </Button>
        </Box>
    )
}

            // <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
            // <Box sx={{flexGrow: 1,
            //     maxWidth: { xs: 320, sm: 480 },
            //     bgcolor: 'background.paper',}}>
            //     <Tabs
            //         value={value}
            //         onChange={handleChange}
            //         variant="scrollable"
            //         scrollButtons
            //         aria-label="visible arrows tabs example"
            //         sx={{
            //             [`& .${tabsClasses.scrollButtons}`]: {
            //                 '&.Mui-disabled': { opacity: 0.3 },
            //             },
            //         }}
            //     >
            //         <Tab label={filter}/>
            //     </Tabs>
            // </Box>
//         );
// }