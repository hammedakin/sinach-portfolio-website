import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./index.css";
import About from "./pages/About/About";
import Shelf from "./pages/Shelf/Shelf";
import Works from "./pages/Works/Works";
import RefarmB from "./components/CaseStudy/RefarmB";
import Repute from "./components/CaseStudy/Repute";
import Sonr from "./components/CaseStudy/Sonr";
import RefarmField from "./components/CaseStudy/RefarmField";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/shelf" element={<Shelf />} />
        <Route exact path="/works" element={<Works />} />

        {/* Case Study */}
        <Route exact path="/works/1" element={<RefarmB />} />
        <Route exact path="/works/2" element={<Repute />} />
        <Route exact path="/works/3" element={<Sonr />} />
        <Route exact path="/works/4" element={<RefarmField />} />

        {/* Case Study */}
      </Routes>
    </div>
  );
}

export default App;
