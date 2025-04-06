import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> , errorElement: <ErrorPage /> },
  { path: "/login", element: <LoginPage /> },
  {path: "/signup", element: <SignupPage /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <BlogPage /> },
    ],
  },
]);

export default router;
