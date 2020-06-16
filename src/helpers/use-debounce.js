import { useState, useEffect } from 'react';

export const useDebounce = (searchValue, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(searchValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  },
  [searchValue, delay]);

  return debouncedValue;
};
