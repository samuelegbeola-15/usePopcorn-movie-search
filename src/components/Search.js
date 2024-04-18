import { useRef } from "react";
import { useEscapeKey } from "../customHooks/useEscapeKey";

export default function Search({ query, setQuery }) {
  const inputEl = useRef(null); // a Ref returns by default an object having a 'current' property

  useEscapeKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;

    setQuery("");
    inputEl.current.focus();
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
