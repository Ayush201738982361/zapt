import { useState } from "react";
import { ButtonContext } from "../Contexts/ButtonContext";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import HeroSection from "../Components/HeroSection";

function Home() {
  const [ButtonText] = useState("Default");

  return (
    <>
      <ButtonContext.Provider value={{ ButtonText }}>
        <Navbar />
        <HeroSection />
        <Cards />
      </ButtonContext.Provider>
    </>
  );
}

export default Home;
