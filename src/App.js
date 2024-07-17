import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ChooseKeyWord from "./pages/ChooseKeyWord";
import ChooseFrame from "./pages/ChooseFrame";
import Main from "./pages/Main";
import Webcam from "./pages/Camera";
import PhotoResult from "./pages/PhotoResult";

function App() {
  const [imgs, setImgs] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/choose-keyword" element={<ChooseKeyWord/>} />
      <Route path="/choose-frame" element={<ChooseFrame />} />
      <Route path="/camera" element={<Webcam setImgs={setImgs}/>} />
      <Route path="/photoResult" element={<PhotoResult imgs={imgs}/>} />
    </Routes>
  );
}

export default App;
