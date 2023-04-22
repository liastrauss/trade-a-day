import React from 'react';
import { MdAccessTime, MdLocationOn, MdStar } from 'react-icons/md';

const Card = ({ picture, title, duration, location, rating }) => {
    return (
        <div className="card">
            <img src={picture} alt={title} />
            <div className="card-info">
                <div className="title-row">
                    <h2 className="title">{title}</h2>
                    <p className="rating"><MdStar /> {rating}</p>
                </div>
                <div className="subtitle-row">
                    <p className="subtitle"><MdLocationOn /> {location}</p>
                    <p className="subtitle"><MdAccessTime /> {duration}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
