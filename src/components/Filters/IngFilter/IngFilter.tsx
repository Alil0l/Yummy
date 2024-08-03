import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "../../Helpers/Spinner/Spinner";

export default function IngFilter() {
  const location = useLocation();
  const categoryDetails = location.state?.category as Category;
  const [ingFilter, setIngFilter] = useState<IngFilter | null>(null);

  useEffect(() => {
    async function fetchFiltered() {
      try {
        const responseF = (
          await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${categoryDetails.strCategory}`
          )
        ).data;
        console.log(responseF);
        setIngFilter(responseF);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchFiltered();
  }, []);

  if (!categoryDetails) return <Spinner />;

  if (!ingFilter) return <Spinner />;

  if (!ingFilter.meals)
    return (
      <div>
        <h1>
          Sorry, there is no plates matching this ingredint in our Data. 😥
        </h1>
      </div>
    );

  return (
    <div className="plates">
      {ingFilter.meals.map((Meal) => {
        return (
          <div className="card h-auto">
            <div className="img">
              <img src={Meal.strMealThumb} alt={Meal.strMeal} />
            </div>
            <div className="content flex flex-col justify-center flex-1">
              <h2>{Meal.strMeal}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

interface Category {
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

interface IngFilter {
  meals: Meals[];
}

interface Meals {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}
