import * as React from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {Grid} from "@mui/material";
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

export default function Registration2({ userData, setUserData }) {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

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

    //useStates
    // const [foods, setFood] = React.useState(() => ['',])
    // const [topping, setTopping] = React.useState(() => ['',])
    // const [hobby, setHobby] = React.useState(() => ['',])
    // const [skill, setSkill] = React.useState(() => ['',])
    // const [power, setPower] = React.useState(() => ['',])

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
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    Registration
                </DialogTitle>

                <DialogContent dividers="true">
                    <DialogContentText>
                        Here are 5 ice-breaking questions to get to know you better!
                    </DialogContentText>

                    <Grid container spacing={1} justifyContent="flex-start" alignContent="center">

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
                            <h4>My favorite toppings are...</h4>
                            <ToggleButtonGroup color='primary' value={userData.pizzaToppings} onChange={handleTopping}>
                                <ToggleButton value="Mushroom"> <GiSlicedMushroom/> Mushroom </ToggleButton>
                                <ToggleButton value="Cheese"> <GiCheeseWedge/> Cheese </ToggleButton>
                                <ToggleButton value="Corn"> <GiCorn/> Corn </ToggleButton>
                                <ToggleButton value="Tuna"> <GiCannedFish/> Tuna </ToggleButton>
                                <ToggleButton value="Pineapple"> <GiPineapple/> Pineapple </ToggleButton>
                                <ToggleButton value="Anti"> <AiOutlineStop/> Hate Pizza </ToggleButton>
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
                        {/*<Box>*/}
                        {/*    <FormControl*/}
                        {/*        required*/}
                        {/*        error={skillsError}*/}
                        {/*        component="fieldset"*/}
                        {/*        sx={{ m: 3, width: '550px' }}*/}
                        {/*        variant="standard"*/}
                        {/*    >*/}
                        {/*        <FormLabel component="legend">If I could, I would master the art of...</FormLabel>*/}
                        {/*        <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={quotes} onChange={(e) => {handleEventChange(e,skill, setSkill)}} name="quotes" />}*/}
                        {/*                label="Speaking in movie quotes"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={faces} onChange={(e) => {handleEventChange(e,skill, setSkill)}} name="faces" />}*/}
                        {/*                label="Extreme face-making"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={rap} onChange={(e) => {handleEventChange(e,skill, setSkill)}} name="rap" />}*/}
                        {/*                label="Rapping but backwards"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={beatbox} onChange={(e) => {handleEventChange(e,skill, setSkill)}} name="beatbox" />}*/}
                        {/*                label="Beatboxing classic symphonies"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={dance} onChange={(e) => {handleEventChange(e,skill, setSkill)}} name="dance" />}*/}
                        {/*                label="Dancing perfectly terrible"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={trivia} onChange={(e) => {handleEventChange(e,skill, setSkill)}} name="trivia" />}*/}
                        {/*                label="Remembering useless trivia"*/}
                        {/*            />*/}
                        {/*        </FormGroup>*/}
                        {/*        <FormHelperText>You can only master one skill!</FormHelperText>*/}
                        {/*    </FormControl>*/}
                        {/*    <FormControl*/}
                        {/*        required*/}
                        {/*        error={powersError}*/}
                        {/*        component="fieldset"*/}
                        {/*        sx={{ m: 3, width: '550px' }}*/}
                        {/*        variant="standard"*/}
                        {/*    >*/}
                        {/*        <FormLabel component="legend">If I could, I would harness the next superpower</FormLabel>*/}
                        {/*        <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={snap} onChange={(e) => {handleEventChange(e,superpower, setPower)}} name="snap" />}*/}
                        {/*                label="Snap your fingers to make someone else dance"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={midas} onChange={(e) => {handleEventChange(e,superpower, setPower)}} name="midas" />}*/}
                        {/*                label="Turn everything you touch into Burgers"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={sneeze} onChange={(e) => {handleEventChange(e,superpower, setPower)}} name="sneeze" />}*/}
                        {/*                label="Control the volume of everyone elses sneezes"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={beverage} onChange={(e) => {handleEventChange(e,superpower, setPower)}} name="beverage" />}*/}
                        {/*                label="Turn water into any beverage you want"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={avocado} onChange={(e) => {handleEventChange(e,superpower, setPower)}} name="avocado" />}*/}
                        {/*                label="Generate an endless supply of ripe Avocados"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={medium} onChange={(e) => {handleEventChange(e,superpower, setPower)}} name="medium" />}*/}
                        {/*                label="Communicate with objects, but they only respond sarcastically"*/}
                        {/*            />*/}
                        {/*        </FormGroup>*/}
                        {/*        <FormHelperText>Choose only one superpower!</FormHelperText>*/}
                        {/*    </FormControl>*/}
                        {/*</Box>*/}

                        <Box>
                            <h4>If I could, I would master the art of...</h4>
                            <ToggleButtonGroup color='primary' value={userData.skills} onChange={handleSkill} exclusive>
                                <ToggleButton color='primary'> Speaking in movie quotes </ToggleButton>
                                <ToggleButton value="Facemaking"> Extreme face-making </ToggleButton>
                                <ToggleButton value="Rapping"> Rapping but backwards </ToggleButton>
                                <ToggleButton value="Beatboxing"> Beat-boxing classic symphonies</ToggleButton>
                                <ToggleButton value="Dancing"> Dancing perfectly terrible </ToggleButton>
                                <ToggleButton value="Trivia"> Remembering useless trivia </ToggleButton>
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
                                <ToggleButton value="Medium"> Communicate with objects, but they are always sarcastic</ToggleButton>
                            </ToggleButtonGroup>
                        </Box>

                        <Box>
                            <h5>{auth?.currentUser?.uid}</h5>
                            <h5>{userData.userFirstName}</h5>
                            <h5>{userData.userLastName}</h5>
                            <h5>{userData.userPhone}</h5>
                            <h5>{userData.userEmail}</h5>
                            <h5>{userData.favoriteFood}</h5>
                            <h5>{userData.pizzaToppings}</h5>
                            <h5>{userData.hobbies}</h5>
                            <h5>{userData.skills}</h5>
                            <h5>{userData.superpowers}</h5>

                        </Box>

                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button onClick={onSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );

};