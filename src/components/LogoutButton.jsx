import {useNavigate} from "react-router";

function LogoutButton() {

  const navigate = useNavigate();

  const handleLogout =  () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  return <button onClick={handleLogout}>Log Out</button>
}

export default LogoutButton;