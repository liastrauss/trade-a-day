import React from 'react';
import { styled } from '@mui/material/styles';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {Grid, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";

// for basic
const StyledBasicProfile = styled(Grid)({
    display: 'flex',
    alignItems: 'center',
});
const StyledBasicProfileInfo = styled(Grid)({
    marginRight: 12,
});
const StyledBasicProfileAvatar = styled(Avatar)({
    borderRadius: 8,
    backgroundColor: '#495869',
});
const StyledBasicProfileOverline = styled(Typography)({
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#8D9CAD',
});
const StyledBasicProfileName = styled(Typography)({
    fontSize: 14,
    fontWeight: 500,
    color: '#495869',
});


// function based on treasury
// function IconExplanation({ avatar = null, overline="o", name="n" }) {
//
//     return (
//         <StyledBasicProfile>
//             <StyledBasicProfileAvatar>{avatar}</StyledBasicProfileAvatar>
//             <StyledBasicProfileInfo>
//                 <StyledBasicProfileOverline>{overline}</StyledBasicProfileOverline>
//                 <StyledBasicProfileName>{name}</StyledBasicProfileName>
//             </StyledBasicProfileInfo>
//         </StyledBasicProfile>
//     );
// }
//
// export default IconExplanation();
//
