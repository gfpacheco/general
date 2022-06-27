import classNames from 'classnames';
import { useEffect, useState } from 'react';

import useGameState, {
  allPlayTypes,
  PlayerState,
  PlayType,
} from '../hooks/useGameState';
import Button from './Button';
import Die from './Die';
import Play from './Play';

export interface GameProps extends React.ComponentPropsWithoutRef<'div'> {
  names: string[];
  onGameEnd: (playersState: PlayerState[]) => void;
}

export default function Game({
  className,
  names,
  onGameEnd,
  ...rest
}: GameProps) {
  const gameState = useGameState(names);
  const [selectedPlayType, setSelectedPlayType] = useState<
    PlayType | undefined
  >();
  const playerState = gameState.playersState[gameState.currentPlayer];

  useEffect(() => {
    if (
      gameState.playersState.every((playerState) => {
        return Object.keys(playerState.plays).length === allPlayTypes.length;
      })
    ) {
      onGameEnd(gameState.playersState);
    }
  }, [gameState.playersState, onGameEnd]);

  function handleChoosePlayType() {
    gameState.choosePlayType(selectedPlayType!);
    setSelectedPlayType(undefined);
  }

  return (
    <div
      className={classNames(className, 'min-h-0 grid grid-flow-row gap-4')}
      {...rest}
    >
      <h1 className="text-lg text-center font-bold">{playerState.name}</h1>
      <Button disabled={!gameState.canRollDice} onClick={gameState.rollDice}>
        Rolar
      </Button>
      <div className="grid grid-flow-col gap-2">
        {(gameState.dice.length
          ? gameState.dice
          : Array(5).fill(undefined)
        ).map((die, index) => (
          <Die
            key={index}
            die={die}
            onClick={die ? () => gameState.toggleDieLock(index) : undefined}
          />
        ))}
      </div>
      <div className="min-h-0 py-4 border-t border-b grid grid-flow-row gap-1 overflow-y-auto">
        {allPlayTypes.map((playType) => (
          <Play
            key={playType}
            playType={playType}
            playerScore={playerState.plays[playType]}
            potentialScore={gameState.plays[playType]}
            onClick={() => setSelectedPlayType(playType)}
            selected={selectedPlayType === playType}
            disabled={playerState.plays[playType] !== undefined}
          />
        ))}
      </div>
      <Button
        disabled={gameState.dice.length === 0 || !selectedPlayType}
        onClick={handleChoosePlayType}
      >
        Terminar jogada
      </Button>
    </div>
  );
}
