import {useTheme} from "@mui/material/styles";
import {useParams} from "react-router-dom";
import info from "../data/event-data.json";
import React from "react";
import {Grid, Typography} from "@mui/material";
import {StandardImageList} from "../Components/view2";
import Button from "@mui/material/Button";

function HostInfo2(props) {
    const theme = useTheme();

    // let {index} = useParams();
    const index = props.index;
    const hostt = info.events[index - 1].hostName;
    const about = info.events[index - 1].about;
    const address = info.events[index - 1].location;
    const bring = info.events[index - 1].bring;
    const time = info.events[index - 1].duration;


    // let hostt = info.events[index - 1].hostName;
    // let about = info.events[index - 1].about;
    // let address = info.events[index - 1].location;
    // let bring = info.events[index - 1].bring;
    // let time = info.events[index - 1].duration;

    return (
        <React.Fragment>
            <div>
                <Typography variant="h6" gutterBottom>
                </Typography>

                <Grid container spacing={3} justifyContent="space-evenly"
                >
                    <Grid item xs={12}>
                        <Typography variant="h5" color="primary" gutterBottom>
                            Your booked day with {hostt}
                        </Typography>
                        <Typography variant="subtitle1">
                            {about}
                        </Typography>

                    </Grid>


                    {/*<Grid item xs={12}>*/}
                    {/*    <Typography variant="subtitle2" color="primary">*/}
                    {/*        Gallery*/}
                    {/*    </Typography>*/}

                    {/*</Grid>*/}
                    {/*<StandardImageList/>*/}

                    <Grid item xs={2}>
                        <Typography variant="subtitle2" color="primary">
                            Location
                        </Typography>
                        <Typography variant="subtitle1">
                            {address}
                        </Typography>
                        {/*<Mapp/>*/}


                    </Grid>
                    {/*<Grid item xs={6} justifyContent="flex-start" alignContent = "center">*/}
                    {/*    <Mapp/>*/}
                    {/*</Grid>*/}
                    <Grid item xs={3}>

                        <Typography variant="subtitle2" color="primary">
                            What to bring:
                        </Typography>

                        <Typography variant="subtitle1">
                            {bring}
                        </Typography>

                    </Grid>

                    <Grid item xs={2}>

                        <Typography variant="subtitle2" color="primary">
                            Duration:
                        </Typography>
                        <Typography variant="subtitle1">
                            {time}
                        </Typography>

                    </Grid>

                    <Grid item xs={2}>
                    <Button variant="contained">chat now</Button>
                    </Grid>

                </Grid>
            </div>
        </React.Fragment>
    )
}

export default HostInfo2;