import React from "react";
import { MdSearch } from 'react-icons/md';
import SearchBox from "./searchBox";

function SearchSection() {
    return (
        <div className="search-section-container">
            <div className="search-box-container">
                <SearchBox/>
                <button className="btn">Booked Experiences</button>
            </div>
            <div className="filter-buttons-container">
                <button className="btn">Indoors</button>
                <button className="btn">Negev</button>
                <button className="btn">Agriculture</button>
                <button className="btn">Half day</button>
                <button className="btn">Jerusalem</button>
                <button className="btn">Full day</button>
                <button className="btn">Office</button>
                <button className="btn">Center district</button>
            </div>
        </div>
    );
}

export default SearchSection;