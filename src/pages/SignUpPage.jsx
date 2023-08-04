import * as React from 'react';
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom";
import {addDoc, collection} from "firebase/firestore";
import {auth, db} from "../config/firebase";
import {Grid, TextField, Typography } from "@mui/material";
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

export default function NewProfileCreation(props) {
    const [userData, setUserData] =
        React.useState({
            userID: '',
            userFirstName: '',
            userLastName: '',
            userEmail: '',
            userPhone: '',
            favoriteFood: [],
            pizzaToppings: [],
            hobbies: [],
            skills: [],
            superpowers: [],
        },[]);

    let navigate = useNavigate();

    const usersCollectionRef = collection(db, "users")
    const onSubmit = async () => {
        try {
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
        } catch(err) {
            console.error(err)
        }
    }

    // Event Handlers
    const handleFood = (event, newData) => {
        setUserData((prevUserData) => ({...prevUserData, favoriteFood: newData })); };
    const handleTopping = (event, newData) => {
        setUserData((prevUserData) => ({...prevUserData, pizzaToppings: newData })); };
    const handleHobby = (event, newData) => {
        setUserData((prevUserData) => ({...prevUserData, hobbies: newData })); };

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
                                    defaultValue={auth?.currentUser?.displayName}
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
                            <Typography color='primary' variant="h6" gutterBottom> Here are 5 ice-breaking questions to get to know you better!</Typography>
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
                                    sx={{ m: 1 }}
                                    variant="contained"
                                    onClick={() => {
                                        onSubmit().then(() => navigate(props.target));
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Done
                                </Button>
                                <Button onClick={() => navigate(props.target)} > Try me </Button>
                                <Button onClick={() => console.log(props.target)}> Log</Button>
                            </Box>
                        </Grid>
                    </Paper>
            </Container>
        </React.Fragment>
    );
}

