import * as React from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {Grid, Typography} from "@mui/material";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { LuPizza, LuSalad } from 'react-icons/lu';
import { FaHamburger, FaHiking } from 'react-icons/fa';
import { BiSushi } from 'react-icons/bi';
import { AiOutlineStop } from 'react-icons/ai';
import { SiNetflix } from 'react-icons/si';
import { GiTacos, GiSlicedMushroom, GiCheeseWedge, GiCorn, GiCannedFish, GiPineapple, GiChefToque, GiMusicalNotes } from 'react-icons/gi';
import Button from "@mui/material/Button";
import { CgGym } from 'react-icons/cg';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {addDoc, collection} from "firebase/firestore";
import {auth, db} from "../config/firebase";

export default function Registration2Page({ userData, setUserData }) {
    const usersCollectionRef = collection(db, "users")
    const onSubmit = async () => {
        try {
            await addDoc(usersCollectionRef, {
                userID: auth?.currentUser?.uid,
                userFirstName: userData.userFirstName,
                userLastName: userData.userLastName,
                userEmail: userData.userEmail,
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

    //event handlers
    const handleFood = (event, newData) => {
        setUserData((prevUserData) => ({...prevUserData, favoriteFood: newData })); };
    const handleTopping = (event, newData) => {
        setUserData((prevUserData) => ({...prevUserData, pizzaToppings: newData })); };
    const handleHobby = (event, newData) => {
        setUserData((prevUserData) => ({...prevUserData, hobbies: newData })); };
    const handleSkill = (event, newData) => {
        setUserData((prevUserData) => ({...prevUserData, skills: newData })); };
    const handlePower = (event, newData) => {
        setUserData((prevUserData) => ({...prevUserData, superpowers: newData })); };



    return (
        <React.Fragment>
            <div>
                <Grid container spacing={1} justifyContent="flex-start" alignContent="center">
                    <Typography color='primary' variant="h6" gutterBottom> Here are 5 ice-breaking questions to get to know you better!
                    </Typography>
                    <Box>
                        <h4>My favorite food is...</h4>
                        <ToggleButtonGroup color='primary' value={userData.favoriteFood} onChange={handleFood} exclusive>
                            <ToggleButton value="Pizza"> <LuPizza/> Pizza </ToggleButton>
                            <ToggleButton value="Salad"> <LuSalad/> Salad </ToggleButton>
                            <ToggleButton value="Burger"> <FaHamburger/> Burger </ToggleButton>
                            <ToggleButton value="Sushi"> <BiSushi/> Sushi </ToggleButton>
                            <ToggleButton value="Mexican"> <GiTacos/> Mexican </ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                    <Box>
                        <h4>My favorite pizza toppings are...</h4>
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
                        <h4>When I'm bored on Friday you'll find me....</h4>
                        <ToggleButtonGroup color='primary' value={userData.hobbies} onChange={handleHobby} exclusive>
                            <ToggleButton value="Netflix"> <SiNetflix/> Netflix </ToggleButton>
                            <ToggleButton value="Cooking"> <GiChefToque/> Cooking </ToggleButton>
                            <ToggleButton value="Training"> <CgGym/> Training </ToggleButton>
                            <ToggleButton value="Singing"> <GiMusicalNotes/> Singing </ToggleButton>
                            <ToggleButton value="Traveling"> <FaHiking/> Traveling </ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                    <Box>
                        <h4>If I could, I would master the art of...</h4>
                        <ToggleButtonGroup color='primary' value={userData.skills} onChange={handleSkill} exclusive>
                            <ToggleButton value="Quotes"> Speaking in movie quotes </ToggleButton>
                            <ToggleButton value="Facemaking"> Extreme face-making </ToggleButton>
                            <ToggleButton value="Rapping"> Rapping but backwards </ToggleButton>
                            <ToggleButton value="Beatboxing"> Beat-boxing classic symphonies</ToggleButton>
                            <ToggleButton value="Dancing"> Dancing perfectly terrible </ToggleButton>
                            {/*<ToggleButton value="Trivia"> Remembering useless trivia </ToggleButton>*/}
                        </ToggleButtonGroup>
                    </Box>
                    <Box>
                        <h4>If I could, I would harness the next superpower</h4>
                        <ToggleButtonGroup color='primary' value={userData.superpowers} onChange={handlePower} exclusive>
                            <ToggleButton value="SnapToDance"> Snap your fingers to make someone dance </ToggleButton>
                            <ToggleButton value="BurgerMidas"> Turn anything you touch into Burgers </ToggleButton>
                            <ToggleButton value="SneezeVolume"> Control the volume of people's sneezes </ToggleButton>
                            <ToggleButton value="Beverage"> Turn water into any beverage </ToggleButton>
                            <ToggleButton value="GenAvocado"> Generate ripe Avocados </ToggleButton>
                            {/*<ToggleButton value="Medium"> Communicate with objects, but they are always sarcastic</ToggleButton>*/}
                        </ToggleButtonGroup>
                    </Box>
                    {/*<Button onClick={onSubmit}>Submit</Button>*/}
                </Grid>
            </div>
        </React.Fragment>
);
}