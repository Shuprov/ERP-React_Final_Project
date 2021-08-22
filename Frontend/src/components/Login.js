
import { withRouter } from 'react-router-dom';


import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component
{
  
 
  state = {
    register_id: '',
    register_password: '',
  
  }

  handleInput = (e) => {
   // alert ("123");
        this.setState({
          [e.target.name]: e.target.value
        });
  }
  LoginCustomer = async (e) => {
      e.preventDefault();
        
      //alert ("Are you Submit Form");
      const res = await axios.post('http://localhost/React%20Final%20project/ERP-web-application/public/api/login', this.state);
      if(res.data.status === 200)
      {
          alert(res.data.message);
          if(res.data.message == "Success"){
            this.props.history.push('/dashboard');
          }else{
            this.props.history.push('/login');
          }
          this.setState({
            register_id: '',
            register_password: '',

          });
      }
  }
  render(){
    
   
    return  (
        <div>
          
        {/* molla/login.html  22 Nov 2019 10:04:03 GMT */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Molla - Bootstrap eCommerce Template</title>
        <meta name="keywords" content="HTML5 Template" />
        <meta name="description" content="Molla - Bootstrap eCommerce Template" />
        <meta name="author" content="p-themes" />
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="assets/images/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="assets/images/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="assets/images/icons/favicon-16x16.png" />
        <link rel="manifest" href="assets/images/icons/site.html" />
        <link rel="mask-icon" href="assets/images/icons/safari-pinned-tab.svg" color="#666666" />
        <link rel="shortcut icon" href="assets/images/icons/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Molla" />
        <meta name="application-name" content="Molla" />
        <meta name="msapplication-TileColor" content="#cc9966" />
        <meta name="msapplication-config" content="assets/images/icons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        {/* Plugins CSS File */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        {/* Main CSS File */}
        <link rel="stylesheet" href="assets/css/style.css" />
        <div className="page-wrapper">
          <header className="header">
            <div className="header-top">
              <div className="container">
                <div className="header-left">
                  <div className="header-dropdown">
                    <a href="#">Eng</a>
                    <div className="header-menu">
                      <ul>
                        <li><a href="#">English</a></li>
                        <li><a href="#">French</a></li>
                        <li><a href="#">Spanish</a></li>
                      </ul>
                    </div>{/* End .header-menu */}
                  </div>{/* End .header-dropdown */}
                </div>{/* End .header-left */}
                <div className="header-right">
                  <ul className="top-menu">
                    <li>
                      <a href="#">Links</a>
                      <ul>
                        <li><a href="tel:#"><i className="icon-phone" />Call: +8801684726517</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="/"><i className="icon-user" />Home</a></li>
                      </ul>
                    </li>
                  </ul>{/* End .top-menu */}
                </div>{/* End .header-right */}
              </div>{/* End .container */}
            </div>{/* End .header-top */}
            <div className="header-middle sticky-header">
              <div className="container">
                <div className="header-left">
                  <button className="mobile-menu-toggler">
                    <span className="sr-only">Toggle mobile menu</span>
                    <i className="icon-bars" />
                  </button>
                  <a href="/" className="logo">
                    <img src="assets/images/logo.png" alt="Molla Logo" width={105} height={25} />
                  </a>
                  <nav className="main-nav">
                    <ul className="menu sf-arrows">
                      <li className="megamenu-container active">
                        <a href="/" className="sf-with-ul">Home</a>
                      </li>
                      <li>
                        <a href="/shop" className="sf-with-ul"> All Shops</a>
                      </li>
                      <li>
                        <a href="/product" className="sf-with-ul">Products</a>
                      </li>
                      <li>
                        <a href="/campaigns" className="sf-with-ul">Campaigns</a>
                      </li>
                      <li>
                        <a href="/contact" className="sf-with-ul">Contact</a>
                      </li>
                      <li>
                        <a href="/about" className="sf-with-ul">About</a>
                      </li>
                    </ul>{/* End .menu */}
                  </nav>{/* End .main-nav */}
                </div>{/* End .header-left */}
                <div className="header-right">
                  <div className="header-search">
                    <a href="#" className="search-toggle" role="button" title="Search"><i className="icon-search" /></a>
                    <form action="#" method="get">
                      <div className="header-search-wrapper">
                        <label htmlFor="q" className="sr-only">Search</label>
                        <input type="search" className="form-control" name="q" id="q" placeholder="Search in..." required />
                      </div>{/* End .header-search-wrapper */}
                    </form>
                  </div>{/* End .header-search */}
                  <div className="dropdown cart-dropdown">
                    <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                      <i className="icon-shopping-cart" />
                      <span className="cart-count">2</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div className="dropdown-cart-products">
                        <div className="product">
                          <div className="product-cart-details">
                            <h4 className="product-title">
                              <a href="product.html">Beige knitted elastic runner shoes</a>
                            </h4>
                            <span className="cart-product-info">
                              <span className="cart-product-qty">1</span>
                              x $84.00
                            </span>
                          </div>{/* End .product-cart-details */}
                          <figure className="product-image-container">
                            <a href="product.html" className="product-image">
                              <img src="assets/images/products/cart/product-1.jpg" alt="product" />
                            </a>
                          </figure>
                          <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                        </div>{/* End .product */}
                        <div className="product">
                          <div className="product-cart-details">
                            <h4 className="product-title">
                              <a href="product.html">Blue utility pinafore denim dress</a>
                            </h4>
                            <span className="cart-product-info">
                              <span className="cart-product-qty">1</span>
                              x $76.00
                            </span>
                          </div>{/* End .product-cart-details */}
                          <figure className="product-image-container">
                            <a href="product.html" className="product-image">
                              <img src="assets/images/products/cart/product-2.jpg" alt="product" />
                            </a>
                          </figure>
                          <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                        </div>{/* End .product */}
                      </div>{/* End .cart-product */}
                      <div className="dropdown-cart-total">
                        <span>Total</span>
                        <span className="cart-total-price">$160.00</span>
                      </div>{/* End .dropdown-cart-total */}
                      <div className="dropdown-cart-action">
                        <a href="cart.html" className="btn btn-primary">View Cart</a>
                        <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right" /></a>
                      </div>{/* End .dropdown-cart-total */}
                    </div>{/* End .dropdown-menu */}
                  </div>{/* End .cart-dropdown */}
                </div>{/* End .header-right */}
              </div>{/* End .container */}
            </div>{/* End .header-middle */}
          </header>{/* End .header */}
          <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
              <div className="container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Pages</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Login</li>
                </ol>
              </div>{/* End .container */}
            </nav>{/* End .breadcrumb-nav */}
            <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17" style={{backgroundImage: 'url("assets/images/backgrounds/login-bg.jpg")'}}>
              <div className="container">
                <div className="form-box">
                  <div className="form-tab">
                    <ul className="nav nav-pills nav-fill" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link" id="signin-tab-2" data-toggle="tab" href="#signin-2" role="tab" aria-controls="signin-2" aria-selected="false">Sign In</a>
                      </li>
                    </ul>
                    <div className="tab-content">                     
                      <div className="tab-pane fade show active" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
                        <form onSubmit={this.LoginCustomer}>
                         
                          <div className="form-group">
                            <label htmlFor="register-email-2">Your email address *</label>
                            <input type="text" className="form-control" id="register_id" name="register_id" onChange={this.handleInput} value={this.state.register_id} />
                           
                          </div>{/* End .form-group */}
                          <div className="form-group">
                            <label htmlFor="register-password-2">Password *</label>
                            <input type="password" className="form-control" id="register_password" name="register_password" onChange={this.handleInput} value={this.state.register_password} />
                          
                          </div>{/* End .form-group */}
                          <div className="form-footer">
                            <button type="submit" className="btn btn-outline-primary-2" >
                              <span>SIGN UP</span>
                              <i className="icon-long-arrow-right" />
                            </button> 
                           
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                              <label className="custom-control-label" htmlFor="register-policy-2">I agree to the <a href="#">privacy policy</a></label>
                              <br /><br />
                              <a href="/registation">click here register now</a>
                            </div>{/* End .custom-checkbox */}
                          </div>{/* End .form-footer */}
                        </form>
                        <div className="form-choice">
                          <p className="text-center">or sign in with</p>
                          <div className="row">
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login btn-g">
                                <i className="icon-google" />
                                Login With Google
                              </a>
                            </div>{/* End .col-6 */}
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login  btn-f">
                                <i className="icon-facebook-f" />
                                Login With Facebook
                              </a>
                            </div>{/* End .col-6 */}
                          </div>{/* End .row */}
                        </div>{/* End .form-choice */}
                      </div>{/* .End .tab-pane */}
                    </div>{/* End .tab-content */}
                  </div>{/* End .form-tab */}
                </div>{/* End .form-box */}
              </div>{/* End .container */}
            </div>{/* End .login-page section-bg */}
          </main>{/* End .main */}
          <footer className="footer">
            <div className="footer-middle">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="widget widget-about">
                      <img src="assets/images/logo.png" className="footer-logo" alt="Footer Logo" width={105} height={25} />
                      <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>
                      <div className="social-icons">
                        <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f" /></a>
                        <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter" /></a>
                        <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram" /></a>
                        <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube" /></a>
                        <a href="#" className="social-icon" target="_blank" title="Pinterest"><i className="icon-pinterest" /></a>
                      </div>{/* End .soial-icons */}
                    </div>{/* End .widget about-widget */}
                  </div>{/* End .col-sm-6 col-lg-3 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="widget">
                      <h4 className="widget-title">Useful Links</h4>{/* End .widget-title */}
                      <ul className="widget-list">
                        <li><a href="about.html">About Molla</a></li>
                        <li><a href="#">How to shop on Molla</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="contact.html">Contact us</a></li>
                        <li><a href="login.html">Log in</a></li>
                      </ul>{/* End .widget-list */}
                    </div>{/* End .widget */}
                  </div>{/* End .col-sm-6 col-lg-3 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="widget">
                      <h4 className="widget-title">Customer Service</h4>{/* End .widget-title */}
                      <ul className="widget-list">
                        <li><a href="#">Payment Methods</a></li>
                        <li><a href="#">Money-back guarantee!</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Terms and conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                      </ul>{/* End .widget-list */}
                    </div>{/* End .widget */}
                  </div>{/* End .col-sm-6 col-lg-3 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="widget">
                      <h4 className="widget-title">My Account</h4>{/* End .widget-title */}
                      <ul className="widget-list">
                        <li><a href="#">Sign In</a></li>
                        <li><a href="cart.html">View Cart</a></li>
                        <li><a href="#">My Wishlist</a></li>
                        <li><a href="#">Track My Order</a></li>
                        <li><a href="#">Help</a></li>
                      </ul>{/* End .widget-list */}
                    </div>{/* End .widget */}
                  </div>{/* End .col-sm-6 col-lg-3 */}
                </div>{/* End .row */}
              </div>{/* End .container */}
            </div>{/* End .footer-middle */}
            <div className="footer-bottom">
              <div className="container">
                <p className="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p>{/* End .footer-copyright */}
                <figure className="footer-payments">
                  <img src="assets/images/payments.png" alt="Payment methods" width={272} height={20} />
                </figure>{/* End .footer-payments */}
              </div>{/* End .container */}
            </div>{/* End .footer-bottom */}
          </footer>{/* End .footer */}
        </div>{/* End .page-wrapper */}
        
      </div>
    );
}
}

export default Login;