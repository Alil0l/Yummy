import React, { useContext } from "react";
import Plates from "../Plates/Plates";
import { AppContext } from "../../AppContext";

export default function Home() {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error("AppContext must be used within an AppProvider");
  }
  const { data, setData } = appContext;

  const { mealsData } = data;

  return (
    <>
      <Plates mealsData={mealsData} />
    </>
  );
}
