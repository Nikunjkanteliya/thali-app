import Start from "./components/Start";
import "./App.css";
import Recipes from "./components/Recipes";
import Aboutus from "./components/Aboutus";
import Nav from "./components/Nav";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contactus from "./components/Contactus";
import Page2 from "./components/Page2";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Start />
          </Route>
          <Route path="/nav" exact>
            <Nav />
          </Route>
          <Route path={"/page2"} exact>
            <Page2 />
          </Route>
          <Route path={"/recipes"} exact>
            <Recipes />
          </Route>
          <Route path={"/contactus"} exact>
            <Contactus />
          </Route>
          <Route path={"/aboutus"} exact>
            <Aboutus />
          </Route>
          <Route path={"/checkout"} exact>
            <Checkout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
