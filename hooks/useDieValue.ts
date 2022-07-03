import { useEffect, useRef, useState } from 'react';

import easeOut from '../lib/easeOut';
import { Die, GameState } from './useGameState';

export default function useDieValue(gameState: GameState, index: number) {
  const die: Die | undefined = gameState.dice[index];
  const [value, setValue] = useState<number | undefined>(die?.value);
  const stopRef = useRef<Function | undefined>();

  useEffect(() => {
    stopRef.current?.();
    if (gameState.scoreMode) {
      setValue(die?.value);
    } else if (die) {
      if (!die.locked) {
        stopRef.current = easeOut(
          (progress: number) => {
            setValue(
              progress === 1 ? die.value : Math.floor(Math.random() * 6) + 1,
            );
          },
          Math.random() * 1000 + 500,
          10,
        );
      }
    } else {
      setValue(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.currentRoll, die?.value]);

  return value;
}
