import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Countries from "./components/Countries/Countries";
import Error404 from "./components/Helpers/Error404/Error404";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Plates from "./components/Plates/Plates";
import Ingredients from "./components/Ingredients/Ingredients";
import { AppProvider } from "./AppContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Yummy", element: <Home /> },
      { path: "/countries", element: <Countries /> },
      { path: "/Ingredients", element: <Ingredients /> },
      { path: "/plates", element: <Plates /> },
      { path: "*", element: <Error404 /> },
    ],
  },
]);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
