import React from 'react';
import app from "../App";
import {
    Avatar,
    IconButton,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemText,
    TextField,
    Typography
} from "@mui/material";
import * as PropTypes from "prop-types";
import {MdAccessTime, MdLocationOn, MdStar} from "react-icons/md";

ImageListItem.propTypes = {children: PropTypes.node};


function CommentIcon() {
    return null;
}

const View = ({picture1, picture2, explan}) => {

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

            <div className="host-text">{explan}</div>
            <div className="host-text"> {"this is what you need to bring with you:"}</div>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {[1, 2, 3].map((value) => (
                    <ListItem
                        key={value}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                <CommentIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={`Line item ${value}`} />
                    </ListItem>
                ))}
            </List>


</div>
)
    ;
};


export default View;
