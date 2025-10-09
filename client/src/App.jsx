import { useState } from "react";
import { ButtonContext } from "./Contexts/ButtonContext";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

function App() {
  const [ButtonText] = useState("Default");
  return (
    <>
      <ButtonContext.Provider value={{ ButtonText }}>
        <Navbar />
        <HeroSection />
      </ButtonContext.Provider>
    </>
  );
}

export default App;
