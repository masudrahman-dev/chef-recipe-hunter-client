import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Registration from "../../pages/registration/Registration";
import Login from "../../pages/login/Login";
import About from "../../pages/about/About";
import Home from "../../pages/home/Home";
import Contact from "../../pages/contact/Contact";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import Blogs from "../../pages/blog/Blogs";

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
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "registration",
    element: <Registration />,
  },
]);
export default router;
