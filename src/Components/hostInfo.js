import React from 'react';
import {
    Autocomplete, Avatar,
    Checkbox,
    FormControlLabel,
    Grid, IconButton,
    List, ListItem, ListItemAvatar, ListItemText,
    Rating,
    Switch,
    TextField,
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


// {{Information.map((params, index)  => (
//     {index===1 && return({props}))
// }}
// const Details = (props) => {
//     // eslint-disable-next-line array-callback-return
//     Information.map((info) => {
//             if (info.id === 1) {
//                 return
//                 let hostt = info.HostName;
//                 let about = info.about;
//                 let address = info.address;
//             }
//             }
//         }
//     )
// }

function HostInfo() {
    const theme = useTheme();

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
                            HostName
                        </Typography>
                        <Typography variant="subtitle1">
                            a paragraph about the host will be here
                        </Typography>

                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            what you need to bring
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
                            address
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



