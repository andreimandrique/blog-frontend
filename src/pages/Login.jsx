import useLogin from "../hooks/useLogin";
import { Link } from "react-router";

function Login() {
  const { username, setUsername, password, setPassword, error, handleLogin } =
    useLogin();

  return (
    <>
      <div className="flex justify-around py-2 border-b-2 border-slate-200">
        <div>
          <h1>Blog Website</h1>
        </div>
        <div>
          <ul className="flex justify-evenly gap-6">
            <li className="text-blue-600">
              <Link to="/">Home</Link>
            </li>
            <li className="text-blue-600">
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>

      {error && <p className="text-rose-600">{error}</p>}

      <form className="m-4 max-w-68">
        <div className="flex flex-wrap mb-2 justify-between">
          <label htmlFor="username">Username:</label>
          <input
            autoComplete="off"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-wrap mb-2 justify-between">
          <label htmlFor="password">Password:</label>
          <input
            autoComplete="off"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <button
            className="bg-blue-600 rounded-md text-white px-6 mt-2"
            onClick={handleLogin}
          >
            Log in
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
