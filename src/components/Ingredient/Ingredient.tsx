import React from "react";
import "./Ingredient.css";

export default function Ingredient({ category }) {
  return (
    <div className="card">
      <div className="img">
        <img src={category.strCategoryThumb} alt={category.strCategory} />
      </div>
      <div className="content">
        <h2>{category.strCategory}</h2>
        {/* <div className="info">
          <h3>{category.strArea}</h3>
          <h3>{category.strTags}</h3>
        </div> */}
      </div>
      <div className="overlay">
        <h1>Learn more...</h1>
      </div>
    </div>
  );
}
