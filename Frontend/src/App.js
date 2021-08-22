import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Registation from './components/Registation';
import About from './components/About';
import AllShop from './components/AllShop';
import Campaigns from './components/Campaigns';
import Cart from './components/Cart';
import {Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import Dashboard from './components/Dashboard';

function App() {
  return (
    
      <Router>
    <div>

    <Route exact path="/" component={Home} />
    <Route exact path="/shop" component={AllShop} />
    <Route exact path="/product" component={Product} />
    <Route exact path="/productdetails" component={ProductDetails} />
    <Route path="/login" component={Login} />
    <Route path="/registation" component={Registation} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/campaigns" component={Campaigns} />
    <Route path="/cart" component={Cart} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    </div>
     
    </Router>
  

     
  );
}

export default App;
