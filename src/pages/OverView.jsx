import React from 'react';
import {Albume, Info} from "./OverView-elements/Albume";
import {Images} from "../Components/View";
import {Avatar, ImageListItem} from "@mui/material";
import * as PropTypes from "prop-types";
import "../OverView.css";
import TopBar from "../Components/top bar";
import {StandardImageList, Mapp} from "../Components/view2";
import BasicRating from "../Components/rating";
import DateRangeCalendarCalendarProp from "../Components/calender";

ImageListItem.propTypes = {children: PropTypes.node};



function OverView() {
    return (

        <div className="container">
            {/*permanent bar*/}
            <TopBar/>

            {/*profile*/}
            <Avatar

                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{width: 56, height: 56}}/>

            <BasicRating />

            <div className="divider"></div>


            <div className="Host" >
                {"a paragraph about the host will be here"}

            </div>

            <div className="divider"></div>

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

                <div className="divider"></div>

                <div className="Host" >
                    {"address"}

                </div>

                <Mapp/>

            </div>



            <button className="book">I want to book!</button>
        </div>

);
}


export default OverView;