import React from "react";
import SearchBox from "./searchBox";
import Logo from "./logo";
import {Avatar, Button, Divider} from "@mui/material";
import AllFilters from "./allFilters";
import {filterData} from "../data/filter-data";
// for the routing to other pages
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";


function SearchSection() {
    let navigate = useNavigate();
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
                    {/*<Button variant="text">Booked experiences</Button>*/}
                    <Avatar src="/broken-image.jpg" />
                </Box>
            </Box>
            <Divider />
            {/*<div className="filter-buttons-container">*/}
            <Box sx={{
                display: 'flex',
            }}>
                <AllFilters data={filterData}/>
            </Box>
        </Box>
    );
}

export default SearchSection;