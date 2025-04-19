import React, { Component } from "react";
import "./FoodItem/foodItem.css";
import FoodItem from "./FoodItem/FoodItem.jsx";
import menu from "./assets/FoodMenu.js";
import filterCategory from "./FoodItem/filterCategory.js";
import Tab from "./FoodItem/Tab.jsx";

class App extends Component {
  render() {
    return (
      <div className="all-container">
        <header className="title">
          <h1>Evangadi Menu</h1>
        </header>

        {/* Tabs-Add by myself */}
        <div className="tabs">
          {["All", "Breakfast", "Lunch", "Dinner"].map((category) => (
            <Tab onClick={filterCategory} label={category} />
          ))}
        </div>

        {/* Food Items-This is only for assignement purpose */}
        <div id="food-container" className="foods-container">
          {menu.map(({ img, title, price, desc, category }) => (
            <FoodItem
              img={img}
              title={title}
              price={price}
              desc={desc}
              category={category}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;