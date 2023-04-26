import './App.css';
import TopBar from './Components/top bar';
import SearchSection from './Components/search section';
import RestOfPage from "./Components/rest of page";
import AddEvent from "./pages/AddEvent";
import Home from "./pages/Home";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



function App() {
  return (
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
  );
}


export default App;


