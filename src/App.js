import "./App.css";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
