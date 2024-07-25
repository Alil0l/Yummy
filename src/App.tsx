import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Countries from "./components/Countries/Countries";
import Error404 from "./components/Helpers/Error404/Error404";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Plates from "./components/Plates/Plates";
import Ingredients from "./components/Ingredients/Ingredients";
import axios from "axios";
import { useState, useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/countries", element: <Countries /> },
      { path: "/Ingredients", element: <Ingredients /> },
      { path: "/plates", element: <Plates /> },
      { path: "*", element: <Error404 /> },
    ],
  },
]);

function App() {
  // const [data, setData] = useState<Data[]>([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get<Data[]>(
  //       "https://www.themealdb.com/api/json/v1/1/search.php?s="
  //     );
  //     // const response = await fetch(
  //     // "https://www.themealdb.com/api/json/v1/1/search.php?s="
  //     // );
  //     // const data = await response.json();
  //     setData(response.data);
  //   };

  //   fetchData();
  // }, []);

  return <RouterProvider router={router} />;
}

export default App;

// interface Data {
// id: number;
// name: string;
// description: string;
// image: string;
// area: string;
// category: string;
// tags: string;
// youtube: string;
// }
