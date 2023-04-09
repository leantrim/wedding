import { useEffect, useState } from 'react';

export default function useLocalStorage(key: string, defaultValue: any) {
  const keyString = key.toString();
  const [value, setValue] = useState(() => {
    let jsonValue: string | null = null;
    if (typeof window !== 'undefined') {
      jsonValue = localStorage.getItem(keyString);
    }

    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }

    if (typeof defaultValue === 'function') {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(keyString, JSON.stringify(value));
  }, [value, setValue, keyString]);
  return [value, setValue];
}
