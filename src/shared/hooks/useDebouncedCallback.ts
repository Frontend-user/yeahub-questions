import { useCallback, useRef } from "react";
import { DEFAULT_DEBOUNCE_DELAY } from "@/shared/constats/constats.ts";

export const useDebouncedCallback = <T extends (...args: any[]) => void>(
  func: T,
  delay: number = DEFAULT_DEBOUNCE_DELAY,
) => {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  return useCallback(
    (...args: Parameters<T>) => {
      const later = () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        func(...args);
      };

      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(later, delay);
    },
    [func, delay],
  );
};
