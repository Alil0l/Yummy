import { useLocation } from "react-router-dom";
import Spinner from "../Helpers/Spinner/Spinner";
import "./PlateDetails.css";

export default function PlateDetails() {
  const location = useLocation();
  const mealDetails = location.state?.meal as Meal;

  if (!mealDetails) {
    return <Spinner />;
  }

  return (
    <div className="details container">
      <div className="imgD">
        <div className="img">
          <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
        </div>
        <h1>{mealDetails.strMeal}</h1>
      </div>
      <div className="content">
        <h3>Instructions</h3>
        <p>{mealDetails.strInstructions}</p>
        <h2>
          Area: <span>{mealDetails.strArea}</span>
        </h2>
        <h2>
          Category: <span>{mealDetails.strCategory}</span>
        </h2>

        <div className="recipes">
          <h2>Recipes: </h2>
          <div className="ing">
            <span>{mealDetails.strMeasure1}</span>
          </div>
        </div>
        <div className="tags">
          <h2>Tags: </h2>
        </div>
        <div className="more">
          <a
            className="bg-green-700"
            href={mealDetails.strSource}
            target="_blank"
          >
            View Source
          </a>
          <a
            className="bg-red-700"
            href={mealDetails.strYoutube}
            target="_blank"
          >
            Youtube
          </a>
        </div>
      </div>
    </div>
  );
}

interface Meal {
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strTags: string;
  strCategory: string;
  strInstructions: string;
  strYoutube: string;
  strSource: string;
  strMeasure1: string;
}
