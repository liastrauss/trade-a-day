import React from "react";
import {Button, Tab, Tabs, Box} from "@mui/material";

export default function Filter({filter}) {
    const [value, setValue] = React.useState(1);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        // <Button variant="outlined"
        // sx={{
        //     borderRadius: 3
        // }}
        // >{filter}</Button>
        <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                centered
            >
                <Tab label={filter}/>
            </Tabs>
        </Box>
    )
};

