const ResultItem = ({ result }) => {
  return (
    <div className="result-item">
      <div className="result-item__name">{result.name}</div>
      <div className="result-item__address">{result.address}</div>
    </div>
  );
};

export default ResultItem;
