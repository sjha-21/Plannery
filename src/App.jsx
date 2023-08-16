import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from "./components/Start";

import Div1 from "./components/Div1";
import Div2 from "./components/Div2";
import Div3 from "./components/Div3";
import Create from "./components/Create"; 


const Div123 = () => (
  <div>
    <Start />
    <Div1 />
    <Div2 />
    <Div3 />
  </div>
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="common">
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Div123 />} /> {/* Route for Div1, Div2, and Div3 */}
          <Route path="/create" element={<Create />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
