import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Checkbox from "./Checkbox";
const Home = () => (
  <>
    <h1>Home</h1>
    <div>
      <Link to="/checkbox">Checkbox</Link>
    </div>
  </>
);
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/checkbox" element={<Checkbox />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
