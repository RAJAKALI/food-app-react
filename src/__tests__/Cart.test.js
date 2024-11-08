import {act, fireEvent, render,screen } from "@testing-library/react";
import ResturntInfo from "../components/RetruntInfo";
import MOCK_DATA from "../MocData/MocItemList.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
          return Promise.resolve(MOCK_DATA);
        }
    })
  });
it("should render RestruntInfo",async()=>{
    await act(async()=>{
        render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Navbar/>
        <Cart/>
        <ResturntInfo/>
        </Provider>
        </BrowserRouter>);
    });
  
    const accordian=screen.getByText("RICE BOWLZ (7)");
    fireEvent.click(accordian);
    expect(screen.getAllByTestId("fooditems").length).toBe(7);
    const addbtn=screen.getAllByText("add(+)");
    expect(screen.getByText("Cart-(0)")).toBeInTheDocument();
    fireEvent.click(addbtn[0]);
    expect(screen.getByText("Cart-(1)")).toBeInTheDocument();
    expect(screen.getAllByTestId("fooditems").length).toBe(8);
})