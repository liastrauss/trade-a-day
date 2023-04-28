import React from 'react';
import {
    Grid,
    Typography,
} from "@mui/material";
// import { alpha, styled } from '@mui/material/styles';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
import {PhotoCamera} from "@mui/icons-material";
import {useTheme} from "@mui/material/styles";
import {Mapp, StandardImageList} from "./view2";

import {Information} from "../pages/OverView-elements/information";
import Box from "@mui/material/Box";
import {cardData} from "../data/card-data";
import {useParams} from "react-router-dom";


// {{Information.map((params, index)  => (
//     {index===1 && return({props}))
// }}
// function Details(props) {
//     Information.map((info) => {
//         if (info.id === 1) {
//                 let hostt = info.HostName;
//                 let about = info.about;
//                 let address = info.address;
//         }
//     })}



function HostInfo() {
    const theme = useTheme();

    let {index}=useParams();
    console.log(index);


    let hostt= cardData[index].hostName;
    let about= cardData[index].about;
    let address = cardData[index].location;
    let bring= cardData[index].bring;

    return (
        <React.Fragment>
            <div>
                <Typography variant="h6" gutterBottom>
                </Typography>

                <Grid container spacing={3} justifyContent="space-evenly"
                >
                    {/*{Details}*/}
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>
                            {hostt}
                        </Typography>
                        <Typography variant="subtitle1">
                            {about}
                        </Typography>

                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="subtitle1" >
                            what you need to bring:
                            {bring}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="subtitle2">
                            Gallery
                        </Typography>
                    </Grid>

                    <StandardImageList/>

                    <Grid item xs={6}>
                        <Typography variant="subtitle1">
                            {address}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Mapp/>
                    </Grid>

                </Grid>
            </div>
        </React.Fragment>
    )
}

export default HostInfo;



