import { useEffect } from "react";

export function useEscapeKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) action();
      }

      document.addEventListener("keydown", callback);

      // Cleaner function
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action]
  );
}
