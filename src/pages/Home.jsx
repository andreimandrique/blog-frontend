import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="login">Log In</Link>
      <Link to="signup">Sign Up</Link>
      <Link to="dashboard">Dashboard</Link>
    </div>
  );
}

export default Home;
