import React from "react";
import SearchBox from "./searchBox";
import Logo from "./logo";
import {Avatar, Button, Divider} from "@mui/material";
import AllFilters from "./allFilters";
import {filterData} from "../data/filter-data";
// for the routing to other pages
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import {useTheme} from "@mui/material/styles";


function SearchSection() {
    let navigate = useNavigate();
    const theme = useTheme();
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mx: 4
            }}>
                <Logo/>
                <SearchBox/>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                }}>
                    <Button
                        variant="text"
                        onClick={() => {
                            navigate("/AddEvent");
                        }}
                    >
                        Trade your day
                    </Button>
                    <Button variant="outlined">My bookings</Button>
                    <Avatar src="/broken-image.jpg" sx={{ml: 1}} />
                </Box>
            </Box>
            <Divider />
            {/*<div className="filter-buttons-container">*/}
            <Box sx={{
                display: 'flex',
                justifyContent: 'centered',
                alignItems: 'center',
                // alignSelf: 'centered',
                /*    align-self: flex-start;*/
                /*    margin-left: 32px;*/
            }}>
                {/*<Button variant="contained" sx={{*/}
                {/*    color: theme.palette.primary.lightest,*/}
                {/*    height: 40,*/}
                {/*    width: 10,*/}
                {/*}}>*/}
                {/*    <FilterAltRoundedIcon/>*/}
                {/*</Button>*/}
                <AllFilters data={filterData}/>
            </Box>
        </Box>
    );
}

export default SearchSection;