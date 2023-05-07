import {Avatar, Divider, Fab, Grid, List, ListItem, ListItemIcon, ListItemText, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react";
import Topbar from "./Topbar";

import React from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const users = [
    {
        id: 1,
        name: 'Ohad Nahari',
        avatar: 'https://material-ui.com/static/images/avatar/1.jpg',
        status: 'online',
    },
    {
        id: 2,
        name: 'Rotem Hashdi',
        avatar: 'https://material-ui.com/static/images/avatar/3.jpg',
        status: 'offline',
    },
    {
        id: 3,
        name: 'Lia Strauss',
        avatar: 'https://material-ui.com/static/images/avatar/2.jpg',
        status: 'offline',
    },
];

export function ChatBox1 () {
    const [value, setValue] = useState(null);
    const [hover, setHover] = useState(-1);

    const handleListItemMouseEnter = (event, index) => {
        setHover(index);
    };

    const handleListItemMouseLeave = () => {
        setHover(-1);
    };

    const labels = users.map((user) => user.name);

    return (
        <div>
            <Topbar/>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3" className="header-message">
                        Chat
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                component={Paper}
                sx={{ width: '100%', height: '80vh'}}
            >
                <Grid item xs={3} sx={{ borderRight: '1px solid #e0e0e0' }}>
                    <List>
                        <ListItem key="RemySharp">
                            <ListItemIcon>
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                            </ListItemIcon>
                            <ListItemText primary="John Wick"></ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        {users.map((user) => (
                            <ListItem
                                key={user.id}
                                onMouseEnter={(event) => handleListItemMouseEnter(event, user.id)}
                                onMouseLeave={handleListItemMouseLeave}
                            >
                                <ListItemIcon>
                                    <Avatar alt={user.name} src={user.avatar} />
                                </ListItemIcon>
                                <ListItemText primary={user.name} />
                                <ListItemText
                                    secondary={user.status}
                                    align="right"
                                    sx={{ color: user.status === 'online' ? 'success.main' : 'error.main' }}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    {/*<Grid item xs={12} style={{ padding: '10px' }}>*/}
                    {/*    <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />*/}
                    {/*</Grid>*/}
                    <Divider />
                </Grid>
                <Grid item xs={9}>
                    <List sx={{ height: '70vh', overflowY: 'auto' }}>
                        <ListItem key="1">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="right" primary="Hey man, What's up ?" />
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="09:30" />
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="2">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="left" primary="Hey, Iam Good! What about you ?" />
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="left" secondary="09:31" />
                                 </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="3">
                            <Grid container>
                                 <Grid item xs={12}>
                                     <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
                                 </Grid>
                               <Grid item xs={12}>
                                    <ListItemText align="right" secondary="10:30"></ListItemText>
                                 </Grid>
                            </Grid>
                         </ListItem>
                     </List>
                     <Divider />
                    <Grid container style={{padding: '20px'}}>
                         <Grid item xs={11}>
                             <TextField id="outlined-basic-email" label="Type Something" fullWidth />
                         </Grid>
                        <Grid xs={1} align="right">
                             <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                         </Grid>
                     </Grid>
                 </Grid>
            </Grid>
         </div>
     );
 }




//     return (
//         <div>
//             <Grid container>
//                 <Grid item xs={12} >
//                     <Typography variant="h5" className="header-message">Chat</Typography>
//                 </Grid>
//             </Grid>
//             <Grid container component={Paper} sx={{width: '100%', height: '80vh'
//             }}>
//                 <Grid item xs={3} sx={{borderRight: '1px solid #e0e0e0'
//                 }}>
//                     <List>
//                         <ListItem button key="RemySharp">
//                             <ListItemIcon>
//                                 <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
//                             </ListItemIcon>
//                             <ListItemText primary="John Wick"></ListItemText>
//                         </ListItem>
//                     </List>
//                     <Divider />
//                     <Grid item xs={12} style={{padding: '10px'}}>
//                         <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
//                     </Grid>
//                     <Divider />
//                     <List>
//                         <ListItem button key="RemySharp">
//                             <ListItemIcon>
//                                 <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
//                             </ListItemIcon>
//                             <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
//                             <ListItemText secondary="online" align="right"></ListItemText>
//                         </ListItem>
//                         <ListItem button key="Alice">
//                             <ListItemIcon>
//                                 <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
//                             </ListItemIcon>
//                             <ListItemText primary="Alice">Alice</ListItemText>
//                         </ListItem>
//                         <ListItem button key="CindyBaker">
//                             <ListItemIcon>
//                                 <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
//                             </ListItemIcon>
//                             <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
//                         </ListItem>
//                     </List>
//                 </Grid>
//                 <Grid item xs={9}>
//                     <List sx={{height: '70vh', overflowY: 'auto'
//                     }}>
//                         <ListItem key="1">
//                             <Grid container>
//                                 <Grid item xs={12}>
//                                     <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <ListItemText align="right" secondary="09:30"></ListItemText>
//                                 </Grid>
//                             </Grid>
//                         </ListItem>
//                         <ListItem key="2">
//                             <Grid container>
//                                 <Grid item xs={12}>
//                                     <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <ListItemText align="left" secondary="09:31"></ListItemText>
//                                 </Grid>
//                             </Grid>
//                         </ListItem>
//                         <ListItem key="3">
//                             <Grid container>
//                                 <Grid item xs={12}>
//                                     <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <ListItemText align="right" secondary="10:30"></ListItemText>
//                                 </Grid>
//                             </Grid>
//                         </ListItem>
//                     </List>
//                     <Divider />
//                     <Grid container style={{padding: '20px'}}>
//                         <Grid item xs={11}>
//                             <TextField id="outlined-basic-email" label="Type Something" fullWidth />
//                         </Grid>
//                         <Grid xs={1} align="right">
//                             <Fab color="primary" aria-label="add"><SendIcon /></Fab>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </div>
//     );
// }

export default function ChatBox() {
    return (
        <div>
            <Box sx={{ backgroundColor: '#eee' }}>
                <Box className="container" py={5}>
                    <Box className="row">
                        <Box className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                            <h5 className="font-weight-bold mb-3 text-center text-lg-start">Member</h5>
                            <Card>
                                <CardContent>
                                    <ul className="list-unstyled mb-0">
                                        <li className="p-2 border-bottom" sx={{ backgroundColor: '#eee' }}>
                                            <a href="#!" className="d-flex justify-content-between">
                                                <Box className="d-flex flex-row">
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                                                        alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                                        width="60"
                                                    />
                                                    <Box className="pt-1">
                                                        <p className="fw-bold mb-0">John Doe</p>
                                                        <p className="small text-muted">Hello, Are you there?</p>
                                                    </Box>
                                                </Box>
                                                <Box className="pt-1">
                                                    <p className="small text-muted mb-1">Just now</p>
                                                    <span className="badge bg-danger float-end">1</span>
                                                </Box>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom">
                                            <a href="#!" className="d-flex justify-content-between">
                                                <Box className="d-flex flex-row">
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
                                                        alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                                        width="60"
                                                    />
                                                    <Box className="pt-1">
                                                        <p className="fw-bold mb-0">Danny Smith</p>
                                                        <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                                    </Box>
                                                </Box>
                                                <Box className="pt-1">
                                                    <p className="small text-muted mb-1">5 mins ago</p>
                                                </Box>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom">
                                            <a href="#!" className="d-flex justify-content-between">
                                                <Box className="d-flex flex-row">
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                                                        alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                                        width="60"
                                                    />
                                                    <Box className="pt-1">
                                                        <p className="fw-bold mb-0">Alex Steward</p>
                                                        <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                                    </Box>
                                                </Box>
                                                <Box className="pt-1">
                                                    <p className="small text-muted mb-1">Yesterday</p>
                                                </Box>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom">
                                            <a href="#!" className="d-flex justify-content-between">
                                                <Box className="d-flex flex-row">
                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp" alt="avatar"
                                                         className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                                                    <Box pt={1}>
                                                        <p className="fw-bold mb-0">John Doe</p>
                                                        <p className="small text-muted">Hello, Are you there?</p>
                                                    </Box>
                                                </Box>
                                                {/*<Box pt={1}>*/}
                                                {/*    <p className="small text-muted mb-1">Just now</p>*/}
                                                {/*    <Badge badgeContent={1} color="error" sx={{ float: 'right' }} />*/}
                                                {/*</Box>*/}
                                            </a>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Box>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp" alt="avatar"
                                             className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                                        <Box pt={1}>
                                            <p className="fw-bold mb-0">Danny Smith</p>
                                            <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ pt: 1 }}>
                                        <Typography variant="subtitle2" color="text.secondary" mb={1}>
                                            5 mins ago
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </Card>
                            <Card sx={{ mb: 2 }}>
                                <Box sx={{ display: "flex", flexDirection: "row" }}>
                                    <CardMedia
                                        component="img"
                                        image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                                        alt="avatar"
                                        sx={{ borderRadius: "50%", width: 60 }}
                                    />
                                    <CardContent sx={{ pt: 1 }}>
                                        <Typography variant="subtitle1" fontWeight="bold" mb={0}>
                                            Alex Steward
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                                            Lorem ipsum dolor sit.
                                        </Typography>
                                    </CardContent>
                                </Box>
                                <CardContent sx={{ pt: 1 }}>
                                    <Typography variant="subtitle2" color="text.secondary" mb={1}>
                                        Yesterday
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{ mb: 2 }}>
                                <Box sx={{ display: "flex", flexDirection: "row" }}>
                                    <CardMedia
                                        component="img"
                                        image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                                        alt="avatar"
                                        sx={{ borderRadius: "50%", width: 60 }}
                                    />
                                    <CardContent sx={{ pt: 1 }}>
                                        <Typography variant="subtitle1" fontWeight="bold" mb={0}>
                                            Ashley Olsen
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>







//
// {/*                        </Box>*/}
//             {/*                    </CardContent>*/}
//             {/*                </Card>*/}
//             {/*            </Box>*/}
//             {/*        </Box>*/}
//             {/*    </Box>*/}
//             {/*</Box>*/}

// {/*<Card>*/}
// {/*    <CardContent sx={{ display*/}







                                )
}