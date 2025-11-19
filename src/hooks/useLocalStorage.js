import { useState, useEffect } from "react";

/**
 * useLocalStorage
 * - key: string
 * - initialValue: any
 *
 * Devuelve [value, setValue] y sincroniza con localStorage automáticamente.
 */
export default function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch (err) {
      console.warn("useLocalStorage: parse error", err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (err) {
      console.warn("useLocalStorage: write error", err);
    }
  }, [key, state]);

  return [state, setState];
}
