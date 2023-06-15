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

export default function Registration2({ userData, setUserData }) {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };



    //useStates
    const [foods, setFood] = React.useState(() => ['',])
    const [topping, setTopping] = React.useState(() => ['',])
    const [hobby, setHobby] = React.useState(() => ['',])
    const [skill, setSkill] = React.useState(() => ['',])
    const [power, setPower] = React.useState(() => ['',])

    //event handlers
    const handleFood = (event, newData) => {
        setFood(newData);
        setUserData((userData) => ({...userData, favoriteFood: newData })); };
    const handleTopping = (event, newData) => {setTopping(newData); };
    const handleHobby = (event, newData) => {setHobby(newData); };
    const handleSkill = (event, newData) => {setSkill(newData); };
    const handlePower = (event, newData) => {setPower(newData); };



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


                        {/*<Box>*/}
                        {/*    <h4>The ultimate Pizza has ____ on it</h4>*/}
                        {/*    <ToggleButtonGroup color='primary' value={nutrition} onChange={handleNutrition}>*/}
                        {/*    <ToggleButton value="Mushroom"> <GiSlicedMushroom/> Mushroom </ToggleButton>*/}
                        {/*    <ToggleButton value="Cheese"> <GiCheeseWedge/> Cheese </ToggleButton>*/}
                        {/*    <ToggleButton value="Corn"> <GiCorn/> Corn </ToggleButton>*/}
                        {/*    <ToggleButton value="Tuna"> <GiCannedFish/> Tuna </ToggleButton>*/}
                        {/*    <ToggleButton value="Pineapple"> <GiPineapple/> Pineapple </ToggleButton>*/}
                        {/*    <ToggleButton value="Anti"> <AiOutlineStop/> Hate Pizza </ToggleButton>*/}
                        {/*</ToggleButtonGroup>*/}
                        {/*</Box>*/}

                        {/*<Box>*/}
                        {/*    <h4>When I'm bored on Friday you'll find me...</h4>*/}
                        {/*    <ToggleButtonGroup color='primary' onChange={handleInterestChange} exclusive>*/}
                        {/*        <ToggleButton> <SiNetflix/> Netflix </ToggleButton>*/}
                        {/*        <ToggleButton> <GiChefToque/> Cooking </ToggleButton>*/}
                        {/*        <ToggleButton> <CgGym/> Working Out </ToggleButton>*/}
                        {/*        <ToggleButton> <GiMusicalNotes/> Singing </ToggleButton>*/}
                        {/*        <ToggleButton> <FaHiking/> Traveling </ToggleButton>*/}
                        {/*    </ToggleButtonGroup>*/}
                        {/*</Box>*/}

                        {/*<Box>*/}
                        {/*    <h4>If I could, I would master the art of...</h4>*/}
                        {/*    <ToggleButtonGroup color='primary' onChange={handleInterestChange} exclusive>*/}
                        {/*        <ToggleButton color='primary'> Speaking in movie quotes </ToggleButton>*/}
                        {/*        <ToggleButton> Extreme face-making </ToggleButton>*/}
                        {/*        <ToggleButton> Rapping but backwards </ToggleButton>*/}
                        {/*        <ToggleButton> Beat-boxing classic symphonies</ToggleButton>*/}
                        {/*        <ToggleButton> Dancing perfectly terrible </ToggleButton>*/}
                        {/*        <ToggleButton> Remembering useless trivia </ToggleButton>*/}
                        {/*    </ToggleButtonGroup>*/}
                        {/*</Box>*/}

                        {/*<Box>*/}
                        {/*    <h4>If I could, I would harness the next superpower</h4>*/}
                        {/*    <ToggleButtonGroup color='primary' onChange={handleInterestChange} exclusive>*/}
                        {/*        <ToggleButton> Snap your fingers to make someone else dance </ToggleButton>*/}
                        {/*        <ToggleButton> Turn everything you touch into Burgers </ToggleButton>*/}
                        {/*        <ToggleButton> Control the volume of everyone else's sneezes </ToggleButton>*/}
                        {/*        <ToggleButton> Turn water into any beverage you want </ToggleButton>*/}
                        {/*        <ToggleButton> Generate an endless supply of ripe Avocados </ToggleButton>*/}
                        {/*        <ToggleButton> Communicate with objects, but they only respond sarcastically </ToggleButton>*/}
                        {/*    </ToggleButtonGroup>*/}
                        {/*</Box>*/}


                        {/*<Box>*/}
                        {/*    <FormControl*/}
                        {/*        required*/}
                        {/*        error={foodsError}*/}
                        {/*        component="fieldset"*/}
                        {/*        sx={{ m: 3, width: '550px' }}*/}
                        {/*        variant="standard"*/}
                        {/*    >*/}
                        {/*        <FormLabel component="legend">My favorite food is...</FormLabel>*/}
                        {/*        <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={pizza} onChange={(e) => {handleEventChange(e,food, setFoods)}} name="pizza" />}*/}
                        {/*                label="Pizza"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={salad} onChange={(e) => {handleEventChange(e,food, setFoods)}} name="salad" />}*/}
                        {/*                label="Salad"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={burger} onChange={(e) => {handleEventChange(e,food, setFoods)}} name="burger" />}*/}
                        {/*                label="Burger"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={sushi} onChange={(e) => {handleEventChange(e,food, setFoods)}} name="sushi" />}*/}
                        {/*                label="Sushi"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={mexican} onChange={(e) => {handleEventChange(e,food, setFoods)}} name="mexican" />}*/}
                        {/*                label="Mexican"*/}
                        {/*            />*/}
                        {/*        </FormGroup>*/}
                        {/*        <FormHelperText>You can only choose one favorite food!</FormHelperText>*/}
                        {/*    </FormControl>*/}
                        {/*    <FormControl*/}
                        {/*        required*/}
                        {/*        error={toppingsError}*/}
                        {/*        component="fieldset"*/}
                        {/*        sx={{ m: 3, width: '550px' }}*/}
                        {/*        variant="standard"*/}
                        {/*    >*/}
                        {/*        <FormLabel component="legend">My favorite Pizza toppings are... (choose up to 2!)</FormLabel>*/}
                        {/*        <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={mushroom} onChange={(e) => {handleEventChange(e,topping, setTopping)}} name="mushroom" />}*/}
                        {/*                label="Mushroom"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={cheese} onChange={(e) => {handleEventChange(e,topping, setTopping)}} name="cheese" />}*/}
                        {/*                label="Cheese"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={corn} onChange={(e) => {handleEventChange(e,topping, setTopping)}} name="corn" />}*/}
                        {/*                label="Corn"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={tuna} onChange={(e) => {handleEventChange(e,topping, setTopping)}} name="tuna" />}*/}
                        {/*                label="Tuna"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={pineapple} onChange={(e) => {handleEventChange(e,topping, setTopping)}} name="pineapple" />}*/}
                        {/*                label="Pineapple"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={anti} onChange={(e) => {handleEventChange(e,topping, setTopping)}} name="anti" />}*/}
                        {/*                label="Hate pizza"*/}
                        {/*            />*/}
                        {/*        </FormGroup>*/}
                        {/*        <FormHelperText>You can only choose up to two toppings!</FormHelperText>*/}
                        {/*    </FormControl>*/}
                        {/*    <FormControl*/}
                        {/*        required*/}
                        {/*        error={interestsError}*/}
                        {/*        component="fieldset"*/}
                        {/*        sx={{ m: 3, width: '550px' }}*/}
                        {/*        variant="standard"*/}
                        {/*    >*/}
                        {/*        <FormLabel component="legend">When I'm bored on Friday you'll find me...</FormLabel>*/}
                        {/*        <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={netflix} onChange={(e) => {handleEventChange(e,interest, setInterest)}} name="netflix" />}*/}
                        {/*                label="On Netflix"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={cooking} onChange={(e) => {handleEventChange(e,interest, setInterest)}} name="cooking" />}*/}
                        {/*                label="Cooking"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={interest['training']} onChange={(e) => {handleEventChange(e,interest, setInterest)}} name="training" />}*/}
                        {/*                label="Working out"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={singing} onChange={(e) => {handleEventChange(e,interest, setInterest)}} name="singing" />}*/}
                        {/*                label="Singing"*/}
                        {/*            />*/}
                        {/*            <FormControlLabel*/}
                        {/*                control={<Checkbox checked={traveling} onChange={(e) => {handleEventChange(e,interest, setInterest)}} name="traveling" />}*/}
                        {/*                label="Traveling"*/}
                        {/*            />*/}
                        {/*        </FormGroup>*/}
                        {/*        <FormHelperText>You can only choose one ultimate hobby!</FormHelperText>*/}
                        {/*    </FormControl>*/}
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
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button>Sign up!</Button>
                </DialogActions>
            </Dialog>
        </div>
    );

};

// const arts = ['Speaking in movie quotes', 'Extreme face-making', 'Rapping but backwards', 'Beatboxing',
// 'Dancing perfectly terrible', 'Remembering useless trivia'];
// const superpowers = ['Snap your fingers to make someone else dance', 'The ability to turn everything into pizza',
// "The ability to control the volume of someone elses sneezes, from barely audible whispers to ground-shaking booms",
// 'The ability to turn water to any beverage you want', 'The ability to generate an endless supply of ripe Avocados',
// 'The ability to communicate with unanimate objects, but they only respond sarcastically'];