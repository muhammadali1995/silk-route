import React from "react";
import FastTruck from "../components/Services/FastTruck";
import NormalTurck from "../components/Services/NormalTurck";
import Pricing from "../components/Services/Pricing";
import Vip from "../components/Services/Vip";

const Services = () => {
    
  return (
    <div>
        <Vip/>
        <FastTruck/>
        <NormalTurck/>
        <Pricing/>
    </div>
  );
};

export default Services;
