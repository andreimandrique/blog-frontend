import {useState, useEffect} from "react";

function useVerifyToken(){
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const token  = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3000/verify", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(res => {
      if (!res.ok) {
        throw new Error("Authentication failed");
      }
      return res.json();
    }).then(result => { setData(result); })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  });
  return {data, error, loading};
}

export default useVerifyToken;