import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ButtonContext } from "./Contexts/ButtonContext";

import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  const [ButtonText] = useState("Default");
  return (
    <>
      <ButtonContext.Provider value={{ ButtonText }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ButtonContext.Provider>
    </>
  );
}

export default App;
