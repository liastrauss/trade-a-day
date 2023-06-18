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


    const [selectedChip, setSelectedChip] = useState(null);



    useEffect(()=>{
        let filtered;


        if (activeFiler==="Filters"){
            setfiltered(cardData);
            return;
        }

        if (activeFiler==="Outdoors"){
        // const filtered = cardData.filter((item) => item.location===(activeFiler)
            filtered = cardData.filter((item) => item.outdoors===true);
            setfiltered(filtered);
            return;
        }

        if (activeFiler==="Indoors"){
            // const filtered = cardData.filter((item) => item.location===(activeFiler)
            filtered = cardData.filter((item) => item.outdoors===false);
            setfiltered(filtered);
            return;
        }

        if (activeFiler==="Accessible"){
            // const filtered = cardData.filter((item) => item.location===(activeFiler)
            filtered = cardData.filter((item) => item.accessible===true);
            setfiltered(filtered);
            return;
        }

        if (activeFiler==="Suitable for Children"){
            filtered = cardData.filter((item) => item.suitableForChildren===true);
            setfiltered(filtered);
            return;
        }

        if (activeFiler==="Standard Physical Effort"){
            filtered = cardData.filter((item) => item.physicalEffort===2 ||  item.physicalEffort===1);
            setfiltered(filtered);
            return;
        }


        filtered = cardData.filter((item) => item.location===(activeFiler));



    setfiltered(filtered);
    }, [activeFiler]);

    const handleClick = (filter) => {
        console.info('You clicked the Chip.');
        console.info(filter);

        setSelectedChip(filter);


        //
        // if (selectedChip === filter) {
        //     // If the same chip is clicked again, clear the selection
        //     setSelectedChip(null);
        // } else {
        //     // If a different chip is clicked, update the selection
        //     setSelectedChip(filter);
        // }

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
                  variant="outlined"
                  onClick={() => handleClick("Filters")}
                  sx={{fontWeight: theme.typography.fontWeightRegular}}/>
            {filterData.filters.map((item) => (
                <Chip key={item.id}
                      label={item.filter}
                      onClick={() => handleClick(item.filter)}
                      // onDelete={handleDelete}
                      deleteIcon={<DoneIcon />}
                      // variant="outlined"
                      variant={selectedChip === item.filter ? 'contained' : 'outlined'} // Check if the chip is selected

                      size="small"
                      color="primary"
                      sx={{fontWeight: theme.typography.fontWeightRegular}}>



                </Chip>
            )) }



        </Stack>
    );
}

export default Chips;
