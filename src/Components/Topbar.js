import Box from "@mui/material/Box";
import Logo from "./logo";
import Button from "@mui/material/Button";
import {Avatar, Divider, useScrollTrigger} from "@mui/material";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material/styles";
import SearchBox from "./searchBox";
import AppBar from '@mui/material/AppBar';
import Paper from "@mui/material/Paper";
import Toolbar from '@mui/material/Toolbar';
import {auth} from "../config/firebase";
import {useEffect, useState} from "react";


// for the elevation when scorlled
function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}


// export function newTopbar(props) {
//     let navigate = useNavigate();
//     const theme = useTheme();
//     const AddDay = props.AddDay;
//     const Search = props.Search;
//     const Profile = props.Profile;
//
//     return (
//         <ElevationScroll {...props}>
//             <AppBar sx={{
//                 bgcolor: 'background.paper',
//                 width: 1,
//                 flexDirection: 'row',
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 mx: 4,
//
//             }}>
//             <Toolbar>
//             <Box position='static'
//                  sx={{mt: 2}}>
//                 <Box sx={{
//                     // display: 'flex',
//                     // justifyContent: 'space-between',
//                     // alignItems: 'center',
//                     // mx: 4
//                 }}>
//                     <Logo/>
//                     {Search ?
//                         <SearchBox/>
//                         //     placeholder with empty space so it will look the same
//                         :  <Box sx={{width: 350, height: 32}} />
//                     }
//                     <Box sx={{
//                         display: 'flex',
//                         justifyContent: 'space-around',
//                     }}>
//
//                         {AddDay ?
//                             <Button
//                                 variant="text"
//                                 onClick={() => {
//                                     navigate("/AddEvent");
//                                 }}
//                             >
//                                 Trade your day
//                             </Button>
//                             :
//                             <Button
//                                 variant="text"
//                                 disabled
//                             >
//                                 Trade your day
//                             </Button>
//                         }
//
//                         <Button variant="outlined">My bookings</Button>
//                         <Avatar src="/broken-image.jpg"
//                                 sx={{ml: 1}}
//                                 onClick={() => {
//                                     navigate("/CreateProfile");
//                                 }}
//                                 style={{cursor:'pointer'}}
//                         />
//                     </Box>
//                 </Box>
//                 {/*<Divider />*/}
//             </Box>
//             </Toolbar>
//             </AppBar>
//         </ElevationScroll>
//     );
// }

//
export default function Topbar(props) {
    let navigate = useNavigate();
    const theme = useTheme();
    const AddDay = props.AddDay;
    const Search = props.Search;
    const Profile = props.Profile;
    const BookedEvents = props.BookedEvents;
    let greeting = "Log in!"

    const [avatarSrc, setAvatarSrc] = useState("/broken-image.jpg");
    useEffect(() => {
        {auth?.currentUser?.displayName ? greeting="Hello {auth.currentUser.displayName}!" : greeting="Log in!"}
    }, [auth]);
    useEffect(() => {
        // Update the avatar source when the auth object changes
        if (auth?.currentUser?.photoURL) {
            setAvatarSrc(auth.currentUser.photoURL);
        }
    }, [auth]);



    return (
            <Box position='static'
             sx={{mt: 2}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mx: 4
            }}>
                <Logo/>
                {Search ?
                <SearchBox/>
                //     placeholder with empty space so it will look the same
                :  <Box sx={{width: 350, height: 32}} />
                        }

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                }}>

                    {AddDay ?
                        <Button
                            variant="text"
                            onClick={() => {
                                navigate("/AddEvent");
                            }}
                        >
                            Trade your day
                        </Button>
                        :
                        <Button
                            variant="text"
                            disabled
                        >
                            Trade your day
                        </Button>
                    }

                    {auth?.currentUser?.displayName ?
                        <Button
                            variant="text"
                            disabled
                        >
                            {auth?.currentUser?.displayName}
                        </Button>
                        :
                        <Button
                            variant="text"
                            onClick={() => {
                                navigate("/CreateProfile");
                            }}
                        >
                            Log In!
                        </Button>
                    }

                    <Avatar src={avatarSrc}
                            sx={{ml: 1}}
                            onClick={() => {
                                navigate("/CreateProfile");
                            }}
                            style={{cursor:'pointer'}}
                    />
                </Box>
        </Box>
        <Divider />
        </Box>
    );
}
