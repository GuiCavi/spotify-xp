import { useEffect, useState } from "react";

export const useDebounce = (initialValue, delay = 300) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(initialValue);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [initialValue, delay]);

  return value;
};
