import React from "react";
// import "../App.css";

const Menu = ({ menuData }) => {
  return (
    <>
      <div className="container">
        {menuData.map((curr) => {
          return (
            <>
              <div className="inside" key={curr.id}>
                <p className="items">
                  <span>Name: </span>
                  {curr.name}
                </p>
                <p className="items">
                  <span>Category: </span>
                  {curr.category}
                </p>
                <p className="items">
                  <span>Price : ₹</span>
                  {curr.price}
                </p>
                <p className="items">
                  <span>Rating: </span>
                  {curr.rating}
                </p>
                <br />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
