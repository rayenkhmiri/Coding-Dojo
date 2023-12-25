import "./App.css";
import "./style/hmed.css"
import Display from "./components/Display";
// import Form  from "./components/com";
import { useState } from "react";
function App() {


  const colorList = [];
  const [color, setColor] = useState(colorList);

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <Display color={color} />
    </div>
  );
}

export default App;