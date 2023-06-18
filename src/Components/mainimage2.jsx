import React from 'react';
import MainImage from './mainImage';

const Images = ({ events }) => {

    return (
        <div>
            {events.map((item) => <MainImage key={item.id} eventInfoData={item} />)}
        </div>
    );

};

export default Images;
