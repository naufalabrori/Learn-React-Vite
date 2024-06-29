import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Blog from "../pages/Blog";
import DetailBlog from "../pages/Blog/_id";

import ErrorPage from "../components/ErrorPage";
import { getAllPost, getPostById } from "../apis/loaders"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blog />,
        loader: getAllPost
      },
      {
        path: "/blogs/:id",
        element: <DetailBlog />,
        loader: getPostById
      }
    ],
  },
]);
