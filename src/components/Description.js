import React, { useState } from "react";
import "./Description.css";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
function Description() {
  const [showMore, setShowMore] = useState(false);
  // dataType[variable,function]=ReactHook(dafaultValue)
  const paragraph = (
    <p style={{ fontSize: "18px" }}>
      There are many pagan sites to visit as well as UNESCO World
      Heritage-listed churches, which are – almost without exception – built in
      stunning locations. Surrounded by forests, perched on the top of dramatic
      gorges or silhouetted before snow-capped mountains, they draw us to
      magnificent open spaces filled with a huge variety of trees and wild
      flowers. On Armenia tours we see wonderful mountains, lakes and waterfalls
      in the countryside – and relish cooling breezes – while the cafés and
      restaurants of the country’s capital, Yerevan, are proof of an emerging
      economy. Mount Ararat towers majestically over the city, and beautiful
      scenery is plentiful.
    </p>
  );

  return (
    <div>
      <p>Home/Europe/Aremenia</p>
      <h1 style={{ fontFamily: "sans-serif" }}>Armenia Tours</h1>
      <p style={{ fontSize: "18px" }}>
        Armenia is a mountainous nation in West Asia, a former Soviet Republic,
        and was one of the first Christian nations, embracing Christianity in
        the fourth century. This rich cultural and natural environment makes it
        an exciting destination for a wide range of adventure, activity and
        walking holidays.
      </p>
      <p className="ext-info"> {showMore ? paragraph : <></>}</p>
      {/* condition ? TrueFucnton : FalseFunction */}
      <button onClick={() => setShowMore(!showMore)} className="showMore-btn">
        {showMore ? "Show Less" : "Show More"}
        {showMore ? <IoIosArrowRoundUp /> : <IoIosArrowRoundDown />}
      </button>
      {/* <p className="ext-info">{showMore ? para : `${para.substring(0, 2000)}`}</p> */}
      {/* ShowMore function triggers the UseState and it ngates the Showmore variable in useState hook, depending upon the value of the variable the text and the paragraph are displayed accordingly */}
    </div>
  );
}

export default Description;
