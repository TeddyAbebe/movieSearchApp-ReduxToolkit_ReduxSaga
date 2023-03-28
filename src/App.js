import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
function App() {
  return (
    <div className="App">
      {/* <h2>Redux Toolkit with Saga</h2> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
