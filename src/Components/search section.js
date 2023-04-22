import React from "react";

function SearchSection() {
    return (
        <div className="search-section">
            <div className="search-box-container">
                <input type="text" placeholder="Start your search" className="search-box" />
                <button className="booked-experiences-btn">Booked Experiences</button>
            </div>
            <div className="filter-buttons-container">
                <button className="filter-btn">Filter 1</button>
                <button className="filter-btn">Filter 2</button>
                <button className="filter-btn">Filter 3</button>
            </div>
        </div>
    );
}

export default SearchSection;