import React from 'react';
import {styled, createTheme, ThemeProvider, useTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../Components/sidebar items';
// import Chart from './Chart';
// import Deposits from './Deposits';
import Orders from '../Components/booked overview';
import Topbar from "../Components/Topbar";
import ListItemIcon from "@mui/material/ListItemIcon";
import {ListItemText} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import HostInfo from "../Components/hostInfo";
import ListSubheader from "@mui/material/ListSubheader";
import data from '../data/booked-days.json';



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
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const mytheme = useTheme()

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };
    // const personOrders = data.people[0];

    return (
        // <ThemeProvider theme={mytheme}>
        <Container
            // maxWidth="lg"
            // sx={{ mt: 4, mb: 4 }}
        >
            <Box>
                <Topbar AddDay/>
            {/*    TODO - it gets smaller, but actually looks better. change others to match or change this*/}
            </Box>

            {/*BOX FOR WHOLE PAGE*/}
            <Box
                sx={{ display: 'flex' }}
            >

                {/*LIST*/}

                <Box sx={{
                        alignItems: "flex-start",
                        width: '100%',
                        maxWidth: 260,
                        bgcolor: 'background.paper' }}>
                    <ListSubheader>As a Guest</ListSubheader>
                    <Divider/>
                    <List component="nav" aria-label="main mailbox folders">
                            <ListItemButton
                                selected={selectedIndex === 0}
                                onClick={(event) => handleListItemClick(event, 0)}
                            >
                                {/*<ListItemIcon>*/}
                                {/*    <InboxIcon />*/}
                                {/*</ListItemIcon>*/}
                                <ListItemText primary="June 30" secondary="orejdkf"/>
                            </ListItemButton>
                            <ListItemButton
                                selected={selectedIndex === 1}
                                onClick={(event) => handleListItemClick(event, 1)}
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
                        <List component="nav" aria-label="secondary mailbox folder">
                            <ListItemButton
                                selected={selectedIndex === 2}
                                onClick={(event) => handleListItemClick(event, 2)}
                            >
                                <ListItemText primary="September 14" />
                            </ListItemButton>
                            <ListItemButton
                                selected={selectedIndex === 3}
                                onClick={(event) => handleListItemClick(event, 3)}
                            >
                                <ListItemText primary="Trade a new day" />
                            </ListItemButton>
                            <ListItemButton
                                selected={selectedIndex === 4}
                                onClick={(event) => handleListItemClick(event, 3)}
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
                                    <Orders data={data.group1}/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Container>
        // </ThemeProvider>

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
//                 onClick={(event) => handleListItemClick(event, 0)}
//             >
//                 <ListItemIcon>
//                     <InboxIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Inbox" />
//             </ListItemButton>
//             <ListItemButton
//                 selected={selectedIndex === 1}
//                 onClick={(event) => handleListItemClick(event, 1)}
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
//                 onClick={(event) => handleListItemClick(event, 2)}
//             >
//                 <ListItemText primary="Trash" />
//             </ListItemButton>
//             <ListItemButton
//                 selected={selectedIndex === 3}
//                 onClick={(event) => handleListItemClick(event, 3)}
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