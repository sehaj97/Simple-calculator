import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Nav";
import Simple from "./pages/Simple";
import Scientific from "./pages/Scientific";
import "./App.css";

function App() {
  const [calculatorValues, SetCalculatorValues] = useState([
    ["AC", "="],
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "*"],
    ["0", ".", "%", "/"],
  ]);
  const [calculatedValue, setCalculatedValue] = useState("");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            index
            element={
              <Simple
                calculatorValues={calculatorValues}
                calculatedValue={calculatedValue}
                setCalculatedValue={setCalculatedValue}
              />
            }
          />
          <Route path="scientific" element={<Scientific />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
