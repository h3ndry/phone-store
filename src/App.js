import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./componets/Navbar"
import ProductList from "./componets/ProductList"
import Details from "./componets/Details"
import Cart from "./componets/Cart"
import Default from "./componets/Default"

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>

    </React.Fragment>
  );
}

export default App;