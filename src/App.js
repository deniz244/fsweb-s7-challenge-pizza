import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
              <Navmenü />
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
