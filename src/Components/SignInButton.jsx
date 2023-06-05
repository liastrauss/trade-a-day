import SignInDialog from './SignInDialog'
import Button from "@mui/material/Button";
import * as React from "react";

export default function SignInButton() {
    return(
    <div>
        <Button variant="contained" onClick={SignInDialog}>
            Sign In
        </Button>
    </div>
    )
};