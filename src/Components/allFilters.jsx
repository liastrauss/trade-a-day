import React from "react";
import Filter from "./filter";
import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";

const AllFilters = ({data}) => {
    const theme = useTheme();
    const filters = data.map((params, index) => {
        return <Filter key={index} {...params}
        sx={{
            fontFamily: theme.typography.fontFamily
        }}
        />;
    });
    return <Box sx={{
        display: 'flex',
        mt: 2
    }}
        >{filters}
    </Box>
};

export default AllFilters;

