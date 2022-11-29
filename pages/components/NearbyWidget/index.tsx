import { useCallback, useEffect, useState } from "react";
import LocationSelectInput from "./LocationSelectInput";
import ResultsList from "./ResultsList";
import TextInput from "./TextInput";

const NearbyWidget = () => {
  const [location, setLocation] = useState("39.2130,-106.9378");
  const [search, setSearch] = useState("bar");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const fetchResults = async () => {
    await setLoading(true);
    const response = await fetch(
      `/api/maps/api/place/nearbysearch/json?location=${encodeURIComponent(
        location
      )}&rankby=distance&keyword=${search}&key=${
        process.env.NEXT_PUBLIC_NEARBY_API_KEY
      }`,
      { cache: "no-cache" }
    );
    const data = await response.json();
    if (data.results) {
      setResults(data.results);
      await setLoading(false);

      return;
    }
    setResults([]);
  };

  useEffect(() => {
    fetchResults();
  }, [location, search]);

  return (
    <div>
      <div>
        <LocationSelectInput onChange={handleLocationChange} />
        <TextInput value={search} onChange={handleSearchChange} />
      </div>
      <ResultsList loading={loading} results={results} />
    </div>
  );
};

export default NearbyWidget;
