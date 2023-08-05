import * as React from 'react';
import Box from '@mui/material/Box';
import {useLocation, useNavigate} from "react-router-dom";
import {addDoc, collection} from "firebase/firestore";
import {auth, db} from "../config/firebase";
import {Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography} from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import {LuPizza, LuSalad} from "react-icons/lu";
import {FaHamburger, FaHiking} from "react-icons/fa";
import {BiSushi} from "react-icons/bi";
import {GiCheeseWedge,GiChefToque,GiCorn,GiMusicalNotes,GiPineapple,GiSlicedMushroom,GiTacos} from "react-icons/gi";
import {AiOutlineStop} from "react-icons/ai";
import {SiNetflix} from "react-icons/si";
import {CgGym} from "react-icons/cg";
import Button from "@mui/material/Button";
import Topbar from "../Components/Topbar";
import Paper from "@mui/material/Paper";
import {Container} from "@mui/system";
import HostHobbies from "./hostHobbies";
import {useState} from "react";




export default function NewProfileCreation() {

    const firstSpaceIndex = auth?.currentUser?.displayName.indexOf(" ");
    const firstNamePart = firstSpaceIndex !== -1 ? auth?.currentUser?.displayName.substring(0, firstSpaceIndex) : auth?.currentUser?.displayName;
    const lastNamePart = firstSpaceIndex !== -1 && firstSpaceIndex < auth?.currentUser?.displayName.length - 1
        ? auth?.currentUser?.displayName.substring(firstSpaceIndex + 1).split(" ")[0]
        : '';

    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const redirect = searchParams.get("redirect");
    const usersCollectionRef = collection(db, "users")


    const [userData, setUserData] = React.useState({
            userID: '',
            userFirstName: firstNamePart,
            userLastName: lastNamePart,
            userEmail: '',
            userPhone: '',
            favoriteFood: [],
            pizzaToppings: [],
            hobbies: [],
            skills: [],
            superpowers: [],
        },[]);

    const onSubmit = async () => {
        await addDoc(usersCollectionRef, {
            userID: auth?.currentUser?.uid,
            userFirstName: userData.userFirstName,
            userLastName: userData.userLastName,
            userEmail: auth?.currentUser?.email,
            userPhone: userData.userPhone,
            favoriteFood: userData.favoriteFood,
            pizzaToppings: userData.pizzaToppings,
            hobbies: userData.hobbies,
            skills: userData.skills,
            superpowers: userData.superpowers,
        });
        if (redirect) {
            navigate(redirect);
        }
        else {
            navigate(`/`);
        }
    }


    // popup handlers
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => {setOpen(true);};
    // const handleClose = () => {setOpen(false);};



    // Event Handlers
    // const [food, setFood] = useState("");
    // const [toppings, setToppings] = useState([]);
    // const [hobbies, setHobbies] = useState("");
    const handleFood = (event, newData) => {
        setUserData((prevUserData) => ({...prevUserData, favoriteFood: newData }));
        // setFood(event.target.value);
    };
    const handleTopping = (event, newData) => {
        setUserData((prevUserData) => ({...prevUserData, pizzaToppings: newData }));
        // setToppings(event.target.value);
    };
    const handleHobby = (event, newData) => {
        setUserData((prevUserData) => ({...prevUserData, hobbies: newData }));
        // setHobbies(event.target.value);
    };

    // const [firstValue, setFirstValue] = useState(firstNamePart);
    // const [lastValue, setLastValue] = useState(lastNamePart);
    // const handleFirstChange = (event) => {
    //     setFirstValue(event.target.value);
    // };
    // const handleLastChange = (event) => {
    //     setLastValue(event.target.value);
    // };
    //
    // let completed = false;
    // if (
    //     firstValue !== "" &&
    //     lastValue !== "" &&
    //     food !== "" &&
    //     toppings.length > 0 &&
    //     hobbies !== ""
    // ) {
    //     // there's a value in all of them
    //    completed = true;
    // }


    return (
        <React.Fragment>
            <Topbar AddDay Profile BookedEvents/>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Typography component="h1" variant="h4" align="center" gutterBottom>Sign Up</Typography>
                        <Grid container spacing={1} justifyContent="flex-start" alignContent="flex-start" alignItems="stretch">
                            <Typography color='primary' variant="h6" gutterBottom> Let's finish setting up your account!
                            </Typography>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="First Name"
                                    autoFocus
                                    onChange={(e) => {
                                        // setNewFirstName(e.target.value);
                                        setUserData({
                                            ...userData,
                                            userFirstName: e.target.value,
                                        });
                                    }}
                                    value = {userData.userFirstName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Last Name"
                                    autoFocus
                                    onChange={(e) => {
                                        setUserData({
                                            ...userData,
                                            userLastName: e.target.value,
                                        });
                                    }}
                                    value = {userData.userLastName}
                                />
                            </Grid>
                            <Typography color='primary' variant="h6" gutterBottom> Here are 3 ice-breaking questions to get to know you better!</Typography>
                            <Box>
                                <Typography variant="h6" gutterBottom> My favorite food is...</Typography>
                                <ToggleButtonGroup color='primary' value={userData.favoriteFood} onChange={handleFood} exclusive>
                                    <ToggleButton value="Pizza"> <LuPizza/> Pizza </ToggleButton>
                                    <ToggleButton value="Salad"> <LuSalad/> Salad </ToggleButton>
                                    <ToggleButton value="Burger"> <FaHamburger/> Burger </ToggleButton>
                                    <ToggleButton value="Sushi"> <BiSushi/> Sushi </ToggleButton>
                                    <ToggleButton value="Mexican"> <GiTacos/> Mexican </ToggleButton>
                                </ToggleButtonGroup>
                            </Box>
                            <Box>
                                <Typography variant="h6" gutterBottom> My favorite pizza toppings are...</Typography>
                                <ToggleButtonGroup color='primary' value={userData.pizzaToppings} onChange={handleTopping}>
                                    <ToggleButton value="Mushroom"> <GiSlicedMushroom/> Mushroom </ToggleButton>
                                    <ToggleButton value="Cheese"> <GiCheeseWedge/> Cheese </ToggleButton>
                                    <ToggleButton value="Corn"> <GiCorn/> Corn </ToggleButton>
                                    {/*<ToggleButton value="Tuna"> <GiCannedFish/> Tuna </ToggleButton>*/}
                                    <ToggleButton value="Pineapple"> <GiPineapple/> Pineapple </ToggleButton>
                                    <ToggleButton value="Anti"> <AiOutlineStop/> None </ToggleButton>
                                </ToggleButtonGroup>
                            </Box>
                            <Box>
                                <Typography variant="h6" gutterBottom> When I'm bored on Friday you'll find me...</Typography>
                                <ToggleButtonGroup color='primary' value={userData.hobbies} onChange={handleHobby} exclusive>
                                    <ToggleButton value="Netflix"> <SiNetflix/> Netflix </ToggleButton>
                                    <ToggleButton value="Cooking"> <GiChefToque/> Cooking </ToggleButton>
                                    <ToggleButton value="Training"> <CgGym/> Training </ToggleButton>
                                    <ToggleButton value="Singing"> <GiMusicalNotes/> Singing </ToggleButton>
                                    <ToggleButton value="Traveling"> <FaHiking/> Traveling </ToggleButton>
                                </ToggleButtonGroup>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'Center'}}>
                                <Button
                                    sx={{borderRadius: "10px",border: "2px solid transparent", "&:hover": {
                                            backgroundColor: (theme) => theme.palette.primary.contrastText,
                                            color: (theme) => theme.palette.primary.main,
                                            borderColor: (theme) => theme.palette.primary.main,
                                        },}} disableElevation
                                    variant="contained"
                                    onClick={onSubmit}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Done
                                </Button>
                                {/*<Button onClick={console.log(completed)}>Log</Button>*/}
                                {/*<Dialog open={open} onClose={handleClose}>*/}
                                {/*    <DialogTitle> Get to know {eventInfoData?.hostName}!</DialogTitle>*/}
                                {/*    <DialogContent>*/}
                                {/*        <HostHobbies hostID={eventInfoData?.hostID} />*/}
                                {/*    </DialogContent>*/}
                                {/*    <DialogActions>*/}
                                {/*        /!*<Button onClick={handleClose}>Cancel</Button>*!/*/}
                                {/*        <Button onClick={handleClose} variant="contained" autoFocus>*/}
                                {/*            Done*/}
                                {/*        </Button>*/}
                                {/*    </DialogActions>*/}
                                {/*</Dialog>*/}
                            </Box>
                        </Grid>
                    </Paper>
            </Container>
        </React.Fragment>
    );
}

