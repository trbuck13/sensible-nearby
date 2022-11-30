import { useEffect, useState } from "react";
import LocationSelectInput from "./LocationSelectInput";
import ResultsList from "./ResultsList";
import TextInput from "./TextInput";
import styles from "./Widget.module.css";

const NearbyWidget = () => {
  const [form, setForm] = useState({
    location: "39.2130,-106.9378",
    keyword: "",
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchResults = async () => {
    await setLoading(true);
    const response = await fetch(
      `/api/maps/api/place/nearbysearch/json?location=${encodeURIComponent(
        form.location
      )}&rankby=distance&keyword=${form.keyword}&key=${
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
    if (!form.keyword) {
      return;
    }
    fetchResults();
  }, [form]);

  return (
    <div className={styles.widgetContainer}>
      <div className={styles.widgetForm}>
        <LocationSelectInput onChange={handleChange} />
        {/* TODO: throttle/debounce this onchange event */}
        <TextInput value={form.keyword} onChange={handleChange} />
      </div>
      <ResultsList loading={loading} results={results} />
    </div>
  );
};

export default NearbyWidget;
