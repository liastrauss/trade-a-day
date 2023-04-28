import React from 'react';
import { useTheme } from '@mui/material/styles';
import Chat from "../Components/chat";


function MessagePage() {
    const theme = useTheme();
    return (
        <div>
            {/*<Chat/>*/}
            <h1>Message</h1>
        </div>
    );
}

export default MessagePage;
