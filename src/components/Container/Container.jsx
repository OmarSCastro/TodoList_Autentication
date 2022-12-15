
import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "./../Header/Header";

export const Container = (props) => {
  return (
    <div className="bg-pink-900 layout-wrapper layout-wrapper-light">
      <Header />
      <div className="px-3 py-2">

        {props.children}
      </div>
      <Footer />
    </div>
  );
};