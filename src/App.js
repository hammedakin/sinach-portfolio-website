import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./index.css";
import About from "./pages/About/About";
import Shelf from "./pages/Shelf/Shelf";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/shelf" element={<Shelf />} />
      </Routes>
    </div>
  );
}

export default App;
