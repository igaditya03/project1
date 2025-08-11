import React, { useState } from "react";
import "./App.css";
import C1 from "./components/C1";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import C2 from "./components/C2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Login from "./pages/login"; // import your login page
import Signup from "./pages/signup";
function App() {
  // const students = [
  //   {
  //     name: "aditya",
  //     roll: "28231303",
  //     desc: "my profile",
  //     src: "./user.jpg",
  //     color: true,
  //     age: 20,
  //   },
  //   {
  //     name: "yash",
  //     roll: "2822871",
  //     desc: "my profile",
  //     src: "./user.jpg",
  //     color: false,
  //     age: 14,
  //   },
  //   {
  //     name: "ankush",
  //     roll: "28231307",
  //     desc: "my profile",
  //     src: "./user.jpg",
  //     color: true,
  //     age: 20,
  //   },
  //   {
  //     name: "Rishav",
  //     roll: "2822296",
  //     desc: "my profile",
  //     src: "./user.jpg",
  //     color: true,
  //     age: 20,
  //   },
  // ];

  // const msg = (a) => {
  //   alert(`Hello ${a}`);
  // };

  let [num, setNum] = useState(1);
  const incr = () => {
    setNum(num + 1);
  };
  let [a, setA] = useState(10);

  const decr = () => {
    setA(a - 1);
  };

  return (
    <div>
      {/* name and city are parameters for props */}
      {/* <C1 name="aditya" age="20" /> */}

      {/* <div className="container-fluid">
        <h1 className="text-light bg-primary">hey how are you</h1>
      </div> */}

      {/* <div className="row">
        {students.map((item, index) => {
          return (
            <div className="col" key={index}>
              <Card name={item.name} roll={item.roll} desc={item.desc} />
            </div>
          );
        })}
      </div> */}

      {/* // function as props */}
      {/* <div className="row">
        {students.map((item, index) => (
          <div className="col" key={index}>
            
            <Card name={item.name} roll={item.roll} desc={item.desc} msg={msg} img={item.src} color={item.color} age={item.age} />  
          </div>
        ))}
      </div> */}

      {/* <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router> */}

      <div>
        <p>{num}</p>

        <button onClick={incr}>click</button>

        <p>{a}</p>
        <button onClick={decr}>decrease</button>
      </div>
    </div>
  );
}

// Internal Components
const Welcome = () => {
  return <h1> hello bye </h1>;
};

export default App;
