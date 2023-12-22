import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Blogpage from "./blogpage/Blogpage.jsx";
import Home from "./home/Home.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/:id" element={<Blogpage/>} />
      </Routes>
    </div>
  );
}

export default App;
