import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Signin() {
  return (
    <>
      <div className="row mb-5">
        <div className="col-md-4"></div>
        <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/766/240/original/amazon-logo-amazon-icon-transparent-free-png.png"
            alt=""
            width={"250px"}
          />
          <div className="border rounded p-5">
            <h4 className="text-center pb-3">Sign in</h4>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <b>Email or mobile phone numbers</b>
                </Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Button variant="warning" className="w-100">
                Continue
              </Button>
            </Form>
            <p className="pt-2" style={{ fontSize: "12px" }}>
              By continuing, you agree to Amazon's{" "}
              <span className="text-primary">
                Conditions of <br /> Use
              </span>{" "}
              and <span className="text-primary">Privacy Notice</span>.
            </p>
            <span className="text-primary" style={{ fontSize: "12px" }}>Need Help?</span>
            <hr />
            <p><b>Buying for work</b></p>
            <span className="text-primary" style={{ fontSize: "12px" }}>Shop on Amazon Business</span>
          </div>
          <p className="mt-3 text-secondary" style={{ fontSize: "12px" }}>New to Amazon?</p>
          <div className="border">
          <button className="text-dark btn " style={{ fontSize: "12px" }}>Create your Amazon account</button>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
}

export default Signin;
