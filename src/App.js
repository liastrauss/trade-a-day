import './App.css';
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-datey-pickers/AdapterDayjs';


const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#009688',
            light: '#7fcac3',
            lightest: '#BFE4E1',
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
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
    shape: {
        borderRadius: 4,
    },
});


function App() {
    return (
          // need this so we can work with dates:
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="App">
                <ThemeProvider theme={theme}>
                    <div>
                        <Home/>
                    </div>
                </ThemeProvider>
            </div>
        </LocalizationProvider>
    )
}

export default App;


