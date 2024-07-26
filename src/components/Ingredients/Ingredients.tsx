import { useContext } from "react";
import "./Ingredients.css";
import { AppContext } from "../../AppContext";
import Ingredient from "../Ingredient/Ingredient";
import Spinner from "../Helpers/Spinner/Spinner";

export default function Ingredients() {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error("AppContext must be used within an AppProvider");
  }
  const { data } = appContext;
  if (!data) return <Spinner />;
  const {
    categoriesData: { categories },
  } = data;

  return (
    <div className="plates">
      {categories.map((category: Category) => {
        return <Ingredient key={category.idCategory} category={category} />;
      })}
    </div>
  );
}

interface Category {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
}
