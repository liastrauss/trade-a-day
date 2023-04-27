import React from "react";
import Filter from "./filter";
import {useTheme} from "@mui/material/styles";

const AllFilters = ({data}) => {
    const theme = useTheme();
    const filters = data.map((params, index) => {
        return <Filter key={index} {...params}
        sx={{
            fontFamily: theme.typography.fontFamily
        }}
        />;
    });
    return <div className = "cards-container">{filters}</div>
};

export default AllFilters;

