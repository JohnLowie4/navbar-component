import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./UniversalHeader.scss";
import Button from "./Button";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/AboutUs";
import Contact from "./pages/Contact";

function UniversalHeader() {
  return (
    <Router>
      <div className="universal-header">
        <div className="universal-header_logo">
          <img src="/src/assets/abstractly.svg" alt="Abstract Logo" />
        </div>
        <div className="universal-header_navigation">
          {/* <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link> */}
        </div>
        <div className="universal-header_cta">
          <Button />
          <Button />
        </div>
      </div>

      {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/features">
          <Features />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch> */}

    </Router>
  );
}

export default UniversalHeader;