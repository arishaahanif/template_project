import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/scss/Main.scss"
import Navbars from "./Components/NavBar/Navbar";
import Home from "./Pages/Home/Home";
import Story from "./Components/NavBar/Story";
import Maker from "./Components/NavBar/Maker";
import Origin from "./Components/NavBar/Origin";
import Slide from "./Components/NavBar/Slider"
import Episodes from "./Components/NavBar/Card"
import Simple from "./Components/NavBar/Reviews.js";
import Subs from "./Components/NavBar/Sub.js";
import Read from "./Components/NavBar/Article";
import Footers from "./Components/NavBar/Footer";
import Sponsors from "./Components/NavBar/Sponsors";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <Navbars />
      <Story />
      <Slide/>
      <Maker />
      <Origin/>
      <Episodes/>
      <Simple/>
      <Subs />
      <Read/>
      <Sponsors />
      <Footers/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
