import useSignin from "../hooks/useSignin";
import { Link } from "react-router";

function Signup() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    loading,
    message,
    handleSignin,
  } = useSignin();

  return (
    <>
      <div className="flex justify-around py-2 border-b-2 border-slate-200">
        <div>
          <h1>Sign Up</h1>
        </div>
        <div>
          <ul className="flex justify-evenly gap-6">
            <li className="text-blue-600">
              <Link to="/">Home</Link>
            </li>
            <li className="text-blue-600">
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}

      <form className="m-4 max-w-68">
        <div className="flex flex-wrap mb-2 justify-between">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-wrap mb-2 justify-between">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-wrap mb-2 justify-between gap-2">
          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="Confirm Pasword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>

        <button
          className="bg-blue-600 rounded-md text-white px-6 mt-2"
          onClick={handleSignin}
        >
          Sign in
        </button>
      </form>
    </>
  );
}

export default Signup;
