import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "../NotFound";
import Home from "../../pages/Home";
import Movie from "../../pages/Movie";
import Search from "../../pages/Search";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Home/>,
    },
    {
        path:'/movie/:movieId',
        element: <Movie/>,
    },
    {
        path:'/search',
        element: <Search/>,
    },
    {
        path:'*',
        element: <NotFound/>,
    }
]);

const Router =()=>{
    return <RouterProvider router={routes} />;
};
export default Router;
