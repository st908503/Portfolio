"use client";

import { useEffect, useState } from "react";

export function useStaggerList(length: number, delay = 60) {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    for (let i = 0; i < length; i++) {
      const timeout = setTimeout(() => {
        setVisibleIndexes((prev) => [...prev, i]);
      }, i * delay);
      timeouts.push(timeout);
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [length, delay]);

  return visibleIndexes;
}
