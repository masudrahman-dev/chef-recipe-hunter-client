import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Register from "../../pages/register/Register";
import About from "../../pages/about/About";
import Home from "../../pages/home/Home";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import Blogs from "../../pages/blog/Blogs";
import Login from "../../pages/login/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
import loader from "../../loaders/loader";
import ChefeRecefies from "../../pages/chefeRecips/ChefeRecefies";
import chefeDetailsLoader from "../../loaders/chefeDetailsLoader";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: loader,
      },
      {
        path: "home/:id",
        element: (
          <PrivateRoute>
            <ChefeRecefies></ChefeRecefies>
          </PrivateRoute>
        ),
        loader: chefeDetailsLoader,
      },

      {
        path: "Blogs",
        element: <Blogs />,
      },
      {
        path: "about",
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
