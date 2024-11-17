import React from "react";


const Category = () => {
  const data = [
    { title: "Festivaly", image: { } },
    { title: "Závody", image: "path/to/race-image.jpg" },
    { title: "Výstavy", image: "path/to/exhibition-image.jpg" },
    { title: "Trhy", image: "path/to/market-image.jpg" },
    { title: "Koncerty", image: "path/to/concert-image.jpg" },
    { title: "Pro děti", image: "path/to/children-event-image.jpg" },
  ];

  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-img-overlay d-flex align-items-end">
                <h5 className="card-title bg-dark text-white p-2">
                  {item.title}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
