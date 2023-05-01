import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import {useTheme} from "@mui/material/styles";
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';

function Chips({ data }) {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const theme = useTheme();
    return (
        <Stack direction="row"
               spacing={2}
               justifyContent="center"
               alignItems="center"
               sx={{mt: 2}}
        >
            <Chip icon={<TuneRoundedIcon/>}
                  label={"Filters"}
                  size="small"
                  color="primary"
                  onClick={handleClick}
                  sx={{fontWeight: theme.typography.fontWeightRegular}}/>
            {data.map((item) => (
                <Chip key={item.id}
                      label={item.filter}
                      onClick={handleClick}
                      onDelete={handleDelete}
                      deleteIcon={<DoneIcon />}
                      variant="outlined"
                      size="small"
                      color="primary"
                      sx={{fontWeight: theme.typography.fontWeightRegular}}
                />
            ))}
        </Stack>
    );
}

export default Chips;
