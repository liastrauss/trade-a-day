import React from 'react';
import app from "../App";
import {Avatar, ImageList, ImageListItem, TextField, Typography} from "@mui/material";
import * as PropTypes from "prop-types";
import {MdAccessTime, MdLocationOn, MdStar} from "react-icons/md";

ImageListItem.propTypes = {children: PropTypes.node};


const View = ({picture1, picture2}) => {

    return (
        <div>
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{width: 56, height: 56}}
            />

            <div className="view">
                <div className="card">
                    <img src={picture1}/>

                </div>

                <div className="card">
                    <img src={picture2}/>
                </div>
            </div>
            {/*<TextField id="filled-basic" label="Filled" variant="filled"/>*/}
            <div>{"This div's text looks like that of a button."}</div>



        </div>
    );
};


export default View;
