import * as React from 'react';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {Grid, TextField} from "@mui/material";
import Registration2 from './Registration2MoreDetails'

export default function Registration1() {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    Registration
                </DialogTitle>

                <DialogContent dividers="true">
                    <DialogContentText>
                        Let's finish setting up your account!
                    </DialogContentText>
                    <Grid container spacing={3}   justifyContent="flex-start" alignContent = "center">
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                label="Last Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Email address"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Phone number"
                                autoFocus
                            />
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button onClick={Registration2}>Next</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}