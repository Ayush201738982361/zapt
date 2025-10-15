import { useState } from "react";
import { ButtonContext } from "../Contexts/ButtonContext";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import HeroSection from "../Components/HeroSection";
import Categories from "../Components/Categories";
import SampleQuestion from "../Components/SampleQuestion";

function Home() {
  const [ButtonText] = useState("Default");

  return (
    <>
      <ButtonContext.Provider value={{ ButtonText }}>
        <Navbar />
        <HeroSection />
        <Cards />
        <Categories />
        <SampleQuestion />
      </ButtonContext.Provider>
    </>
  );
}

export default Home;
