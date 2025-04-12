import React from "react";
import "./foodItem.css";

function FoodItem({ img, title, price, desc, category }) {
  let timeoutId = null; // Keep this outside the function so it's shared between calls
   //! add by myself
  const toggleDescription = (e) => {
    const button = e.target;
    const card = button.closest(".single-food");
    const description = card.querySelector(".food-desc");

    const isExpanded = description.classList.contains("expanded");

    if (isExpanded) {
      // 👇 Manual collapse
      description.classList.remove("expanded");
      button.textContent = "Show More";

      // 🔁 Clear the previous timeout if any
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    } else {
      // 👇 Expand and auto-collapse after 3 sec
      description.classList.add("expanded");
      button.textContent = "Show Less";

      // 🔁 Set timeout and store its ID
      timeoutId = setTimeout(() => {
        description.classList.remove("expanded");
        button.textContent = "Show More";
        timeoutId = null; // Reset after use
      }, 3000);
    }
  };
   //! add by myself
  const checkTruncation = (el) => {
    if (!el) return;

    const card = el.closest(".single-food");
    const toggleBtn = card.querySelector(".show-more");

    //! Note
    /*Check if the content overflows (i.e., is truncated with ellipsis)
      scrollHeight = total height of the content (including hidden part)
      clientHeight = visible height of the element
    */
    const isTruncated = el.scrollHeight > el.clientHeight;
    toggleBtn.textContent = isTruncated ? "Show More" : "";
  };
  //  The below is assignement part
  return (
    <div className={`food-item ${category.toLowerCase()}`}>
      <div className="single-food">
        <div className="img">
          <img src={img} alt={title} />
        </div>

        <div className="title-price">
          <h3>{title}</h3>
          <p>${price}</p>
        </div>

        {/* Discussion Point with instructors (ref vs ID or className)
           ref gives direct access to a real DOM element inside a React component,  
            even before it’s mounted in the real DOM.
	          •	id or class work after rendering, and only through global selectors like document.querySelector, which is less React-friendly. */}

        <div className="food-desc" ref={checkTruncation}>
          {desc}
        </div>
        {/* Show More/Less Button */}
        <span className="show-more" onClick={toggleDescription}></span>
      </div>
    </div>
  );
}

export default FoodItem;
