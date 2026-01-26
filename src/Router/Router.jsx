import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Blog from "../Pages/Blog/Blog";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Support from "../Pages/Support/Support";
import MyProfile from "../Pages/MyProfile/MyProfile";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import TrendingAppsDetails from "../Components/TrendingAppsDetails/TrendingAppsDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {index: true, Component: Home},
        {path: '/apps', Component: Apps},
        {path: '/blog', Component: Blog},
        {path: '/aboutus', Component: AboutUs},
        {path: '/support', Component: Support},
        {path: '/myprofile', Component: MyProfile},
    ]
  },
  {
    path: '/login' , Component: Login
  },
  {
    path: '/register', Component: Register
  },
  {
    path:'/app/:id', Component: TrendingAppsDetails
  }
]);