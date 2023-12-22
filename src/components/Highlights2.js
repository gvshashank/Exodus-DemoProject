import React from "react";
import Rating from "./Rating";

function Highlights2() {
  return (
    <div>
      <Rating />
      
      <h6 className="reviews">Theresa Theobald</h6>
      <h6 className="texts" style={{ color: "lightskyblue" }}>
        <a href="#" style={{ textDecoration: "none" }}>
          Highlights of Georgia & Armenia
        </a>
      </h6>
      <Rating />

      <p>Lovely trip with lots to see, but there’s lots more that we didn’t</p>
      <h6 className="reviews">Cynthia SouthGate</h6>
      <h6 className="texts" style={{ color: "lightskyblue" }}>
        <a href="#" style={{ textDecoration: "none" }}>
          Highlights of Georgia & Armenia
        </a>
      </h6>
     
      <button type="button" class="btn btn-primary">
        READ ALL REVIEWS
      </button>
    </div>
  );
}

export default Highlights2;
