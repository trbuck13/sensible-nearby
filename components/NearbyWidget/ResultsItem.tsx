import styles from "./Widget.module.css";
const ResultItem = ({
  result,
}: {
  result: { name: string; address: string; rating: number };
}) => {
  return (
    <div className={styles.resultItem}>
      <div className="result-item__name">{result.name}</div>
      <div className="result-item__address">{result.address}</div>
      <div className="resultItemAddress">{result.rating}</div>
    </div>
  );
};

export default ResultItem;
