import { useEffect, useRef, useState } from 'react';

import easeOut from '../lib/easeOut';
import { Die } from './useGameState';

export default function useDieValue(die?: Die) {
  const [value, setValue] = useState(die?.value);
  const stopRef = useRef<Function | undefined>();

  useEffect(() => {
    stopRef.current?.();
    if (die) {
      stopRef.current = easeOut(
        (progress: number) => {
          setValue(
            progress === 1 ? die.value : Math.floor(Math.random() * 6) + 1,
          );
        },
        Math.random() * 1000 + 500,
        10,
      );
    } else {
      setValue(undefined);
    }
  }, [die]);

  return value;
}
