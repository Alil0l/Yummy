import React, { useContext } from "react";
import Plate from "../Plate/Plate";
import "./Plates.css";
import { AppContext } from "../../AppContext";
import Spinner from "../Helpers/Spinner/Spinner";

export default function Plates() {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error("AppContext must be used within an AppProvider");
  }
  const { data } = appContext;
  if (!data) {
    return <Spinner />;
  }
  const {
    mealsData: { meals },
  } = data;

  return (
    <div className="plates">
      {meals.map((meal: Meal) => {
        return <Plate key={meal.idMeal} meal={meal} />;
      })}
    </div>
  );
}

interface Meal {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strTags: string;
}
