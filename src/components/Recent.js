import React from "react";
import Rating from "./Rating";

function Recent() {
  return (
    <div className="row">
      <div className="px-5 py-3 col-md-12">
        <p class="text-center">
          <h1 style={{fontFamily: "sans-serif"}}>Recently Viewed Trips</h1>
        </p>
        <div className="card" style={{ width: "350px" }}>
          <img src="images/card.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              A fascinating cultural journey through the heart of the Caucasus
            </p>
            <a href="#" className="btn btn-primary">
              View Details
            </a>
            {/* <a img src="images/rating.jpg" className='card-img-btm' alt="..."></a> */}

            <Rating />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recent;
