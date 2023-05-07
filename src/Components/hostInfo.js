import React from 'react';
import {
    Grid,
    Typography,
} from "@mui/material";
// import { alpha, styled } from '@mui/material/styles';
// import FolderIcon from '@mui/icons-material/Folder';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Button from "@mui/material/Button";
// import {PhotoCamera} from "@mui/icons-material";
import {useTheme} from "@mui/material/styles";
import {StandardImageList} from "./view2";

import {Information} from "../pages/OverView-elements/information";
import Box from "@mui/material/Box";
// import {cardData} from "../data/card-data";
import {useParams} from "react-router-dom";
import info from "../data/event-data.json";

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

    let {index} = useParams();
    console.log(index);

    let hostt = info.events[index - 1].hostName;
    let about = info.events[index - 1].about;
    let address = info.events[index - 1].location;
    let bring = info.events[index - 1].bring;
    let time = info.events[index - 1].duration;

    return (
        <React.Fragment>
            <div>
                <Typography variant="h6" gutterBottom>
                </Typography>

                <Grid container spacing={3} justifyContent="space-evenly"
                >
                    <Grid item xs={12}>
                        <Typography variant="h5" color="primary" gutterBottom>
                            A day with {hostt}
                        </Typography>
                        <Typography variant="subtitle1">
                            {about}
                        </Typography>

                    </Grid>


                    <Grid item xs={12}>
                        <Typography variant="subtitle2" color="primary">
                            Gallery
                        </Typography>

                    </Grid>

                    <StandardImageList/>

                    <Grid item xs={4}>
                        <Typography variant="subtitle2" color="primary">
                            Location
                        </Typography>
                        <Typography variant="subtitle1">
                            {address}
                        </Typography>
                            {/*<Mapp/>*/}


                    </Grid>
                    {/*TODO play with grid here so map will be good*/}
                    {/*<Grid item xs={6} justifyContent="flex-start" alignContent = "center">*/}
                    {/*    <Mapp/>*/}
                    {/*</Grid>*/}
                    <Grid item xs={4}>

                        <Typography variant="subtitle2" color="primary">
                                 What to bring:
                        </Typography>

                        <Typography variant="subtitle1">
                            {bring}
                        </Typography>

                    </Grid>

                    <Grid item xs={4}>

                        <Typography variant="subtitle2" color="primary">
                            Duration:
                        </Typography>

                        <Typography variant="subtitle1">
                            {time}
                        </Typography>

                    </Grid>

                </Grid>
            </div>
        </React.Fragment>
    )
}

export default HostInfo;



