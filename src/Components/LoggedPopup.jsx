import * as React from 'react';
import useNavigate from "react-router-dom";
import Button from '@mui/material/Button';
import useState from "react";
import SignInPage from "../Components/SignInPage";
import {DialogActions, DialogContent, DialogTitle, Dialog} from "@mui/material";
import DialogContentText from "@mui/material/DialogContentText";

export function LoggedPopup() {
    const [openLogin, setOpenLogin] = useState(false);
    const handleOpenLogin = () => {setOpenLogin(true);};
    const handleCloseLogin = () => {setOpenLogin(false);};
    const navigate = useNavigate();

    return (
        <div>
            <Dialog open={openLogin} onClose={handleCloseLogin}>
                <DialogTitle>Login Required!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You must be logged in to do that action!
                        Please log in or continue browsing
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=> {navigate("/AddEvent");}} variant="contained" autoFocus>Log In</Button>
                    <Button onClick={SignInPage("/AddEvent")} variant="contained" autoFocus>Call Log In Function</Button>
                    <Button onClick={handleCloseLogin} variant="contained">Continue Browsing</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}