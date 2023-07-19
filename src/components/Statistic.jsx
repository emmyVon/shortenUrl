import React from "react";

const Statistic = ({ icon, title }) => {
  return (
    <div className="stats-art">
      <article>
        <div>
          <img src={icon} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
          voluptate?Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
      </article>
      <div className="line" />
    </div>
  );
};

export default Statistic;
