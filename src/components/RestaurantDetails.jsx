import React from "react";
import "./RestaurantDetails.css";
import Menu from "./RestaurantData";
import MenuCard from "./Menu";
import { useState } from "react";
// import Navbar from "./Navbar";

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category;
    });
    setMenuData(updatedList);
  };

  const filterSort = (rating) => {
    const updatedList = Menu.filter((currElem) => {
      return currElem.rating > rating;
    });
    updatedList.sort((a, b) => b.price - a.price);
    setMenuData(updatedList);
  };

  const starItem = (rating) => {
    const starList = Menu.filter((currElem) => {
      return currElem.rating === rating;
    });
    setMenuData(starList);
  };

  const lowToHigh = () => {
    var bob = [...Menu];
    bob.sort((a, b) => a.price - b.price);
    setMenuData(bob);
  };

  const highToLow = () => {
    var mob = [...Menu];
    mob.sort((a, b) => b.price - a.price);
    setMenuData(mob);
  };

  const allInOne = () => {
    setMenuData(Menu);
  };

  return (
    <>
      <div className="back">
        <div className="btn">
          <button onClick={() => starItem(1)}>1 Star</button>
          <button onClick={() => starItem(2)}>2 Star</button>
          <button onClick={() => starItem(3)}>3 Star</button>
          <button onClick={() => starItem(4)}>4 Star</button>
          <button>Cash</button>
          <button>Card</button>
          <button
            onClick={() => {
              allInOne();
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              highToLow();
            }}
          >
            High to Low
          </button>
          <button
            onClick={() => {
              lowToHigh();
            }}
          >
            Low to High
          </button>
          <button onClick={() => filterSort(4)}>Filter and Sort</button>
          <button onClick={() => filterItem("breakfast")}>Breakfast</button>
          <button onClick={() => filterItem("lunch")}>Lunch</button>
          <button onClick={() => filterItem("dinner")}>Dinner</button>
        </div>

        <MenuCard menuData={menuData} />
      </div>
    </>
  );
};

export default Restaurant;
