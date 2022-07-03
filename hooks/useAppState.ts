import useGameState, {
  createInitialGameState,
  GameState,
  PlayerState,
  RawGameState,
} from './useGameState';
import usePersistedState from './usePersistedState';

export interface RawAppState {
  rawGameState?: RawGameState;
  playersState?: PlayerState[];
}

export interface AppState {
  startGame(names: string[]): void;
  startScoreMode(names: string[]): void;
  gameState?: GameState;
  endGame(playerStates: PlayerState[]): void;
  playersState?: PlayerState[];
  restartGame(): void;
}

export default function useAppState(): AppState {
  const [{ rawGameState, playersState }, setAppState] =
    usePersistedState<RawAppState>('state', {});
  const gameState = useGameState(rawGameState, setGameState);

  function setGameState(rawGameState: RawGameState) {
    setAppState({ rawGameState });
  }

  function startGame(names: string[]) {
    setGameState(createInitialGameState(names));
  }

  function startScoreMode(names: string[]) {
    setGameState(createInitialGameState(names, true));
  }

  function endGame(playersState: PlayerState[]) {
    setAppState({ playersState });
  }

  function restartGame() {
    setAppState({});
  }

  return {
    startGame,
    startScoreMode,
    gameState,
    endGame,
    playersState,
    restartGame,
  };
}
