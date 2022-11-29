import ResultItem from "./ResultsItem";
import styles from "../NearbyWidget/Widget.module.css";

const ResultsList = ({
  loading,
  results,
}: {
  loading: boolean;
  results: any[];
}) => {
  return (
    <div className={styles.results}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        !loading &&
        results &&
        results.map((result) => (
          <ResultItem key={result.place_id} result={result} />
        ))
      )}
      {results.length === 0 && !loading && <div>No results found</div>}
    </div>
  );
};

export default ResultsList;
