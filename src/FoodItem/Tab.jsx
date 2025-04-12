import React from "react";

function Tab({ label, onClick }) {
  return (
    <button
      className="tab-button"
      onClick={() => onClick(label)}
    >
      {/* Use an arrow function to prevent immediate execution during render.
          This ensures the function is only called when the button is clicked. */}
      {label}
    </button>
  );
}

export default Tab;