import React, {useEffect, useState} from 'react';
import {collection, query, where, getDocs} from 'firebase/firestore';
import {auth, db} from '../config/firebase';
import {Divider} from "@mui/material";
import {useTheme} from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import Link from '@mui/material/Link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from "@mui/material/IconButton";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

export default function ViewHobbies({hostID}) {
    const theme = useTheme();

    // loading process
    const [loading, setLoading] = useState(true);

    const [userData, setUserData] = useState(null);
    const [authData, setauthData] = useState(null);

    const [food, setfood] = useState(null);
    const [pizzaToppings, setpizzaToppings] = useState(null);
    const [hobbies, sethobbies] = useState(null);


    useEffect(() => {
        async function fetchUserData() {
            try {
                console.log('Fetching user data for hostID:', hostID);
                const usersCollectionRef = collection(db, 'users');
                // here we are matching the user id and host

                const q = query(usersCollectionRef, where('userID', '==', hostID));
                const q_auth = query(usersCollectionRef, where("userID", '==', auth?.currentUser?.uid));

                const querySnapshot = await getDocs(q);
                const querySnapshot_auth = await getDocs(q_auth);

                console.log('Query snapshot size:', querySnapshot.size);
                console.log('Query snapshot size auth:', querySnapshot_auth.size);

                querySnapshot.forEach((docSnap) => {
                        setUserData(docSnap.data());

                    }
                );

                querySnapshot_auth.forEach((docSnap) => {
                    setauthData(docSnap.data());

                });

                // Once data is fetched and processed, set loading to false
                setLoading(false);


            } catch (error) {
                console.error('Error retrieving user data:', error);
                setLoading(false); // Set loading to false even if there's an error

            }
        }

        fetchUserData();

    }, [hostID]);

    useEffect(() => {
        // This useEffect will run whenever authData or userData changes
        function checkProp() {
            try {
                // Check if authData and userData have been fetched

                if (authData && userData) {
                    if (authData?.favoriteFood === userData?.favoriteFood) {
                        setfood(authData.favoriteFood);
                    }
                    if (authData?.pizzaToppings === userData?.pizzaToppings) {
                        setpizzaToppings(authData.pizzaToppings);
                    }
                    if (authData?.hobbies === userData?.hobbies) {
                        sethobbies(authData.hobbies);
                    }
                }
            } catch (error) {
                console.error("Error checking properties:", error);
            }
        }

        checkProp();
    }, [authData, userData]);

    // Conditional rendering based on loading state
    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <Box>
            <Stack direction="column">
                {food === null && (
                    <Stack direction="row" spacing={1} my={0.5}>
                        <Typography>My favourite food is</Typography>
                        <Chip
                            icon={<FastfoodRoundedIcon/>}
                            label={userData?.favoriteFood}
                            variant="outlined"
                            size="small"
                            color="primary"
                        />
                    </Stack>
                )}

                {pizzaToppings === null && (
                    <Stack direction="row" spacing={1} my={0.5}>
                        <Typography>My favourite pizza topping is</Typography>
                        <Chip
                            icon={<LocalPizzaIcon/>}
                            label={userData?.pizzaToppings}
                            variant="outlined"
                            size="small"
                            color="primary"
                        />
                    </Stack>
                )}

                {hobbies === null && (
                    <Stack direction="row" spacing={1} my={0.5}>
                        <Typography>My hobbies include</Typography>
                        <Chip
                            icon={<SchoolRoundedIcon/>}
                            label={userData?.hobbies}
                            variant="outlined"
                            size="small"
                            color="primary"
                        />
                    </Stack>
                )}
            </Stack>


            {!((food !== null && hobbies !== null && pizzaToppings !== null) ||
                (food === null && hobbies === null && pizzaToppings === null)) && (
                <Divider my={2}/>
            )}

            <Stack direction="column" spacing={0.5} my={1}/>

            {(food !== null || hobbies !== null || pizzaToppings !== null) && (
                <Typography style={{fontWeight: 'bold'}}>
                    You both have things in common!
                </Typography>
            )}

            <Stack direction="column" spacing={1} my={2}>
                {food !== null && (
                    <Stack direction="row" spacing={1} my={0.5}>
                        <Typography>You both love the same food</Typography>
                        <Chip
                            icon={<FastfoodRoundedIcon/>}
                            label={food}
                            variant="outlined"
                            size="small"
                            color="primary"
                        />
                    </Stack>
                )}
                {pizzaToppings !== null && (
                    <Stack direction="row" spacing={1} my={0.5}>
                        <Typography>You both love the same pizza topping</Typography>
                        <Chip
                            icon={<LocalPizzaIcon/>}
                            label={pizzaToppings}
                            variant="outlined"
                            size="small"
                            color="primary"
                        />
                    </Stack>
                )}
                {hobbies !== null && (
                    <Stack direction="row" spacing={1} my={0.5}>
                        <Typography>You share a hobby</Typography>
                        <Chip
                            icon={<SchoolRoundedIcon/>}
                            label={hobbies}
                            variant="outlined"
                            size="small"
                            color="primary"
                        />
                    </Stack>
                )}


            </Stack>


            <Divider my={2}/>

            <Typography my={2}>Feel free to contact me!</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>

                {(!userData?.contactMethod || userData?.contactMethod === 'Phone') && (
                    <Typography color="primary" my={1} sx={{display: 'flex', justifyContent: 'center'}}>

                        <Link href={"https://wa.me/972" + userData?.userPhone}
                              underline="always"
                              color="primary"
                              target="_blank"
                              rel="noopener noreferrer"
                        >
                            <IconButton>
                                <WhatsAppIcon color="primary"/>
                            </IconButton>
                            {'+972 ' + userData?.userPhone}
                        </Link>
                    </Typography>
                )}

                {userData?.userEmail && (!userData?.contactMethod || userData?.contactMethod === 'Email') && (
                    <Typography color="primary" sx={{display: 'flex', justifyContent: 'center'}}>
                        <Link href={`mailto:${userData?.userEmail}?subject=Reaching%20out%20from%20Trade%20a%20Day`}
                              underline="always"
                              color="primary"
                              target="_blank"
                              rel="noopener noreferrer"
                        >
                            <IconButton>
                                <EmailOutlinedIcon color='primary'/>
                            </IconButton>
                            {userData?.userEmail}
                        </Link>
                    </Typography>
                )}

            </Box>

        </Box>
    );
}

