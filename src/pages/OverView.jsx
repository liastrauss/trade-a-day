import React from 'react';
import {Albume} from "./OverView-elements/Albume";
import {Images} from "../Components/View";
import {Avatar, ImageListItem} from "@mui/material";
import * as PropTypes from "prop-types";
import "../OverView.css";
import TopBar from "../Components/top bar";
ImageListItem.propTypes = {children: PropTypes.node};



function OverView() {
    return (

        <div>
            {/*permanent bar*/}
            <TopBar/>

            {/*profile*/}
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{width: 56, height: 56}}/>

            <div className="Host">
                {"a paragraph about the host"}

            </div>

           {/*pictures and hose info*/}
            <div className="albume">
                {Albume.map((product) => (
                    <Images data={product}/>
                ))}

                <div className="Host">
                  {"what you need to bring with you:"}
                    <p>{"hat"}</p>
                    <p>{"long shirt"}</p>
                    <p>{"close shoes"}</p>


                </div>

            </div>
        </div>

);
}


export default OverView;