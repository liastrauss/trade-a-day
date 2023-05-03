import Box from "@mui/material/Box";
import Logo from "./logo";
import Button from "@mui/material/Button";
import {Avatar, Divider} from "@mui/material";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material/styles";
import SearchBox from "./searchBox";
import Paper from "@mui/material/Paper";

export default function Topbar(props) {
    let navigate = useNavigate();
    const theme = useTheme();
    const AddDay = props.AddDay;
    const Search = props.Search;
    const Profile = props.Profile;

    return (
    <Box position='sticky' sx={{mt: 2}}>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mx: 4
        }}>
            <Logo/>
            {Search ?
            <SearchBox/>
            //     placeholder with empty space so it will look the same
            :  <Box sx={{width: 350, height: 32}} />
                    }
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
            }}>

            {AddDay ?
                <Button
                    variant="text"
                    onClick={() => {
                        navigate("/AddEvent");
                    }}
                >
                    Trade your day
                </Button>
                :
                <Button
                    variant="text"
                    disabled
                >
                    Trade your day
                </Button>
            }

                <Button variant="outlined"
                        onClick={() =>{
                            navigate("/GroceryDeliveryApp");
                        }}
                        style={{cursor: 'pointer'}}
                >
                    My bookings
                </Button>
                <Avatar src="/broken-image.jpg"
                        sx={{ml: 1}}
                        onClick={() => {
                            navigate("/CreateProfileNew");
                        }}
                        style={{cursor:'pointer'}}
                />
            </Box>
        </Box>
        <Divider />
    </Box>
    );
}
