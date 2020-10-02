import React from "react";

import Nav from "./Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
