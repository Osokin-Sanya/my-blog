import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import "./Layout.scss";

export default function Loyout({ children }) {
  return (
    <div className="loyout_container">
      <Header />
      <div className="loyout_children">{children}</div>
      <Footer />
    </div>
  );
}
