import React from "react";
import CallButton from "./CallButton";
import "./form.css";
function Form() {
  return (
    <>
      <CallButton />
      <div className="container py-4 px-4" style={{ backgroundColor: "black" }}>
        <h4 style={{ color: "white" }}>Make an enquiry</h4>
        <h5 style={{ color: "white" }}>Step 1 of 2</h5>
        <div className="mb-3">
          <label
            for="formGroupExampleInput2"
            className="form-label"
            style={{ color: "white" }}
          >
            DESTINATION
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Armenia"
          />
        </div>
        <div className="mb-3">
          <label
            for="formGroupExampleInput2"
            className="form-label"
            style={{ color: "white" }}
          >
            DEPARTURE DATE
          </label>
          <input
            type="date"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="dd/mm/yy"
          />
        </div>
        <div className="mb-3">
          <label
            for="formGroupExampleInput2"
            className="form-label"
            style={{ color: "white" }}
          >
            NUMBER OF PASSENGERS
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter a Number"
          />
        </div>
        <div className="mb-3">
          <label
            for="formGroupExampleInput2"
            className="form-label"
            style={{ color: "white" }}
          >
            MESSAGE
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="How can we help you?"
          />
        </div>
        <button
          className="btn btn-primary"
          href="#"
          style={{ minWidth: "250px" }}
        >
          NEXT
        </button>
      </div>
      <div classname="container">
        <div className="row py-3 my-3">
          <div className="col">
            <h4 className="head-text">Live Chat</h4>
          </div>
        </div>
        <div className="row py-3 my-3">
          <div className="col">
            <h4 className="head-text">Request a broucher</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex flex-column">
          <h6 classname="review-text">Our travallers rate our Armenia tour</h6>
          <h3 classname="review-text">
            3.5/5 <span style={{ fontSize: "16px" }}>based on 32 reviews</span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Form;
