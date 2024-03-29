import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import "./styles/type.css";
import App from "./App";
import CardInfo from "./CardInfo";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cardInfo/:pokemon_id",
    element: <CardInfo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
