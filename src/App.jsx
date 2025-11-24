import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ButtonContext } from "./Contexts/ButtonContext";
import LogicalReasoning from "./Pages/LogicalReasoning";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const [ButtonText] = useState("Default");
  return (
    <>
      <ButtonContext.Provider value={{ ButtonText }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logical-reasoning" element={<LogicalReasoning/>}/>
          </Routes>
        </BrowserRouter>
      </ButtonContext.Provider>
    </>
  );
}

export default App;
