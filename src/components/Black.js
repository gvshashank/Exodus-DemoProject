import React from "react";

function Black() {
  return (
    <div className="container text-center p-5">
      <div
        className="row border px-5 py-5 "
        style={{ backgroundColor: " black" }}
      >
        <div className="col-md-4 ">
          <h4 className="helper-txt" > <a href="#"  style={{ textDecoration: "none" ,color:"white"}}>
           CALL US ANYTIME </a></h4>
          <h5 className="phn-number">
            <a href="#" style={{ textDecoration: "none", color:"white"}}>
              1-5689-5986
            </a>
          </h5>
        </div>

        <div className="col-md-4 ">
          <h4 className="helper-txt" > <a href="#"  style={{ textDecoration: "none" ,color:"white"}}>
           SEND US A MESSAGE </a></h4>
          <h5 className="phn-number">
            <a href="#" style={{ textDecoration: "none", color:"white"}}>
              CONTACT NOW
            </a>
          </h5>
        </div>
        <div className="col-md-4 ">
          <h4 className="helper-txt" > <a href="#"  style={{ textDecoration: "none" ,color:"white"}}>
           CHAT WITH US NOW </a></h4>
          <h5 className="phn-number">
            <a href="#" style={{ textDecoration: "none", color:"white"}}>
              GET STARTED
            </a>
          </h5>
        </div>
        
      </div>
    </div>
  );
}

export default Black;
