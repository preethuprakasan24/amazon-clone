import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="row px-5 bg-dark footerItem">
        <div className="col-md-2"></div>
        <div className="col-md-2 text-light py-4">
          <h5 className="">Get to Know Us</h5>
          <p className="pt-3">Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Science</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-2 text-light py-4">
          <h5 className="">Make Money with Us</h5>
          <p className="pt-3">Sell products on Amazon</p>
          <p>Sell on Amazon Business</p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-2 text-light py-4">
          <h5 className="">Amazon Payment </h5>
          <p className="pt-3">Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
}

export default Footer;
