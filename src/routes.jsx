import { createBrowserRouter } from "react-router";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MyBlog from "./pages/MyBlog.jsx";
import AddBlog from "./pages/AddBlog.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> , errorElement: <Error /> },
  { path: "login", element: <Login /> },
  { path: "signup", element: <Signup /> },
  {path: "add-blog", element: <AddBlog /> },
  {
    path: "dashboard",
    element: <Dashboard/>,
    children: [
      {index: true, element: <MyBlog />}
    ]
  }
]);

export default router;
