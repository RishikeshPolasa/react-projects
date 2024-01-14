import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Checkbox from "./Checkbox";
import FileUpload from "./FileUpload";
import FileUploadDesign1 from "./FileUpload/FileUpload";
import Main from "./FileUpload/main";
import FileUploadDesign2 from "./FileUpload/FileUploadDesign2";

const Home = () => (
  <>
    <h1>Home</h1>
    <div>
      <Link to="/checkbox">Checkbox</Link>
    </div>
    <div>
      <Link to="/fileUpload">FileUpload</Link>
    </div>
  </>
);
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkbox" element={<Checkbox />} />
          <Route path="/" element={<Home />} />
          <Route path="/fileUploadDesign1" element={<FileUploadDesign1 />} />
          <Route path="/fileUploadDesign2" element={<FileUploadDesign2 />} />
          <Route path="/fileUpload" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
