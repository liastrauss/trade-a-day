import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Avatar, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';
import LuggageTwoToneIcon from '@mui/icons-material/LuggageTwoTone';
import AddIcon from '@mui/icons-material/Add'
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import CheckroomIcon from '@mui/icons-material/Checkroom';


import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {styled} from "@mui/material/styles";
import {TbSunglasses} from "react-icons/tb";

const defaultIcon = <LuggageTwoToneIcon />; // Default icon for items not predefined

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButton-root': {
        flex: '1 0 120px', // Adjust the width as needed
        whiteSpace: 'normal', // Allow text labels to wrap if they exceed the button width
    },
    // apply to the children:
    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        border:0,
        '&.Mui-disabled': {
            border: 0,
            color: theme.palette.primary.light,
        },
        '& .Mui-selected' : {
          border: 0,
            color: theme.palette.primary.main,

        },
        '&:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-of-type': {
            borderRadius: theme.shape.borderRadius,
        },
        flexDirection: 'column', // label on the row below
        alignItems: 'center',
        // display: 'flex',
        // flexWrap: 'wrap',
        '& > *': {
            marginLeft: theme.spacing(0.5), // Added marginLeft to separate items
        },


    },
}));

export function ItemsForm({ formData, setFormData }) {
    // the list of all items, selected + unselected
    const [allItems, setAllItems] = React.useState(() =>
        ['water', 'a change of clothes','closed shoes', 'professional attire', 'sunglasses','sunhat',]);


    const handleItems = (event, newItems) => {
        setFormData((prevFormData) => ({ ...prevFormData, toBring: newItems }));
    };


    // const addItem = () => {
    //     // TODO: change to something that isn't a prompt
    //     const newItem = prompt('Enter a new item'); // Prompt the user for the new item
    //     if (newItem) {
    //         setAllItems(prevItems => [...prevItems, newItem]); // Add the new item to the list
    //         setFormData((prevFormData) => ({
    //             ...prevFormData,
    //             toBring: [...prevFormData.toBring, newItem],
    //         }));
    //     }
    // };



    return (
        <Grid container>
            <Grid item xs={12}><Typography variant="h6">What to bring?</Typography></Grid>
            <Grid item xs={12}>
                <StyledToggleButtonGroup
                    value={formData.toBring}
                    onChange={handleItems}
                    aria-label="Items to bring"
                    // orientation="vertical"
                    sx = {{
                        display: 'flex',
                        flexWrap: 'wrap',

                    }}
                >
                    {allItems.map((item) => (
                        <ToggleButton key={item} value={item} aria-label={item}>
                            {item === 'water' && <WaterDropTwoToneIcon />}
                            {item === 'a change of clothes' && <CheckroomIcon />}
                            {item === 'closed shoes' && <RollerSkatingIcon />}
                            {item === 'sunglasses' && <TbSunglasses/>}
                            {!['water', 'a change of clothes', 'closed shoes','sunglasses'].includes(item) && defaultIcon}
                            {item}
                        </ToggleButton>
                    ))}
                </StyledToggleButtonGroup>
            </Grid>
            {/*<Grid item>*/}
            {/*    <IconButton onClick={addItem} aria-label="Add item">*/}
            {/*        <AddIcon />*/}
            {/*    </IconButton>*/}
            {/*</Grid>*/}
        </Grid>
    );
}


// before chat gpt - with no add
// export function ItemsForm() {
//     const [items, setItems] = React.useState(() => ['water', 'italic']);
//
//     const handleItems = (event, newItems) => {
//         setItems(newItems);
//     };
//
//     return (
//         <Grid container>
//             <Grid item xs={12}><Typography variant="h6" >What to bring?</Typography></Grid>
//         <Grid item>
//             <StyledToggleButtonGroup
//             value={items}
//             onChange={handleItems}
//             aria-label="Items to bring"
//             orientation="vertical"
//         >
//             <ToggleButton value="water" aria-label="water"  labelPlacement="top" label="water"
//             >
//                 <WaterDropTwoToneIcon />
//                 Water Bottle
//             </ToggleButton>
//             <ToggleButton value="italic" aria-label="italic">
//                 <CheckroomIcon  />
//                 Change of Clothes
//             </ToggleButton>
//             <ToggleButton value="underlined" aria-label="underlined">
//                 <RollerSkatingIcon />
//                 Hiking Shoes
//             </ToggleButton>
//             {/*<ToggleButton value="color" aria-label="color" disabled>*/}
//             {/*    <FormatColorFillIcon />*/}
//             {/*    <ArrowDropDownIcon />*/}
//             {/*</ToggleButton>*/}
//         </StyledToggleButtonGroup>
//         </Grid>
//         {/*if i want another column, i can add on ehere*/}
//         </Grid>
//
// );
// }
// old
// export function oldItemsForm() {
//     const [checked, setChecked] = React.useState([1]);
//     const handleToggle = (value) => () => {
//         const currentIndex = checked.indexOf(value);
//         const newChecked = [...checked];
//
//         if (currentIndex === -1) {
//             newChecked.push(value);
//         } else {
//             newChecked.splice(currentIndex, 1);
//         }
//
//         setChecked(newChecked);
//     };
//     const handleAddItem = () => {
//         const newItem = { id: items.length+1, label: '', picture: '' };
//         setItems(items => [...items, newItem]);
//     };
//
//     const handleChangeText = (id, label) => {
//         setItems(items => items.map(item => {
//             if (item.id === id) {
//                 return { ...item, label };
//             } else {
//                 return item;
//             }
//         }));
//     };
//
//     const handleChangeIcon = (id, picture) => {
//         setItems(items => items.map(item => {
//             if (item.id === id) {
//                 return { ...item, picture };
//             } else {
//                 return item;
//             }
//         }));
//     };
//
//
//     // define an array of objects with the content for each item
//     const [items, setItems] = React.useState([
//     { id: 1, label: "Hiking Shoes",
//             picture: "https://images.unsplash.com/photo-1551384955-233da563a9bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1959&q=80" },
//         { id: 2, label: "Outdoor Clothes",
//             picture: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
//         },
//         { id: 3, label: "Sunglasses",
//             picture: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//         },
//         { id: 4, label: "Water",
//             picture: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2236&q=80",
//         },
//     ]);
//
//     return (
//         <div>
//         <Typography variant="h6">What to bring?</Typography>
//         <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//             {items.map((item) => {
//                 const labelId = `checkbox-list-secondary-label-${item.id}`;
//                 const isLastItem = item.id === items.length;
//                 return (
//                     <ListItem
//                         key={item.id}
//                         secondaryAction={
//                             <Checkbox
//                                 edge="end"
//                                 onChange={handleToggle(item.id)}
//                                 checked={checked.indexOf(item.id) !== -1}
//                                 inputProps={{ 'aria-labelledby': labelId }}
//                             />
//                         }
//                         // disablePadding
//                     >
//                         <ListItemButton>
//                             <ListItemAvatar>
//                                 <Avatar
//                                     alt={item.label}
//                                     src={item.picture}
//                                     // children={item.myicon}
//                                 >
//                                     <LuggageTwoToneIcon/>
//                                 </Avatar>
//                             </ListItemAvatar>
//                             <ListItemText
//                                 id={labelId}
//                                 primary={
//                                     <TextField
//                                         onChange={(e) => handleChangeText(item.id, e.target.value)}
//                                         value={item.label}
//                                         variant = "outlined"
//                                         placeholder={`Item ${item.id + 1}`}
//                                     />
//                                 }
//                             />
//                             {/*<ListItemText>*/}
//                             {/*    {isLastItem ?*/}
//                             {/*        <TextField*/}
//                             {/*            placeholder="Add item"*/}
//                             {/*            fullWidth*/}
//                             {/*            autoFocus*/}
//                             {/*            onKeyDown={(e) => {*/}
//                             {/*                if (e.key === 'Enter') {*/}
//                             {/*                    handleAddItem();*/}
//                             {/*                }*/}
//                             {/*            }}*/}
//                             {/*        />*/}
//                             {/*        :*/}
//                             {/*        <Typography id={item.id} variant="body2">{item.label}</Typography>*/}
//                             {/*    }*/}
//                             {/*</ListItemText>*/}
//
//                         </ListItemButton>
//                     </ListItem>
//                 );
//             })}
//             <ListItem>
//                 <IconButton onClick={handleAddItem}>
//                     <AddIcon />
//                 </IconButton>
//             </ListItem>
//         </List>
//     </div>
//     );
// }

export default ItemsForm;