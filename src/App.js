import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./index.css";
import About from "./pages/About/About";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

   </div>
  );
}

export default App;
