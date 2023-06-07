import React, {useEffect, useState} from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import {useTheme} from "@mui/material/styles";
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import {Tabs, TabScrollButton} from "@mui/material";
import Filtered from "./filtered_data";
import filterData from "../data/filter-data.json";
import EventCard from "./card";


function Chips({setActiveFilter, activeFiler, setfiltered, cardData}) {

    useEffect(()=>{
        if (activeFiler==="Filters"){
            setfiltered(cardData);
            return;
        }

        const filtered = cardData.filter((item) => item.location===(activeFiler)
    );
    setfiltered(filtered);
    }, [activeFiler]);

    const handleClick = (filter) => {
        console.info('You clicked the Chip.');
        console.info(filter);
        setActiveFilter(filter)
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const theme = useTheme();
    return (
        <Stack direction="row"
               spacing={2}
               justifyContent="flex-start"
               alignItems="flex-start"
               sx={{
                   mt: 2,
                   maxWidth: '100%',
                   overflow: 'auto',
                   ml: 3,
        }}>
            <Chip icon={<TuneRoundedIcon/>}
                  label={"Filters"}
                  size="small"
                  color="primary"
                  o onClick={() => handleClick("Filters")}
                  sx={{fontWeight: theme.typography.fontWeightRegular}}/>
            {filterData.filters.map((item) => (
                <Chip key={item.id}
                      label={item.filter}
                      onClick={() => handleClick(item.filter)}
                      // onDelete={handleDelete}
                      deleteIcon={<DoneIcon />}
                      variant="outlined"
                      size="small"
                      color="primary"
                      sx={{fontWeight: theme.typography.fontWeightRegular}}>
                      {/*{showEventCard && <EventCard value="Jerusalem" />}*/}


                </Chip>
            )) }



        </Stack>
    );
}

export default Chips;
