import { useState, useEffect } from "react";

export function useMovies(query, callback) {
  const apiKey = "25cdaffc";

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      callback?.(); // close any movie that is open while fetching movie data

      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`,
            { signal: controller.signal }
          );

          // Error handling
          if (!res.ok)
            throw new Error(
              "Something went wrong with fetching the movies data."
            );

          const data = await res.json();

          if (data.Response === "False")
            throw new Error(
              "Movie not found! Check your spelling and re-type it."
            );

          setMovies(data.Search);
        } catch (err) {
          console.error(err.message);

          // to take care of the controller abort error
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
