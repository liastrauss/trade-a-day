import React from "react";
import SearchBox from "./searchBox";
import Logo from "./logo";
import {Button, Divider} from "@mui/material";
import AllFilters from "./allFilters";
import {filterData} from "../data/filter-data";
// for the routing to other pages
import {useNavigate} from "react-router-dom";


function SearchSection() {
    let navigate = useNavigate();
    return (
        <div className="search-section-container">
            <div className="search-box-container">
                <Logo/>
                <SearchBox/>
                <Button
                    variant="outlined"
                    onClick={() => {
                        navigate("/AddEvent");
                    }}
                >
                    Trade your day
                </Button>
                <Button variant="text">Booked experiences</Button>
            </div>
            <Divider />
            <div className="filter-buttons-container">
                <AllFilters data={filterData}/>
            </div>
        </div>
    );
}

export default SearchSection;