import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Madnav from "./components/Madnav";
import Home from "./components/Home";
import Whoweare from "./components/Pages/Whoweare";
import Gallery from "./components/Pages/Gallery";
import Gta5 from "./components/Pages/Gta5";
import Rdr2 from "./components/Pages/Rdr2";
import Joinus from "./components/Pages/Joinus";
function App() {
  return (
    <div className="Container">
      <Madnav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/whoweare" element={<Whoweare />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gta5" element={<Gta5 />} />
        <Route path="/rdr2" element={<Rdr2 />} />
        <Route path="/joinus" element={<Joinus />} />
      </Routes>
    </div>
  );
}

export default App;
