import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {useTheme} from '@mui/material/styles';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import {CardActionArea} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import {getDocs, collection} from "firebase/firestore";
import Chips from "./filterChips";
import {db} from "../config/firebase";
import Images from "./mainimage2";
import SearchBox from "./searchBox";


export default function EventCard({value = null}) {
    const theme = useTheme();
    let navigate = useNavigate();

    // access info from firebase
    const [cardData, setCardData] = useState([]);
    const cardCollectionRef = collection(db, "DataBase1")

    // filtering

    const [filtered, setfiltered] = useState([]);
    const [activeFilter, setActiveFilter] = useState("Filters");
    const [activeSearch, setActiveSearch] = useState();


    // function to get card data
    useEffect(() => {
        const getCardData = async () => {
            // read data and set the card data
            try {
                const data = await getDocs(cardCollectionRef);
                const cardInfo = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));

                setCardData(cardInfo);
                setfiltered(cardInfo);

            } catch (err) {
                console.error(err)
            }
        };

        getCardData();
    }, []);

    // Get the screen size using Material-UI useMediaQuery hook
    const isXs = useTheme().breakpoints.down('xs');
    const screenwidth = window.innerWidth;

    return (
        <div>
            <SearchBox cardData={cardData} activeSearch={activeSearch} setActiveSearch={setActiveSearch}
                       setSearched={setfiltered}/>
            <Images events={cardData}/>

            <Chips cardData={cardData}
                   activeFiler={activeFilter}
                   setActiveFilter={setActiveFilter}
                   setfiltered={setfiltered}
                   sx={{mb: 4, mt: -2}}/>
            <Box sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                justifyContent: 'center',
                mt: 4
            }}>
                {filtered.map((item) => (
                    <Card
                        key={item.id} // Provide a unique key for each item
                        sx={{
                            width: {
                                xs: screenwidth, // Set width to screen width in xs
                                sm: 150, //600
                                md: 190, //900
                                lg: 250, //1200
                                // xl: 400, //1563
                            },
                            height: {
                                xs: screenwidth * 0.65,
                                sm: 220, //600
                                md: 279, //900
                                lg: 368, //120
                            },
                            boxShadow: 0,
                            my: 1,
                            mx: 2.5,
                        }}
                    >
                        <CardActionArea onClick={() => {
                            navigate(`/OverView2/${item.id}`);
                        }}>

                            <CardMedia
                                component="img"
                                image={item?.picture}
                                className="card-img"
                                sx={{
                                    borderRadius: 3,
                                    backgroundSize: 'cover', // Equivalent to object-fit: cover
                                    backgroundPosition: 'center',
                                    width: {
                                        xs: screenwidth, //0
                                        sm: 150, //600
                                        md: 190, //900
                                        lg: 250, //1200
                                        // xl: 400, //1563
                                    },
                                    height: {
                                        xs: screenwidth * 0.5, //0
                                        sm: 150, //600
                                        md: 190, //900
                                        lg: 250, //1200
                                        // xl: 400, //1563
                                    },
                                }}
                            />
                            {/*<Box sx={{ flexDirection: 'row' }}>*/}
                            <CardContent sx={{
                                fontSize: 13,
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: theme.typography.fontWeightMedium,
                                lineHeight: 1,
                                mt: -1,
                            }}
                            >
                                {item.hostName}, {item.jobTitle}
                            </CardContent>
                            <CardActions
                                sx={{
                                    color: theme.palette.text.secondary,
                                    fontWeight: theme.typography.fontWeightRegular,
                                    fontFamily: theme.typography.fontFamily,
                                    fontSize: 12,
                                    justifyContent: 'flex-start',
                                    lineHeight: 1,
                                    mt: -2.5,
                                    ml: 1
                                }}>
                                <p><LocationOnRoundedIcon sx={{fontSize: 13}}/>{item.location}</p>
                            </CardActions>
                            {/*</Box>*/}
                        </CardActionArea>
                    </Card>

                ))
                }
            </Box>
        </div>
    )

}
