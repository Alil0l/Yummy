import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "../../Helpers/Spinner/Spinner";

export default function IngFilter() {
  const location = useLocation();
  const categoryDetails = location.state?.category as Category;
  const [ingFilter, setIngFilter] = useState(null);

  useEffect(() => {
    async function fetchFiltered() {
      try {
        const responseF = (
          await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=`
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

  if (!categoryDetails) {
    return <Spinner />;
  }

  return <div>{ingFilter?.meals[0].idMeal}</div>;
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
