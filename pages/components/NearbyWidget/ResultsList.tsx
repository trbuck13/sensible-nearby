import ResultItem from "./ResultsItem";

const ResultsList = ({
  loading,
  results,
}: {
  loading: boolean;
  results: any[];
}) => {
  return (
    <div className="results-list">
      {loading ? (
        <div>Loading...</div>
      ) : (
        results.map((result) => (
          <ResultItem key={result.place_id} result={result} />
        ))
      )}
      {results.length === 0 && !loading && <div>No results found</div>}
    </div>
  );
};

export default ResultsList;
