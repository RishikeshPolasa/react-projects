import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Checkbox from "./Checkbox";
import FileUpload from "./FileUpload";
import FileUploadDesign1 from "./FileUpload/FileUpload";
import Main from "./FileUpload/main";
import FileUploadDesign2 from "./FileUpload/FileUploadDesign2";
import Pagination from "./Pagination/index";
import OTPField from "./OTPField";
import Accordian from "./Accordian/index";
import TabComponent from "./TabComponent/TabComponent";
import FileExplorer from "./FileExplorer/FileExplorer";
const Home = () => (
  <>
    <h1>Home</h1>
    <div>
      <Link to="/checkbox">Checkbox</Link>
    </div>
    <div>
      <Link to="/fileUpload">FileUpload</Link>
    </div>
    <div>
      <Link to="/pagination">Pagination</Link>
    </div>
    <div>
      <Link to="/otpfield">OTPField</Link>
    </div>
    <div>
      <Link to="/accordian">Accordian</Link>
    </div>
    <div>
      <Link to="/tab-component">Tab Component</Link>
    </div>
    <div>
      <Link to="/fileExplorer">File Explorer</Link>
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
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/otpfield" element={<OTPField length={4} />} />
          <Route path="/accordian" element={<Accordian />} />
          <Route path="/tab-component" element={<TabComponent />} />
          <Route path="/fileExplorer" element={<FileExplorer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
