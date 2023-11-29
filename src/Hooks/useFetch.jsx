import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      headers: {
        Authorization: `Bearer: ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
export default useFetch;
