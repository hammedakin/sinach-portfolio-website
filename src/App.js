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
import RefarmFarm from "./components/CaseStudy/RefarmFarm";
import Creatorh from "./components/CaseStudy/Creatorh";
import Stanrute from "./components/CaseStudy/Stanrute";
import ScrollToTop from "./components/ScrollToTop";
import ScrollButton from "./components/ScrollBtn";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
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
        <Route exact path="/works/5" element={<RefarmFarm />} />
        <Route exact path="/works/6" element={<Creatorh />} />
        <Route exact path="/works/7" element={<Stanrute />} />

        {/* Case Study */}
      </Routes>

      <ScrollButton />
    </div>
  );
}

export default App;
