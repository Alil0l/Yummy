import React from "react";
import "./Plate.css";

const meal = {
  idMeal: "52771",
  strMeal: "Spicy Arrabiata Penne",
  strCategory: "Vegetarian",
  strArea: "Italian",
  strInstructions:
    "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
  strMealThumb:
    "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
  strTags: "Pasta,Curry",
  strYoutube: "https://www.youtube.com/watch?v=1IszT_guI08",
};

export default function Plate() {
  return (
    <div className="card">
      <div className="img">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <div className="content">
        <h2>{meal.strMeal}</h2>
        <div className="info">
          <h3>{meal.strArea}</h3>
          <h3>{meal.strTags}</h3>
        </div>
      </div>
      <div className="overlay">
        <h1>Learn more...</h1>
      </div>
    </div>
  );
}
