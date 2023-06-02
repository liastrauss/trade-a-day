import React, {useEffect, useState} from 'react';
import {Grid, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {StandardImageList} from "./view2";
import {useParams} from "react-router-dom";
import {db} from "../config/firebase";
import {collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore";


function HostInfo() {
    const theme = useTheme();
    const { index } = useParams(); // Access the id parameter from the URL

    const [eventInfoData, setEventInfoData] = useState();

    useEffect (() => {
        async function fetchEventInfoData(){
            try {
                //TODO this function gets index as parameter. need to send document id for routing to send parameter, but otherwise works!
                const eventInfoRef = doc(db, "DataBase1", index)
                const eventInfoSnapshot = await getDoc(eventInfoRef)
                const data = eventInfoSnapshot.data()
                setEventInfoData(data);
            } catch (error) {
                console.error("Error retrieving event info:", error)
            }
        }
        fetchEventInfoData();
    }, [index]);


    return (
        <React.Fragment>
            <div>
                <Typography variant="h6" gutterBottom>
                </Typography>

                <Grid container spacing={3} justifyContent="space-evenly"
                >
                    <Grid item xs={12}>
                        <Typography variant="h5" color="primary" gutterBottom>
                            A day with {eventInfoData?.hostName}
                        </Typography>
                        <Typography variant="subtitle1">
                            {eventInfoData?.about}
                        </Typography>

                    </Grid>


                    <Grid item xs={12}>
                        <Typography variant="subtitle2" color="primary">
                            Gallery
                        </Typography>

                    </Grid>

                    {/*<StandardImageList/>*/}

                    <Grid item xs={4}>
                        <Typography variant="subtitle2" color="primary">
                            Location
                        </Typography>
                        <Typography variant="subtitle1">
                            {eventInfoData?.location}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>

                        <Typography variant="subtitle2" color="primary">
                                 What to bring:
                        </Typography>

                        <Typography variant="subtitle1">
                            {eventInfoData?.bring}
                        </Typography>

                    </Grid>

                </Grid>
            </div>
        </React.Fragment>
    )
}

export default HostInfo;



