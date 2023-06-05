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

export default function Registration2() {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    //useState for foods
    const [food, setFoods] = React.useState({
        pizza: false,
        salad: false,
        burger: false,
        sushi: false,
        mexican: false,
    });
    const handleFoodChange = (event) => {
        setFoods({
            ...food,
            [event.target.name]: event.target.checked,
        });
    };
    const {pizza, salad, burger, sushi, mexican} = food;
    const foodsError = [pizza, salad, burger, sushi, mexican].filter((v) => v).length !== 1;

    // let selectedFoods = [pizza, salad, burger, sushi, mexican].filter((v) => v)
    // selectedFoods ==! 1 ? errorMsg("You can only choose one food!")
    //
    // const errorMsg = (props) {
    //     return (
    //         {props}
    //     );
    // };

    //useState for toppings
    const [topping, setTopping] = React.useState({
        mushroom: false,
        cheese: false,
        corn: false,
        tuna: false,
        pineapple: false,
        anti: false,
    });
    const handleToppingChange = (event) => {
        setTopping({
            ...topping,
            [event.target.name]: event.target.checked,
        });
    };
    const {mushroom, cheese, corn, tuna, pineapple, anti} = topping;
    const toppingsError = ([mushroom, cheese, corn, tuna, pineapple, anti].filter((v) => v).length === 0) || ([mushroom, cheese, corn, tuna, pineapple, anti].filter((v) => v).length > 2);


    //useState for interests
    const [interest, setInterest] = React.useState({
        netflix: false,
        cooking: false,
        training: false,
        singing: false,
        traveling: false,
        nightout: false,
    });
    const handleInterestChange = (event) => {
        setInterest({
            ...interest,
            [event.target.name]: event.target.checked,
        });
    };
    const {netflix, cooking, training, singing, traveling, nightout} = interest;
    const interestsError = [netflix, cooking, training, singing, traveling, nightout].filter((v) => v).length !== 1;

    //useState for skills
    const [skill, setSkill] = React.useState({
        quotes: false,
        faces: false,
        rap: false,
        beatbox: false,
        dance: false,
        trivia: false,
    });
    const handleSkillChange = (event) => {
        setSkill({
            ...skill,
            [event.target.name]: event.target.checked,
        });
    };

    const {quotes, faces, rap, beatbox, dance, trivia} = skill;
    const skillsError = [quotes, faces, rap, beatbox, dance, trivia].filter((v) => v).length !== 1;

    //useState for superpowers
    const [superpower, setPower] = React.useState({
        snap: false,
        midas: false,
        sneeze: false,
        beverage: false,
        avocado: false,
        medium: false,
    });
    const handlePowerChange = (event) => {
        setPower({
            ...superpower,
            [event.target.name]: event.target.checked,
        });
    };

    const {snap, midas, sneeze, beverage, avocado, medium} = superpower;
    const powersError = [snap, midas, sneeze, beverage, avocado, medium].filter((v) => v).length !== 1;

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
                        {/*Foods Component*/}
                        <Box style={{display: 'flex'}}>
                            <FormControl
                                required
                                error={foodsError}
                                component="fieldset"
                                sx={{ m: 3, width: '550px' }}
                                variant="standard"
                            >
                                <FormLabel component="legend">My favorite food is...</FormLabel>
                                <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
                                    <FormControlLabel
                                        control={<Checkbox checked={pizza} onChange={handleFoodChange} name="pizza" />}
                                        label="Pizza"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={salad} onChange={handleFoodChange} name="salad" />}
                                        label="Salad"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={burger} onChange={handleFoodChange} name="burger" />}
                                        label="Burger"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={sushi} onChange={handleFoodChange} name="sushi" />}
                                        label="Sushi"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={mexican} onChange={handleFoodChange} name="mexican" />}
                                        label="Mexican"
                                    />
                                </FormGroup>
                                <FormHelperText>You can only choose one favorite food!</FormHelperText>
                            </FormControl>
                        </Box>

                        <Button variant="outlined" startIcon={<LuPizza/>}> Pizza </Button>
                        <Button variant="outlined" startIcon={<LuSalad/>}> Salad </Button>
                        <Button variant="outlined" startIcon={<FaHamburger/>}> Burger </Button>
                        <Button variant="outlined" startIcon={<BiSushi/>}> Sushi </Button>
                        <Button variant="outlined" startIcon={<GiTacos/>}> Mexican </Button>

                        {/*Toppings Component*/}
                        <Box style={{display: 'flex'}}>
                            <FormControl
                                required
                                error={toppingsError}
                                component="fieldset"
                                sx={{ m: 3, width: '550px' }}
                                variant="standard"
                            >
                                <FormLabel component="legend">My favorite Pizza toppings are... (choose up to 2!)</FormLabel>
                                <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
                                    <FormControlLabel
                                        control={<Checkbox checked={mushroom} onChange={handleToppingChange} name="mushroom" />}
                                        label="Mushroom"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={cheese} onChange={handleToppingChange} name="cheese" />}
                                        label="Cheese"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={corn} onChange={handleToppingChange} name="corn" />}
                                        label="Corn"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={tuna} onChange={handleToppingChange} name="tuna" />}
                                        label="Tuna"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={pineapple} onChange={handleToppingChange} name="pineapple" />}
                                        label="Pineapple"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={anti} onChange={handleToppingChange} name="anti" />}
                                        label="Hate pizza"
                                    />
                                </FormGroup>
                                <FormHelperText>You can only choose up to two toppings!</FormHelperText>
                            </FormControl>
                        </Box>
                        <Button variant="outlined" startIcon={<GiSlicedMushroom/>}> Mushroom </Button>
                        <Button variant="outlined" startIcon={<GiCheeseWedge/>}> Cheese </Button>
                        <Button variant="outlined" startIcon={<GiCorn/>}> Corn </Button>
                        <Button variant="outlined" startIcon={<GiCannedFish/>}> Tuna </Button>
                        <Button variant="outlined" startIcon={<GiPineapple/>}> Pineapple </Button>
                        <Button variant="outlined" startIcon={<AiOutlineStop/>}> Hate Pizza </Button>

                        {/*Interests Component*/}
                        <Box style={{display: 'flex'}}>
                            <FormControl
                                required
                                error={interestsError}
                                component="fieldset"
                                sx={{ m: 3, width: '550px' }}
                                variant="standard"
                            >
                                <FormLabel component="legend">When I'm bored on Friday you'll find me...</FormLabel>
                                <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
                                    <FormControlLabel
                                        control={<Checkbox checked={netflix} onChange={handleInterestChange} name="netflix" />}
                                        label="On Netflix"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={cooking} onChange={handleInterestChange} name="cooking" />}
                                        label="Cooking"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={training} onChange={handleInterestChange} name="training" />}
                                        label="Working out"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={singing} onChange={handleInterestChange} name="singing" />}
                                        label="Singing"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={traveling} onChange={handleInterestChange} name="traveling" />}
                                        label="Traveling"
                                    />
                                </FormGroup>
                                <FormHelperText>You can only choose one ultimate hobby!</FormHelperText>
                            </FormControl>
                        </Box>

                        <Button variant="outlined" startIcon={<SiNetflix/>}> Netflix </Button>
                        <Button variant="outlined" startIcon={<GiChefToque/>}> Cooking </Button>
                        <Button variant="outlined" startIcon={<CgGym/>}> Working Out </Button>
                        <Button variant="outlined" startIcon={<GiMusicalNotes/>}> Singing </Button>
                        <Button variant="outlined" startIcon={<FaHiking/>}> Traveling </Button>

                        {/*Skills Component*/}
                        <Box style={{display: 'flex'}}>
                            <FormControl
                                required
                                error={skillsError}
                                component="fieldset"
                                sx={{ m: 3, width: '550px' }}
                                variant="standard"
                            >
                                <FormLabel component="legend">If I could, I would master the art of...</FormLabel>
                                <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
                                    <FormControlLabel
                                        control={<Checkbox checked={quotes} onChange={handleSkillChange} name="quotes" />}
                                        label="Speaking in movie quotes"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={faces} onChange={handleSkillChange} name="faces" />}
                                        label="Extreme face-making"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={rap} onChange={handleSkillChange} name="rap" />}
                                        label="Rapping but backwards"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={beatbox} onChange={handleSkillChange} name="beatbox" />}
                                        label="Beatboxing classic symphonies"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={dance} onChange={handleSkillChange} name="dance" />}
                                        label="Dancing perfectly terrible"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={trivia} onChange={handleSkillChange} name="trivia" />}
                                        label="Remembering useless trivia"
                                    />
                                </FormGroup>
                                <FormHelperText>You can only master one skill!</FormHelperText>
                            </FormControl>
                        </Box>
                        {/*Superpowers Component*/}
                        <Box style={{display: 'flex'}}>
                            <FormControl
                                required
                                error={powersError}
                                component="fieldset"
                                sx={{ m: 3, width: '550px' }}
                                variant="standard"
                            >
                                <FormLabel component="legend">If I could, I would harness the next superpower</FormLabel>
                                <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
                                    <FormControlLabel
                                        control={<Checkbox checked={snap} onChange={handlePowerChange} name="snap" />}
                                        label="Snap your fingers to make someone else dance"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={midas} onChange={handlePowerChange} name="midas" />}
                                        label="Turn everything you touch into Burgers"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={sneeze} onChange={handlePowerChange} name="sneeze" />}
                                        label="Control the volume of everyone elses sneezes"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={beverage} onChange={handlePowerChange} name="beverage" />}
                                        label="Turn water into any beverage you want"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={avocado} onChange={handlePowerChange} name="avocado" />}
                                        label="Generate an endless supply of ripe Avocados"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={medium} onChange={handlePowerChange} name="medium" />}
                                        label="Communicate with objects, but they only respond sarcastically"
                                    />
                                </FormGroup>
                                <FormHelperText>Choose only one superpower!</FormHelperText>
                            </FormControl>
                        </Box>
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