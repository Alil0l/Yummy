import React, { useContext } from "react";
import Plate from "../Plate/Plate";
import "./Plates.css";
import { AppContext } from "../../AppContext";

export default function Plates() {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error("AppContext must be used within an AppProvider");
  }
  const { data, setData } = appContext;
  const { mealsData } = data;
  const { meals } = mealsData;

  return (
    <div className="plates">
      {meals.map((meal) => {
        return <Plate key={meal.idMeal} meal={meal} />;
      })}
    </div>
  );
}
