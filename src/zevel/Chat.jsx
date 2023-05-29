import React from 'react';
import {useTheme} from "@mui/material/styles";
import ChatBox from "../Components/ChatBox";

export default function Chat() {
    const theme = useTheme();
    return (
        <div>
            <ChatBox/>
        </div>
    );
}

