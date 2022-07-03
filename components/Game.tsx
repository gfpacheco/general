import classNames from 'classnames';
import { useEffect, useState } from 'react';
import useToggle from 'react-use/lib/useToggle';

import useGameState, {
  allCombinationPlayTypes,
  allPlayTypes,
  allValuePlayTypes,
  calculateBonusScore,
  CombinationPlayType,
  GameState,
  PlayerState,
  playsLabels,
  PlayType,
  sumScore,
  ValuePlayType,
} from '../hooks/useGameState';
import Button from './Button';
import Die from './Die';
import Play from './Play';
import Scoreboard from './Scoreboard';
import Sum from './Sum';

export interface GameProps extends React.ComponentPropsWithoutRef<'div'> {
  gameState: GameState;
  endGame: (playersState: PlayerState[]) => void;
  restartGame: () => void;
}

export default function Game({
  className,
  gameState,
  endGame,
  restartGame,
  ...rest
}: GameProps) {
  const [selectedPlayType, setSelectedPlayType] = useState<
    PlayType | undefined
  >();
  const [isScoreboardVisible, toggleIsScoreboardVisible] = useToggle(false);
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
      endGame(gameState.playersState);
    }
  }, [gameState.playersState, endGame]);

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
      className={classNames(
        className,
        'relative min-h-0 grid grid-flow-row gap-4',
      )}
      {...rest}
    >
      <h1 className="relative text-lg text-center font-bold">
        {playerState.name}
        <button
          className="absolute left-0 top-0 bottom-0"
          type="button"
          onClick={restartGame}
        >
          <svg
            className="w-6 h-6"
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
              fillRule="nonzero"
            />
          </svg>
        </button>
        <button
          className="absolute right-0 top-0 bottom-0"
          type="button"
          onClick={toggleIsScoreboardVisible}
        >
          <svg
            className="w-6 h-6"
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm12.5 10.75c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75zm0-3.248c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75zm0-3.252c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75z"
              fillRule="nonzero"
            />
          </svg>
        </button>
      </h1>
      {!gameState.scoreMode && (
        <Button disabled={!gameState.canRollDice} onClick={gameState.rollDice}>
          Rolar
        </Button>
      )}
      <div className="grid grid-flow-col gap-2">
        {(gameState.dice.length
          ? gameState.dice
          : Array(5).fill(undefined)
        ).map((die, index) => (
          <Die key={index} gameState={gameState} index={index} />
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
      {isScoreboardVisible && (
        <div className="absolute inset-0 bg-white">
          <div className="grid grid-flow-row gap-4">
            <h1 className="relative text-lg text-center font-bold">
              Placar
              <button
                className="absolute right-0 top-0 bottom-0"
                type="button"
                onClick={toggleIsScoreboardVisible}
              >
                <svg
                  className="w-6 h-6"
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                </svg>
              </button>
            </h1>
            <Scoreboard playersState={gameState.playersState} />
          </div>
        </div>
      )}
    </div>
  );
}
