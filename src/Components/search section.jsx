import React from "react";
import FilterTabs from "./filterChips";
import AllFilters from "./allFilters";
// for the routing to other pages
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import {useTheme} from "@mui/material/styles";
import Topbar from "./Topbar";
import {filterData} from "../data/filter-data";
import Chips from "./filterChips";


function SearchSection() {
    const theme = useTheme();
    return (
        <Box>
            {/*<Topbar Search AddDay Profile/>*/}

            {/*filters with buttons */}
            {/*<Box sx={{*/}
            {/*    display: 'flex',*/}
            {/*    justifyContent: 'centered',*/}
            {/*    alignItems: 'center',*/}
            {/*}}>*/}
            {/*    <AllFilters data={filterData}/>*/}
            {/*</Box>*/}

            {/*filters with chips*/}
            {/*<FilterTabs/>*/}
            <Chips data={filterData}/>
        </Box>
    );
}

export default SearchSection;