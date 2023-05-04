import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies(){
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchMovies();
  }, [url]);

  return { data, loading, error };
};
