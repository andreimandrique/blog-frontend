import { Outlet, useNavigate} from "react-router";
import {useEffect, useState} from "react";
import useVerifyToken from "../hooks/useVerifyToken.jsx";
import {jwtDecode} from "jwt-decode";

function Dashboard() {
  const navigate = useNavigate();
  const { error, loading } = useVerifyToken();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if(error){
      navigate("/");
    }

    const jwtToken = localStorage.getItem("token");
    if(jwtToken){
      const decoded = jwtDecode(jwtToken)
      setUser(decoded);
    }

  }, [navigate, error]);

  if(loading){
    return <p>Loading ...</p>
  }

  return (
    <>
      <Outlet context={user}/>
    </>
  );
}
export default Dashboard;
