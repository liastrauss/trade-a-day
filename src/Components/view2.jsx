import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Albume, Albume2} from "../pages/OverView-elements/Albume";
import Box from "@mui/material/Box";
import {cardData} from "../data/card-data";
import {useParams} from "react-router-dom";

export function StandardImageList() {
    let {index}=useParams();

    let pic1= cardData[index-1].gallery1;
    let pic2= cardData[index-1].gallery2;
    let pic3= cardData[index-1].gallery3;
    let pic4= cardData[index-1].gallery4;
    let pic5= cardData[index-1].picture;

    let a = [pic5,pic1,pic2,pic3,pic4];

    return (
        <ImageList className="pictures" sx={{ width: 500, height: 250, my: 2, mx: 2}} cols={2} rowHeight={164}>
            {a.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="gallery"
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}


export function Mapp() {
    let {index}=useParams();
    let pic4= cardData[index-1].map;
    let b=[pic4]
    return (
        <Box>
            <ImageList className="pictures" sx={{width: 500, height: 250, my: 3 }} cols={2} rowHeight={164}>
                {b.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt="map"
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}