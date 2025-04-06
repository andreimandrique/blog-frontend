import LogoutButton from "../components/LogoutButton.jsx";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import useVerifyToken from "../hooks/useVerifyToken.jsx";

function Dashboard() {
  const navigate = useNavigate();
  const { error, loading } = useVerifyToken();

  useEffect(() => {
    if(error){
      navigate("/");
    }
  }, [error, navigate]);

  if(loading){
    return <p>Loading ...</p>
  }

  return (
    <div>
      <h1>Welcome </h1>
      <LogoutButton />
      <Outlet />
    </div>
  );
}
export default Dashboard;
