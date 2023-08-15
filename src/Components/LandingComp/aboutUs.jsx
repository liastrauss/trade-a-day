import React from "react";
import lia from "../../media/Lia.svg";
import ohad from "../../media/Ohad.svg";
import rotem from "../../media/Rotem.svg";
import yuval from "../../media/Yuval.svg";
import Box from "@mui/material/Box";
import {useMediaQuery} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";

export default function AboutUs() {
    const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const theme = useTheme();
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', m: 8, backgroundColor: "#eefdf4", flexWrap: 'wrap'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', m: {xs: 2, sm: 4},}}>
                <img src={ohad} alt="ohad" style={{
                    width: isXsScreen ? '80%' : '100%',
                    maxWidth: '100px',
                    minWidth: '50px', // Set a fixed minimum width of 65px
                    height: 'auto', // Maintain aspect ratio
                }}/>
                <Typography sx={{mt: 1, color: theme.palette.text.secondary, fontSize: {xs: "12px", sm: "14px"},}}>
                    Ohad Nahari
                </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', m: {xs: 2, sm: 4},}}>
                <img src={rotem} alt="rotem" style={{
                    width: isXsScreen ? '80%' : '100%',
                    maxWidth: '100px',
                    minWidth: '50px', // Set a fixed minimum width of 65px
                    height: 'auto', // Maintain aspect ratio
                }}/>
                <Typography sx={{mt: 1, color: theme.palette.text.secondary, fontSize: {xs: "12px", sm: "14px"},}}>
                    Rotem Hashdi
                </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', m: {xs: 2, sm: 4},}}>
                <img src={lia} alt="lia" style={{
                    width: isXsScreen ? '80%' : '100%',
                    maxWidth: '100px',
                    minWidth: '50px', // Set a fixed minimum width of 65px
                    height: 'auto', // Maintain aspect ratio
                }}/>
                <Typography sx={{mt: 1, color: theme.palette.text.secondary, fontSize: {xs: "12px", sm: "14px"},}}>
                    Lia Strauss
                </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', m: {xs: 2, sm: 4},}}>
                <img src={yuval} alt="yuval" style={{
                    width: isXsScreen ? '80%' : '100%',
                    maxWidth: '100px',
                    minWidth: '50px', // Set a fixed minimum width of 65px
                    height: 'auto', // Maintain aspect ratio
                }}/>
                <Typography sx={{mt: 1, color: theme.palette.text.secondary, fontSize: {xs: "12px", sm: "14px"},}}>
                    Yuval Shayo
                </Typography>
            </Box>
        </Box>
    )
}