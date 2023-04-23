import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import AddEvent from "./pages/AddEvent";
// import Home from "./pages/Home";
// import PopUp from "./PopUp";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
//
// export default function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<Home/>} />
//                     <Route path="Add Event" element={<AddEvent />} />
//                     {/*<Route path="contact" element={<Contact />} />*/}
//                     {/*<Route path="*" element={<NoPage />} />*/}
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }
//
// ReactDOM.render(<App />, document.getElementById("root"));
