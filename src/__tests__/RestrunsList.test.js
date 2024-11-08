import React from "react";
import Body from "../components/Body"
import { act, fireEvent, getAllByTestId, render,screen } from "@testing-library/react";
import data from "../MocData/RestruntListMoc.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
          return Promise.resolve(data);
        }
    })
  });
describe("test cases for Restruncard and body",()=>{
    // beforAll(()=>{

    // });
    // afterAll(()=>{

    // });
    // beforeEach(()=>{

    // })
    // afterEach(()=>{

    // });

    it("should have Search button",async ()=>{
        await act(async()=>{
            render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>);
        })
         const searchbtn=screen.getByRole("button",{name:"Search"});
         expect(searchbtn).toBeInTheDocument();
    });
    
    it("should give the search number of text items",async ()=>{
        await act(async()=>{
            render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>);
        })
         const searchInput=screen.getByTestId("searchInput");
         const searchbtn=screen.getByRole("button",{name:"Search"});
         fireEvent.change(searchInput,{target:{value:"Re"}});
         fireEvent.click(searchbtn);
         const searchCards=screen.getAllByTestId("resturntcard");
         expect(searchCards.length).toBe(2);
         
    });

    it("should give the top rated restruts",async ()=>{
        await act(async()=>{
            render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>);
        });
         const topRated=screen.getByTestId("toprated");
         fireEvent.click(topRated);
         const searchCards=screen.getAllByTestId("resturntcard");
         expect(searchCards.length).toBe(17);
         
    });
    
})
