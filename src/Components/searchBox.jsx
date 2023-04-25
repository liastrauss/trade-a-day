import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {
    return (
        <Paper
            component="form"
            sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', width: 250, height: 32, borderRadius: 25 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Start your search"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton color="primary" type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}