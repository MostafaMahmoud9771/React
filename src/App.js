import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import MasterLayOut from "./Components/MasterLayOut/MasterLayOut";
import Notfound from "./Components/Notfound/Notfound";

const router = createBrowserRouter([
  {
    path: "",
    element: <MasterLayOut />,
    children: [
      { path: "", element: <Home /> },
      { path: "React", element: <Home /> },
      { path: "http://MostafaMahmoud9771.github.io/React", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
