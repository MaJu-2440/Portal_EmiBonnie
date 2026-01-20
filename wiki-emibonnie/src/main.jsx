import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Wiki from "./routes/Wiki.jsx";
import Home from "./routes/Home.jsx";
import Galeria from "./routes/Galeria.jsx";
import Perfil from "./routes/Perfil.jsx";
import Trabalhos from "./routes/Trabalhos.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "galeria/:filtro",
        element: <Galeria />,
      },
      {
        path: "wiki/:slug",
        element: <Wiki />,
      },
      {
        path: "perfil/:nome",
        element: <Perfil />,
      },
      {
        path: "trabalhos/:tipo",
        element: <Trabalhos />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
