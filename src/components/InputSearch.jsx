import React, { useState } from "react";
import useDebounce from './UseDebounce'


const InputSearch = ({ value, onChange }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 500 );
  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }
  return (
  <input type="search" placeholder="Digite sua busca" value={displayValue} onChange={handleChange} />
);
};
  

export default InputSearch;
