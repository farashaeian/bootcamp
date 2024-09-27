import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "../../pages/Home";
import Movie from "../../pages/Movie";
import Search from "../../pages/Search";
import NotFound from "../NotFound";
import HomePage from "../../pages/HomePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movies/:movieId",
    element: <Movie />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};
export default Router;
