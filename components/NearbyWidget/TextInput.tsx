import React from "react";

const TextInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: any) => void;
}) => {
  return (
    <>
      <label htmlFor="location">Search:</label>
      <input
        type="text"
        name="location"
        id="location"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default TextInput;
