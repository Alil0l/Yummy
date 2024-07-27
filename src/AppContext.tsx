import axios from "axios";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import Spinner from "./components/Helpers/Spinner/Spinner";

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<MealsData>(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const response2 = await axios.get<CategoriesData>(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const response3 = await axios.get<CountriesData>(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
        );
        setData({
          mealsData: response.data,
          categoriesData: response2.data,
          countriesData: response3.data,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

// TypeScript interfaces and types 😵
interface AppProviderProps {
  children: ReactNode;
}

interface AppContextProps {
  data: Data | null;
  setData: React.Dispatch<React.SetStateAction<Data | null>>;
}

interface MealsData {
  meals: [];
}

interface CategoriesData {
  categories: [];
}

interface Data {
  mealsData: MealsData;
  categoriesData: CategoriesData;
  countriesData: CountriesData;
}
interface CountriesData {
  meals: [];
}
