import "./App.css";
import Intro from "./Intro";
import Home from "./Home";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/home");
  }, 20000);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
