import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="login">Log In</Link>
        </li>
        <li>
          <Link to="signup">Sign Up</Link>
        </li>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
