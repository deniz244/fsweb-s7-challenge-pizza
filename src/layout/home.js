import React from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "../pages/main";
import Navmenu from "../comps/navmenu";
import Secenekler from "../pages/secenekler";
import Footer from "../pages/footer";

export default function Home() {
  return (
    <div>
      <div>
        <Main />
      </div>
      <div>
        <Navmenu />
      </div>
      <div>
        <Secenekler />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
