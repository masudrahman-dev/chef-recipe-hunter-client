import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Register from "../../pages/register/Register";
import About from "../../pages/about/About";
import Home from "../../pages/home/Home";
import Contact from "../../pages/contact/Contact";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import Blogs from "../../pages/blog/Blogs";
import Login from "../../pages/login/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "contact",
        element: <Contact />,
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
