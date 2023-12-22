import React from "react";

function FooterLinks(props) {
  const linkNames = [
    {
      header: "First Column",
      details: [
        { name: "Suitable Travel", path: "" },
        { name: "FAQs ", path: "" },
        { name: "Customers Key Rights", path: "" },
        { name: "Loyaty Program ", path: "" },
        { name: "Travel Agents", path: "" },
       
      ],
    },
    {
      header: "second Column",
      details: [
        { name: "Insurance(US Residents) ", path: "" },
        { name: "Booking Conditions", path: "" },
        { name: "Privacy Policies & Cookies", path: "" },
        { name: "Customer Character ", path: "" },
        { name: "Terms of Use", path: "" },
        
      ],
    },
    {
        header: "Third Column",
        details: [
          { name: "Refer a Friend ", path: "" },
          { name: "Book now,Pay Later ", path: "" },
          { name: "Exodous Fitness Guides", path: "" },
          { name: "Exodous Travels Foundation", path: "" },
          
        ],
      },
    {
        header: "Fourth Column",
        details: [
          { name: "Adventure Specalists ", path: "" },
          { name: "Post-Pandemic Travel ", path: "" },
          { name: "Do Not Sell My Personal Informaion ", path: "" },
          { name: "Travel-U.S. Department of State ", path: "" },
       
        ],
      },
  ];
  return (
    <div className="bg-dark p-5 m-0">
    <div className="container ">
      <div className="row">
        {linkNames.map((labels, index) => {
          return (
            <div className="col-3 d-flex flex-column" key={index}>
              {labels.details.map((labelName, i) => {
                return (
                  <h6>
                    <a href={labelName.path} style={{ textDecoration: "none" , color:"white"}}>
                      {labelName.name}
                    </a>
                  </h6>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default FooterLinks;
