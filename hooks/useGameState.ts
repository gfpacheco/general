import update from 'immutability-helper';
import { useState } from 'react';

export interface RawGameState {
  playersState: PlayerState[];
  currentPlayer: number;
  currentRoll: number;
  dice: Die[];
}

export interface GameState extends RawGameState {
  rollDice(): void;
  toggleDieLock(index: number): void;
  choosePlayType(playType: PlayType): void;
  canRollDice: boolean;
  plays: Plays;
}

export interface Die {
  value: number;
  locked: boolean;
}

export interface PlayerState {
  name: string;
  plays: Partial<Plays>;
}

export enum ValuePlayType {
  one = 'one',
  two = 'two',
  three = 'three',
  four = 'four',
  five = 'five',
  six = 'six',
}

export enum CombinationPlayType {
  threeOfAKind = 'threeOfAKind',
  fourOfAKind = 'fourOfAKind',
  fullHouse = 'fullHouse',
  smallStraight = 'smallStraight',
  largeStraight = 'largeStraight',
  general = 'general',
  chance = 'chance',
}

export type PlayType = ValuePlayType | CombinationPlayType;

export const allPlayTypes = [
  ...Object.keys(ValuePlayType),
  ...Object.keys(CombinationPlayType),
] as PlayType[];

export type Plays = Record<ValuePlayType | CombinationPlayType, number>;

function createInitialGameState(names: string[]): RawGameState {
  return {
    playersState: names.map((name) => ({
      name,
      plays: {},
    })),
    currentPlayer: 0,
    currentRoll: 0,
    dice: [],
  };
}

function rollDie(): Die {
  return {
    value: Math.floor(Math.random() * 6) + 1,
    locked: false,
  };
}

function getDiceSummary(dice: Die[]) {
  const summary = [0, 0, 0, 0, 0, 0];
  dice.forEach((die) => {
    summary[die.value - 1] += 1;
  });
  return summary;
}

function calculatePlayScore(playType: PlayType, dice: Die[]) {
  const summary = getDiceSummary(dice);
  switch (playType) {
    case ValuePlayType.one:
      return dice.filter((die) => die.value === 1).length * 1;
    case ValuePlayType.two:
      return dice.filter((die) => die.value === 2).length * 2;
    case ValuePlayType.three:
      return dice.filter((die) => die.value === 3).length * 3;
    case ValuePlayType.four:
      return dice.filter((die) => die.value === 4).length * 4;
    case ValuePlayType.five:
      return dice.filter((die) => die.value === 5).length * 5;
    case ValuePlayType.six:
      return dice.filter((die) => die.value === 6).length * 6;
    case CombinationPlayType.threeOfAKind:
      return summary.some((count) => count >= 3)
        ? dice.reduce((acc, die) => acc + die.value, 0)
        : 0;
    case CombinationPlayType.fourOfAKind:
      return summary.some((count) => count >= 4)
        ? dice.reduce((acc, die) => acc + die.value, 0)
        : 0;
    case CombinationPlayType.fullHouse:
      return summary.some((count) => count === 3) &&
        summary.some((count) => count === 2)
        ? 25
        : 0;
    case CombinationPlayType.smallStraight:
      return [1, 1, 1, 1, 1, 0].every(
        (count, index) => summary[index] === count,
      )
        ? 30
        : 0;
    case CombinationPlayType.largeStraight:
      return [0, 1, 1, 1, 1, 1].every(
        (count, index) => summary[index] === count,
      )
        ? 30
        : 0;
    case CombinationPlayType.general:
      return summary.some((count) => count === 5) ? 50 : 0;
    case CombinationPlayType.chance:
      return dice.reduce((acc, die) => acc + die.value, 0);
    default:
      return 0;
  }
}

export default function useGameState(names: string[]): GameState {
  const [gameState, setGameState] = useState(createInitialGameState(names));

  function rollDice() {
    const dice = gameState.dice.length
      ? gameState.dice.map((die) => (die.locked ? die : rollDie()))
      : [rollDie(), rollDie(), rollDie(), rollDie(), rollDie()];

    setGameState(
      update(gameState, {
        currentRoll: { $set: gameState.currentRoll + 1 },
        dice: { $set: dice },
      }),
    );
  }

  function toggleDieLock(index: number) {
    setGameState(
      update(gameState, {
        dice: {
          [index]: {
            locked: { $set: !gameState.dice[index].locked },
          },
        },
      }),
    );
  }

  function choosePlayType(playType: PlayType) {
    setGameState(
      update(gameState, {
        playersState: {
          [gameState.currentPlayer]: {
            plays: {
              [playType]: {
                $set: calculatePlayScore(playType, gameState.dice),
              },
            },
          },
        },
        currentPlayer: {
          $set: (gameState.currentPlayer + 1) % gameState.playersState.length,
        },
        currentRoll: { $set: 0 },
        dice: { $set: [] },
      }),
    );
  }

  return {
    ...gameState,
    rollDice,
    toggleDieLock,
    choosePlayType,
    canRollDice: gameState.currentRoll < 3,
    plays: {
      [ValuePlayType.one]: calculatePlayScore(
        ValuePlayType.one,
        gameState.dice,
      ),
      [ValuePlayType.two]: calculatePlayScore(
        ValuePlayType.two,
        gameState.dice,
      ),
      [ValuePlayType.three]: calculatePlayScore(
        ValuePlayType.three,
        gameState.dice,
      ),
      [ValuePlayType.four]: calculatePlayScore(
        ValuePlayType.four,
        gameState.dice,
      ),
      [ValuePlayType.five]: calculatePlayScore(
        ValuePlayType.five,
        gameState.dice,
      ),
      [ValuePlayType.six]: calculatePlayScore(
        ValuePlayType.six,
        gameState.dice,
      ),
      [CombinationPlayType.threeOfAKind]: calculatePlayScore(
        CombinationPlayType.threeOfAKind,
        gameState.dice,
      ),
      [CombinationPlayType.fourOfAKind]: calculatePlayScore(
        CombinationPlayType.fourOfAKind,
        gameState.dice,
      ),
      [CombinationPlayType.fullHouse]: calculatePlayScore(
        CombinationPlayType.fullHouse,
        gameState.dice,
      ),
      [CombinationPlayType.smallStraight]: calculatePlayScore(
        CombinationPlayType.smallStraight,
        gameState.dice,
      ),
      [CombinationPlayType.largeStraight]: calculatePlayScore(
        CombinationPlayType.largeStraight,
        gameState.dice,
      ),
      [CombinationPlayType.general]: calculatePlayScore(
        CombinationPlayType.general,
        gameState.dice,
      ),
      [CombinationPlayType.chance]: calculatePlayScore(
        CombinationPlayType.chance,
        gameState.dice,
      ),
    },
  };
}
