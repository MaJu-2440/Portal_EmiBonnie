import React from "react";

const ScrollBtn = () => {
  return (
    <div
      className="scrollTop-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <i className="fa-solid fa-angle-up" />
    </div>
  );
};

export default ScrollBtn;
