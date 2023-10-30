import './App.css';
import Home from '../../home';
import Profile from '../../profile';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/profile" element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;
