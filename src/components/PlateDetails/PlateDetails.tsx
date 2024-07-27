import { useLocation, useParams } from "react-router-dom";
import Spinner from "../Helpers/Spinner/Spinner";

export default function PlateDetails() {
  const { meal } = useParams<{ meal: string }>();
  const location = useLocation();
  const mealDetails = location.state?.meal as Meal;

  if (!mealDetails) {
    return <Spinner />;
  }
  console.log(meal, mealDetails);
  return (
    <div>
      <div className="imgD">
        <div className="img">
          <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
        </div>
        <h1>{mealDetails.strMeal}</h1>
      </div>
      <div className="content">
        <h3></h3>
        <p></p>
        <h2>
          <span></span>
        </h2>
        <h2>
          <span></span>
        </h2>
        <h2>
          <span></span>
        </h2>
        <div className="recipes">
          <h2></h2>
          <div className="ing"></div>
        </div>
        <div className="tags">
          <h2></h2>
        </div>
        <div className="more"></div>
      </div>
    </div>
  );
}

interface Meal {
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strTags: string;
}
