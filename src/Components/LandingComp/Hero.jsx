import {Box, Button, styled, Typography} from "@mui/material";
import {Container} from "@mui/system";
import React from "react";
import {useTheme} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";
import AboutUs from "./aboutUs"

const Hero = () => {
    const theme = useTheme();
    const CustomBox = styled(Box)(({theme}) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));

    const Title = styled(Typography)(({theme}) => ({
        fontSize: "44px",
        color: "#000336",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
        },
    }));
    let navigate = useNavigate();

    const MyButton = styled(Button)(({theme, size}) => ({
        fontWeight: "700",
        fontSize: size === "large" ? "16px" : "14px", // Conditional font size based on size prop
        cursor: "pointer",
        padding: size === "large" ? "1rem 2rem" : "0.5rem 1.25rem", // Conditional padding based on size prop

        borderRadius: "7px",
        display: "block",
        border: "2px solid transparent",
        "&:hover": {
            backgroundColor: theme.palette.primary.contrastText, // Swap colors on hover for better visibility
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
        },
    }));


    return (
        <Box sx={{
            // photo
            backgroundColor: "#eefdf4",
            minHeight: "85vh",
        }}>
            <Container>
                <CustomBox>
                    <Box sx={{flex: "1"}}>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "18px",
                                color: "#687690",
                                fontWeight: "500",
                                mt: 10,
                                mb: 4,
                            }}
                        >
                            Welcome to Trade A Day!
                        </Typography>
                        <Title variant="h1">
                            Explore lives beyond your own, one day at a time.
                        </Title>
                        <Typography
                            variant="body2"
                            sx={{fontSize: "18px", color: "#5A6473", my: 4}}
                        >
                            Step into the lives of others, break free from the ordinary, and embrace the extraordinary
                            with Trade a Day!
                            Our revolutionary social app opens doors to new perspectives, allowing you to experience a
                            day in the life of someone else.

                        </Typography>
                        <CustomBox>
                            <MyButton
                                size="large"
                                variant="contained"
                                disableElevation
                                onClick={() => {
                                    navigate("/");
                                }}

                            >
                                Explore
                            </MyButton>

                            <MyButton
                                size="large"
                                variant="contained"
                                disableElevation
                                onClick={() => {
                                    navigate("/Login");
                                    console.info('You clicked mine.');
                                }}

                            >
                                Sign Up
                            </MyButton>

                        </CustomBox>

                    </Box>
                </CustomBox>
            </Container>
            <AboutUs/>
        </Box>
    );
};

export default Hero;