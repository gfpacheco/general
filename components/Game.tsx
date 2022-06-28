import classNames from 'classnames';
import { useEffect, useState } from 'react';

import useGameState, {
  allCombinationPlayTypes,
  allPlayTypes,
  allValuePlayTypes,
  calculateBonusScore,
  CombinationPlayType,
  PlayerState,
  playsLabels,
  PlayType,
  sumScore,
  ValuePlayType,
} from '../hooks/useGameState';
import Button from './Button';
import Die from './Die';
import Play from './Play';
import Sum from './Sum';

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

  let valuePlaysScore = sumScore(playerState.plays, ValuePlayType);
  let bonusScore = playerState.bonus;
  if (selectedPlayType && selectedPlayType in ValuePlayType) {
    valuePlaysScore += gameState.plays[selectedPlayType] ?? 0;
    bonusScore = calculateBonusScore(valuePlaysScore);
  }

  let combinationPlaysScore = sumScore(playerState.plays, CombinationPlayType);
  if (selectedPlayType && selectedPlayType in CombinationPlayType) {
    combinationPlaysScore += gameState.plays[selectedPlayType] ?? 0;
  }

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

  function renderPlayType(playType: PlayType) {
    return (
      <Play
        key={playType}
        label={playsLabels[playType]}
        score={playerState.plays[playType] ?? gameState.plays[playType]}
        onClick={() => setSelectedPlayType(playType)}
        selected={playType === selectedPlayType}
        disabled={playerState.plays[playType] !== undefined}
      />
    );
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
        {allValuePlayTypes.map(renderPlayType)}
        <Sum label="Subtotal" score={valuePlaysScore} />
        <Sum label="Bônus" score={bonusScore} />
        {allCombinationPlayTypes.map(renderPlayType)}
        <Sum label="Subtotal" score={combinationPlaysScore} />
        <Sum
          label="Total"
          score={valuePlaysScore + bonusScore + combinationPlaysScore}
        />
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
