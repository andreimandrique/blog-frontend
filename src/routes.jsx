import { createBrowserRouter } from "react-router";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MyBlog from "./pages/MyBlog.jsx";
import AddBlog from "./pages/AddBlog.jsx";
import Blog from "./pages/Blog.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home />, },
  { path: "login", element: <Login /> },
  { path: "signup", element: <Signup /> },
  { path: "dashboard",element: <Dashboard />,
    children: [
      { index: true, element: <MyBlog /> },
      { path: "add-blog", element: <AddBlog /> },
      { path: "blog/:blogId", element: <Blog/> }
    ],
  },{path: "*", element: <Error/>}
]);

export default router;
