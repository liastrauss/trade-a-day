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
//FOR ROUTING
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
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

import './App.css';
import Navbar from "./Navbar";
import { createTheme, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


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
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home/>} />
                        <Route path="Add Event" element={<AddEvent />} />
                        {/*<Route path="contact" element={<Contact />} />*/}
                        {/*<Route path="*" element={<NoPage />} />*/}
                    </Route>
                </Routes>
            </BrowserRouter>
    </ThemeProvider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
