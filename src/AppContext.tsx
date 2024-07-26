import axios from "axios";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import Spinner from "./components/Helpers/Spinner/Spinner";

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [data, setData] = useState<{
    data1: object;
    data2: object;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Data[]>(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const response2 = await axios.get<Data[]>(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setData({ mealsData: response.data, categoriesData: response2.data });
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

interface AppProviderProps {
  children: ReactNode;
}
interface AppContextProps {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

interface Data {
  id: number;
  name: string;
  description: string;
  image: string;
  area: string;
  category: string;
  tags: string;
  youtube: string;
}
