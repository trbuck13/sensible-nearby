import React from "react";
import styles from './Widget.module.css';
const TextInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: any) => void;
}) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor="keyword">Keyword:</label>
      <input
        type="text"
        placeholder="hiking"
        name="keyword"
        id="keyword"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default TextInput;
