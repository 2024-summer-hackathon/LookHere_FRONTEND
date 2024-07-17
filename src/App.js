import "./App.css";
import { Routes, Route } from "react-router-dom";
import ChooseKeyWord from "./pages/ChooseKeyWord";
import ChooseFrame from "./pages/ChooseFrame";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/choose-keyword" element={<ChooseKeyWord />} />
      <Route path="/choose-frame" element={<ChooseFrame />} />
    </Routes>
  );
}

export default App;
