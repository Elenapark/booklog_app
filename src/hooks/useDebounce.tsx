import { useEffect, useState } from "react";

export default function useDebounce(value: string, delay: number = 500) {
  const [debouncedVal, setDebouncedVal] = useState<string>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedVal;
}
