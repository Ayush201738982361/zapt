import { useState } from "react";
import { ButtonContext } from "../Contexts/ButtonContext";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import HeroSection from "../Components/HeroSection";

function Home() {
  const [ButtonText] = useState("Default");

  return (
    <>
      <ButtonContext.Provider value={{ ButtonText }}>
        <Navbar />
        <HeroSection />
      </ButtonContext.Provider>
      <Card />
    </>
  );
}

export default Home;
