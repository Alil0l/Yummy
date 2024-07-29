import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";
import { useState } from "react";

export default function Layout() {
  const [visible, setVisible] = useState(true);
  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <div className="layout">
      <Navbar visible={visible} />
      <button className="navToggle" onClick={handleVisible}>
        ×
      </button>
      <Outlet />
    </div>
  );
}
