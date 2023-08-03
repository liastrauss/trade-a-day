import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <DevSupport ComponentPreviews={ComponentPreviews}
//                     useInitialHook={useInitial}
//         >
//             <App/>
//         </DevSupport>
//     </React.StrictMode>
// );
//FOR ROUTING:
//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import AddEvent from "./pages/AddEvent";
import Home from "./pages/Home";
import CreateProfile from "./pages/CreateProfile"
import NoPage from "./pages/NoPage";

import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import OverView from "./pages/OverView";
import OverView2 from "./pages/OverView2";
import Logo from "./Components/logo";
import Chat from "./zevel/Chat";
import Landing from "./pages/Landing";
import NewProfileCreation from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

// configuring our theme
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#009688',
            light: '#7fcac3',
        },
        secondary: {
            main: '#D68FA3',
        },
        info: {
            main: '#bedcdc',
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





export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <BrowserRouter>
                        {/*what appears here will be in all the pages!*/}
                    {/*<Logo sx = {{borderRadius: 2}}/>*/}
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route index element={<Home/>} />
                                <Route path="AddEvent" element={<AddEvent/>} />
                                <Route path="OverView2/:index" element={<OverView2/>} />
                                <Route path="CreateProfile" element={<CreateProfile/>} />
                                <Route path="Landing" element={<Landing/>} />
                                <Route path="SignUp" element={<NewProfileCreation/>} />
                                <Route path="LogIn" element={<LoginPage/>} />
                                {/*<Route path="Home" element={<Home />} />*/}
                                <Route path="*" element={<NoPage />} />
                            </Route>
                        </Routes>
                </BrowserRouter>
            </LocalizationProvider>
        </ThemeProvider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
