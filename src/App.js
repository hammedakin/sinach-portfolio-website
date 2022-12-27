import { Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Route path="/" element={<Home />} />

      <Home />
    </div>
  );
}

export default App;
