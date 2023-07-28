import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import {Divider, ToggleButton} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import Link from '@mui/material/Link';

export default function ViewHobbies({ hostID }) {
    const theme = useTheme();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchUserData() {
            try {
                console.log('Fetching user data for hostID:', hostID);
                const usersCollectionRef = collection(db, 'users');
                const q = query(usersCollectionRef, where('userID', '==', hostID));
                const querySnapshot = await getDocs(q);

                console.log('Query snapshot size:', querySnapshot.size);

                querySnapshot.forEach((docSnap) => {
                    setUserData(docSnap.data());
                });
            } catch (error) {
                console.error('Error retrieving user data:', error);
            }
        }

        fetchUserData();
    }, [hostID]);


    return (
        <Box>
            <Stack direction="row" spacing={1} my={2}>
                <Typography>My favourite food is</Typography>
                <Chip icon={<FastfoodRoundedIcon/>} label={userData?.favoriteFood} variant="outlined" size="small" color="primary"/>
            </Stack>
            <Stack direction="row" spacing={1} my={2}>
                <Typography>My hobbies include</Typography>
                <Chip icon={<SportsEsportsRoundedIcon/>} label={userData?.hobbies} variant="outlined" size="small" color="primary"/>
            </Stack>
            <Stack direction="row" spacing={1} my={2}>
                <Typography>My skills include</Typography>
                <Chip icon={<SchoolRoundedIcon/>} label={userData?.skills} variant="outlined" size="small" color="primary"/>
            </Stack>
            <Divider my={2}/>
            <Typography my={2}>Feel free to contact me!</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                {/*<Typography color="primary" my={1} sx={{display: 'flex', justifyContent: 'center'}}>*/}
                {/*    {userData?.userPhone}*/}
                {/*</Typography>*/}
                {/*for whatsapp link*/}
                <Typography color="primary" my={1} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Link href={"https://wa.me/972" + userData?.userPhone}
                          underline="always"
                          color="primary"
                          target="_blank"
                          rel="noopener noreferrer"
                    >
                        {'+972 ' + userData?.userPhone}
                    </Link>
                </Typography>
                <Typography color="primary" sx={{display: 'flex', justifyContent: 'center'}}>
                    {userData?.userEmail}
                </Typography>
            </Box>

            {/*TODO: Not sure how to add pizza topping if they said they don't like pizza*/}
            {/*TODO: Can't put superpowers the way they're shown in collection atm*/}
        </Box>
    );
}
