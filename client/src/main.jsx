import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login, { action as loginAction } from "./components/Auth/Login.jsx";
import Register, {
  action as registerAction,
} from "./components/Auth/Register.jsx";

import MovieCatalog from "./components/Movie/MovieCatalog.jsx";
import MoviePage from "./components/Movie/MoviePage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MovieCatalog /> },
      { path: "/login", element: <Login />, action: loginAction },
      { path: "/register", element: <Register />, action: registerAction },

      { path: "/movies/:movieId", element: <MoviePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
