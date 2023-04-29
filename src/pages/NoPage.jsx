import React from 'react';
import {useTheme} from "@mui/material/styles";

function NoPage() {
    const theme = useTheme();
    return (
        <div>
        <typography variant="h1">404 ERROR,we're trying:(</typography>
        </div>
    );
}

export default NoPage;
