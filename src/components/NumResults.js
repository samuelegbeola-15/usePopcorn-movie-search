export default function NumResults({ movies }) {
  return (
    <p className="num-results">
      {/* Found <strong>X</strong> results */}
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
