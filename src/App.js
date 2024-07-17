import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChooseKeyWord />} />
        <Route path="/frame" element={<ChooseFrame />} />
        <Route path="/result" element={<PhotoResult />} />
      </Routes>
    </Router>
  );
}

export default App;
