import React, { Component } from 'react';
import axios from 'axios';
class Contact extends Component {
  // chat
  state = {
    c_name: '',
    c_email: '',
    c_phone: '',
    c_subject: '',
    c_message: '',
    invoice: '',
    payment_method: '',
    phone: '',
    message: '',

  }

  handleInput = (e) => {
    // alert ("123");
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  saveChat = async (e) => {
    e.preventDefault();

    alert("Are you Submit Form");
    const res = await axios.post('http://localhost/React%20Final%20project/ERP-web-application/public/api/contact', this.state);
    if (res.data.status === 200) {
      alert(res.data.message);
      this.setState({
        c_name: '',
        c_email: '',
        c_phone: '',
        c_subject: '',
        c_message: '',

      });
    }
  }
  //refand..
  


  saveRefand = async (e) => {
    e.preventDefault();

    alert("Are you Submit Form");
    const res = await axios.post('http://localhost/React%20Final%20project/ERP-web-application/public/api/contact1', this.state);
    if (res.data.status === 200) {
      alert(res.data.message);
      this.setState({
        invoice: '',
        payment_method: '',
        phone: '',
        message: '',

      });
    }
  }
  render() {
    return (
      <div>
        {/* molla/contact.html  22 Nov 2019 10:04:01 GMT */}
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
                        <li><a href="tel:#"><i className="icon-phone" />Call: 01684726517</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="#signin-modal" data-toggle="modal"><i className="icon-user" />Login</a></li>
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
                  <li className="breadcrumb-item active" aria-current="page">Contact us</li>
                </ol>
              </div>{/* End .container */}
            </nav>{/* End .breadcrumb-nav */}
            <div className="container">
              <div className="page-header page-header-big text-center" style={{ backgroundImage: 'url("assets/images/contact-header-bg.jpg")' }}>
                <h1 className="page-title text-white">Contact us<span className="text-white">keep in touch with us</span></h1>
              </div>{/* End .page-header */}
            </div>{/* End .container */}
            <div className="page-content pb-0">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 mb-2 mb-lg-0">
                    <h2 className="title mb-1">Contact Information</h2>{/* End .title mb-2 */}
                    <p className="mb-3">Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                    <div className="row">
                      <div className="col-sm-7">
                        <div className="contact-info">
                          <h3>The Office</h3>
                          <ul className="contact-list">
                            <li>
                              <i className="icon-map-marker" />
                              70 Washington Square South New York, NY 10012, United States
                            </li>
                            <li>
                              <i className="icon-phone" />
                              <a href="tel:#">+92 423 567</a>
                            </li>
                            <li>
                              <i className="icon-envelope" />
                              <a href="mailto:#">info@Molla.com</a>
                            </li>
                          </ul>{/* End .contact-list */}
                        </div>{/* End .contact-info */}
                      </div>{/* End .col-sm-7 */}
                      <div className="col-sm-5">
                        <div className="contact-info">
                          <h3>The Office</h3>
                          <ul className="contact-list">
                            <li>
                              <i className="icon-clock-o" />
                              <span className="text-dark">Monday-Saturday</span> <br />11am-7pm ET
                            </li>
                            <li>
                              <i className="icon-calendar" />
                              <span className="text-dark">Sunday</span> <br />11am-6pm ET
                            </li>
                          </ul>{/* End .contact-list */}
                        </div>{/* End .contact-info */}
                      </div>{/* End .col-sm-5 */}
                    </div>{/* End .row */}
                  </div>{/* End .col-lg-6 */}
                  <div className="col-lg-6">
                    <h2 className="title mb-1">Chat With Admin</h2>{/* End .title mb-2 */}
                    <p className="mb-2">Use the form below to get in touch with the sales team</p>
                    <form onSubmit={this.saveChat}>

                      <div className="row">
                        <div className="col-sm-6">
                          <label htmlFor="cname" className="sr-only">Name</label>
                          <input type="text" className="form-control" id="cname" placeholder="Name *" name="c_name" onChange={this.handleInput} value={this.state.c_name} />

                        </div>{/* End .col-sm-6 */}
                        <div className="col-sm-6">
                          <label htmlFor="cemail" className="sr-only">Email</label>
                          <input type="email" className="form-control" id="cemail" placeholder="Email *" name="c_email" onChange={this.handleInput} value={this.state.c_email} />

                        </div>{/* End .col-sm-6 */}
                      </div>{/* End .row */}
                      <div className="row">
                        <div className="col-sm-6">
                          <label htmlFor="cphone" className="sr-only">Phone</label>
                          <input type="tel" className="form-control" id="cphone" placeholder="Phone" name="c_phone" onChange={this.handleInput} value={this.state.c_phone} />

                        </div>{/* End .col-sm-6 */}
                        <div className="col-sm-6">
                          <label htmlFor="csubject" className="sr-only">Subject</label>
                          <input type="text" className="form-control" id="csubject" placeholder="Subject" name="c_subject" onChange={this.handleInput} value={this.state.c_subject} />

                        </div>{/* End .col-sm-6 */}
                      </div>{/* End .row */}
                      <label htmlFor="cmessage" className="sr-only">Message</label>
                      <textarea className="form-control" cols={30} rows={4} id="cmessage" name="c_message" placeholder="Message *" onChange={this.handleInput} value={this.state.c_message} />

                      <br />
                      <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
                        <span>SUBMIT</span>
                        <i className="icon-long-arrow-right" />
                      </button>
                    </form>{/* End .contact-form */}
                  </div>{/* End .col-lg-6 */}
                  <br /><br />
                  <div className="col-lg-6">
                    <h2 className="title mb-1">Request for Refand</h2>{/* End .title mb-2 */}
                    <p className="mb-2">Fill-up this page</p>
                    <form onSubmit={this.saveRefand}>

                      <div className="row">
                        <div className="col-sm-6">
                          <label htmlFor="cname" className="sr-only">Invoice</label>
                          <input type="text" className="form-control" id="cname" placeholder="Type your Invoice*" name="invoice" onChange={this.handleInput} value={this.state.invoice} />

                        </div>{/* End .col-sm-6 */}
                        <div className="col-sm-6">
                          <label htmlFor="cemail" className="sr-only" />
                          <input type="text" className="form-control" id="cemail" placeholder="Type your pament Methode *" name="payment_method" onChange={this.handleInput} value={this.state.payment_method} />

                        </div>{/* End .col-sm-6 */}
                      </div>{/* End .row */}
                      <div className="row">
                        <div className="col-sm-6">
                          <label htmlFor="cphone" className="sr-only">Type your mobile Number</label>
                          <input type="tel" className="form-control" id="cphone" placeholder="Type your mobile Number" name="phone" onChange={this.handleInput} value={this.state.phone} />

                        </div>{/* End .col-sm-6 */}
                      </div>{/* End .row */}
                      <label htmlFor="cmessage" className="sr-only">Message</label>
                      <textarea className="form-control" cols={30} rows={4} id="cmessage" name="message" placeholder="Type your problem*" onChange={this.handleInput} value={this.state.message} />

                      <br />
                      <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
                        <span>SUBMIT</span>
                        <i className="icon-long-arrow-right" />
                      </button>
                    </form>{/* End .contact-form */}
                  </div>{/* End .col-lg-6 */}
                </div>{/* End .row */}
                <hr className="mt-4 mb-5" />
                <div className="stores mb-4 mb-lg-5">
                  <h2 className="title text-center mb-3">Our Stores</h2>{/* End .title text-center mb-2 */}
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="store">
                        <div className="row">
                          <div className="col-sm-5 col-xl-6">
                            <figure className="store-media mb-2 mb-lg-0">
                              <img src="assets/images/stores/img-1.jpg" alt="image" />
                            </figure>{/* End .store-media */}
                          </div>{/* End .col-xl-6 */}
                          <div className="col-sm-7 col-xl-6">
                            <div className="store-content">
                              <h3 className="store-title">Wall Street Plaza</h3>{/* End .store-title */}
                              <address>88 Pine St, New York, NY 10005, USA</address>
                              <div><a href="tel:#">+1 987-876-6543</a></div>
                              <h4 className="store-subtitle">Store Hours:</h4>{/* End .store-subtitle */}
                              <div>Monday - Saturday 11am to 7pm</div>
                              <div>Sunday 11am to 6pm</div>
                              <a href="#" className="btn btn-link" target="_blank"><span>View Map</span><i className="icon-long-arrow-right" /></a>
                            </div>{/* End .store-content */}
                          </div>{/* End .col-xl-6 */}
                        </div>{/* End .row */}
                      </div>{/* End .store */}
                    </div>{/* End .col-lg-6 */}
                    <div className="col-lg-6">
                      <div className="store">
                        <div className="row">
                          <div className="col-sm-5 col-xl-6">
                            <figure className="store-media mb-2 mb-lg-0">
                              <img src="assets/images/stores/img-2.jpg" alt="image" />
                            </figure>{/* End .store-media */}
                          </div>{/* End .col-xl-6 */}
                          <div className="col-sm-7 col-xl-6">
                            <div className="store-content">
                              <h3 className="store-title">One New York Plaza</h3>{/* End .store-title */}
                              <address>88 Pine St, New York, NY 10005, USA</address>
                              <div><a href="tel:#">+1 987-876-6543</a></div>
                              <h4 className="store-subtitle">Store Hours:</h4>{/* End .store-subtitle */}
                              <div>Monday - Friday 9am to 8pm</div>
                              <div>Saturday - 9am to 2pm</div>
                              <div>Sunday - Closed</div>
                              <a href="#" className="btn btn-link" target="_blank"><span>View Map</span><i className="icon-long-arrow-right" /></a>
                            </div>{/* End .store-content */}
                          </div>{/* End .col-xl-6 */}
                        </div>{/* End .row */}
                      </div>{/* End .store */}
                    </div>{/* End .col-lg-6 */}
                  </div>{/* End .row */}
                </div>{/* End .stores */}
              </div>{/* End .container */}

            </div>{/* End .page-content */}
          </main>{/* End .main */}
          <footer className="footer">
            <div className="footer-middle border-0">
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
        <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up" /></button>
        {/* Mobile Menu */}
        <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
        <div className="mobile-menu-container">
          <div className="mobile-menu-wrapper">
            <span className="mobile-menu-close"><i className="icon-close" /></span>
            <form action="#" method="get" className="mobile-search">
              <label htmlFor="mobile-search" className="sr-only">Search</label>
              <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
              <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
            </form>
            <nav className="mobile-nav">
              <ul className="mobile-menu">
                <li className="active">
                  <a href="/">Home</a>
                  <ul>
                    <li><a href="index-1.html">01 - furniture store</a></li>
                    <li><a href="index-2.html">02 - furniture store</a></li>
                    <li><a href="index-3.html">03 - electronic store</a></li>
                    <li><a href="index-4.html">04 - electronic store</a></li>
                    <li><a href="index-5.html">05 - fashion store</a></li>
                    <li><a href="index-6.html">06 - fashion store</a></li>
                    <li><a href="index-7.html">07 - fashion store</a></li>
                    <li><a href="index-8.html">08 - fashion store</a></li>
                    <li><a href="index-9.html">09 - fashion store</a></li>
                    <li><a href="index-10.html">10 - shoes store</a></li>
                    <li><a href="index-11.html">11 - furniture simple store</a></li>
                    <li><a href="index-12.html">12 - fashion simple store</a></li>
                    <li><a href="index-13.html">13 - market</a></li>
                    <li><a href="index-14.html">14 - market fullwidth</a></li>
                    <li><a href="index-15.html">15 - lookbook 1</a></li>
                    <li><a href="index-16.html">16 - lookbook 2</a></li>
                    <li><a href="index-17.html">17 - fashion store</a></li>
                    <li><a href="index-18.html">18 - fashion store (with sidebar)</a></li>
                    <li><a href="index-19.html">19 - games store</a></li>
                    <li><a href="index-20.html">20 - book store</a></li>
                    <li><a href="index-21.html">21 - sport store</a></li>
                    <li><a href="index-22.html">22 - tools store</a></li>
                    <li><a href="index-23.html">23 - fashion left navigation store</a></li>
                    <li><a href="index-24.html">24 - extreme sport store</a></li>
                  </ul>
                </li>
                <li>
                  <a href="category.html">Shop</a>
                  <ul>
                    <li><a href="category-list.html">Shop List</a></li>
                    <li><a href="category-2cols.html">Shop Grid 2 Columns</a></li>
                    <li><a href="category.html">Shop Grid 3 Columns</a></li>
                    <li><a href="category-4cols.html">Shop Grid 4 Columns</a></li>
                    <li><a href="category-boxed.html"><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></a></li>
                    <li><a href="category-fullwidth.html">Shop Fullwidth No Sidebar</a></li>
                    <li><a href="product-category-boxed.html">Product Category Boxed</a></li>
                    <li><a href="product-category-fullwidth.html"><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="wishlist.html">Wishlist</a></li>
                    <li><a href="#">Lookbook</a></li>
                  </ul>
                </li>
                <li>
                  <a href="product.html" className="sf-with-ul">Product</a>
                  <ul>
                    <li><a href="product.html">Default</a></li>
                    <li><a href="product-centered.html">Centered</a></li>
                    <li><a href="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                    <li><a href="product-gallery.html">Gallery</a></li>
                    <li><a href="product-sticky.html">Sticky Info</a></li>
                    <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                    <li><a href="product-fullwidth.html">Full Width</a></li>
                    <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul>
                    <li>
                      <a href="about.html">About</a>
                      <ul>
                        <li><a href="about.html">About 01</a></li>
                        <li><a href="about-2.html">About 02</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                      <ul>
                        <li><a href="contact.html">Contact 01</a></li>
                        <li><a href="contact-2.html">Contact 02</a></li>
                      </ul>
                    </li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="faq.html">FAQs</a></li>
                    <li><a href="404.html">Error 404</a></li>
                    <li><a href="coming-soon.html">Coming Soon</a></li>
                  </ul>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                  <ul>
                    <li><a href="blog.html">Classic</a></li>
                    <li><a href="blog-listing.html">Listing</a></li>
                    <li>
                      <a href="#">Grid</a>
                      <ul>
                        <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                        <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                        <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                        <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Masonry</a>
                      <ul>
                        <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                        <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                        <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                        <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Mask</a>
                      <ul>
                        <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                        <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Single Post</a>
                      <ul>
                        <li><a href="single.html">Default with sidebar</a></li>
                        <li><a href="single-fullwidth.html">Fullwidth no sidebar</a></li>
                        <li><a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="elements-list.html">Elements</a>
                  <ul>
                    <li><a href="elements-products.html">Products</a></li>
                    <li><a href="elements-typography.html">Typography</a></li>
                    <li><a href="elements-titles.html">Titles</a></li>
                    <li><a href="elements-banners.html">Banners</a></li>
                    <li><a href="elements-product-category.html">Product Category</a></li>
                    <li><a href="elements-video-banners.html">Video Banners</a></li>
                    <li><a href="elements-buttons.html">Buttons</a></li>
                    <li><a href="elements-accordions.html">Accordions</a></li>
                    <li><a href="elements-tabs.html">Tabs</a></li>
                    <li><a href="elements-testimonials.html">Testimonials</a></li>
                    <li><a href="elements-blog-posts.html">Blog Posts</a></li>
                    <li><a href="elements-portfolio.html">Portfolio</a></li>
                    <li><a href="elements-cta.html">Call to Action</a></li>
                    <li><a href="elements-icon-boxes.html">Icon Boxes</a></li>
                  </ul>
                </li>
              </ul>
            </nav>{/* End .mobile-nav */}
            <div className="social-icons">
              <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f" /></a>
              <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter" /></a>
              <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram" /></a>
              <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube" /></a>
            </div>{/* End .social-icons */}
          </div>{/* End .mobile-menu-wrapper */}
        </div>{/* End .mobile-menu-container */}
        {/* Sign in / Register Modal */}
        <div className="modal fade" id="signin-modal" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true"><i className="icon-close" /></span>
                </button>
                <div className="form-box">
                  <div className="form-tab">
                    <ul className="nav nav-pills nav-fill" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                      </li>
                    </ul>
                    <div className="tab-content" id="tab-content-5">
                      <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                        <form action="#">
                          <div className="form-group">
                            <label htmlFor="singin-email">Username or email address *</label>
                            <input type="text" className="form-control" id="singin-email" name="singin-email" required />
                          </div>{/* End .form-group */}
                          <div className="form-group">
                            <label htmlFor="singin-password">Password *</label>
                            <input type="password" className="form-control" id="singin-password" name="singin-password" required />
                          </div>{/* End .form-group */}
                          <div className="form-footer">
                            <button type="submit" className="btn btn-outline-primary-2">
                              <span>LOG IN</span>
                              <i className="icon-long-arrow-right" />
                            </button>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="signin-remember" />
                              <label className="custom-control-label" htmlFor="signin-remember">Remember Me</label>
                            </div>{/* End .custom-checkbox */}
                            <a href="#" className="forgot-link">Forgot Your Password?</a>
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
                              <a href="#" className="btn btn-login btn-f">
                                <i className="icon-facebook-f" />
                                Login With Facebook
                              </a>
                            </div>{/* End .col-6 */}
                          </div>{/* End .row */}
                        </div>{/* End .form-choice */}
                      </div>{/* .End .tab-pane */}
                      <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                        <form action="#">
                          <div className="form-group">
                            <label htmlFor="register-email">Your email address *</label>
                            <input type="email" className="form-control" id="register-email" name="register-email" required />
                          </div>{/* End .form-group */}
                          <div className="form-group">
                            <label htmlFor="register-password">Password *</label>
                            <input type="password" className="form-control" id="register-password" name="register-password" required />
                          </div>{/* End .form-group */}
                          <div className="form-footer">
                            <button type="submit" className="btn btn-outline-primary-2">
                              <span>SIGN UP</span>
                              <i className="icon-long-arrow-right" />
                            </button>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="register-policy" required />
                              <label className="custom-control-label" htmlFor="register-policy">I agree to the <a href="#">privacy policy</a> *</label>
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
              </div>{/* End .modal-body */}
            </div>{/* End .modal-content */}
          </div>{/* End .modal-dialog */}
        </div>{/* End .modal */}
        {/* Google Map */}
        {/* Plugins JS File */}
        {/* Main JS File */}
        {/* molla/contact.html  22 Nov 2019 10:04:03 GMT */}
      </div>
    );
  }
}


export default Contact;