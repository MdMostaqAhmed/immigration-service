import React from "react";
import Banner from "../Banner/Banner";
import Clients from "../ClientsComments/Clients/Clients";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <Clients></Clients>
    </>
  );
};

export default Home;
