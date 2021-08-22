import axios from 'axios';
import React, { Component } from 'react';
class Product extends Component{
  
  state ={
       product: [],
       loading: true, 
  }
  async componentDidMount(){
    const res = await axios.get('http://localhost/React%20Final%20project/ERP-web-application/public/api/product');
    //console.log(res);
    if(res.data.status === 200)
    {
      this.setState({
        product: res.data.product,
        loading: false,
      });
    }

  }
  render() {
    var product_show = "";
    if(this.state.loading)
    {
      product_show = <tr><td colSpan="5"> <h2>Loading....</h2></td></tr>
    }
    else
    {
      console.log(this.state.product);
      product_show =
      this.state.product.map( (item) => { 
        return (
          
          
                <div className="col-sm-4">
                  <div className="banner banner-cat banner-badge">
                    <a href="#">
                      <img src="assets/images/category/fullwidth-page/banner-2.jpg" alt="Banner" />
                    </a>
                    <a className="banner-link" href="#">
                      <h3 className="banner-title">Product Id:{item.product_id}<br />Shop
                        Id: {item.shop_id}<br />Product
                        Name:{item.product_name}<br />Product
                        Price{item.product_price}<br />Product
                        details:{item.product_details}</h3>
                      <h4 className="banner-subtitle">Product</h4>
                      <span className="banner-link-text">Shop Now</span>
                    </a>
                  </div>
                </div>
         
        );
      });
    }



    return (
      <div>
        {/* molla/product-category-fullwidth.html  22 Nov 2019 10:03:09 GMT */}
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
              <div className="container-fluid">
                <div className="header-left">
                  <div className="flex items-center mr-6"><svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.2875 3.75C12.02 3.89292 12.6933 4.25119 13.221 4.77895C13.7488 5.30671 14.1071 5.97995 14.25 6.7125L11.2875 3.75ZM11.2875 0.75C12.8094 0.919077 14.2287 1.60063 15.3122 2.68276C16.3957 3.76488 17.079 5.18326 17.25 6.705L11.2875 0.75ZM16.5 12.69V14.94C16.5008 15.1489 16.458 15.3556 16.3744 15.547C16.2907 15.7384 16.168 15.9102 16.014 16.0514C15.8601 16.1926 15.6784 16.3001 15.4805 16.367C15.2827 16.4339 15.073 16.4588 14.865 16.44C12.5571 16.1892 10.3402 15.4006 8.39248 14.1375C6.58035 12.986 5.04398 11.4496 3.89248 9.6375C2.62496 7.6809 1.83616 5.45325 1.58998 3.135C1.57124 2.9276 1.59589 2.71857 1.66236 2.52122C1.72882 2.32387 1.83566 2.14252 1.97605 1.98872C2.11645 1.83491 2.28733 1.71203 2.47782 1.62789C2.66831 1.54375 2.87424 1.5002 3.08248 1.5H5.33248C5.69646 1.49642 6.04932 1.62531 6.3253 1.86265C6.60128 2.09999 6.78154 2.42959 6.83248 2.79C6.92745 3.51005 7.10357 4.21705 7.35748 4.8975C7.45839 5.16594 7.48023 5.45769 7.42041 5.73816C7.36059 6.01863 7.22163 6.27608 7.01998 6.48L6.06748 7.4325C7.13515 9.31016 8.68982 10.8648 10.5675 11.9325L11.52 10.98C11.7239 10.7784 11.9813 10.6394 12.2618 10.5796C12.5423 10.5198 12.834 10.5416 13.1025 10.6425C13.7829 10.8964 14.4899 11.0725 15.21 11.1675C15.5743 11.2189 15.907 11.4024 16.1449 11.6831C16.3827 11.9638 16.5091 12.3222 16.5 12.69Z" stroke="#C9151B" strokeLinecap="round" strokeLinejoin="round" />
                    </svg><a className="ml-2" href="tel:09638111666">09638118222</a></div>
                  &nbsp;
                  <div className="flex items-center"><svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.00001 3H15C15.825 3 16.5 3.675 16.5 4.5V13.5C16.5 14.325 15.825 15 15 15H3.00001C2.17501 15 1.50001 14.325 1.50001 13.5V4.5C1.50001 3.675 2.17501 3 3.00001 3Z" stroke="#C9151B" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.5 4.5L9.00001 9.75L1.50001 4.5" stroke="#C9151B" strokeLinecap="round" strokeLinejoin="round" />
                    </svg><a href="mailto:support@evaly.com.bd" className="ml-2">support@erp.com.bd</a></div>
                </div>{/* End .header-left */}
                <div className="header-right">
                  <ul className="top-menu">
                    <li>
                      <a href="#">Links</a>
                      <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact.html">Contact Us</a></li>
                        <li><a href="/login" data-toggle="modal"><i className="icon-user" />Login</a></li>
                      </ul>
                    </li>
                  </ul>{/* End .top-menu */}
                </div>{/* End .header-right */}
              </div>{/* End .container-fluid */}
            </div>{/* End .header-top */}
            <div className="header-middle sticky-header">
              <div className="container-fluid">
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
                  <div className="dropdown compare-dropdown">
                    <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Compare Products" aria-label="Compare Products">
                      <i className="icon-random" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <ul className="compare-products">
                        <li className="compare-product">
                          <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                          <h4 className="compare-product-title"><a href="product.html">Blue Night Dress</a>
                          </h4>
                        </li>
                        <li className="compare-product">
                          <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                          <h4 className="compare-product-title"><a href="product.html">White Long Skirt</a>
                          </h4>
                        </li>
                      </ul>
                      <div className="compare-actions">
                        <a href="#" className="action-link">Clear All</a>
                        <a href="#" className="btn btn-outline-primary-2"><span>Compare</span><i className="icon-long-arrow-right" /></a>
                      </div>
                    </div>{/* End .dropdown-menu */}
                  </div>{/* End .compare-dropdown */}
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
                        <a href="/cart" className="btn btn-primary">View Cart</a>
                        <a href="/checkout" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right" /></a>
                      </div>{/* End .dropdown-cart-total */}
                    </div>{/* End .dropdown-menu */}
                  </div>{/* End .cart-dropdown */}
                </div>{/* End .header-right */}
              </div>{/* End .container-fluid */}
            </div>{/* End .header-middle */}
          </header>{/* End .header */}
          <main className="main">
            <div className="page-header text-center" style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
              <div className="container-fluid">
                <h1 className="page-title">Product Category Fullwidth<span>Shop</span></h1>
              </div>{/* End .container-fluid */}
            </div>{/* End .page-header */}
            <nav aria-label="breadcrumb" className="breadcrumb-nav breadcrumb-with-filter">
              <div className="container-fluid">
                <a href="#" className="sidebar-toggler"><i className="icon-bars" />Filters</a>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Shop</a></li>
                  <li className="breadcrumb-item"><a href="#">Product Category</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Fullwidth</li>
                </ol>
              </div>{/* End .container-fluid */}
            </nav>{/* End .breadcrumb-nav */}
            <div className="page-content">
              <div className="categories-page">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row">

                        {product_show}
                      </div>{/* End .row */}
                    </div>{/* End .col-lg-6 */}
                  </div>{/* End .row */}
                </div>{/* End .container-fluid */}
              </div>{/* End .categories-page */}
              <div className="sidebar-filter-overlay" />{/* End .sidebar-filter-overlay */}
              <aside className="sidebar-shop sidebar-filter sidebar-filter-banner">
                <div className="sidebar-filter-wrapper">
                  <div className="widget widget-clean">
                    <label><i className="icon-close" />Filters</label>
                    <a href="#" className="sidebar-filter-clear">Clean All</a>
                  </div>
                  <div className="widget">
                    <h3 className="widget-title">
                      Browse Category
                    </h3>{/* End .widget-title */}
                    <div className="widget-body">
                      <div className="filter-items filter-items-count">
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="cat-1" />
                            <label className="custom-control-label" htmlFor="cat-1">Women</label>
                          </div>{/* End .custom-checkbox */}
                          <span className="item-count">3</span>
                        </div>{/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="cat-2" />
                            <label className="custom-control-label" htmlFor="cat-2">Men</label>
                          </div>{/* End .custom-checkbox */}
                          <span className="item-count">0</span>
                        </div>{/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="cat-3" />
                            <label className="custom-control-label" htmlFor="cat-3">Holiday Shop</label>
                          </div>{/* End .custom-checkbox */}
                          <span className="item-count">0</span>
                        </div>{/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="cat-4" />
                            <label className="custom-control-label" htmlFor="cat-4">Gifts</label>
                          </div>{/* End .custom-checkbox */}
                          <span className="item-count">0</span>
                        </div>{/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="cat-5" />
                            <label className="custom-control-label" htmlFor="cat-5">Homeware</label>
                          </div>{/* End .custom-checkbox */}
                          <span className="item-count">0</span>
                        </div>{/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="cat-6" defaultChecked="checked" />
                            <label className="custom-control-label" htmlFor="cat-6">Grid Categories
                              Fullwidth</label>
                          </div>{/* End .custom-checkbox */}
                          <span className="item-count">13</span>
                        </div>{/* End .filter-item */}
                        <div className="sub-filter-items">
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="cat-7" />
                              <label className="custom-control-label" htmlFor="cat-7">Dresses</label>
                            </div>{/* End .custom-checkbox */}
                            <span className="item-count">3</span>
                          </div>{/* End .filter-item */}
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="cat-8" />
                              <label className="custom-control-label" htmlFor="cat-8">T-shirts</label>
                            </div>{/* End .custom-checkbox */}
                            <span className="item-count">0</span>
                          </div>{/* End .filter-item */}
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="cat-9" />
                              <label className="custom-control-label" htmlFor="cat-9">Bags</label>
                            </div>{/* End .custom-checkbox */}
                            <span className="item-count">4</span>
                          </div>{/* End .filter-item */}
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="cat-10" />
                              <label className="custom-control-label" htmlFor="cat-10">Jackets</label>
                            </div>{/* End .custom-checkbox */}
                            <span className="item-count">2</span>
                          </div>{/* End .filter-item */}
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="cat-11" />
                              <label className="custom-control-label" htmlFor="cat-11">Shoes</label>
                            </div>{/* End .custom-checkbox */}
                            <span className="item-count">2</span>
                          </div>{/* End .filter-item */}
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="cat-12" />
                              <label className="custom-control-label" htmlFor="cat-12">Jumpers</label>
                            </div>{/* End .custom-checkbox */}
                            <span className="item-count">1</span>
                          </div>{/* End .filter-item */}
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="cat-13" />
                              <label className="custom-control-label" htmlFor="cat-13">Jeans</label>
                            </div>{/* End .custom-checkbox */}
                            <span className="item-count">1</span>
                          </div>{/* End .filter-item */}
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="cat-14" />
                              <label className="custom-control-label" htmlFor="cat-14">Sportwear</label>
                            </div>{/* End .custom-checkbox */}
                            <span className="item-count">0</span>
                          </div>{/* End .filter-item */}
                        </div>{/* End .sub-filter-items */}
                      </div>{/* End .filter-items */}
                    </div>{/* End .widget-body */}
                  </div>{/* End .widget */}
                </div>{/* End .sidebar-filter-wrapper */}
              </aside>{/* End .sidebar-filter */}
            </div>{/* End .page-content */}
          </main>{/* End .main */}
          <footer className="footer footer-2">
            <div className="footer-middle">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 col-lg-4">
                    <div className="widget widget-about">
                      <img src="assets/images/logo.png" className="footer-logo" alt="Footer Logo" width={105} height={25} />
                      <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate
                        magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
                        porttitor, facilisis luctus, metus. </p>
                      <div className="widget-about-info">
                        <div className="row">
                          <div className="col-sm-6 col-md-4">
                            <span className="widget-about-title">Got Question? Call us 24/7</span>
                            <a href="tel:123456789">+0123 456 789</a>
                          </div>{/* End .col-sm-6 */}
                          <div className="col-sm-6 col-md-8">
                            <span className="widget-about-title">Payment Method</span>
                            <figure className="footer-payments">
                              <img src="assets/images/payments.png" alt="Payment methods" width={272} height={20} />
                            </figure>{/* End .footer-payments */}
                          </div>{/* End .col-sm-6 */}
                        </div>{/* End .row */}
                      </div>{/* End .widget-about-info */}
                    </div>{/* End .widget about-widget */}
                  </div>{/* End .col-sm-12 col-lg-4 */}
                  <div className="col-sm-4 col-lg-2">
                    <div className="widget">
                      <h4 className="widget-title">Information</h4>{/* End .widget-title */}
                      <ul className="widget-list">
                        <li><a href="about.html">About Molla</a></li>
                        <li><a href="#">How to shop on Molla</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a href="contact.html">Contact us</a></li>
                        <li><a href="login.html">Log in</a></li>
                      </ul>{/* End .widget-list */}
                    </div>{/* End .widget */}
                  </div>{/* End .col-sm-4 col-lg-2 */}
                  <div className="col-sm-4 col-lg-2">
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
                  </div>{/* End .col-sm-4 col-lg-2 */}
                  <div className="col-sm-4 col-lg-2">
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
                  </div>{/* End .col-sm-4 col-lg-2 */}
                  <div className="col-sm-6 col-lg-2">
                    <div className="widget widget-newsletter">
                      <h4 className="widget-title">Newsletter</h4>{/* End .widget-title */}
                      <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan.</p>
                      <form action="#">
                        <div className="input-group">
                          <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                          <div className="input-group-append">
                            <button className="btn btn-dark" type="submit"><i className="icon-long-arrow-right" /></button>
                          </div>{/* .End .input-group-append */}
                        </div>{/* .End .input-group */}
                      </form>
                    </div>{/* End .widget */}
                  </div>{/* End .col-sm-6 col-lg-2 */}
                </div>{/* End .row */}
              </div>{/* End .container-fluid */}
            </div>{/* End .footer-middle */}
            <div className="footer-bottom">
              <div className="container-fluid">
                <p className="footer-copyright">Copyright © 2021 Molla Store. All Rights Reserved.</p>
                {/* End .footer-copyright */}
                <ul className="footer-menu">
                  <li><a href="#">Terms Of Use</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>{/* End .footer-menu */}
                <div className="social-icons social-icons-color">
                  <span className="social-label">Social Icons</span>
                  <a href="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f" /></a>
                  <a href="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter" /></a>
                  <a href="#" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram" /></a>
                  <a href="#" className="social-icon social-youtube" title="Youtube" target="_blank"><i className="icon-youtube" /></a>
                  <a href="#" className="social-icon social-pinterest" title="Pinterest" target="_blank"><i className="icon-pinterest" /></a>
                </div>{/* End .soial-icons */}
              </div>{/* End .container-fluid */}
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
                    <li><a href="/">01 - furniture store</a></li>
                    <li><a href="/">02 - furniture store</a></li>
                    <li><a href="/">03 - electronic store</a></li>
                    <li><a href="/">04 - electronic store</a></li>
                    <li><a href="/">05 - fashion store</a></li>
                    <li><a href="/">06 - fashion store</a></li>
                    <li><a href="/">07 - fashion store</a></li>
                    <li><a href="/">08 - fashion store</a></li>
                    <li><a href="/">09 - fashion store</a></li>
                    <li><a href="/">10 - shoes store</a></li>
                    <li><a href="/">11 - furniture simple store</a></li>
                    <li><a href="/">12 - fashion simple store</a></li>
                    <li><a href="/">13 - market</a></li>
                    <li><a href="/">14 - market fullwidth</a></li>
                    <li><a href="/">15 - lookbook 1</a></li>
                    <li><a href="/">16 - lookbook 2</a></li>
                    <li><a href="/">17 - fashion store</a></li>
                    <li><a href="/">18 - fashion store (with sidebar)</a></li>
                    <li><a href="/">19 - games store</a></li>
                    <li><a href="/">20 - book store</a></li>
                    <li><a href="/">21 - sport store</a></li>
                    <li><a href="/">22 - tools store</a></li>
                    <li><a href="/">23 - fashion left navigation store</a></li>
                    <li><a href="/">24 - extreme sport store</a></li>
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
                              <label className="custom-control-label" htmlFor="signin-remember">Remember
                                Me</label>
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
                              <label className="custom-control-label" htmlFor="register-policy">I agree to the
                                <a href="#">privacy policy</a> *</label>
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
        {/* Plugins JS File */}
        {/* Main JS File */}
        {/* molla/product-category-fullwidth.html  22 Nov 2019 10:03:13 GMT */}
      </div>
    );
  }

}


    export default Product;