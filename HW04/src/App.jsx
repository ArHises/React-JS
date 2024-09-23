import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./components/MainPage";
import { About } from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <nav className="top_nav">
        <Link to="/">{">"}Main</Link>
        <Link to="/about">{">"}About</Link>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <footer className="footer_bot">
        &copy; 2024 My App. All rights reserved.
        <p>Lorem ipsum dolor sit amet.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
