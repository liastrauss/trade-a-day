import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import {useTheme} from "@mui/material/styles";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../config/firebase";

// export default function oldSearchBox() {
//     const theme = useTheme();
//     return (
//         <Paper
//             component="form"
//             sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', width: 350, height: 32, borderRadius: 25 }}
//         >
//             <InputBase
//                 sx={{
//                     ml: 1,
//                     flex: 1,
//                     fontFamily: theme.typography.main
//             }}
//                 placeholder="Start your search"
//                 inputProps={{ 'aria-label': 'search google maps' }}
//             />
//             <IconButton color="primary" type="button" sx={{ p: '10px' }} aria-label="search">
//                 <SearchIcon />
//             </IconButton>
//         </Paper>
//     );
// }

export default function SearchBox({cardData,activeSearch, setActiveSearch,setSearched}) {
    const theme = useTheme();


    // for filtering the actual data
    // const [searched, setSearched] = useState([]);
    // for knowing when something is typed
    const [searchTyped, setSearchTyped] = useState("");

    useEffect(()=>{
        // let searched;

        // actually filtering:
        const newSearch = cardData.filter((value) => value.jobTitle.toLowerCase().includes(activeSearch.toLowerCase()));
        setSearched(newSearch);

    }, [activeSearch]);



    const handleSearch = (event) => {
        const searchWord = event.target?.value;
        const newSearch = cardData.filter((value) => {
            return value.jobTitle?.toLowerCase().includes(searchWord?.toLowerCase())
        });
        setSearched(newSearch);
        setSearchTyped(searchWord);
        setActiveSearch(searchWord);
    };







    return (
        <div>
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 350, height: 32, borderRadius: 25,

                position: 'relative',
                marginLeft: 'auto',
                marginRight: 'auto',
                top: -60,
                zIndex: 1,
                [theme.breakpoints.down('md')]: {
                        top: 10, // Adjusted value for smaller screens
                    }


                    }}
        >
                <InputBase
                    sx={{
                        ml: 1,
                        flex: 1,
                        fontFamily: theme.typography.main
                    }}
                    placeholder="Start your search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange = {handleSearch}
                    value = {searchTyped}
                />
                    {searchTyped.length === 0  ? (
                        <IconButton color="primary" type="button" sx={{ p: '10px',
                                    pointerEvents: 'none',
                                   }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        ) : (
                        <IconButton color="primary" type="button" sx={{ p: '10px' }} aria-label="search"
                            onClick={() => {
                                setSearchTyped('');
                                setSearched([]);
                                setActiveSearch('');
                            }}
                        >
                            <ClearIcon />
                        </IconButton>
                        )
                    }
        </Paper>
        {/*    this is will delete, dont want to show */}
        <div className={"dataResult"}>
            {/*{searched.map((value, key) => {*/}
            {/*    return <a className="dataItem"> {value.title}</a>; // TODO: change to jobTitle*/}

            {/*})}*/}
        </div>
        </div>

);
}


