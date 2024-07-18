import Button from "@mui/material/Button";
import React from "react";

function Cart() {
  return (
    <>
      <div className="row my-5 py-5">
        <div className="col-md-8 ms-3 shadow">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <h4><b>Your Amazon Cart is empty</b></h4>
              <span className="text-info">Shop today’s deals</span>
              <div className="d-flex mt-3">
              <button type="button" className="btn shadow" style={{backgroundColor:"yellow"}}>Sign in to your account</button>
              <button type="button" class="btn btn-outline-secondary shadow ms-3">Sign up now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
}

export default Cart;
