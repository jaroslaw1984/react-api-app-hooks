import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/pages/home/Home";
import Footer from "../components/footer/Footer";
import About from "../components/pages/about/About";
import Details from "../components/pages/details/Details";
import AppState from "../components/context/resources/AppState";
import NotFound from "../components/pages/notFound/NotFound";

const App = () => {
  return (
    <AppState>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/details/:name" component={Details} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </AppState>
  );
};

export default App;
