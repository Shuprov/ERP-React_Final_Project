import axios from 'axios';
import React, { Component } from 'react';
class AllShop extends Component
{
  state ={
    product: [],
    loading: true, 
}
async componentDidMount(){
 const res = await axios.get('http://localhost/React%20Final%20project/ERP-web-application/public/api/shop');
 //console.log(res);
 if(res.data.status === 200)
 {
   this.setState({
     product: res.data.product,
     loading: false,
   });
 }

}
  
  render(){
    
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
      
      <div className="col-6 col-sm-4 col-lg-2">
    <a href="category.html" className="cat-block">
      <figure>
        <span>
          <img src="assets/images/demos/demo-4/cats/1.png" alt="Category image" />
        </span>
      </figure>
      <h3 className="cat-block-title">{item.s_name}<br /> {item.s_address}</h3>
    </a>
  </div>

            
    );
  });
}
    return (
      <div>
        {/* molla/index-4.html  22 Nov 2019 09:53:08 GMT */}
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
        <link rel="stylesheet" href="assets/vendor/line-awesome/line-awesome/line-awesome/css/line-awesome.min.css" />
        {/* Plugins CSS File */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/plugins/owl-carousel/owl.carousel.css" />
        <link rel="stylesheet" href="assets/css/plugins/magnific-popup/magnific-popup.css" />
        <link rel="stylesheet" href="assets/css/plugins/jquery.countdown.css" />
        {/* Main CSS File */}
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/skins/skin-demo-4.css" />
        <link rel="stylesheet" href="assets/css/demos/demo-4.css" />
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
            <div className="intro-slider-container mb-5">
              <div className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light" data-toggle="owl" data-owl-options="{
                        &quot;dots&quot;: true,
                        &quot;nav&quot;: false, 
                        &quot;responsive&quot;: {
                            &quot;1200&quot;: {
                                &quot;nav&quot;: true,
                                &quot;dots&quot;: false
                            }
                        }
                    }">
                <div className="intro-slide" style={{backgroundImage: 'url(assets/images/demos/demo-4/slider/slide-1.png)'}}>
                  <div className="container intro-content">
                    <div className="row justify-content-end">
                      <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                        <h3 className="intro-subtitle text-third">Deals and Promotions</h3>{/* End .h3 intro-subtitle */}
                        <h1 className="intro-title">Beats by</h1>
                        <h1 className="intro-title">Dre Studio 3</h1>{/* End .intro-title */}
                        <div className="intro-price">
                          <sup className="intro-old-price">$349,95</sup>
                          <span className="text-third">
                            $279<sup>.99</sup>
                          </span>
                        </div>{/* End .intro-price */}
                        <a href="category.html" className="btn btn-primary btn-round">
                          <span>Shop More</span>
                          <i className="icon-long-arrow-right" />
                        </a>
                      </div>{/* End .col-lg-11 offset-lg-1 */}
                    </div>{/* End .row */}
                  </div>{/* End .intro-content */}
                </div>{/* End .intro-slide */}
                <div className="intro-slide" style={{backgroundImage: 'url(assets/images/demos/demo-4/slider/slide-2.png)'}}>
                  <div className="container intro-content">
                    <div className="row justify-content-end">
                      <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                        <h3 className="intro-subtitle text-primary">New Arrival</h3>{/* End .h3 intro-subtitle */}
                        <h1 className="intro-title">Apple iPad Pro <br />12.9 Inch, 64GB </h1>{/* End .intro-title */}
                        <div className="intro-price">
                          <sup>Today:</sup>
                          <span className="text-primary">
                            $999<sup>.99</sup>
                          </span>
                        </div>{/* End .intro-price */}
                        <a href="category.html" className="btn btn-primary btn-round">
                          <span>Shop More</span>
                          <i className="icon-long-arrow-right" />
                        </a>
                      </div>{/* End .col-md-6 offset-md-6 */}
                    </div>{/* End .row */}
                  </div>{/* End .intro-content */}
                </div>{/* End .intro-slide */}
              </div>{/* End .intro-slider owl-carousel owl-simple */}
              <span className="slider-loader" />{/* End .slider-loader */}
            </div>{/* End .intro-slider-container */}
            <div className="container">
              <h2 className="title text-center mb-4">Explore Popular Categories</h2>{/* End .title text-center */}
              <div className="cat-blocks-container">
                <div className="row">
                  
                {product_show}
                  
                </div>{/* End .row */}
              </div>{/* End .cat-blocks-container */}
            </div>{/* End .container */}
            <div className="mb-4" />{/* End .mb-4 */}
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                  <div className="banner banner-overlay banner-overlay-light">
                    <a href="#">
                      <img src="assets/images/demos/demo-4/banners/banner-1.png" alt="Banner" />
                    </a>
                    <div className="banner-content">
                      <h4 className="banner-subtitle"><a href="#">Smart Offer</a></h4>{/* End .banner-subtitle */}
                      <h3 className="banner-title"><a href="#">Save $150 <strong>on Samsung <br />Galaxy Note9</strong></a></h3>{/* End .banner-title */}
                      <a href="#" className="banner-link">Shop Now<i className="icon-long-arrow-right" /></a>
                    </div>{/* End .banner-content */}
                  </div>{/* End .banner */}
                </div>{/* End .col-md-4 */}
                <div className="col-md-6 col-lg-4">
                  <div className="banner banner-overlay banner-overlay-light">
                    <a href="#">
                      <img src="assets/images/demos/demo-4/banners/banner-2.jpg" alt="Banner" />
                    </a>
                    <div className="banner-content">
                      <h4 className="banner-subtitle"><a href="#">Time Deals</a></h4>{/* End .banner-subtitle */}
                      <h3 className="banner-title"><a href="#"><strong>Bose SoundSport</strong> <br />Time Deal -30%</a></h3>{/* End .banner-title */}
                      <a href="#" className="banner-link">Shop Now<i className="icon-long-arrow-right" /></a>
                    </div>{/* End .banner-content */}
                  </div>{/* End .banner */}
                </div>{/* End .col-md-4 */}
                <div className="col-md-6 col-lg-4">
                  <div className="banner banner-overlay banner-overlay-light">
                    <a href="#">
                      <img src="assets/images/demos/demo-4/banners/banner-3.png" alt="Banner" />
                    </a>
                    <div className="banner-content">
                      <h4 className="banner-subtitle"><a href="#">Clearance</a></h4>{/* End .banner-subtitle */}
                      <h3 className="banner-title"><a href="#"><strong>GoPro - Fusion 360</strong> <br />Save $70</a></h3>{/* End .banner-title */}
                      <a href="#" className="banner-link">Shop Now<i className="icon-long-arrow-right" /></a>
                    </div>{/* End .banner-content */}
                  </div>{/* End .banner */}
                </div>{/* End .col-lg-4 */}
              </div>{/* End .row */}
            </div>{/* End .container */}
            <div className="mb-3" />{/* End .mb-5 */}
            <div className="container new-arrivals">
              <div className="heading heading-flex mb-3">
                <div className="heading-left">
                  <h2 className="title">New Arrivals</h2>{/* End .title */}
                </div>{/* End .heading-left */}
                <div className="heading-right">
                  <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="new-all-link" data-toggle="tab" href="#new-all-tab" role="tab" aria-controls="new-all-tab" aria-selected="true">All</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="new-tv-link" data-toggle="tab" href="#new-tv-tab" role="tab" aria-controls="new-tv-tab" aria-selected="false">TV</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="new-computers-link" data-toggle="tab" href="#new-computers-tab" role="tab" aria-controls="new-computers-tab" aria-selected="false">Computers</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="new-phones-link" data-toggle="tab" href="#new-phones-tab" role="tab" aria-controls="new-phones-tab" aria-selected="false">Tablets &amp; Cell Phones</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="new-watches-link" data-toggle="tab" href="#new-watches-tab" role="tab" aria-controls="new-watches-tab" aria-selected="false">Smartwatches</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="new-acc-link" data-toggle="tab" href="#new-acc-tab" role="tab" aria-controls="new-acc-tab" aria-selected="false">Accessories</a>
                    </li>
                  </ul>
                </div>{/* End .heading-right */}
              </div>{/* End .heading */}
              <div className="tab-content tab-content-carousel just-action-icons-sm">
                <div className="tab-pane p-0 fade show active" id="new-all-tab" role="tabpanel" aria-labelledby="new-all-link">
                  <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                &quot;nav&quot;: true, 
                                &quot;dots&quot;: true,
                                &quot;margin&quot;: 20,
                                &quot;loop&quot;: false,
                                &quot;responsive&quot;: {
                                    &quot;0&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;480&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;768&quot;: {
                                        &quot;items&quot;:3
                                    },
                                    &quot;992&quot;: {
                                        &quot;items&quot;:4
                                    },
                                    &quot;1200&quot;: {
                                        &quot;items&quot;:5
                                    }
                                }
                            }">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $1,199.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $79.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">New</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $899.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                          <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <span className="product-label label-circle label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Samsung - 55" Class  LED 2160p Smart</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $899.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $1,199.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .owl-carousel */}
                </div>{/* .End .tab-pane */}
                <div className="tab-pane p-0 fade" id="new-tv-tab" role="tabpanel" aria-labelledby="new-tv-link">
                  <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                &quot;nav&quot;: true, 
                                &quot;dots&quot;: true,
                                &quot;margin&quot;: 20,
                                &quot;loop&quot;: false,
                                &quot;responsive&quot;: {
                                    &quot;0&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;480&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;768&quot;: {
                                        &quot;items&quot;:3
                                    },
                                    &quot;992&quot;: {
                                        &quot;items&quot;:4
                                    },
                                    &quot;1200&quot;: {
                                        &quot;items&quot;:5
                                    }
                                }
                            }">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">New</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $899.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                          <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $79.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <span className="product-label label-circle label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Samsung - 55" Class  LED 2160p Smart</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $899.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $1,199.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .owl-carousel */}
                </div>{/* .End .tab-pane */}
                <div className="tab-pane p-0 fade" id="new-computers-tab" role="tabpanel" aria-labelledby="new-computers-link">
                  <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                &quot;nav&quot;: true, 
                                &quot;dots&quot;: true,
                                &quot;margin&quot;: 20,
                                &quot;loop&quot;: false,
                                &quot;responsive&quot;: {
                                    &quot;0&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;480&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;768&quot;: {
                                        &quot;items&quot;:3
                                    },
                                    &quot;992&quot;: {
                                        &quot;items&quot;:4
                                    },
                                    &quot;1200&quot;: {
                                        &quot;items&quot;:5
                                    }
                                }
                            }">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Samsung - 55" Class  LED 2160p Smart</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $899.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $1,199.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">New</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $899.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                          <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $79.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <span className="product-label label-circle label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .owl-carousel */}
                </div>{/* .End .tab-pane */}
                <div className="tab-pane p-0 fade" id="new-phones-tab" role="tabpanel" aria-labelledby="new-phones-link">
                  <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                &quot;nav&quot;: true, 
                                &quot;dots&quot;: true,
                                &quot;margin&quot;: 20,
                                &quot;loop&quot;: false,
                                &quot;responsive&quot;: {
                                    &quot;0&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;480&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;768&quot;: {
                                        &quot;items&quot;:3
                                    },
                                    &quot;992&quot;: {
                                        &quot;items&quot;:4
                                    },
                                    &quot;1200&quot;: {
                                        &quot;items&quot;:5
                                    }
                                }
                            }">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $1,199.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $79.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">New</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $899.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                          <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Samsung - 55" Class  LED 2160p Smart</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $899.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $1,199.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <span className="product-label label-circle label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .owl-carousel */}
                </div>{/* .End .tab-pane */}
                <div className="tab-pane p-0 fade" id="new-watches-tab" role="tabpanel" aria-labelledby="new-watches-link">
                  <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                &quot;nav&quot;: true, 
                                &quot;dots&quot;: true,
                                &quot;margin&quot;: 20,
                                &quot;loop&quot;: false,
                                &quot;responsive&quot;: {
                                    &quot;0&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;480&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;768&quot;: {
                                        &quot;items&quot;:3
                                    },
                                    &quot;992&quot;: {
                                        &quot;items&quot;:4
                                    },
                                    &quot;1200&quot;: {
                                        &quot;items&quot;:5
                                    }
                                }
                            }">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <span className="product-label label-circle label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $1,199.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $79.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">New</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $899.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                          <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .owl-carousel */}
                </div>{/* .End .tab-pane */}
                <div className="tab-pane p-0 fade" id="new-acc-tab" role="tabpanel" aria-labelledby="new-acc-link">
                  <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                &quot;nav&quot;: true, 
                                &quot;dots&quot;: true,
                                &quot;margin&quot;: 20,
                                &quot;loop&quot;: false,
                                &quot;responsive&quot;: {
                                    &quot;0&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;480&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;768&quot;: {
                                        &quot;items&quot;:3
                                    },
                                    &quot;992&quot;: {
                                        &quot;items&quot;:4
                                    },
                                    &quot;1200&quot;: {
                                        &quot;items&quot;:5
                                    }
                                }
                            }">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $1,199.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Samsung - 55" Class  LED 2160p Smart</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $899.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $1,199.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $79.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">New</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $899.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                          <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .owl-carousel */}
                </div>{/* .End .tab-pane */}
              </div>{/* End .tab-content */}
            </div>{/* End .container */}
            <div className="mb-6" />{/* End .mb-6 */}
            <div className="container">
              <div className="cta cta-border mb-5" style={{backgroundImage: 'url(assets/images/demos/demo-4/bg-1.jpg)'}}>
                <img src="assets/images/demos/demo-4/camera.png" alt="camera" className="cta-img" />
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="cta-content">
                      <div className="cta-text text-right text-white">
                        <p>Shop Today’s Deals <br /><strong>Awesome Made Easy. HERO7 Black</strong></p>
                      </div>{/* End .cta-text */}
                      <a href="#" className="btn btn-primary btn-round"><span>Shop Now - $429.99</span><i className="icon-long-arrow-right" /></a>
                    </div>{/* End .cta-content */}
                  </div>{/* End .col-md-12 */}
                </div>{/* End .row */}
              </div>{/* End .cta */}
            </div>{/* End .container */}
            <div className="container">
              <div className="heading text-center mb-3">
                <h2 className="title">Deals &amp; Outlet</h2>{/* End .title */}
                <p className="title-desc">Today’s deal and more</p>{/* End .title-desc */}
              </div>{/* End .heading */}
              <div className="row">
                <div className="col-lg-6 deal-col">
                  <div className="deal" style={{backgroundImage: 'url("assets/images/demos/demo-4/deal/bg-1.jpg")'}}>
                    <div className="deal-top">
                      <h2>Deal of the Day.</h2>
                      <h4>Limited quantities. </h4>
                    </div>{/* End .deal-top */}
                    <div className="deal-content">
                      <h3 className="product-title"><a href="product.html">Home Smart Speaker with  Google Assistant</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$129.00</span>
                        <span className="old-price">Was $150.99</span>
                      </div>{/* End .product-price */}
                      <a href="product.html" className="btn btn-link"><span>Shop Now</span><i className="icon-long-arrow-right" /></a>
                    </div>{/* End .deal-content */}
                    <div className="deal-bottom">
                      <div className="deal-countdown daily-deal-countdown" data-until="+10h" />{/* End .deal-countdown */}
                    </div>{/* End .deal-bottom */}
                  </div>{/* End .deal */}
                </div>{/* End .col-lg-6 */}
                <div className="col-lg-6 deal-col">
                  <div className="deal" style={{backgroundImage: 'url("assets/images/demos/demo-4/deal/bg-2.jpg")'}}>
                    <div className="deal-top">
                      <h2>Your Exclusive Offers.</h2>
                      <h4>Sign in to see amazing deals.</h4>
                    </div>{/* End .deal-top */}
                    <div className="deal-content">
                      <h3 className="product-title"><a href="product.html">Certified Wireless Charging  Pad for iPhone / Android</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$29.99</span>
                      </div>{/* End .product-price */}
                      <a href="login.html" className="btn btn-link"><span>Sign In and Save money</span><i className="icon-long-arrow-right" /></a>
                    </div>{/* End .deal-content */}
                    <div className="deal-bottom">
                      <div className="deal-countdown offer-countdown" data-until="+11d" />{/* End .deal-countdown */}
                    </div>{/* End .deal-bottom */}
                  </div>{/* End .deal */}
                </div>{/* End .col-lg-6 */}
              </div>{/* End .row */}
              <div className="more-container text-center mt-1 mb-5">
                <a href="#" className="btn btn-outline-dark-2 btn-round btn-more"><span>Shop more Outlet deals</span><i className="icon-long-arrow-right" /></a>
              </div>{/* End .more-container */}
            </div>{/* End .container */}
            <div className="container">
              <hr className="mb-0" />
              <div className="owl-carousel mt-5 mb-5 owl-simple" data-toggle="owl" data-owl-options="{
                        &quot;nav&quot;: false, 
                        &quot;dots&quot;: false,
                        &quot;margin&quot;: 30,
                        &quot;loop&quot;: false,
                        &quot;responsive&quot;: {
                            &quot;0&quot;: {
                                &quot;items&quot;:2
                            },
                            &quot;420&quot;: {
                                &quot;items&quot;:3
                            },
                            &quot;600&quot;: {
                                &quot;items&quot;:4
                            },
                            &quot;900&quot;: {
                                &quot;items&quot;:5
                            },
                            &quot;1024&quot;: {
                                &quot;items&quot;:6
                            }
                        }
                    }">
                <a href="#" className="brand">
                  <img src="assets/images/brands/1.png" alt="Brand Name" />
                </a>
                <a href="#" className="brand">
                  <img src="assets/images/brands/2.png" alt="Brand Name" />
                </a>
                <a href="#" className="brand">
                  <img src="assets/images/brands/3.png" alt="Brand Name" />
                </a>
                <a href="#" className="brand">
                  <img src="assets/images/brands/4.png" alt="Brand Name" />
                </a>
                <a href="#" className="brand">
                  <img src="assets/images/brands/5.png" alt="Brand Name" />
                </a>
                <a href="#" className="brand">
                  <img src="assets/images/brands/6.png" alt="Brand Name" />
                </a>
              </div>{/* End .owl-carousel */}
            </div>{/* End .container */}
            <div className="bg-light pt-5 pb-6">
              <div className="container trending-products">
                <div className="heading heading-flex mb-3">
                  <div className="heading-left">
                    <h2 className="title">Trending Products</h2>{/* End .title */}
                  </div>{/* End .heading-left */}
                  <div className="heading-right">
                    <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="trending-top-link" data-toggle="tab" href="#trending-top-tab" role="tab" aria-controls="trending-top-tab" aria-selected="true">Top Rated</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="trending-best-link" data-toggle="tab" href="#trending-best-tab" role="tab" aria-controls="trending-best-tab" aria-selected="false">Best Selling</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="trending-sale-link" data-toggle="tab" href="#trending-sale-tab" role="tab" aria-controls="trending-sale-tab" aria-selected="false">On Sale</a>
                      </li>
                    </ul>
                  </div>{/* End .heading-right */}
                </div>{/* End .heading */}
                <div className="row">
                  <div className="col-xl-5col d-none d-xl-block">
                    <div className="banner">
                      <a href="#">
                        <img src="assets/images/demos/demo-4/banners/banner-4.jpg" alt="banner" />
                      </a>
                    </div>{/* End .banner */}
                  </div>{/* End .col-xl-5col */}
                  <div className="col-xl-4-5col">
                    <div className="tab-content tab-content-carousel just-action-icons-sm">
                      <div className="tab-pane p-0 fade show active" id="trending-top-tab" role="tabpanel" aria-labelledby="trending-top-link">
                        <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                            &quot;nav&quot;: true, 
                                            &quot;dots&quot;: false,
                                            &quot;margin&quot;: 20,
                                            &quot;loop&quot;: false,
                                            &quot;responsive&quot;: {
                                                &quot;0&quot;: {
                                                    &quot;items&quot;:2
                                                },
                                                &quot;480&quot;: {
                                                    &quot;items&quot;:2
                                                },
                                                &quot;768&quot;: {
                                                    &quot;items&quot;:3
                                                },
                                                &quot;992&quot;: {
                                                    &quot;items&quot;:4
                                                }
                                            }
                                        }">
                          <div className="product product-2">
                            <figure className="product-media">
                              <span className="product-label label-circle label-top">Top</span>
                              <a href="product.html">
                                <img src="assets/images/demos/demo-4/products/product-6.jpg" alt="Product image" className="product-image" />
                              </a>
                              <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                              </div>{/* End .product-action */}
                              <div className="product-action">
                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                              </div>{/* End .product-action */}
                            </figure>{/* End .product-media */}
                            <div className="product-body">
                              <div className="product-cat">
                                <a href="#">Headphones</a>
                              </div>{/* End .product-cat */}
                              <h3 className="product-title"><a href="product.html">Bose - SoundSport  wireless headphones</a></h3>{/* End .product-title */}
                              <div className="product-price">
                                $199.99
                              </div>{/* End .product-price */}
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                                </div>{/* End .ratings */}
                                <span className="ratings-text">( 4 Reviews )</span>
                              </div>{/* End .rating-container */}
                              <div className="product-nav product-nav-dots">
                                <a href="#" style={{background: '#69b4ff'}}><span className="sr-only">Color name</span></a>
                                <a href="#" style={{background: '#ff887f'}}><span className="sr-only">Color name</span></a>
                                <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                              </div>{/* End .product-nav */}
                            </div>{/* End .product-body */}
                          </div>{/* End .product */}
                          <div className="product product-2">
                            <figure className="product-media">
                              <a href="product.html">
                                <img src="assets/images/demos/demo-4/products/product-7.jpg" alt="Product image" className="product-image" />
                              </a>
                              <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                              </div>{/* End .product-action */}
                              <div className="product-action">
                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                              </div>{/* End .product-action */}
                            </figure>{/* End .product-media */}
                            <div className="product-body">
                              <div className="product-cat">
                                <a href="#">Video Games</a>
                              </div>{/* End .product-cat */}
                              <h3 className="product-title"><a href="product.html">Microsoft - Refurbish Xbox One S 500GB</a></h3>{/* End .product-title */}
                              <div className="product-price">
                                $279.99
                              </div>{/* End .product-price */}
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                                </div>{/* End .ratings */}
                                <span className="ratings-text">( 6 Reviews )</span>
                              </div>{/* End .rating-container */}
                            </div>{/* End .product-body */}
                          </div>{/* End .product */}
                          <div className="product product-2">
                            <figure className="product-media">
                              <span className="product-label label-circle label-new">New</span>
                              <a href="product.html">
                                <img src="assets/images/demos/demo-4/products/product-8.jpg" alt="Product image" className="product-image" />
                              </a>
                              <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                              </div>{/* End .product-action */}
                              <div className="product-action">
                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                              </div>{/* End .product-action */}
                            </figure>{/* End .product-media */}
                            <div className="product-body">
                              <div className="product-cat">
                                <a href="#">Smartwatches</a>
                              </div>{/* End .product-cat */}
                              <h3 className="product-title"><a href="product.html">Apple Watch Series 4 Gold Aluminum Case</a></h3>{/* End .product-title */}
                              <div className="product-price">
                                $499.99
                              </div>{/* End .product-price */}
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                                </div>{/* End .ratings */}
                                <span className="ratings-text">( 4 Reviews )</span>
                              </div>{/* End .rating-container */}
                              <div className="product-nav product-nav-dots">
                                <a href="#" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                                <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                                <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                              </div>{/* End .product-nav */}
                            </div>{/* End .product-body */}
                          </div>{/* End .product */}
                          <div className="product product-2">
                            <figure className="product-media">
                              <span className="product-label label-circle label-top">Top</span>
                              <span className="product-label label-circle label-sale">Sale</span>
                              <a href="product.html">
                                <img src="assets/images/demos/demo-4/products/product-9.jpg" alt="Product image" className="product-image" />
                              </a>
                              <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                              </div>{/* End .product-action */}
                              <div className="product-action">
                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                              </div>{/* End .product-action */}
                            </figure>{/* End .product-media */}
                            <div className="product-body">
                              <div className="product-cat">
                                <a href="#">TV &amp; Home Theater</a>
                              </div>{/* End .product-cat */}
                              <h3 className="product-title"><a href="product.html">Sony - Class LED 2160p Smart 4K Ultra HD</a></h3>{/* End .product-title */}
                              <div className="product-price">
                                <span className="new-price">$1,699.99</span>
                                <span className="old-price">Was $1,999.99</span>
                              </div>{/* End .product-price */}
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                                </div>{/* End .ratings */}
                                <span className="ratings-text">( 10 Reviews )</span>
                              </div>{/* End .rating-container */}
                            </div>{/* End .product-body */}
                          </div>{/* End .product */}
                          <div className="product product-2">
                            <figure className="product-media">
                              <span className="product-label label-circle label-new">New</span>
                              <a href="product.html">
                                <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image" />
                              </a>
                              <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                              </div>{/* End .product-action */}
                              <div className="product-action">
                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                              </div>{/* End .product-action */}
                            </figure>{/* End .product-media */}
                            <div className="product-body">
                              <div className="product-cat">
                                <a href="#">Tablets</a>
                              </div>{/* End .product-cat */}
                              <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                              <div className="product-price">
                                $899.99
                              </div>{/* End .product-price */}
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                                </div>{/* End .ratings */}
                                <span className="ratings-text">( 4 Reviews )</span>
                              </div>{/* End .rating-container */}
                              <div className="product-nav product-nav-dots">
                                <a href="#" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                                <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                                <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                              </div>{/* End .product-nav */}
                            </div>{/* End .product-body */}
                          </div>{/* End .product */}
                        </div>{/* End .owl-carousel */}
                      </div>{/* .End .tab-pane */}
                      <div className="tab-pane p-0 fade" id="trending-best-tab" role="tabpanel" aria-labelledby="trending-best-link">
                        <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                            &quot;nav&quot;: true, 
                                            &quot;dots&quot;: false,
                                            &quot;margin&quot;: 20,
                                            &quot;loop&quot;: false,
                                            &quot;responsive&quot;: {
                                                &quot;0&quot;: {
                                                    &quot;items&quot;:2
                                                },
                                                &quot;480&quot;: {
                                                    &quot;items&quot;:2
                                                },
                                                &quot;768&quot;: {
                                                    &quot;items&quot;:3
                                                },
                                                &quot;992&quot;: {
                                                    &quot;items&quot;:4
                                                }
                                            }
                                        }">
                          <div className="product product-2">
                            <figure className="product-media">
                              <span className="product-label label-circle label-new">New</span>
                              <a href="product.html">
                                <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image" />
                              </a>
                              <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                              </div>{/* End .product-action */}
                              <div className="product-action">
                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                              </div>{/* End .product-action */}
                            </figure>{/* End .product-media */}
                            <div className="product-body">
                              <div className="product-cat">
                                <a href="#">Tablets</a>
                              </div>{/* End .product-cat */}
                              <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                              <div className="product-price">
                                $899.99
                              </div>{/* End .product-price */}
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                                </div>{/* End .ratings */}
                                <span className="ratings-text">( 4 Reviews )</span>
                              </div>{/* End .rating-container */}
                              <div className="product-nav product-nav-dots">
                                <a href="#" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                                <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                                <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                              </div>{/* End .product-nav */}
                            </div>{/* End .product-body */}
                          </div>{/* End .product */}
                          <div className="product product-2">
                            <figure className="product-media">
                              <a href="product.html">
                                <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image" />
                              </a>
                              <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                              </div>{/* End .product-action */}
                              <div className="product-action">
                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                              </div>{/* End .product-action */}
                            </figure>{/* End .product-media */}
                            <div className="product-body">
                              <div className="product-cat">
                                <a href="#">Audio</a>
                              </div>{/* End .product-cat */}
                              <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                              <div className="product-price">
                                $79.99
                              </div>{/* End .product-price */}
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                                </div>{/* End .ratings */}
                                <span className="ratings-text">( 6 Reviews )</span>
                              </div>{/* End .rating-container */}
                            </div>{/* End .product-body */}
                          </div>{/* End .product */}
                          <div className="product product-2">
                            <figure className="product-media">
                              <span className="product-label label-circle label-top">Top</span>
                              <span className="product-label label-circle label-sale">Sale</span>
                              <a href="product.html">
                                <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image" />
                              </a>
                              <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                              </div>{/* End .product-action */}
                              <div className="product-action">
                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                              </div>{/* End .product-action */}
                            </figure>{/* End .product-media */}
                            <div className="product-body">
                              <div className="product-cat">
                                <a href="#">Cell Phone</a>
                              </div>{/* End .product-cat */}
                              <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>{/* End .product-title */}
                              <div className="product-price">
                                <span className="new-price">$35.41</span>
                                <span className="old-price">Was $41.67</span>
                              </div>{/* End .product-price */}
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                                </div>{/* End .ratings */}
                                <span className="ratings-text">( 10 Reviews )</span>
                              </div>{/* End .rating-container */}
                              <div className="product-nav product-nav-dots">
                                <a href="#" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                                <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                                <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                              </div>{/* End .product-nav */}
                            </div>{/* End .product-body */}
                          </div>{/* End .product */}
                          <div className="product product-2">
                            <figure className="product-media">
                              <span className="product-label label-circle label-top">Top</span>
                              <a href="product.html">
                                <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image" />
                              </a>
                              <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                              </div>{/* End .product-action */}
                              <div className="product-action">
                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                              </div>{/* End .product-action */}
                            </figure>{/* End .product-media */}
                            <div className="product-body">
                              <div className="product-cat">
                                <a href="#">TV &amp; Home Theater</a>
                              </div>{/* End .product-cat */}
                              <h3 className="product-title"><a href="product.html">Samsung - 55" Class  LED 2160p Smart</a></h3>{/* End .product-title */}
                              <div className="product-price">
                                $899.99
                              </div>{/* End .product-price */}
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                                </div>{/* End .ratings */}
                                <span className="ratings-text">( 5 Reviews )</span>
                              </div>{/* End .rating-container */}
                            </div>{/* End .product-body */}
                          </div>{/* End .product */}
                          <div className="product product-2">
                            <figure className="product-media">
                              <span className="product-label label-circle label-top">Top</span>
                              <a href="product.html">
                                <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                              </a>
                              <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                              </div>{/* End .product-action */}
                              <div className="product-action">
                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                              </div>{/* End .product-action */}
                            </figure>{/* End .product-media */}
                            <div className="product-body">
                              <div className="product-cat">
                                <a href="#">Laptops</a>
                              </div>{/* End .product-cat */}
                              <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                              <div className="product-price">
                                $1,199.99
                              </div>{/* End .product-price */}
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                                </div>{/* End .ratings */}
                                <span className="ratings-text">( 4 Reviews )</span>
                              </div>{/* End .rating-container */}
                            </div>{/* End .product-body */}
                          </div>{/* End .product */}
                        </div>{/* End .owl-carousel */}
                      </div>{/* .End .tab-pane */}
                      <div className="tab-pane p-0 fade" id="trending-sale-tab" role="tabpanel" aria-labelledby="trending-sale-link">
                        <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                            &quot;nav&quot;: true, 
                                            &quot;dots&quot;: false,
                                            &quot;margin&quot;: 20,
                                            &quot;loop&quot;: false,
                                            &quot;responsive&quot;: {
                                                &quot;0&quot;: {
                                                    &quot;items&quot;:2
                                                },
                                                &quot;480&quot;: {
                                                    &quot;items&quot;:2
                                                },
                                                &quot;768&quot;: {
                                                    &quot;items&quot;:3
                                                },
                                                &quot;992&quot;: {
                                                    &quot;items&quot;:4
                                                }
                                            }
                                        }">
                          <div className="product product-2">
                            <figure className="product-media">
                              <span className="product-label label-circle label-new">New</span>
                              <a href="product.html">
                                <img src="assets/images/demos/demo-4/products/product-8.jpg" alt="Product image" className="product-image" />
                              </a>
                              <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                              </div>{/* End .product-action */}
                              <div className="product-action">
                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                              </div>{/* End .product-action */}
                            </figure>{/* End .product-media */}
                            <div className="product-body">
                              <div className="product-cat">
                                <a href="#">Smartwatches</a>
                              </div>{/* End .product-cat */}
                              <h3 className="product-title"><a href="product.html">Apple Watch Series 4 Gold Aluminum Case</a></h3>{/* End .product-title */}
                              <div className="product-price">
                                $499.99
                              </div>{/* End .product-price */}
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                                </div>{/* End .ratings */}
                                <span className="ratings-text">( 4 Reviews )</span>
                              </div>{/* End .rating-container */}
                              <div className="product-nav product-nav-dots">
                                <a href="#" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                                <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                                <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                              </div>{/* End .product-nav */}
                            </div>{/* End .product-body */}
                          </div>{/* End .product */}
                          <div className="product product-2">
                            <figure className="product-media">
                              <span className="product-label label-circle label-top">Top</span>
                              <a href="product.html">
                                <img src="assets/images/demos/demo-4/products/product-6.jpg" alt="Product image" className="product-image" />
                              </a>
                              <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                              </div>{/* End .product-action */}
                              <div className="product-action">
                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                              </div>{/* End .product-action */}
                            </figure>{/* End .product-media */}
                            <div className="product-body">
                              <div className="product-cat">
                                <a href="#">Headphones</a>
                              </div>{/* End .product-cat */}
                              <h3 className="product-title"><a href="product.html">Bose - SoundSport  wireless headphones</a></h3>{/* End .product-title */}
                              <div className="product-price">
                                $199.99
                              </div>{/* End .product-price */}
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                                </div>{/* End .ratings */}
                                <span className="ratings-text">( 4 Reviews )</span>
                              </div>{/* End .rating-container */}
                              <div className="product-nav product-nav-dots">
                                <a href="#" style={{background: '#69b4ff'}}><span className="sr-only">Color name</span></a>
                                <a href="#" style={{background: '#ff887f'}}><span className="sr-only">Color name</span></a>
                                <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                              </div>{/* End .product-nav */}
                            </div>{/* End .product-body */}
                          </div>{/* End .product */}
                          <div className="product product-2">
                            <figure className="product-media">
                              <a href="product.html">
                                <img src="assets/images/demos/demo-4/products/product-7.jpg" alt="Product image" className="product-image" />
                              </a>
                              <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                              </div>{/* End .product-action */}
                              <div className="product-action">
                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                              </div>{/* End .product-action */}
                            </figure>{/* End .product-media */}
                            <div className="product-body">
                              <div className="product-cat">
                                <a href="#">Video Games</a>
                              </div>{/* End .product-cat */}
                              <h3 className="product-title"><a href="product.html">Microsoft - Refurbish Xbox One S 500GB</a></h3>{/* End .product-title */}
                              <div className="product-price">
                                $279.99
                              </div>{/* End .product-price */}
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                                </div>{/* End .ratings */}
                                <span className="ratings-text">( 6 Reviews )</span>
                              </div>{/* End .rating-container */}
                            </div>{/* End .product-body */}
                          </div>{/* End .product */}
                          <div className="product product-2">
                            <figure className="product-media">
                              <span className="product-label label-circle label-new">New</span>
                              <a href="product.html">
                                <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image" />
                              </a>
                              <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                              </div>{/* End .product-action */}
                              <div className="product-action">
                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                              </div>{/* End .product-action */}
                            </figure>{/* End .product-media */}
                            <div className="product-body">
                              <div className="product-cat">
                                <a href="#">Tablets</a>
                              </div>{/* End .product-cat */}
                              <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                              <div className="product-price">
                                $899.99
                              </div>{/* End .product-price */}
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                                </div>{/* End .ratings */}
                                <span className="ratings-text">( 4 Reviews )</span>
                              </div>{/* End .rating-container */}
                              <div className="product-nav product-nav-dots">
                                <a href="#" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                                <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                                <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                              </div>{/* End .product-nav */}
                            </div>{/* End .product-body */}
                          </div>{/* End .product */}
                        </div>{/* End .owl-carousel */}
                      </div>{/* .End .tab-pane */}
                    </div>{/* End .tab-content */}
                  </div>{/* End .col-xl-4-5col */}
                </div>{/* End .row */}
              </div>{/* End .container */}
            </div>{/* End .bg-light pt-5 pb-6 */}
            <div className="mb-5" />{/* End .mb-5 */}
            <div className="container for-you">
              <div className="heading heading-flex mb-3">
                <div className="heading-left">
                  <h2 className="title">Recommendation For You</h2>{/* End .title */}
                </div>{/* End .heading-left */}
                <div className="heading-right">
                  <a href="#" className="title-link">View All Recommendadion <i className="icon-long-arrow-right" /></a>
                </div>{/* End .heading-right */}
              </div>{/* End .heading */}
              <div className="products">
                <div className="row justify-content-center">
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-10.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Headphones</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Beats by Dr. Dre Wireless  Headphones</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$279.99</span>
                          <span className="old-price">Was $349.99</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '40%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#666666'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#ff887f'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#6699cc'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#f3dbc1'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-11.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cameras &amp; Camcorders</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">GoPro - HERO7 Black HD Waterproof Action</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $349.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">New</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-12.jpg" alt="Product image" className="product-image" />
                          <img src="assets/images/demos/demo-4/products/product-12-2.jpg" alt="Product image" className="product-image-hover" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Smartwatches</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Apple - Apple Watch Series 3 with White Sport Band</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $214.49
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '0%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#e2e2e2'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#f2bc9e'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-13.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Lenovo - 330-15IKBR 15.6"</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="out-price">$339.99</span>
                          <span className="out-text">Out Of Stock</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 11 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-14.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Digital Cameras</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Sony - Alpha a5100 Mirrorless Camera</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $499.99
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '50%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 11 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-15.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Home Mini - Smart Speaker  with Google Assistant</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $49.00
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 24 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#ef837b'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#e2e2e2'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-16.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">WONDERBOOM Portable Bluetooth Speaker</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$99.99</span>
                          <span className="old-price">Was $129.99</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '40%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#666666'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#ff887f'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#6699cc'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#f3dbc1'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-4/products/product-17.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                        </div>{/* End .product-action */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                          <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Smart Home</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Google - Home Hub with  Google Assistant</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $149.00
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                </div>{/* End .row */}
              </div>{/* End .products */}
            </div>{/* End .container */}
            <div className="mb-4" />{/* End .mb-4 */}
            <div className="container">
              <hr className="mb-0" />
            </div>{/* End .container */}
            <div className="icon-boxes-container bg-transparent">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="icon-rocket" />
                      </span>
                      <div className="icon-box-content">
                        <h3 className="icon-box-title">Free Shipping</h3>{/* End .icon-box-title */}
                        <p>Orders $50 or more</p>
                      </div>{/* End .icon-box-content */}
                    </div>{/* End .icon-box */}
                  </div>{/* End .col-sm-6 col-lg-3 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="icon-rotate-left" />
                      </span>
                      <div className="icon-box-content">
                        <h3 className="icon-box-title">Free Returns</h3>{/* End .icon-box-title */}
                        <p>Within 30 days</p>
                      </div>{/* End .icon-box-content */}
                    </div>{/* End .icon-box */}
                  </div>{/* End .col-sm-6 col-lg-3 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="icon-info-circle" />
                      </span>
                      <div className="icon-box-content">
                        <h3 className="icon-box-title">Get 20% Off 1 Item</h3>{/* End .icon-box-title */}
                        <p>when you sign up</p>
                      </div>{/* End .icon-box-content */}
                    </div>{/* End .icon-box */}
                  </div>{/* End .col-sm-6 col-lg-3 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="icon-life-ring" />
                      </span>
                      <div className="icon-box-content">
                        <h3 className="icon-box-title">We Support</h3>{/* End .icon-box-title */}
                        <p>24/7 amazing services</p>
                      </div>{/* End .icon-box-content */}
                    </div>{/* End .icon-box */}
                  </div>{/* End .col-sm-6 col-lg-3 */}
                </div>{/* End .row */}
              </div>{/* End .container */}
            </div>{/* End .icon-boxes-container */}
          </main>{/* End .main */}
          <footer className="footer">
            <div className="cta bg-image bg-dark pt-4 pb-5 mb-0" style={{backgroundImage: 'url(assets/images/demos/demo-4/bg-5.jpg)'}}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-sm-10 col-md-8 col-lg-6">
                    <div className="cta-heading text-center">
                      <h3 className="cta-title text-white">Get The Latest Deals</h3>{/* End .cta-title */}
                      <p className="cta-desc text-white">and receive <span className="font-weight-normal">$20 coupon</span> for first shopping</p>{/* End .cta-desc */}
                    </div>{/* End .text-center */}
                    <form action="#">
                      <div className="input-group input-group-round">
                        <input type="email" className="form-control form-control-white" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right" /></button>
                        </div>{/* .End .input-group-append */}
                      </div>{/* .End .input-group */}
                    </form>
                  </div>{/* End .col-sm-10 col-md-8 col-lg-6 */}
                </div>{/* End .row */}
              </div>{/* End .container */}
            </div>{/* End .cta */}
            <div className="footer-middle">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="widget widget-about">
                      <img src="assets/images/demos/demo-4/logo-footer.png" className="footer-logo" alt="Footer Logo" width={105} height={25} />
                      <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>
                      <div className="widget-call">
                        <i className="icon-phone" />
                        Got Question? Call us 24/7
                        <a href="tel:#">+0123 456 789</a>         
                      </div>{/* End .widget-call */}
                    </div>{/* End .widget about-widget */}
                  </div>{/* End .col-sm-6 col-lg-3 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="widget">
                      <h4 className="widget-title">Useful Links</h4>{/* End .widget-title */}
                      <ul className="widget-list">
                        <li><a href="about.html">About Molla</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">How to shop on Molla</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a href="contact.html">Contact us</a></li>
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
        <div className="mobile-menu-container mobile-menu-light">
          <div className="mobile-menu-wrapper">
            <span className="mobile-menu-close"><i className="icon-close" /></span>
            <form action="#" method="get" className="mobile-search">
              <label htmlFor="mobile-search" className="sr-only">Search</label>
              <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
              <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
            </form>
            <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="mobile-menu-link" data-toggle="tab" href="#mobile-menu-tab" role="tab" aria-controls="mobile-menu-tab" aria-selected="true">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="mobile-cats-link" data-toggle="tab" href="#mobile-cats-tab" role="tab" aria-controls="mobile-cats-tab" aria-selected="false">Categories</a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel" aria-labelledby="mobile-menu-link">
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
              </div>{/* .End .tab-pane */}
              <div className="tab-pane fade" id="mobile-cats-tab" role="tabpanel" aria-labelledby="mobile-cats-link">
                <nav className="mobile-cats-nav">
                  <ul className="mobile-cats-menu">
                    <li><a className="mobile-cats-lead" href="#">Daily offers</a></li>
                    <li><a className="mobile-cats-lead" href="#">Gift Ideas</a></li>
                    <li><a href="#">Beds</a></li>
                    <li><a href="#">Lighting</a></li>
                    <li><a href="#">Sofas &amp; Sleeper sofas</a></li>
                    <li><a href="#">Storage</a></li>
                    <li><a href="#">Armchairs &amp; Chaises</a></li>
                    <li><a href="#">Decoration </a></li>
                    <li><a href="#">Kitchen Cabinets</a></li>
                    <li><a href="#">Coffee &amp; Tables</a></li>
                    <li><a href="#">Outdoor Furniture </a></li>
                  </ul>{/* End .mobile-cats-menu */}
                </nav>{/* End .mobile-cats-nav */}
              </div>{/* .End .tab-pane */}
            </div>{/* End .tab-content */}
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
                    <ul className="nav nav-pills nav-fill nav-border-anim" role="tablist">
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
        <div className="container newsletter-popup-container mfp-hide" id="newsletter-popup-form">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row no-gutters bg-white newsletter-popup-content">
                <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                  <div className="banner-content text-center">
                    <img src="assets/images/popup/newsletter/logo.png" className="logo" alt="logo" width={60} height={15} />
                    <h2 className="banner-title">get <span>25<light>%</light></span> off</h2>
                    <p>Subscribe to the Molla eCommerce newsletter to receive timely updates from your favorite products.</p>
                    <form action="#">
                      <div className="input-group input-group-round">
                        <input type="email" className="form-control form-control-white" placeholder="Your Email Address" aria-label="Email Adress" required />
                        <div className="input-group-append">
                          <button className="btn" type="submit"><span>go</span></button>
                        </div>{/* .End .input-group-append */}
                      </div>{/* .End .input-group */}
                    </form>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                      <label className="custom-control-label" htmlFor="register-policy-2">Do not show this popup again</label>
                    </div>{/* End .custom-checkbox */}
                  </div>
                </div>
                <div className="col-xl-2-5col col-lg-5 ">
                  <img src="assets/images/popup/newsletter/img-1.jpg" className="newsletter-img" alt="newsletter" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Plugins JS File */}
        {/* Main JS File */}
        {/* molla/index-4.html  22 Nov 2019 09:54:18 GMT */}
      </div>
    );
  }
}
  
    export default AllShop;