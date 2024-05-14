import "./App.css";
import Homepage from "./Homepage";
import Contact from "./Contact";
import AboutLittleLemon from "./AboutLittleLemon";
import noodles from "./assets/noodles.png";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div> 
	  <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/about" className="nav-item">About Little Lemon</Link>
      <Link to="/contact" className="nav-item">Contact</Link>
	  </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <img src ={noodles} alt= "A picture of a plate of noodles"/>
      <img src ={require('./assets/Burger.png')} alt= "A picture of a burger"/>
    </div>
  );
}

export default App;
