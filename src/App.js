import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Nav";
import Simple from "./pages/Simple";
import Scientific from "./pages/Scientific";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Simple />} />
          <Route path="scientific" element={<Scientific />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
