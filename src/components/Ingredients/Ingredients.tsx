import React, { useContext } from "react";
import "./Ingredients.css";
import Plate from "../Plate/Plate";
import { AppContext } from "../../AppContext";
import Ingredient from "../Ingredient/Ingredient";

export default function Ingredients({ meal }) {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error("AppContext must be used within an AppProvider");
  }
  const { data, setData } = appContext;
  const { categoriesData } = data;
  const { categories } = categoriesData;

  return (
    <div className="plates">
      {categories.map((category) => {
        return <Ingredient key={category.idCategory} category={category} />;
      })}
    </div>
  );
}
