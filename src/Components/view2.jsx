import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Albume, Albume2} from "../pages/OverView-elements/Albume";
import Box from "@mui/material/Box";

export function StandardImageList() {
    return (
        <ImageList className="pictures" sx={{ width: 500, height: 250 }} cols={2} rowHeight={164}>
            {Albume.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.productImage}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.productImage}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}


export function Mapp() {
    return (
        <Box>
            <ImageList className="pictures" sx={{width: 500, height: 250}} cols={2} rowHeight={164}>
                {Albume2.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.productImage}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.productImage}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}