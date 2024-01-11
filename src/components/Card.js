import React from "react";
import Rating from "./Rating";

function Card() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p class="text-center">
          <h1 style={{ fontFamily: "sans-serif" }}>Armenia Tours</h1>
        </p>
        <div className="card" style={{ width: "350px" }}>
          <img src="card.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              A fascinating cultural journey through the heart of the Caucasus
            </p>
            <a href="#" className="btn btn-primary">
              View Details
            </a>
            {/* <a img src="rating.jpg" className='card-img-btm' alt="..."></a> */}

            <Rating />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
