import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Madnav from "./components/Madnav";
import Home from "./components/Home";
function App() {
  return (
    <div className="Container">
      <Madnav />
      <Home />
    </div>
  );
}

export default App;
