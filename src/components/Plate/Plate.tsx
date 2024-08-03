import "./Plate.css";
import { useNavigate } from "react-router-dom";

export default function Plate({ meal }: Ingredient) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`plates/${meal.strMeal}`, {
      state: { meal },
    });
  }

  return (
    <div className="card " onClick={handleClick}>
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

interface Meal {
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strTags: string;
}
interface Ingredient {
  meal: Meal;
}
