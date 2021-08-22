import React from 'react';
 function ProductDetails() {
      return (
        <div>
          {/* molla/product.html  22 Nov 2019 09:54:50 GMT */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Molla - Bootstrap eCommerce Template</title>
          <meta name="keywords" content="HTML5 Template" />
          <meta name="description" content="Molla - Bootstrap eCommerce Template" />
          <meta name="author" content="p-themes" />
          {/* Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="../../assets/images/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="../../assets/images/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="../../assets/images/icons/favicon-16x16.png" />
          <link rel="manifest" href="../../assets/images/icons/site.html" />
          <link rel="mask-icon" href="../../assets/images/icons/safari-pinned-tab.svg" color="#666666" />
          <link rel="shortcut icon" href="../../assets/images/icons/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="Molla" />
          <meta name="application-name" content="Molla" />
          <meta name="msapplication-TileColor" content="#cc9966" />
          <meta name="msapplication-config" content="assets/images/icons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          {/* Plugins CSS File */}
          <link rel="stylesheet" href="../../assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="../../assets/css/plugins/owl-carousel/owl.carousel.css" />
          <link rel="stylesheet" href="../../assets/css/plugins/magnific-popup/magnific-popup.css" />
          {/* Main CSS File */}
          <link rel="stylesheet" href="../../assets/css/style.css" />
          <link rel="stylesheet" href="../../assets/css/plugins/nouislider/nouislider.css" />
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
                          <li><a href="/contact">Contact Us</a></li>
                          <li><a href="/login"><i className="icon-user" />Login</a></li>
                        </ul>
                      </li>
                    </ul>{/* End .top-menu */}
                  </div>{/* End .header-right */}
                </div>{/* End .container-fluid */}
              </div>{/* End .header-top */}
              <div className="header-middle sticky-header">
                <div className="container">
                  <div className="header-left">
                    <button className="mobile-menu-toggler">
                      <span className="sr-only">Toggle mobile menu</span>
                      <i className="icon-bars" />
                    </button>
                    <a href="/" className="logo">
                      <img src="{{ asset('assets/images/logo.png') }}" alt="Molla Logo" width={105} height={25} />
                    </a>
                    <nav className="main-nav">
                      <ul className="menu sf-arrows">
                        <li className="megamenu-container active">
                          <a href="/home" className="sf-with-ul">Home</a>
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
                                <img src="{{ asset('assets/images/products/cart/product-1.jpg') }}" alt="product" />
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
                <div className="container d-flex align-items-center">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Products</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Default</li>
                  </ol>
                  <nav className="product-pager ml-auto" aria-label="Product">
                    <a className="product-pager-link product-pager-prev" href="/" aria-label="Previous" tabIndex={-1}>
                      <i className="icon-angle-left" />
                      <span>Prev</span>
                    </a>
                    <a className="product-pager-link product-pager-next" href="#" aria-label="Next" tabIndex={-1}>
                      <span>Next</span>
                      <i className="icon-angle-right" />
                    </a>
                  </nav>{/* End .pager-nav */}
                </div>{/* End .container */}
              </nav>{/* End .breadcrumb-nav */}
              <div className="page-content">
                <div className="container">
                  <div className="product-details-top">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="product-gallery product-gallery-vertical">
                          <div className="row">
                            <figure className="product-main-image">
                              <img id="product-zoom" src="assets/images/products/single/1.jpg" data-zoom-image="assets/images/products/single/1-big.jpg" alt="product image" />
                              <a href="#" id="btn-product-gallery" className="btn-product-gallery">
                                <i className="icon-arrows" />
                              </a>
                            </figure>{/* End .product-main-image */}
                            <div id="product-zoom-gallery" className="product-image-gallery">
                              <a className="product-gallery-item active" href="#" data-image="assets/images/products/single/1.jpg" data-zoom-image="assets/images/products/single/1-big.jpg">
                                <img src="assets/images/products/single/1-small.jpg" alt="product side" />
                              </a>
                              <a className="product-gallery-item" href="#" data-image="assets/images/products/single/2.jpg" data-zoom-image="assets/images/products/single/2-big.jpg">
                                <img src="assets/images/products/single/2-small.jpg" alt="product cross" />
                              </a>
                              <a className="product-gallery-item" href="#" data-image="assets/images/products/single/3.jpg" data-zoom-image="assets/images/products/single/3-big.jpg">
                                <img src="{{ asset('assets/images/products/single/3-small.jpg') }}" alt="product with model" />
                              </a>
                              <a className="product-gallery-item" href="#" data-image="{{ asset('assets/images/products/single/4.jpg') }}" data-zoom-image="{{ asset('assets/images/products/single/4-big.jpg') }}">
                                <img src="{{ asset('assets/images/products/single/4-small.jpg') }}" alt="product back" />
                              </a>
                            </div>{/* End .product-image-gallery */}
                          </div>{/* End .row */}
                        </div>{/* End .product-gallery */}
                      </div>{/* End .col-md-6 */}
                      <div className="col-md-6">
                        <div className="product-details">
                          <h1 className="product-title">{'{'}{'{'} $product_details-&gt;product_name {'}'}{'}'} </h1>
                          {/* End .product-title */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                            </div>{/* End .ratings */}
                            <a className="ratings-text" href="#product-review-link" id="review-link">( 2 Reviews
                              )</a>
                          </div>{/* End .rating-container */}
                          <div className="product-price">
                            {'{'}{'{'} $product_details-&gt;product_price {'}'}{'}'}
                          </div>{/* End .product-price */}
                          <div className="product-content">
                            {'{'}{'{'} $product_details-&gt;product_details {'}'}{'}'}
                          </div>{/* End .product-content */}
                          <div className="details-filter-row details-row-size">
                            <label htmlFor="qty">Qty:</label>
                            <div className="product-details-quantity">
                              <input type="number" id="qty" className="form-control" defaultValue={1} min={1} max={10} step={1} data-decimals={0} required />
                            </div>{/* End .product-details-quantity */}
                          </div>{/* End .details-filter-row */}
                          <div className="product-details-action">
                            <a href="{{ route('add_to_cart', [$product_details->id, $product_details->product_name, $product_details->product_price]) }}" className="btn-product btn-cart"><span>add
                                to cart</span></a>
                          </div>{/* End .product-details-action */}
                          <div className="product-details-footer">
                            <div className="product-cat">
                              <span>Category:</span>
                              <a href="#">{'{'}{'{'} $product_details-&gt;product_catagory {'}'}{'}'}</a>,
                            </div>{/* End .product-cat */}
                            <div className="social-icons social-icons-sm">
                              <span className="social-label">Share:</span>
                              <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f" /></a>
                              <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter" /></a>
                              <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram" /></a>
                              <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest" /></a>
                            </div>
                          </div>{/* End .product-details-footer */}
                        </div>{/* End .product-details */}
                      </div>{/* End .col-md-6 */}
                    </div>{/* End .row */}
                  </div>{/* End .product-details-top */}
                  <div className="product-details-tab">
                    <ul className="nav nav-pills justify-content-center" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="product-desc-link" data-toggle="tab" href="#product-desc-tab" role="tab" aria-controls="product-desc-tab" aria-selected="true">Description</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="product-info-link" data-toggle="tab" href="#product-info-tab" role="tab" aria-controls="product-info-tab" aria-selected="false">Additional
                          information</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="product-shipping-link" data-toggle="tab" href="#product-shipping-tab" role="tab" aria-controls="product-shipping-tab" aria-selected="false">Shipping &amp; Returns</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="product-review-link" data-toggle="tab" href="#product-review-tab" role="tab" aria-controls="product-review-tab" aria-selected="false">Reviews (2)</a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="product-desc-tab" role="tabpanel" aria-labelledby="product-desc-link">
                        <div className="product-desc-content">
                          <h3>Product Information</h3>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
                            volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra
                            non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis
                            fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque
                            felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
                            ligula vulputate sem tristique cursus. </p>
                          <ul>
                            <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. </li>
                            <li>Vivamus finibus vel mauris ut vehicula.</li>
                            <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
                          </ul>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
                            volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra
                            non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis
                            fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque
                            felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
                            ligula vulputate sem tristique cursus. </p>
                        </div>{/* End .product-desc-content */}
                      </div>{/* .End .tab-pane */}
                      <div className="tab-pane fade" id="product-info-tab" role="tabpanel" aria-labelledby="product-info-link">
                        <div className="product-desc-content">
                          <h3>Information</h3>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
                            volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra
                            non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis
                            fermentum. Aliquam porttitor mauris sit amet orci. </p>
                          <h3>Fabric &amp; care</h3>
                          <ul>
                            <li>Faux suede fabric</li>
                            <li>Gold tone metal hoop handles.</li>
                            <li>RI branding</li>
                            <li>Snake print trim interior </li>
                            <li>Adjustable cross body strap</li>
                            <li> Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
                          </ul>
                          <h3>Size</h3>
                          <p>one size</p>
                        </div>{/* End .product-desc-content */}
                      </div>{/* .End .tab-pane */}
                      <div className="tab-pane fade" id="product-shipping-tab" role="tabpanel" aria-labelledby="product-shipping-link">
                        <div className="product-desc-content">
                          <h3>Delivery &amp; returns</h3>
                          <p>We deliver to over 100 countries around the world. For full details of the
                            delivery options we offer, please view our <a href="#">Delivery
                              information</a><br />
                            We hope you’ll love every purchase, but if you ever need to return an item you
                            can do so within a month of receipt. For full details of how to make a return,
                            please view our <a href="#">Returns information</a></p>
                        </div>{/* End .product-desc-content */}
                      </div>{/* .End .tab-pane */}
                      <div className="tab-pane fade" id="product-review-tab" role="tabpanel" aria-labelledby="product-review-link">
                        <div className="reviews">
                          <h3>Reviews (2)</h3>
                          <div className="review">
                            <div className="row no-gutters">
                              <div className="col-auto">
                                <h4><a href="#">Samanta J.</a></h4>
                                <div className="ratings-container">
                                  <div className="ratings">
                                    <div className="ratings-val" style={{width: '80%'}} />
                                    {/* End .ratings-val */}
                                  </div>{/* End .ratings */}
                                </div>{/* End .rating-container */}
                                <span className="review-date">6 days ago</span>
                              </div>{/* End .col */}
                              <div className="col">
                                <h4>Good, perfect size</h4>
                                <div className="review-content">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                                    cum dolores assumenda asperiores facilis porro reprehenderit
                                    animi culpa atque blanditiis commodi perspiciatis doloremque,
                                    possimus, explicabo, autem fugit beatae quae voluptas!</p>
                                </div>{/* End .review-content */}
                                <div className="review-action">
                                  <a href="#"><i className="icon-thumbs-up" />Helpful (2)</a>
                                  <a href="#"><i className="icon-thumbs-down" />Unhelpful (0)</a>
                                </div>{/* End .review-action */}
                              </div>{/* End .col-auto */}
                            </div>{/* End .row */}
                          </div>{/* End .review */}
                          <div className="review">
                            <div className="row no-gutters">
                              <div className="col-auto">
                                <h4><a href="#">John Doe</a></h4>
                                <div className="ratings-container">
                                  <div className="ratings">
                                    <div className="ratings-val" style={{width: '100%'}} />
                                    {/* End .ratings-val */}
                                  </div>{/* End .ratings */}
                                </div>{/* End .rating-container */}
                                <span className="review-date">5 days ago</span>
                              </div>{/* End .col */}
                              <div className="col">
                                <h4>Very good</h4>
                                <div className="review-content">
                                  <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum
                                    blanditiis laudantium iste amet. Cum non voluptate eos enim, ab
                                    cumque nam, modi, quas iure illum repellendus, blanditiis
                                    perspiciatis beatae!</p>
                                </div>{/* End .review-content */}
                                <div className="review-action">
                                  <a href="#"><i className="icon-thumbs-up" />Helpful (0)</a>
                                  <a href="#"><i className="icon-thumbs-down" />Unhelpful (0)</a>
                                </div>{/* End .review-action */}
                              </div>{/* End .col-auto */}
                            </div>{/* End .row */}
                          </div>{/* End .review */}
                        </div>{/* End .reviews */}
                      </div>{/* .End .tab-pane */}
                    </div>{/* End .tab-content */}
                  </div>{/* End .product-details-tab */}
                  <h2 className="title text-center mb-4">You May Also Like</h2>{/* End .title text-center */}
                  <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                              &quot;nav&quot;: false, 
                              &quot;dots&quot;: true,
                              &quot;margin&quot;: 20,
                              &quot;loop&quot;: false,
                              &quot;responsive&quot;: {
                                  &quot;0&quot;: {
                                      &quot;items&quot;:1
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
                                      &quot;items&quot;:4,
                                      &quot;nav&quot;: true,
                                      &quot;dots&quot;: false
                                  }
                              }
                          }">
                    <div className="product product-7 text-center">
                      <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a href="product.html">
                          <img src="assets/images/products/product-4.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to
                              wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Women</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Brown paperbag waist <br />pencil
                            skirt</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $60.00
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '20%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-thumbs">
                          <a href="#" className="active">
                            <img src="assets/images/products/product-4-thumb.jpg" alt="product desc" />
                          </a>
                          <a href="#">
                            <img src="assets/images/products/product-4-2-thumb.jpg" alt="product desc" />
                          </a>
                          <a href="#">
                            <img src="assets/images/products/product-4-3-thumb.jpg" alt="product desc" />
                          </a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-7 text-center">
                      <figure className="product-media">
                        <span className="product-label label-out">Out of Stock</span>
                        <a href="product.html">
                          <img src="assets/images/products/product-6.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to
                              wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Jackets</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Khaki utility boiler jumpsuit</a></h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="out-price">$120.00</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-7 text-center">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/products/product-11.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to
                              wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Shoes</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Light brown studded Wide fit wedges</a>
                        </h3>{/* End .product-title */}
                        <div className="product-price">
                          $110.00
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 1 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-thumbs">
                          <a href="#" className="active">
                            <img src="assets/images/products/product-11-thumb.jpg" alt="product desc" />
                          </a>
                          <a href="#">
                            <img src="assets/images/products/product-11-2-thumb.jpg" alt="product desc" />
                          </a>
                          <a href="#">
                            <img src="assets/images/products/product-11-3-thumb.jpg" alt="product desc" />
                          </a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-7 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/products/product-10.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to
                              wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Jumpers</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Yellow button front tea top</a></h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          $56.00
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '0%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product product-7 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/products/product-7.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to
                              wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Jeans</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Blue utility pinafore denim dress</a>
                        </h3>{/* End .product-title */}
                        <div className="product-price">
                          $76.00
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '20%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .owl-carousel */}
                </div>{/* End .container */}
              </div>{/* End .page-content */}
            </main>{/* End .main */}
            <footer className="footer">
              <div className="footer-middle">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-lg-3">
                      <div className="widget widget-about">
                        <img src="assets/images/logo.png" className="footer-logo" alt="Footer Logo" width={105} height={25} />
                        <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate
                          magna eros eu erat. </p>
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
                  <p className="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p>
                  {/* End .footer-copyright */}
                  <figure className="footer-payments">
                    <img src="assets/images/payments.png" alt="Payment methods" width={272} height={20} />
                  </figure>{/* End .footer-payments */}
                </div>{/* End .container */}
              </div>{/* End .footer-bottom */}
            </footer>{/* End .footer */}
          </div>{/* End .page-wrapper */}
          <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up" /></button>
          {/* Sticky Bar */}
          <div className="sticky-bar">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <figure className="product-media">
                    <a href="product.html">
                      <img src="assets/images/products/sticky/product-1.jpg" alt="Product image" />
                    </a>
                  </figure>{/* End .product-media */}
                  <h4 className="product-title"><a href="product.html">Dark yellow lace cut out swing dress</a></h4>
                  {/* End .product-title */}
                </div>{/* End .col-6 */}
                <div className="col-6 justify-content-end">
                  <div className="product-price">
                    $84.00
                  </div>{/* End .product-price */}
                  <div className="product-details-quantity">
                    <input type="number" id="sticky-cart-qty" className="form-control" defaultValue={1} min={1} max={10} step={1} data-decimals={0} required />
                  </div>{/* End .product-details-quantity */}
                  <div className="product-details-action">
                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    <a href="#" className="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                  </div>{/* End .product-details-action */}
                </div>{/* End .col-6 */}
              </div>{/* End .row */}
            </div>{/* End .container */}
          </div>{/* End .sticky-bar */}
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
          {/* molla/product.html  22 Nov 2019 09:55:05 GMT */}
        </div>
      );
    }
  export default ProductDetails;