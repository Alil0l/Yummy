import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Countries from "./components/Countries/Countries";
import Error404 from "./components/Helpers/Error404/Error404";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Plates from "./components/Plates/Plates";
import Ingredients from "./components/Ingredients/Ingredients";
import { AppProvider } from "./AppContext";
import PlateDetails from "./components/Filters/PlateDetails/PlateDetails";
import IngFilter from "./components/Filters/IngFilter/IngFilter";

const router = createBrowserRouter([
  {
    path: "Yummy",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "countries", element: <Countries /> },
      { path: "ingredients", element: <Ingredients /> },
      { path: "Ingredients/:category", element: <IngFilter /> },
      { path: "plates", element: <Plates /> },
      { path: "plates/:meal", element: <PlateDetails /> },
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
