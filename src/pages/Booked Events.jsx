import React from 'react';
import {styled, createTheme, ThemeProvider, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Orders from '../Components/booked overview';
import Topbar from "../Components/Topbar";
import {ListItemText} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import HostInfo2 from "../Components/hostInfo2";
import ListSubheader from "@mui/material/ListSubheader";
import data from '../data/booked-days.json';
import Button from "@mui/material/Button";



const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         '& .MuiDrawer-paper': {
//             position: 'relative',
//             whiteSpace: 'nowrap',
//             width: drawerWidth,
//             transition: theme.transitions.create('width', {
//                 easing: theme.transitions.easing.sharp,
//                 duration: theme.transitions.duration.enteringScreen,
//             }),
//             boxSizing: 'border-box',
//             ...(!open && {
//                 overflowX: 'hidden',
//                 transition: theme.transitions.create('width', {
//                     easing: theme.transitions.easing.sharp,
//                     duration: theme.transitions.duration.leavingScreen,
//                 }),
//                 width: theme.spacing(7),
//                 [theme.breakpoints.up('sm')]: {
//                     width: theme.spacing(9),
//                 },
//             }),
//         },
//     }),
// );

// const mdTheme = useTheme();

function DashboardContent() {
    const [selectedIndex, setSelectedIndex] = React.useState(3);
    const [selectedDay, setSelectedDay] = React.useState("day1");
    // a boolean flag for which page we're on
    const [Host, setHost] = React.useState(true);


    const mytheme = useTheme()

    const handleVisitorItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setHost(false);
    };

    // this function is suitable for the host days, as it also changes the day that orders should render later:
    const handleHostListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
        day: string,
    ) => {
        setSelectedIndex(index);
        setSelectedDay(day);
        setHost(true);

    };

    const dayNames = Object.keys(data);

    return (
        <div>
        <Box>
            <Topbar AddDay/>
        </Box>

    <Container>
            {/*// maxWidth="lg"*/}
            {/*// sx={{ mt: 4, mb: 4 }}*/}


        {/*BOX FOR WHOLE PAGE*/}
            <Box
                sx={{ display: 'flex' }}
            >

                {/*LIST*/}

                <Box sx={{
                        alignItems: "flex-start",
                        width: '100%',
                        maxWidth: 220,
                        bgcolor: 'background.paper' }}>
                    <ListSubheader>As a Guest</ListSubheader>
                    <Divider/>
                    <List component="nav" aria-label="main mailbox folders">
                            <ListItemButton
                                selected={selectedIndex === 0}
                                onClick={(event) => handleVisitorItemClick(event, 0)}
                            >
                                {/*<ListItemIcon>*/}
                                {/*    <InboxIcon />*/}
                                {/*</ListItemIcon>*/}
                                <ListItemText primary="June 30"/>
                            </ListItemButton>
                            <ListItemButton
                                selected={selectedIndex === 1}
                                onClick={(event) => handleVisitorItemClick(event, 1)}
                            >
                                {/*<ListItemIcon>*/}
                                {/*    <DraftsIcon />*/}
                                {/*</ListItemIcon>*/}
                                <ListItemText primary="August 2" />
                            </ListItemButton>
                        </List>
                    {/*HOST LIST*/}
                    <ListSubheader>As a Host</ListSubheader>
                    <Divider />

                        <List component="nav" aria-label="secondary host folder">

                            {dayNames.map((day,index) => (
                                <ListItemButton
                                    // adding 2 to the index to account for how many "guest days" there are. should be dynamic
                                    selected={selectedIndex === index+2}
                                    onClick={(event) => handleHostListItemClick(event, index+2,day)}
                                    key={day}
                                >
                                {/*    making the name of the list the date*/}
                                <ListItemText primary={data[day][0].day_date} />
                                </ListItemButton>

                            ))}


                            <ListItemButton
                                selected={selectedIndex === 5}
                                onClick={(event) => handleVisitorItemClick(event, 5)}
                            >
                                <ListItemText primary="Trade a new day" />
                            </ListItemButton>

                        </List>
                    </Box>

                {/*PAGE ITSELF*/}
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Container
                        maxWidth="lg"
                        sx={{ mt: 4, mb: 4 }}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

                                    {/*check if a host page or not*/}
                                    {Host ?
                                        // passing the correct day so it will render with important info from json
                                        <Orders dat={data[selectedDay]} />
                                        :
                                        // plaster - changing the props of the index of event-data from which to take the host info
                                        <HostInfo2 index={selectedIndex+1}/>

                                    }
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Container>
        </div>

    );
}
{/*// old return*/}
{/*// <ThemeProvider theme={myTheme}>*/}
{/*// <Box sx={{ display: 'flex' }}>*/}
{/*//     <CssBaseline />*/}
{/*//     <Topbar AddDay*/}
//         // open={open}
//     />
//
//
//     {/*    <Toolbar*/}
//     {/*        sx={{*/}
//     {/*            pr: '24px', // keep right padding when drawer closed*/}
//     {/*        }}*/}
//     {/*    >*/}
//     {/*        <IconButton*/}
//     {/*            edge="start"*/}
//     {/*            color="inherit"*/}
//     {/*            aria-label="open drawer"*/}
//     {/*            // onClick={toggleDrawer}*/}
//     {/*            sx={{*/}
//     {/*                marginRight: '36px',*/}
//     {/*                ...(open && { display: 'none' }),*/}
//     {/*            }}*/}
//     {/*        >*/}
//     {/*            <MenuIcon />*/}
//     {/*        </IconButton>*/}
//     {/*/!*        <Typography*!/*/}
//     {/*/!*            component="h1"*!/*/}
//     {/*/!*            variant="h6"*!/*/}
//     {/*/!*            color="inherit"*!/*/}
//     {/*/!*            noWrap*!/*/}
//     {/*/!*            sx={{ flexGrow: 1 }}*!/*/}
//     {/*/!*        >*!/*/}
//     {/*/!*            Dashboard*!/*/}
//     {/*/!*        </Typography>*!/*/}
//     {/*/!*        <IconButton color="inherit">*!/*/}
//     {/*/!*            <Badge badgeContent={4} color="secondary">*!/*/}
//     {/*/!*                <NotificationsIcon />*!/*/}
//     {/*/!*            </Badge>*!/*/}
//     {/*/!*        </IconButton>*!/*/}
//     {/*    </Toolbar>*/}
//     {/*<Drawer variant="permanent" open={open}>*/}
//     {/*    <Toolbar*/}
//     {/*        sx={{*/}
//     {/*            display: 'flex',*/}
//     {/*            alignItems: 'center',*/}
//     {/*            justifyContent: 'flex-end',*/}
//     {/*            px: [1],*/}
//     {/*        }}*/}
//     {/*    >*/}
//     {/*        <IconButton onClick={toggleDrawer}>*/}
//     {/*            <ChevronLeftIcon />*/}
//     {/*        </IconButton>*/}
//     {/*    </Toolbar>*/}
//     {/*    <Divider />*/}
//     {/*    <List component="nav">*/}
//     {/*        {mainListItems}*/}
//     {/*        <Divider sx={{ my: 1 }} />*/}
//     {/*        {secondaryListItems}*/}
//     {/*    </List>*/}
//     {/*</Drawer>*/}
//
//     <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//         <List component="nav" aria-label="main mailbox folders">
//             <ListItemButton
//                 selected={selectedIndex === 0}
//                 onClick={(event) => handleVisitorItemClick(event, 0)}
//             >
//                 <ListItemIcon>
//                     <InboxIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Inbox" />
//             </ListItemButton>
//             <ListItemButton
//                 selected={selectedIndex === 1}
//                 onClick={(event) => handleVisitorItemClick(event, 1)}
//             >
//                 <ListItemIcon>
//                     <DraftsIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Drafts" />
//             </ListItemButton>
//         </List>
//         <Divider />
//         <List component="nav" aria-label="secondary mailbox folder">
//             <ListItemButton
//                 selected={selectedIndex === 2}
//                 onClick={(event) => handleVisitorItemClick(event, 2)}
//             >
//                 <ListItemText primary="Trash" />
//             </ListItemButton>
//             <ListItemButton
//                 selected={selectedIndex === 3}
//                 onClick={(event) => handleVisitorItemClick(event, 3)}
//             >
//                 <ListItemText primary="Spam" />
//             </ListItemButton>
//         </List>
//     </Box>
//
//
//     <Box
//         component="main"
//         sx={{
//             backgroundColor: (theme) =>
//                 theme.palette.mode === 'light'
//                     ? theme.palette.grey[100]
//                     : theme.palette.grey[900],
//             flexGrow: 1,
//             height: '100vh',
//             overflow: 'auto',
//         }}
//     >
//         <Toolbar />
//         <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//             <Grid container spacing={3}>
//                 {/* Chart */}
//                 <Grid item xs={12} md={8} lg={9}>
//                     <Paper
//                         sx={{
//                             p: 2,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             height: 240,
//                         }}
//                     >
//                         {/*<Chart />*/}
//                     </Paper>
//                 </Grid>
//                 {/* Recent Deposits */}
//                 <Grid item xs={12} md={4} lg={3}>
//                     <Paper
//                         sx={{
//                             p: 2,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             height: 240,
//                         }}
//                     >
//                         {/*<Deposits />*/}
//                     </Paper>
//                 </Grid>
//                 {/* Recent Orders */}
//                 <Grid item xs={12}>
//                     <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
//                         <Orders />
//                     </Paper>
//                 </Grid>
//             </Grid>
//         </Container>
//     </Box>
// </Box>
// // </ThemeProvider>
// );
// }
//

export default function BookedEvents() {
    return <DashboardContent />;
}