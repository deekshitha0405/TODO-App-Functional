import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
