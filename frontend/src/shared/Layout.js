import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";

function Layout(props) {
  <>
    <Nav />
    {props.children}
    <Footer />
  </>;
}

export default Layout;
