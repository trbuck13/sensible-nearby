import styles from "./Widget.module.css";
const ResultItem = ({
  result,
}: {
  result: {
    name: string;
    vicinity: string;
    rating: number;
    icon: string;
    icon_background_color: string;
  };
}) => {
  return (
    <div className={styles.resultItem}>
      <div className={styles.spaceBetween}>
        <div>
          <div className={styles.resultItemName}>
            <img
              src={result.icon}
              alt=""
              aria-hidden="true"
              className={styles.resultIcon}
            />
            <div>
              <div>{result.name}</div>
              <div className={styles.resultItemAddress}>{result.vicinity}</div>
            </div>
          </div>
        </div>
        <div className="resultItemRating">{result.rating}</div>
      </div>
    </div>
  );
};

export default ResultItem;
