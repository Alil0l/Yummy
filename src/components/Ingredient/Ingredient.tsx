import { useNavigate } from "react-router-dom";
import "./Ingredient.css";

export default function Ingredient({ category }: Ingredient) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/Ingredients/${category.strCategory}`, {
      state: { category },
    });
  }

  return (
    <div className="card" onClick={handleClick}>
      <div className="img">
        <img src={category.strCategoryThumb} alt={category.strCategory} />
      </div>
      <div className="content">
        <h2>{category.strCategory}</h2>
      </div>
      <div className="overlay">
        <h1>Learn more...</h1>
      </div>
    </div>
  );
}

interface Category {
  strCategory: string;
  strCategoryThumb: string;
}

interface Ingredient {
  category: Category;
}
