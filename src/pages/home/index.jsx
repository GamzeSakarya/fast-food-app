import React from "react";
import About from "../../components/About";
import Carousel from "../../components/Carousel";
import Campaigns from "../../components/Campaigns";
import MenuWrapper from "../../components/product/MenuWrapper";
import Reservation from "../../components/Reservation";
import Customers from "../../components/customers/Customers";
const Index = () => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default Index;
