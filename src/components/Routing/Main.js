import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3/:id" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
      {/* <Home/>
        <Page1/>
        <Page2/>
        <Page3/> */}
    </div>
  );
};

export default Main;
