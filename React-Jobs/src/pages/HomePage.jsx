import React from "react";
import Browse from "../Components/Browse";
import Category from "../Components/Category";
import Hero from "../Components/HeroSection";
import ViewAllJobs from "../Components/ViewAllJobs";

const HomePage = () => {
  return (<>
    <Hero/>
    <Category/>
    <Browse isHome={true}/>
    <ViewAllJobs/>
  </>);
};

export default HomePage;
