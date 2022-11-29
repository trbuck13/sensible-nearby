import styles from "./Widget.module.css";

const LocationSelectInput = ({ onChange }: { onChange: (e: any) => void }) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor="location">Select a location:</label>
      <select
        name="location"
        id="location"
        onChange={onChange}
        className={styles.input}
      >
        <option value="39.2130,-106.9378">Snowmass, CO</option>
        <option value="34.0259,-118.7798">Malibu, CA</option>
        <option value="42.2146,-73.9595">Catskill, NY</option>
        <option value="43.7904,-110.6818">Grand Teton National Park, WY</option>
        <option value="45.7253, -121.7300">Columbia River Gorge, OR</option>
      </select>
    </div>
  );
};

export default LocationSelectInput;
