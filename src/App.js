import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DimondDetail from "./Pages/DimondDetail";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<SearchPage />} />
        <Route path="/details" element={<DimondDetail />} />
      </Routes>
    </div>
  );
}

export default App;
