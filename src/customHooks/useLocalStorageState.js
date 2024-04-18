import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(() => {
    // fetching the stored movies from local storage
    const storedMovies = localStorage.getItem(key);

    return storedMovies ? JSON.parse(storedMovies) : initialState;
  });

  // Storing the watched movies in local storage
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
