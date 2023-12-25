import './Components/App/App.css';
import About from './about';
import Home from './home';
import Profile from './profile';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/profile" element={<Profile />}/>
          <Route exact path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
