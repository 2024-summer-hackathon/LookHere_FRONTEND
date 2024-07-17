import "./App.css";
import { Routes, Route } from "react-router-dom";
import ChooseKeyWord from "./pages/ChooseKeyWord";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChooseKeyWord />} />
    </Routes>
  );
}

export default App;
