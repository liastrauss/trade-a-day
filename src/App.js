import './App.css';
import TopBar from './Components/top bar';
import SearchSection from './Components/search section';
import RestOfPage from "./Components/rest of page";


function App() {
  return (
    <div className="App">
        <div>
            <TopBar>
            </TopBar>
            <SearchSection>
            </SearchSection>
            <RestOfPage>
            </RestOfPage>
        </div>


    </div>
  );
}

export default App;


