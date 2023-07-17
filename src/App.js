import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./layout/main";
import Secenekler from "./layout/secenekler";
import Siparisolustur from "./pages/siparisolustur";
import Navmenu from "./pages/navmenu";
import Menuler from "./pages/menuler";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <div>
            {/* <Link to="/pizza">Secenekler</Link> */}
            <div>
              <Main />
            </div>
            <div>
              <Navmenu />
            </div>
            <div>
              <Secenekler />
            </div>

            <Switch>
              <Route path="/pizza">
                <Secenekler />
              </Route>

              <Route path="/pizza-olustur">
                <Siparisolustur />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
};
export default App;
