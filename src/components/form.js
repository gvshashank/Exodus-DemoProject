import React from "react";
import CallButton from "./CallButton";

function Form() {
  return (
    <>
      <CallButton />
    <div className="container py-4 px-4" style={{backgroundColor:"black"}}>
      <h4 style={{color:"white"}}>Make an enquiry</h4>
      <h5 style={{color:"white"}}>Step 1 of 2</h5>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label" style={{color:"white"}}>
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
        <label for="formGroupExampleInput2" className="form-label" style={{color:"white"}}>
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
        <label for="formGroupExampleInput2" className="form-label" style={{color:"white"}}>
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
        <label for="formGroupExampleInput2" className="form-label" style={{color:"white"}}>
          MESSAGE
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="How can we help you?"
        />
      </div>
      </div>

    </>
  );
}

export default Form;
