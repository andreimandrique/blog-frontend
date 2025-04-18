import useLogin from "../hooks/useLogin";

function Login() {
  const { username, setUsername, password, setPassword, error, handleLogin } =
    useLogin();

  return (
    <div>
      <h1>Welcome To Login</h1>
      {error && <p>{error}</p>}
      <form>
        <label>
          Username:
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
