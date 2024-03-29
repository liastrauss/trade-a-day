import Box from "@mui/material/Box";
import Logo from "./logo";
import Button from "@mui/material/Button";
import {Avatar, Dialog, DialogActions, DialogContent, DialogTitle, Divider, useScrollTrigger} from "@mui/material";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material/styles";
import {auth} from "../config/firebase";
import {useEffect, useState} from "react";
import DialogContentText from "@mui/material/DialogContentText";

// for the elevation when scorlled
function ElevationScroll(props) {
    const {children, window} = props;
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


/
// not a toolbar
export default function Topbar(props) {
    let navigate = useNavigate();
    const theme = useTheme();
    const AddDay = props.AddDay;
    const Search = props.Search;
    const Profile = props.Profile;
    let greeting = "Log in!"
    const [openLogin, setOpenLogin] = useState(false);
    const handleOpenLogin = () => {
        setOpenLogin(true);
    };
    const handleCloseLogin = () => {
        setOpenLogin(false);
    };

    const [avatarSrc, setAvatarSrc] = useState("/broken-image.jpg");
    useEffect(() => {
        {
            auth?.currentUser?.displayName ? greeting = "Hello {auth.currentUser.displayName}!" : greeting = "Log in!"
        }
    }, [auth]);
    useEffect(() => {
        // Update the avatar source when the auth object changes
        if (auth?.currentUser?.photoURL) {
            setAvatarSrc(auth.currentUser.photoURL);
        }
    }, [auth]);

    // Determine if the display name is available, for responsiveness
    const displayNameAvailable = Boolean(auth?.currentUser?.displayName);

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
                    <div></div>
                    // <SearchBox />
                    //     placeholder with empty space so it will look the same:
                    : <Box sx={{width: 350, height: 32}}/>
                }

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Avatar src={avatarSrc}
                            sx={{
                                ml: 1,
                                width: {xs: '35px', sm: '40px',},
                                height: {xs: '35px', sm: '40px',},
                            }}
                            onClick={() => {
                                navigate("/Login");
                            }}
                            style={{cursor: 'pointer'}}
                    />
                    {displayNameAvailable ? ( // Check if display name is available
                        <Box sx={{display: 'flex', justifyContent: 'center',}}>
                            {/* Set a smaller font size if display name is available */}
                            <Button variant="text" disabled size="small" sx={{maxWidth: '75px', fontSize: 10}}>
                                {auth?.currentUser?.displayName}
                            </Button>
                        </Box>
                    ) : (
                        <Button
                            variant="text"
                            onClick={() => {
                                navigate("/Login");
                            }}
                        >
                            Log In!
                        </Button>
                    )} {/* If the user is logged in, display their display name with smaller font size. If not, display "Log In!" button */}
                    {AddDay ?
                        <div>
                            <Button
                                variant="text"
                                onClick={auth?.currentUser ? () => navigate("/AddEvent") : handleOpenLogin}
                                sx={{
                                    maxWidth: {xs: '150px', sm: 'auto'},
                                    fontSize: {xs: '10px', sm: '14px'},
                                    padding: {xs: 1.5, sm: 1},
                                }}
                            >
                                Trade your day

                            </Button>
                            <Dialog open={openLogin} onClose={handleCloseLogin}>
                                <DialogTitle>Login Required!</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        You must be logged in to Trade Your Day!
                                        Please log in or continue browsing
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button sx={{
                                        borderRadius: "10px", border: "2px solid transparent", "&:hover": {
                                            backgroundColor: (theme) => theme.palette.primary.contrastText,
                                            color: (theme) => theme.palette.primary.main,
                                            borderColor: (theme) => theme.palette.primary.main,
                                        },
                                    }} disableElevation onClick={() => {
                                        navigate("/Login?redirect=/AddEvent");
                                    }} variant="contained" autoFocus>Log In</Button>
                                    <Button sx={{
                                        borderRadius: "10px", border: "2px solid transparent", "&:hover": {
                                            backgroundColor: (theme) => theme.palette.primary.contrastText,
                                            color: (theme) => theme.palette.primary.main,
                                            borderColor: (theme) => theme.palette.primary.main,
                                        },
                                    }} disableElevation onClick={handleCloseLogin} variant="contained">Continue
                                        Browsing</Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        :
                        <Button
                            variant="text"
                            disabled
                        >
                            Trading your day
                        </Button>
                    }
                </Box>
            </Box>
            <Divider/>
        </Box>
    );
}
