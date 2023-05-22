import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Results from "./pages/Results";
import Movie from "./pages/Movie";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/results/:search" element={<Results/>} />
          <Route path="/:id" element={<Movie/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
