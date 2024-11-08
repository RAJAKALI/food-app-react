import { render,screen } from "@testing-library/react";
import RestruntCard from "../components/RestruntsCard";
import React from "react";
import MOC_DATA from "../MocData/RestruntMoc.json";
import "@testing-library/jest-dom";

it("should render RestruntCard",()=>{
   render(<RestruntCard {...MOC_DATA.info}/>);
})

it("should have Header",()=>{
    render(<RestruntCard {...MOC_DATA.info}/>);
    const header=screen.getByText("Theobroma");
    expect(header).toBeInTheDocument();
 })