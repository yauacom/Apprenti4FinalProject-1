import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "regenerator-runtime/runtime";

import NavBar from "./NavBar.js";
import MovieList from "./MovieList.js";
import MovieDetail from "./MovieDetail.js";
import Footer from "./Footer.js";
import NewMovie from "./NewMovie.js";
import Welcome from "./Welcome.js";

const App = (props) => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/movies" exact component={MovieList} />
        <Route path="/movies/new" exact component={NewMovie} />
        <Route path="/movies/:id" exact component={MovieDetail} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
