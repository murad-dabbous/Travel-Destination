import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
