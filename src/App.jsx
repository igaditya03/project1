import React from "react";
// import Form from './components/Form'
// import FormExample from './components/FormExample'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home";
import Login from "./pages/login"; // import your login page
import Signup from "./pages/signup";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Details from "./pages/Details";
function App() {
  return (
    <>
      {/* <Form/> */}
      {/* <FormExample/> */}

      {
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/details/:id" element={<Details/>} />
          </Routes>
        </Router>
      }
    </>
  );
}

export default App;
