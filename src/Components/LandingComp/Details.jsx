import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
// import houseCard from "../media/houseCard.png";

const Details = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: theme.spacing(10),
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            textAlign: "center",
        },
    }));

    const ImgContainer = styled(Box)(({ theme }) => ({
        width: "100%",
        [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
    }));

    const LargeText = styled(Typography)(({ theme }) => ({
        fontSize: "64px",
        color: "#000",
        fontWeight: "700",
        [theme.breakpoints.down("md")]: {
            fontSize: "32px",
        },
    }));

    const SmallText = styled(Typography)(({ theme }) => ({
        fontSize: "18px",
        color: "#7B8087",
        fontWeight: "500",
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
        },
    }));

    const TextFlexbox = styled(Box)(({ theme }) => ({
        marginTop: theme.spacing(7),
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(0, 5, 0, 5),
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            gap: theme.spacing(5),
        },
    }));

    const Divider = styled("div")(({ theme }) => ({
        width: "13%",
        height: "5px",
        backgroundColor: "#000339",
        [theme.breakpoints.down("md")]: {
            marginLeft: "auto",
            marginRight: "auto",
        },
    }));

    return (
        <Box sx={{ py: 10 }}>
            <Container>
                <CustomBox>
                    <ImgContainer>
                        img
                        {/*<img src={houseCard} alt="house" style={{ maxWidth: "100%" }} />*/}
                    </ImgContainer>

                    <Box>
                        <Divider />
                        <Typography
                            sx={{
                                fontSize: "35px",
                                color: "#000339",
                                fontWeight: "700",
                                my: 3,
                            }}
                        >
                            You’ve found a neighborhood you love.
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "16px",
                                color: "#5A6473",
                                lineHeight: "27px",
                            }}
                        >
                            Experience boundless empathy and break free from monotony with Trade a Day—an innovative social app that allows you to step into the shoes of others, promoting meaningful connections while immersing yourself in their daily lives. Discover a world of perspectives, one day at a time, fostering a deeper understanding of diverse realities and inspiring personal growth.




                        </Typography>
                    </Box>
                </CustomBox>

                <TextFlexbox>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <LargeText>2500+</LargeText>
                        <SmallText>Homes For Sale</SmallText>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <LargeText>3000+</LargeText>
                        <SmallText>Properties Rented</SmallText>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <LargeText>3500+</LargeText>
                        <SmallText>Homes Sold</SmallText>
                    </Box>
                </TextFlexbox>
            </Container>
        </Box>
    );
};

export default Details;