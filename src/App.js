import logo from "./logo.svg";
import "./App.css";
import Form from "./form";
import API from "./api";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Form
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/api">
                    API
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/api" element={<API />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
