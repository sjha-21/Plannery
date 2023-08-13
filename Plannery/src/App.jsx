import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Start from "./components/Start";
import Generate from "./components/Generate";
import Div1 from "./components/div1";
import Div2 from "./components/Div2";
import Div3 from "./components/Div3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="common">
      <Navbar />
      <Start />
      <Div1 />
      <Div2 />
      <Div3 />
      <Generate />
    </div>
  );
}

export default App;
