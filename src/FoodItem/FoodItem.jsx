import React, { Component } from "react";
import "./foodItem.css";

class FoodItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.timeoutId = null; // Keep this outside the function so it's shared between calls
  // }

  //! add by myself
  toggleDescription = (e) => {
    const button = e.target;
    const card = button.closest(".single-food");
    const description = card.querySelector(".food-desc");

    const isExpanded = description.classList.contains("expanded");

    if (isExpanded) {
      // Manual collapse
      description.classList.remove("expanded");
      button.textContent = "Show More";

      // Clear the previous timeout if any
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    } else {
      // Expand and auto-collapse after 3 sec
      description.classList.add("expanded");
      button.textContent = "Show Less";

      // Set timeout and store its ID
      this.timeoutId = setTimeout(() => {
        description.classList.remove("expanded");
        button.textContent = "Show More";
        this.timeoutId = null; // Reset after use
      }, 3000);
    }
  };

  //! add by myself
  checkTruncation = (e) => {
    const el = e.currentTarget;
    const card = el.closest(".single-food");
    const toggleBtn = card.querySelector(".show-more");

    //! Note
    /*Check if the content overflows (i.e., is truncated with ellipsis)
      scrollHeight = total height of the content (including hidden part)
      clientHeight = visible height of the element
    */
    const isTruncated = el.scrollHeight > el.clientHeight;
    toggleBtn.textContent = isTruncated ? "Show More" : "Show Less";
  };

  //  The below is assignement part
  render() {
    const { img, title, price, desc, category } = this.props;

    return (
      <div className={`food-item ${category.toLowerCase()}`}>
        <div className="single-food">
          <div className="img">
            {img ? <img src={img} alt={title} /> : { title }}
          </div>

          <div className="title-price">
            {title && <h3>{title}</h3>}
            {price && <p>${price}</p>}
          </div>

          <div className="food-desc" onMouseEnter={this.checkTruncation}>
            {desc}
          </div>

          {/* Show More/Less Button */}
          <span className="show-more" onClick={this.toggleDescription}></span>
        </div>
      </div>
    );
  }
}

export default FoodItem;
