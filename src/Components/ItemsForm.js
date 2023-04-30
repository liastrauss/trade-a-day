import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Avatar, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import List from '@mui/material/List';
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';
import LuggageTwoToneIcon from '@mui/icons-material/LuggageTwoTone';import AddIcon from '@mui/icons-material/Add'

export default function ItemsForm() {
    const [checked, setChecked] = React.useState([1]);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const handleAddItem = () => {
        const newItem = { id: items.length+1, label: '', picture: '' };
        setItems(items => [...items, newItem]);
    };

    const handleChangeText = (id, label) => {
        setItems(items => items.map(item => {
            if (item.id === id) {
                return { ...item, label };
            } else {
                return item;
            }
        }));
    };

    const handleChangeIcon = (id, picture) => {
        setItems(items => items.map(item => {
            if (item.id === id) {
                return { ...item, picture };
            } else {
                return item;
            }
        }));
    };


    // define an array of objects with the content for each item
    const [items, setItems] = React.useState([
    { id: 1, label: "Hiking Shoes",
            picture: "https://images.unsplash.com/photo-1551384955-233da563a9bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1959&q=80" },
        { id: 2, label: "Outdoor Clothes",
            picture: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
        },
        { id: 3, label: "Sunglasses",
            picture: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        { id: 4, label: "A lot of water",
            picture: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2236&q=80",
        },
    ]);

    return (
        <div>
        <Typography variant="h6">What should they bring?</Typography>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {items.map((item) => {
                const labelId = `checkbox-list-secondary-label-${item.id}`;
                const isLastItem = item.id === items.length;
                return (
                    <ListItem
                        key={item.id}
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(item.id)}
                                checked={checked.indexOf(item.id) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        }
                        disablePadding
                        color= "red"
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt={item.label}
                                    src={item.picture}
                                    // children={item.myicon}
                                >
                                    <LuggageTwoToneIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                id={labelId}
                                primary={
                                    <TextField
                                        onChange={(e) => handleChangeText(item.id, e.target.value)}
                                        value={item.label}
                                        variant = "filled"
                                        placeholder={`Item ${item.id + 1}`}
                                    />
                                }
                            />
                            {/*<ListItemText>*/}
                            {/*    {isLastItem ?*/}
                            {/*        <TextField*/}
                            {/*            placeholder="Add item"*/}
                            {/*            fullWidth*/}
                            {/*            autoFocus*/}
                            {/*            onKeyDown={(e) => {*/}
                            {/*                if (e.key === 'Enter') {*/}
                            {/*                    handleAddItem();*/}
                            {/*                }*/}
                            {/*            }}*/}
                            {/*        />*/}
                            {/*        :*/}
                            {/*        <Typography id={item.id} variant="body2">{item.label}</Typography>*/}
                            {/*    }*/}
                            {/*</ListItemText>*/}

                        </ListItemButton>
                    </ListItem>
                );
            })}
            <ListItem>
                <IconButton onClick={handleAddItem}>
                    <AddIcon />
                </IconButton>
            </ListItem>
        </List>
    </div>
    );
}

