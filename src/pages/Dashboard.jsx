import { Outlet, useNavigate} from "react-router";
import { useEffect } from "react";
import useVerifyToken from "../hooks/useVerifyToken.jsx";

function Dashboard() {
  const navigate = useNavigate();
  const { error, loading } = useVerifyToken();

  useEffect(() => {
    if(error){
      navigate("/");
    }
  }, [navigate, error ]);

  if(loading){
    return <p>Loading ...</p>
  }

  return (
    <>
      <Outlet />
    </>
  );
}
export default Dashboard;
