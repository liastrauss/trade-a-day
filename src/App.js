import './App.css';
import AddEvent from "./pages/AddEvent";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#009688',
        },
        secondary: {
            main: '#D68FA3',
        },
        text: {
            primary: '#000000',
            secondary: 'rgba(0,0,0,0.59)',
        },
    },
    typography: {
       fontFamily: 'Raleway',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 700,
        fontWeightBold: 900,
    },
    shape: {
        borderRadius: 4,
    },
});

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



function App() {
  return (
<<<<<<< HEAD
    //   need this so we can work with dates:
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
            <div>
                <AddEvent/>
                {/*<Home/>*/}
                {/*<TopBar>*/}
                {/*</TopBar>*/}
                {/*<SearchSection>*/}
                {/*</SearchSection>*/}
                {/*<RestOfPage>*/}
                {/*</RestOfPage>*/}
            </div>
        </div>
    </LocalizationProvider>
=======
    <div className="App">
        <ThemeProvider theme={theme}>
            {/*<AddEvent/>*/}
            <Home/>
            {/*<Navbar/>*/}
        </ThemeProvider>
    </div>
>>>>>>> homepage
  );
}


export default App;


