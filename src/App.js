import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import All from "./component/All";
import Active from "./component/Active";
import Completed from "./component/Completed";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>#todo</h1>
      <Header />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/active" element={<Active />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </div>
  );
}

export default App;
