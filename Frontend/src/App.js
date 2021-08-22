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
 //Rasel
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
//Asif
	<Route exact path="/" component={User} />
	<Route path="/add-user" component={Adduser} />
	<Route path="/edit-user/:id" component={Edituser} />
	<Route path="/view-product" component={Product} />
	<Route path="/add-product" component={Addproduct} />
	<Route path="/edit-product/:id" component={Editproduct} />


// Ridowan ahad
  <Route exact path="/" component={Student}/>
  <Route path="/add-student" component={Addstudent}/>
  <Route path="/edit-student/:id" component={Editstudent}/>

    </div>

     
    </Router>
  

     
  );
}

export default App;
