
import {Albume, Info} from "./OverView-elements/Albume";
import {Images} from "../Components/View";
import {Avatar,  Divider, ImageListItem} from "@mui/material";
import * as PropTypes from "prop-types";
import "../OverView.css";
// import TopBar from "../Components/top bar";
import {StandardImageList, Mapp} from "../Components/view2";
import BasicRating from "../Components/rating";
import DateRangeCalendarCalendarProp from "../Components/calender";
import SearchSection from "../Components/search section";
import {useTheme} from "@mui/material/styles";


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

ImageListItem.propTypes = {children: PropTypes.node};



function OverView() {
    const theme = useTheme();
    return (
        <div className="container" >
            {/*permanent bar*/}
            {/*<TopBar/>*/}
            <SearchSection/>

            <Divider />

            {/*profile*/}
            {/*<Avatar*/}

            {/*    alt="Remy Sharp"*/}
            {/*    src="/static/images/avatar/1.jpg"*/}
            {/*    sx={{width: 56, height: 56}}/>*/}

            <BasicRating />


            <div className="Host" sx={{
                color: theme.palette.text.secondary,
                fontWeight: theme.typography.fontWeightRegular
            }} >
                {"a paragraph about the host will be here"}

            </div>


           {/*pictures and hose info*/}
            <div className="albume">
                {/*this was with view-aranging diffrently*/}
                {/*{Albume.map((product) => (*/}
                {/*    <Images data={product}/>*/}
                {/*))}*/}

                 <StandardImageList/>

                <div className="Host">
                  {"what you need to bring with you:"}
                    <p>{"hat"}</p>
                    <p>{"long shirt"}</p>
                    <p>{"close shoes"}</p>
                </div>


                <div className="Host" >
                    {"address"}

                    <Mapp/>

                </div>


            </div>


            <Button variant="text">I want to book!</Button>

        </div>

);
}


export default OverView;